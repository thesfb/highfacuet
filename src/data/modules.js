function createLesson(slug, title, description, duration, options = {}) {
  return {
    slug,
    title,
    description,
    duration,
    badge: options.badge ?? null,
    details: options.details ?? null,
    aliases: options.aliases ?? [],
  };
}

function createChapter(title, lessons) {
  return { title, lessons };
}

const lessonMarkdownFiles = import.meta.glob("../../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const markdownLessonMap = new Map(
  Object.entries(lessonMarkdownFiles)
    .map(([path, raw]) => parseLessonMarkdown(path, raw))
    .filter(Boolean)
    .map((lesson) => [`${lesson.track}/${lesson.lesson_slug}`, lesson]),
);

function parseLessonMarkdown(path, raw) {
  const trimmed = raw.trim();
  const frontmatterMatch = trimmed.match(/^---\n([\s\S]*?)\n---\n?/);

  if (!frontmatterMatch) {
    return null;
  }

  const frontmatter = Object.fromEntries(
    frontmatterMatch[1]
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [key, ...rest] = line.split(":");
        return [key.trim(), rest.join(":").trim()];
      }),
  );

  const body = trimmed.slice(frontmatterMatch[0].length);
  const lines = body.split("\n");

  const introStart = lines.findIndex((line) => line.trim() === "# Intro");
  const mainStart = lines.findIndex((line) => line.trim() === "## Main Content");
  const quizStart = lines.findIndex((line) => line.trim() === "## Quiz");
  const sourcesStart = lines.findIndex((line) => line.trim() === "## Sources");

  const intro = extractParagraphBlock(
    lines.slice(introStart + 1, mainStart > -1 ? mainStart : quizStart > -1 ? quizStart : lines.length),
  );
  const contentLines = lines.slice(mainStart + 1, quizStart > -1 ? quizStart : lines.length);
  const quizLines = quizStart > -1 ? lines.slice(quizStart + 1, sourcesStart > -1 ? sourcesStart : lines.length) : [];
  const sourceLines = sourcesStart > -1 ? lines.slice(sourcesStart + 1) : [];

  return {
    ...frontmatter,
    path,
    intro,
    blocks: parseMarkdownBlocks(contentLines),
    quiz: parseQuizBlocks(quizLines),
    sources: parseSources(sourceLines),
  };
}

function extractParagraphBlock(lines) {
  return lines
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .trim();
}

function parseMarkdownBlocks(lines) {
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", text: line.slice(3).trim() });
      index += 1;
      continue;
    }

    if (line === "definition" || line === "note" || line === "code") {
      const type = line;
      index += 1;
      let label = "";

      if (type !== "note" && lines[index]?.trim().startsWith("label:")) {
        label = lines[index].trim().slice("label:".length).trim();
        index += 1;
      }

      const content = [];
      while (index < lines.length && lines[index].trim() !== "") {
        content.push(lines[index]);
        index += 1;
      }

      if (type === "definition") {
        blocks.push({ type, label, text: content.join(" ").trim() });
      } else if (type === "note") {
        blocks.push({ type, text: content.join(" ").trim() });
      } else {
        blocks.push({ type, label, code: content.join("\n").trim() });
      }

      continue;
    }

    const paragraph = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (!current || current.startsWith("## ") || current === "definition" || current === "note" || current === "code") {
        break;
      }
      paragraph.push(current);
      index += 1;
    }

    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ").trim() });
      continue;
    }

    index += 1;
  }

  return blocks;
}

function parseQuizBlocks(lines) {
  const questions = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      const question = {
        question: "",
        options: [],
        answer: 0,
        explanation: "",
      };

      index += 1;

      while (index < lines.length) {
        const current = lines[index].trim();
        if (!current) {
          index += 1;
          continue;
        }
        if (current.startsWith("### ")) {
          break;
        }
        if (current.startsWith("question:")) {
          question.question = current.slice("question:".length).trim();
        } else if (current.startsWith("- ")) {
          question.options.push({
            label: String.fromCharCode(65 + question.options.length),
            text: current.slice(2).trim(),
            correct: false,
          });
        } else if (current.startsWith("answer:")) {
          question.answer = Number.parseInt(current.slice("answer:".length).trim(), 10);
        } else if (current.startsWith("explanation:")) {
          question.explanation = current.slice("explanation:".length).trim();
        }
        index += 1;
      }

      question.options = question.options.map((option, optionIndex) => ({
        ...option,
        correct: optionIndex === question.answer,
      }));
      questions.push(question);
      continue;
    }

    index += 1;
  }

  return questions;
}

function parseSources(lines) {
  return lines
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim())
    .map((line) => {
      const match = line.match(/^(.*?)(?:\s[—-]\s)(https?:\/\/\S+)$/);
      if (!match) {
        return { title: line, url: "" };
      }
      return {
        title: match[1].trim(),
        url: match[2].trim(),
      };
    });
}

function genericLessonDetails(track, chapter, lesson) {
  return {
    intro: `${lesson.title} is one of the core moves inside ${track.title}. This lesson makes the idea precise, shows where it fits, and gives you a clean mental model to carry forward.`,
    blocks: [
      {
        type: "heading",
        text: "Why this matters",
      },
      {
        type: "paragraph",
        text: `${lesson.description} In practice, this concept becomes important whenever you need to reason clearly instead of relying on surface intuition.`,
      },
      {
        type: "definition",
        label: `Definition — ${lesson.title}`,
        text: `${lesson.title} is a core part of ${chapter.title.toLowerCase()} in ${track.title}. The goal is not just to memorize the label, but to understand what role it plays inside the whole system.`,
      },
      {
        type: "heading",
        text: "Mental model",
      },
      {
        type: "paragraph",
        text: `Treat ${lesson.title.toLowerCase()} as a lens for reading the rest of the track. Once this is clear, later lessons stop feeling disconnected and start looking like variations on the same structure.`,
      },
      {
        type: "note",
        text: `A good sign you understand this lesson: you can explain it in plain language, then restate it more formally without changing the idea.`,
      },
    ],
    quiz: [
      {
        question: `What is the main goal of ${lesson.title.toLowerCase()} in ${track.title}?`,
        options: [
          {
            label: "A",
            text: "To decorate the theory with extra terminology",
            correct: false,
          },
          {
            label: "B",
            text: "To clarify one of the core ideas the rest of the track depends on",
            correct: true,
          },
          {
            label: "C",
            text: "To replace the need for examples or exercises",
            correct: false,
          },
          {
            label: "D",
            text: "To avoid making tradeoffs explicit",
            correct: false,
          },
        ],
        explanation: `Correct. The point of this lesson is to make a central idea in ${track.title} clear enough that later material has a solid foundation.`,
      },
    ],
  };
}

const zkLessonDetails = {
  intro:
    "Every cryptographic proof system rests on two properties. Understanding them precisely, not just vaguely, is the foundation everything else is built on.",
  blocks: [
    {
      type: "heading",
      text: "The two pillars",
    },
    {
      type: "paragraph",
      text: "A proof system involves two parties: a prover who wants to convince someone of a statement, and a verifier who decides whether to believe them. For this to be meaningful, the system must satisfy two guarantees simultaneously.",
    },
    {
      type: "paragraph",
      text: "Without both properties holding, the proof system breaks down. Either honest provers get rejected for no reason, or dishonest provers can fabricate acceptance. Neither is acceptable.",
    },
    {
      type: "definition",
      label: "Definition — Completeness",
      text: "If a statement is true and the prover is honest, then an honest verifier will always accept the proof. A complete system never rejects a valid proof.",
    },
    {
      type: "definition",
      label: "Definition — Soundness",
      text: "If a statement is false, then no prover, even a computationally unbounded cheater, can convince an honest verifier to accept it, except with negligible probability epsilon.",
    },
    {
      type: "heading",
      text: "Formalising it",
    },
    {
      type: "paragraph",
      text: "Let L be a language, the set of all true statements. A prover P supplies a witness w alongside the statement x. The verifier V runs a verification algorithm and outputs accept or reject.",
    },
    {
      type: "code",
      label: "Formal definitions",
      code: `// Completeness — honest prover always accepted
forall x in L, forall valid witness w:
  Pr[ V(x, P(x, w)) = accept ] = 1

// Soundness — no cheating prover can fake it
forall x not in L, forall adversarial P*:
  Pr[ V(x, P*(x)) = accept ] <= epsilon (negligible)`,
    },
    {
      type: "paragraph",
      text: "The soundness error epsilon is the maximum probability a cheating prover can fool the verifier. In practice, we want this to be cryptographically negligible, something like 2^-128.",
    },
    {
      type: "heading",
      text: "Statistical vs computational soundness",
    },
    {
      type: "paragraph",
      text: "Statistical soundness holds even against a prover with unlimited computation. Computational soundness only holds against adversaries bounded by polynomial time.",
    },
    {
      type: "note",
      text: "STARKs aim for statistical soundness and post-quantum security by avoiding elliptic curve pairings. SNARKs like Groth16 achieve computational soundness by relying on hardness assumptions.",
    },
    {
      type: "heading",
      text: "Why this matters for zero-knowledge",
    },
    {
      type: "paragraph",
      text: "In zero-knowledge proofs, we add a third property on top of completeness and soundness: that the proof reveals nothing beyond the truth of the statement. But before you can reason about what a proof leaks, you need to be crystal clear about what it proves.",
    },
  ],
  quiz: [
    {
      question:
        "Which property guarantees that a cheating prover cannot convince the verifier of a false statement?",
      options: [
        {
          label: "A",
          text: "Completeness, because it ensures all valid proofs are accepted",
          correct: false,
        },
        {
          label: "B",
          text: "Soundness, because it bounds the probability of accepting a false proof",
          correct: true,
        },
        {
          label: "C",
          text: "Zero-knowledge, because it ensures the verifier learns nothing",
          correct: false,
        },
        {
          label: "D",
          text: "The witness, because it is the secret the prover holds",
          correct: false,
        },
      ],
      explanation:
        "Correct. Soundness prevents forgery. Completeness is the mirror property that ensures honest provers are not wrongly rejected.",
    },
    {
      question: "A proof system has computational soundness. What does this mean?",
      options: [
        {
          label: "A",
          text: "The prover needs a powerful computer to generate proofs",
          correct: false,
        },
        {
          label: "B",
          text: "The verifier runs in constant time regardless of proof size",
          correct: false,
        },
        {
          label: "C",
          text: "Soundness only holds against polynomial-time adversaries, not unbounded ones",
          correct: true,
        },
        {
          label: "D",
          text: "The proof is compressed to a constant number of bytes",
          correct: false,
        },
      ],
      explanation:
        "Correct. Computational soundness is conditional. It relies on hardness assumptions rather than holding against unlimited adversaries.",
    },
  ],
};

const zkWhatIsAProofDetails = {
  intro:
    "Before zero-knowledge makes sense, we need a clear idea of what a proof is. In complexity theory, a proof is not just a persuasive argument. It is evidence that a verifier can check according to a fixed rule.",
  blocks: [
    {
      type: "heading",
      text: "From witness to verification",
    },
    {
      type: "paragraph",
      text: "A useful starting point is the pair statement and witness. The statement is the claim you want accepted. The witness is the hidden evidence that makes the claim true. A verifier is an efficient algorithm that checks whether the witness really supports the statement.",
    },
    {
      type: "definition",
      label: "Definition — Relation and language",
      text: "A relation R(x, w) says when a witness w is valid for a statement x. The associated language L is the set of statements x for which some witness exists.",
    },
    {
      type: "paragraph",
      text: "This is the usual NP viewpoint. A traditional proof for x is simply a witness w that makes R(x, w) hold. The verifier checks the pair and accepts or rejects.",
    },
    {
      type: "heading",
      text: "Why interaction appears",
    },
    {
      type: "paragraph",
      text: "Sending the witness directly is often a bad fit. The witness may be secret, large, or reusable in ways that create risk. Interactive proofs change the model: instead of handing over the witness, a prover and verifier exchange messages, and the verifier decides based on the transcript.",
    },
    {
      type: "note",
      text: "The key shift is that a proof becomes a protocol. Correctness is no longer just about a static string. It is about whether an honest prover can convince the verifier, and whether a dishonest prover can fake that success.",
    },
    {
      type: "heading",
      text: "Where zero-knowledge starts",
    },
    {
      type: "paragraph",
      text: "Once proofs become protocols, we can ask a stronger question: can the prover convince the verifier without handing over the witness itself? That is the opening move behind zero-knowledge.",
    },
  ],
  quiz: [
    {
      question: "In the usual NP-style framing, what is a witness?",
      options: [
        {
          label: "A",
          text: "The public statement that both parties already know",
          correct: false,
        },
        {
          label: "B",
          text: "The hidden evidence that makes the statement valid under the verifier's check",
          correct: true,
        },
        {
          label: "C",
          text: "A random challenge chosen by the verifier",
          correct: false,
        },
        {
          label: "D",
          text: "The final proof transcript seen by the verifier",
          correct: false,
        },
      ],
      explanation:
        "Correct. The witness is the secret or hidden evidence that certifies the statement under a relation R(x, w).",
    },
    {
      question: "Why is 'just send the witness' often not enough for modern proof systems?",
      options: [
        {
          label: "A",
          text: "Because verifiers are not allowed to read messages longer than one bit",
          correct: false,
        },
        {
          label: "B",
          text: "Because the witness may be secret, reusable, or otherwise unsafe to reveal directly",
          correct: true,
        },
        {
          label: "C",
          text: "Because all useful proofs must be non-interactive",
          correct: false,
        },
        {
          label: "D",
          text: "Because soundness only applies after a witness is encrypted",
          correct: false,
        },
      ],
      explanation:
        "Correct. Interactive and zero-knowledge systems exist because direct witness disclosure is often too revealing or too risky.",
    },
  ],
};

const zkInteractiveDetails = {
  intro:
    "Interactive proofs let a verifier challenge a prover in real time. Non-interactive proofs remove that back-and-forth and replace it with a single proof object that anyone can verify later.",
  blocks: [
    {
      type: "heading",
      text: "Interactive proofs",
    },
    {
      type: "paragraph",
      text: "In a public-coin interactive proof, the verifier sends random challenges and the prover replies. The full transcript records commitments, challenges, and responses. Completeness and soundness are defined over that exchange.",
    },
    {
      type: "definition",
      label: "Definition — Interactive proof",
      text: "An interactive proof is a protocol between prover and verifier in which the verifier's acceptance depends on a sequence of messages, not just a single submitted witness.",
    },
    {
      type: "paragraph",
      text: "Interaction is useful because the verifier can force the prover to answer unpredictable challenges. That unpredictability is often what drives soundness.",
    },
    {
      type: "heading",
      text: "Why non-interactive proofs matter",
    },
    {
      type: "paragraph",
      text: "Non-interactive proofs are easier to broadcast, post on-chain, cache, and verify asynchronously. That makes them much more practical in blockchains and distributed systems, where the verifier may not be online at the same time as the prover.",
    },
    {
      type: "note",
      text: "The Fiat-Shamir transformation is the standard bridge here: in a public-coin protocol, replace the verifier's random challenge with a challenge derived by hashing the statement and previous prover messages.",
    },
    {
      type: "heading",
      text: "What changes after Fiat-Shamir",
    },
    {
      type: "paragraph",
      text: "The protocol becomes non-interactive, but the security story changes too. Instead of relying on fresh verifier randomness directly, soundness and zero-knowledge are argued relative to properties of the hash-based transcript construction.",
    },
  ],
  quiz: [
    {
      question: "What does the Fiat-Shamir transformation replace in a public-coin interactive proof?",
      options: [
        {
          label: "A",
          text: "The witness, with a public commitment",
          correct: false,
        },
        {
          label: "B",
          text: "The verifier's random challenge, with a challenge derived from hashing the transcript and statement",
          correct: true,
        },
        {
          label: "C",
          text: "The verifier, with a trusted setup ceremony",
          correct: false,
        },
        {
          label: "D",
          text: "The soundness definition, with completeness",
          correct: false,
        },
      ],
      explanation:
        "Correct. Fiat-Shamir removes live interaction by deriving the challenge from the prior transcript and instance using a hash-based construction.",
    },
    {
      question: "Why are non-interactive proofs especially attractive in blockchain settings?",
      options: [
        {
          label: "A",
          text: "Because they guarantee statistical soundness for every protocol",
          correct: false,
        },
        {
          label: "B",
          text: "Because they can be generated without a statement",
          correct: false,
        },
        {
          label: "C",
          text: "Because a verifier can check a single proof object later, without participating in a live challenge-response exchange",
          correct: true,
        },
        {
          label: "D",
          text: "Because they eliminate the need for verifiers entirely",
          correct: false,
        },
      ],
      explanation:
        "Correct. Non-interactive proofs are operationally convenient because they turn a live protocol into a portable artifact.",
    },
  ],
};

const zkPropertyDetails = {
  intro:
    "Completeness and soundness say that a proof system works. Zero-knowledge says it works without leaking more than it should.",
  blocks: [
    {
      type: "heading",
      text: "What zero-knowledge really claims",
    },
    {
      type: "paragraph",
      text: "Zero-knowledge does not mean that the verifier sees nothing. The verifier still sees a transcript and still learns that the statement is valid. The real claim is subtler: the transcript should not teach the verifier anything beyond that validity claim.",
    },
    {
      type: "definition",
      label: "Definition — Simulator view",
      text: "A proof is zero-knowledge if there exists an efficient simulator that can generate a transcript indistinguishable from a real one using only the statement, without access to the witness.",
    },
    {
      type: "paragraph",
      text: "That definition is powerful because it compares the real transcript to something generated without the secret. If the two views match, the witness itself is not doing informational work from the verifier's perspective.",
    },
    {
      type: "heading",
      text: "Honest-verifier vs malicious-verifier",
    },
    {
      type: "paragraph",
      text: "Some protocols are first proven honest-verifier zero-knowledge, meaning the simulator only has to match the view of a verifier that follows the protocol exactly. Full zero-knowledge is stronger: it must handle any efficient verifier strategy, even a verifier that deviates in order to learn more.",
    },
    {
      type: "note",
      text: "This is why simulation is central. It is not enough to say 'the messages look random'. You need a procedure that reproduces what the verifier sees without using the witness.",
    },
    {
      type: "heading",
      text: "Why this matters in practice",
    },
    {
      type: "paragraph",
      text: "In deployed systems, the zero-knowledge property is what lets you prove balance constraints, membership claims, or correct computation while still protecting the private data that made the statement true.",
    },
  ],
  quiz: [
    {
      question: "What is the strongest intuition behind the simulator-based definition of zero-knowledge?",
      options: [
        {
          label: "A",
          text: "The verifier sees no transcript at all",
          correct: false,
        },
        {
          label: "B",
          text: "The verifier learns at most what could already be generated from the statement alone",
          correct: true,
        },
        {
          label: "C",
          text: "The prover never uses randomness",
          correct: false,
        },
        {
          label: "D",
          text: "The witness becomes a public input after verification",
          correct: false,
        },
      ],
      explanation:
        "Correct. Simulation says the verifier's view can be generated without the witness, so the transcript does not reveal extra efficiently extractable knowledge.",
    },
    {
      question: "What is the difference between honest-verifier zero-knowledge and full zero-knowledge?",
      options: [
        {
          label: "A",
          text: "HVZK assumes the verifier follows the protocol, while full ZK must handle arbitrary efficient verifier behavior",
          correct: true,
        },
        {
          label: "B",
          text: "HVZK is non-interactive and full ZK is interactive",
          correct: false,
        },
        {
          label: "C",
          text: "HVZK has completeness, full ZK has soundness",
          correct: false,
        },
        {
          label: "D",
          text: "HVZK reveals the witness but full ZK hides it",
          correct: false,
        },
      ],
      explanation:
        "Correct. HVZK is a weaker target because the simulator only needs to match an honest verifier's view.",
    },
  ],
};

const zkSimulatorDetails = {
  intro:
    "A simulator is the engine inside the definition of zero-knowledge. It is not the prover. It is a security-proof object that shows the verifier's transcript could have been generated without secret knowledge.",
  blocks: [
    {
      type: "heading",
      text: "What the simulator is trying to reproduce",
    },
    {
      type: "paragraph",
      text: "The target is the verifier's view: commitments, challenges, responses, and any verifier-side randomness that would appear in a real execution. If the simulator can reproduce that view efficiently, then the transcript itself is not carrying extra knowledge about the witness.",
    },
    {
      type: "definition",
      label: "Definition — Simulator",
      text: "A simulator is an efficient algorithm that, given only the public statement, produces a transcript distributed like a real interaction between prover and verifier.",
    },
    {
      type: "heading",
      text: "How simulators often work",
    },
    {
      type: "paragraph",
      text: "In many sigma-style protocols, the simulator chooses the challenge and response first, then engineers an accepting first message that makes the transcript consistent. If the verifier's actual challenge does not match, the simulator may rewind and try again.",
    },
    {
      type: "note",
      text: "This is the conceptual punchline: the simulator does not need the witness to create a believable verifier view. That is exactly why the protocol deserves to be called zero-knowledge.",
    },
    {
      type: "heading",
      text: "What the simulator does not show",
    },
    {
      type: "paragraph",
      text: "The simulator is not extracting a witness, and it is not proving the statement true by itself. It is only showing that the verifier's transcript can be explained without reference to the witness.",
    },
  ],
  quiz: [
    {
      question: "Why is a simulator central to the definition of zero-knowledge?",
      options: [
        {
          label: "A",
          text: "Because it recovers the witness from the transcript",
          correct: false,
        },
        {
          label: "B",
          text: "Because it shows the verifier's view can be generated without the witness",
          correct: true,
        },
        {
          label: "C",
          text: "Because it replaces the verifier during proof generation",
          correct: false,
        },
        {
          label: "D",
          text: "Because it guarantees a proof is post-quantum secure",
          correct: false,
        },
      ],
      explanation:
        "Correct. Simulation is the formal way to argue that the transcript does not leak witness-dependent information.",
    },
    {
      question: "In many sigma-style arguments, why might a simulator use rewinding?",
      options: [
        {
          label: "A",
          text: "To delete verifier randomness from the transcript",
          correct: false,
        },
        {
          label: "B",
          text: "To retry until it can align its fabricated transcript with the verifier's challenge",
          correct: true,
        },
        {
          label: "C",
          text: "To compress the proof into a constant number of group elements",
          correct: false,
        },
        {
          label: "D",
          text: "To make completeness hold for false statements",
          correct: false,
        },
      ],
      explanation:
        "Correct. Rewinding is a proof technique that lets the simulator retry until it produces a challenge-response pair with the right distribution.",
    },
  ],
};

function hydrateTrack(track) {
  const flatLessons = track.chapters.flatMap((chapter) =>
    chapter.lessons.map((lesson) => ({ chapter, lesson })),
  );
  const currentIndex = Math.max(
    0,
    flatLessons.findIndex(({ lesson }) => lesson.slug === track.currentLessonSlug),
  );

  return {
    ...track,
    totalLessons: flatLessons.length,
    chapters: track.chapters.map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson) => ({
        ...lesson,
        title: markdownLessonMap.get(`${track.slug}/${lesson.slug}`)?.lesson_title ?? lesson.title,
        duration: markdownLessonMap.get(`${track.slug}/${lesson.slug}`)?.duration ?? lesson.duration,
        badge: markdownLessonMap.get(`${track.slug}/${lesson.slug}`)?.badge ?? lesson.badge,
        details:
          markdownLessonMap.get(`${track.slug}/${lesson.slug}`)
            ? {
                intro: markdownLessonMap.get(`${track.slug}/${lesson.slug}`).intro,
                blocks: markdownLessonMap.get(`${track.slug}/${lesson.slug}`).blocks,
                quiz: markdownLessonMap.get(`${track.slug}/${lesson.slug}`).quiz,
                sources: markdownLessonMap.get(`${track.slug}/${lesson.slug}`).sources,
              }
            : lesson.details ?? genericLessonDetails(track, chapter, lesson),
      })),
    })),
    progress: {
      currentIndex,
      completedLessons: currentIndex,
      remainingLessons: Math.max(flatLessons.length - currentIndex - 1, 0),
      percent: Math.round(((currentIndex + 1) / flatLessons.length) * 100),
    },
  };
}

const rawModules = [
  {
    slug: "zk-proofs",
    title: "Zero-Knowledge Proofs",
    shortTitle: "ZK Proofs",
    category: "Cryptography",
    label: "Emerging",
    theme: "purple",
    homeClass: "tc-zk",
    summary: "SNARKs, STARKs, circuits and proof systems from the math up.",
    description:
      "Understand how it is possible to prove you know something without revealing what you know. Start from first principles, then move through circuits, SNARKs, STARKs, recursion, and real-world applications.",
    estimatedTime: "~10h",
    level: "Advanced",
    tags: ["Cryptography", "SNARKs", "STARKs", "Circuits", "Recursion", "Blockchain", "Math", "Privacy"],
    outcomes: [
      "Explain completeness, soundness, and zero-knowledge without hand-waving.",
      "Read SNARK and STARK papers with much stronger intuition.",
      "Evaluate trusted setups, proof sizes, and verifier tradeoffs clearly.",
      "Understand arithmetic circuits, witnesses, and polynomial encodings.",
      "Reason about recursive proofs, aggregation, and proving virtual machines.",
      "Reason about when ZK is useful in real systems and when it is not.",
      "Navigate production ZK systems with sharper technical judgment.",
    ],
    currentLessonSlug: "completeness-and-soundness",
    chapters: [
      createChapter("Foundations", [
        createLesson(
          "what-is-a-proof",
          "What is a proof?",
          "Mathematical vs computational proofs. Why we need them in cryptography.",
          "12 min",
          { badge: "Quiz", details: zkWhatIsAProofDetails },
        ),
        createLesson(
          "interactive-vs-non-interactive-proofs",
          "Interactive vs non-interactive proofs",
          "The difference between Arthur-Merlin protocols and NIZK systems.",
          "18 min",
          {
            badge: "Quiz",
            details: zkInteractiveDetails,
            aliases: ["interactive-vs-non-interactive"],
          },
        ),
        createLesson(
          "completeness-and-soundness",
          "Completeness & Soundness",
          "The two fundamental properties every proof system must satisfy.",
          "15 min",
          {
            badge: "Quiz",
            details: zkLessonDetails,
            aliases: ["completeness-soundness"],
          },
        ),
        createLesson(
          "the-zero-knowledge-property",
          "The zero-knowledge property",
          "What it means to reveal nothing. Simulators and indistinguishability.",
          "20 min",
          {
            badge: "Quiz",
            details: zkPropertyDetails,
            aliases: ["zero-knowledge-property"],
          },
        ),
        createLesson(
          "the-simulator-argument",
          "The simulator argument",
          "Proving zero-knowledge rigorously via the simulation paradigm.",
          "22 min",
          {
            badge: "Quiz",
            details: zkSimulatorDetails,
            aliases: ["simulator-argument"],
          },
        ),
      ]),
      createChapter("Arithmetic Circuits", [
        createLesson("r1cs-constraints", "R1CS constraints", "Rank-1 Constraint Systems and equation-based computation.", "25 min", { badge: "Quiz" }),
        createLesson("witness-generation", "Witness generation", "What a witness is and how it satisfies a constraint system.", "18 min"),
        createLesson("qap-construction", "QAP construction", "Converting R1CS into a Quadratic Arithmetic Program.", "30 min", { badge: "Quiz" }),
        createLesson("polynomial-commitments", "Polynomial commitments", "KZG, FRI, and committing to polynomials without revealing them.", "28 min", { badge: "Quiz" }),
      ]),
      createChapter("SNARKs", [
        createLesson("what-is-a-snark", "What is a SNARK?", "The properties that make succinct arguments useful.", "16 min", { badge: "Quiz" }),
        createLesson("groth16-walkthrough", "Groth16 walkthrough", "A guided read through the most deployed SNARK.", "35 min", { badge: "Quiz" }),
        createLesson(
          "trusted-setup-and-toxic-waste",
          "Trusted setup & toxic waste",
          "Why ceremonies matter and what goes wrong if they fail.",
          "20 min",
          { aliases: ["trusted-setup"] },
        ),
        createLesson(
          "plonk-and-universal-setups",
          "PlonK & universal setups",
          "How universal setups change the design space.",
          "32 min",
          { badge: "Quiz", aliases: ["plonk-universal-setups"] },
        ),
      ]),
      createChapter("STARKs", [
        createLesson("why-starks", "Why STARKs?", "No trusted setup, post-quantum security, and the tradeoffs involved.", "18 min", { badge: "Quiz" }),
        createLesson("fri-protocol", "FRI protocol", "The engine behind most modern STARK systems.", "40 min", { badge: "Quiz" }),
        createLesson(
          "air-and-execution-traces",
          "AIR & execution traces",
          "How computations become algebraic traces.",
          "28 min",
          { aliases: ["air-execution-traces"] },
        ),
        createLesson(
          "real-world-stark-systems",
          "Real-world STARK systems",
          "How StarkWare, Miden, and RISC Zero apply the theory.",
          "22 min",
          { badge: "Quiz", aliases: ["real-world-starks"] },
        ),
      ]),
      createChapter("Protocols & Building Blocks", [
        createLesson(
          "sigma-protocols",
          "Sigma protocols",
          "Three-move proof systems and the intuition behind commit-challenge-response.",
          "20 min",
          { badge: "Quiz" },
        ),
        createLesson(
          "schnorr-proofs",
          "Schnorr proofs of knowledge",
          "A concrete proof-of-knowledge protocol that makes abstract ideas feel real.",
          "24 min",
          { badge: "Quiz" },
        ),
        createLesson(
          "commitments-in-zk",
          "Commitments in ZK",
          "Why binding and hiding commitments show up all over zero-knowledge design.",
          "18 min",
        ),
        createLesson(
          "fiat-shamir-in-practice",
          "Fiat-Shamir in practice",
          "How interactive proofs become portable transcripts, and where the caveats live.",
          "22 min",
          { badge: "Quiz" },
        ),
      ]),
      createChapter("Recursion & Composition", [
        createLesson(
          "recursive-proofs",
          "Recursive proofs",
          "What it means for one proof to verify another and why that matters.",
          "26 min",
          { badge: "Quiz" },
        ),
        createLesson(
          "proof-aggregation",
          "Proof aggregation",
          "Combining many proof statements into smaller verification work.",
          "20 min",
        ),
        createLesson(
          "folding-schemes",
          "Folding schemes",
          "The core idea behind modern recursive proving systems like Nova-style designs.",
          "28 min",
          { badge: "Quiz" },
        ),
        createLesson(
          "incrementally-verifiable-computation",
          "Incrementally verifiable computation",
          "How long computations can stay continuously checkable as they evolve.",
          "24 min",
        ),
        createLesson(
          "zk-proving-vms",
          "ZK proving VMs",
          "Why general-purpose proving machines feel different from hand-written circuits.",
          "23 min",
          { badge: "Quiz" },
        ),
      ]),
      createChapter("Applications & Security", [
        createLesson(
          "zk-identity-and-credentials",
          "ZK identity & credentials",
          "Selective disclosure, membership proofs, and privacy-preserving identity systems.",
          "18 min",
          { badge: "Quiz" },
        ),
        createLesson(
          "zk-rollups-and-validity",
          "ZK rollups & validity proofs",
          "How rollups use proofs to separate heavy execution from cheap verification.",
          "21 min",
        ),
        createLesson(
          "zk-failure-modes",
          "ZK failure modes",
          "What breaks when assumptions, implementations, or ceremonies go wrong.",
          "19 min",
          { badge: "Quiz" },
        ),
        createLesson(
          "choosing-a-proof-system",
          "Choosing a proof system",
          "How to think about setup, proof size, proving cost, verifier cost, and trust tradeoffs.",
          "17 min",
          { badge: "Quiz" },
        ),
      ]),
    ],
  },
  {
    slug: "cryptography",
    title: "Cryptography",
    shortTitle: "Cryptography",
    category: "Security",
    label: "Core",
    theme: "green",
    homeClass: "tc-crypto",
    summary: "Symmetric, asymmetric, hashes, curves, and protocol design.",
    description:
      "Move through the primitives that power modern secure systems, from block ciphers and signatures to commitments, key exchange, and protocol reasoning.",
    estimatedTime: "~7h",
    level: "Intermediate",
    tags: ["Hashing", "Signatures", "Elliptic Curves", "Protocols", "Security"],
    outcomes: [
      "Choose cryptographic primitives from threat models instead of habit.",
      "Understand signatures, commitments, and key exchange at a systems level.",
      "Read protocol diagrams with stronger security intuition.",
    ],
    currentLessonSlug: "hash-functions",
    chapters: [
      createChapter("Foundations", [
        createLesson("hash-functions", "Hash functions", "Collision resistance, preimages, and what hashes actually guarantee.", "14 min", { badge: "Quiz" }),
        createLesson("message-authentication", "Message authentication", "MACs and integrity under adversarial conditions.", "16 min"),
        createLesson("digital-signatures", "Digital signatures", "Authentication, non-repudiation, and signature workflows.", "18 min", { badge: "Quiz" }),
        createLesson("key-exchange", "Key exchange", "How two parties establish secrets on an open network.", "20 min"),
      ]),
      createChapter("Commitment & Secrecy", [
        createLesson("commitment-schemes", "Commitment schemes", "Binding and hiding in practical protocols.", "15 min", { badge: "Quiz" }),
        createLesson("secret-sharing", "Secret sharing", "Split trust without losing recoverability.", "17 min"),
        createLesson("randomness", "Randomness & entropy", "Why secure randomness is harder than it looks.", "13 min"),
        createLesson("protocol-failures", "Protocol failure modes", "What breaks when assumptions are loose.", "19 min", { badge: "Quiz" }),
      ]),
      createChapter("Elliptic Curves", [
        createLesson("curve-intuition", "Curve intuition", "Why elliptic curves are useful in cryptography.", "21 min"),
        createLesson("discrete-log", "Discrete log hardness", "The assumption behind many deployed systems.", "16 min"),
        createLesson("ecdsa", "ECDSA in practice", "Where the signature scheme shines and where it bites.", "24 min"),
        createLesson("ed25519", "Ed25519", "A cleaner signature system and its practical benefits.", "18 min"),
      ]),
      createChapter("Protocol Design", [
        createLesson("threat-models", "Threat models", "Security begins with naming the adversary.", "12 min"),
        createLesson("replay-resistance", "Replay resistance", "Freshness, nonces, and signed request design.", "15 min"),
        createLesson("forward-secrecy", "Forward secrecy", "Containing the blast radius of key compromise.", "19 min"),
        createLesson("auditability", "Auditability", "Designing systems that can be checked after the fact.", "14 min", { badge: "Quiz" }),
      ]),
    ],
  },
  {
    slug: "operating-systems",
    title: "Operating Systems",
    shortTitle: "Operating Systems",
    category: "Systems",
    label: "Classic",
    theme: "orange",
    homeClass: "tc-os",
    summary: "Processes, memory, file systems, and scheduling from the metal up.",
    description:
      "Study how operating systems manage process isolation, memory, persistence, and hardware boundaries under real constraints.",
    estimatedTime: "~8h",
    level: "Intermediate",
    tags: ["Processes", "Memory", "Scheduling", "Filesystems", "Concurrency"],
    outcomes: [
      "Explain how processes, threads, and memory isolation really work.",
      "Understand scheduler tradeoffs and kernel boundary design.",
      "Read systems papers and architecture diagrams with more confidence.",
    ],
    currentLessonSlug: "process-model",
    chapters: [
      createChapter("Core Model", [
        createLesson("process-model", "The process model", "What the OS abstracts and what it does not.", "16 min", { badge: "Quiz" }),
        createLesson("threads", "Threads and concurrency", "Shared memory, race conditions, and scheduling pressure.", "20 min"),
        createLesson("syscalls", "System calls", "Where user space stops and the kernel begins.", "15 min"),
        createLesson("context-switches", "Context switches", "The hidden cost of switching work.", "17 min"),
      ]),
      createChapter("Memory", [
        createLesson("virtual-memory", "Virtual memory", "Address spaces, mapping, and process isolation.", "22 min", { badge: "Quiz" }),
        createLesson("paging", "Paging", "How memory is sliced, mapped, and reclaimed.", "19 min"),
        createLesson("caches", "Caches and locality", "Why memory performance is about structure, not just size.", "18 min"),
        createLesson("allocators", "Allocators", "How memory gets carved up under pressure.", "16 min"),
      ]),
      createChapter("Storage", [
        createLesson("filesystems", "File systems", "Persistence, abstraction, and consistency models.", "20 min"),
        createLesson("journaling", "Journaling", "What happens when the machine crashes halfway through.", "15 min"),
        createLesson("io-stacks", "I/O stacks", "Reading and writing through the kernel path.", "18 min"),
        createLesson("buffer-cache", "Buffer cache", "When the OS decides to trust memory over disk.", "14 min"),
      ]),
      createChapter("Scheduling", [
        createLesson("scheduler-goals", "Scheduler goals", "Fairness, throughput, latency, and tradeoffs.", "17 min", { badge: "Quiz" }),
        createLesson("priority-inversion", "Priority inversion", "When scheduling logic backfires.", "13 min"),
        createLesson("realtime", "Real-time constraints", "What changes when deadlines matter.", "16 min"),
        createLesson("kernel-observability", "Kernel observability", "Understanding systems through traces and counters.", "14 min"),
      ]),
    ],
  },
  {
    slug: "ai-internals",
    title: "AI Internals",
    shortTitle: "AI Internals",
    category: "Machine Learning",
    label: "Emerging",
    theme: "blue",
    homeClass: "tc-ai",
    summary: "Transformers, attention, training dynamics, and model behavior.",
    description:
      "Go beyond API usage and study how transformer systems are built, trained, and reasoned about in practice.",
    estimatedTime: "~7h",
    level: "Intermediate",
    tags: ["Transformers", "Attention", "Training", "Embeddings", "Inference"],
    outcomes: [
      "Explain transformers in terms of representations and operations, not buzzwords.",
      "Understand the shape of model training and inference tradeoffs.",
      "Read model architecture discussions with stronger technical clarity.",
    ],
    currentLessonSlug: "attention-intuition",
    chapters: [
      createChapter("Representations", [
        createLesson("attention-intuition", "Attention intuition", "Why attention became the center of modern models.", "15 min", { badge: "Quiz" }),
        createLesson("embeddings", "Embeddings", "How tokens become vectors with structure.", "16 min"),
        createLesson("positional-information", "Positional information", "What models need to know about order.", "13 min"),
        createLesson("residual-stream", "The residual stream", "Why information moves the way it does inside a transformer.", "17 min"),
      ]),
      createChapter("Transformer Blocks", [
        createLesson("self-attention", "Self-attention", "Queries, keys, values, and pattern routing.", "21 min", { badge: "Quiz" }),
        createLesson("mlps", "MLP layers", "Where feature transformations get sharper.", "15 min"),
        createLesson("normalization", "Normalization", "Stability, gradients, and training hygiene.", "14 min"),
        createLesson("multi-heads", "Multi-head behavior", "Why one head is not enough.", "17 min"),
      ]),
      createChapter("Training", [
        createLesson("gradient-descent", "Gradient descent at scale", "Optimization under huge parameter counts.", "18 min"),
        createLesson("pretraining", "Pretraining objectives", "Why next-token prediction gets you so far.", "16 min"),
        createLesson("finetuning", "Fine-tuning", "How models get specialized without full retraining.", "15 min"),
        createLesson("rlhf", "Post-training alignment", "What changes after the base model is learned.", "19 min"),
      ]),
      createChapter("Inference", [
        createLesson("sampling", "Sampling and decoding", "Temperature, top-k, and generation control.", "14 min"),
        createLesson("latency", "Latency and serving", "What makes deployed inference fast or slow.", "12 min"),
        createLesson("context-windows", "Context windows", "How memory limits shape behavior.", "15 min"),
        createLesson("evaluation", "Evaluation", "Measuring capability without fooling yourself.", "18 min", { badge: "Quiz" }),
      ]),
    ],
  },
  {
    slug: "networking",
    title: "Networking",
    shortTitle: "Networking",
    category: "Distributed Systems",
    label: "Classic",
    theme: "yellow",
    homeClass: "tc-net",
    summary: "TCP/IP, DNS, HTTP, TLS, and the internet from the wire up.",
    description:
      "Understand the layered protocols that move data across the network, and the tradeoffs that appear once systems meet latency and failure.",
    estimatedTime: "~6h",
    level: "Intermediate",
    tags: ["TCP/IP", "DNS", "TLS", "HTTP", "Latency"],
    outcomes: [
      "Trace how requests move from name resolution to encrypted transport.",
      "Reason about latency, retries, and failure boundaries.",
      "Read distributed system diagrams with stronger network intuition.",
    ],
    currentLessonSlug: "packet-model",
    chapters: [
      createChapter("Network Foundations", [
        createLesson("packet-model", "The packet model", "What the network promises and what it drops on the floor.", "13 min", { badge: "Quiz" }),
        createLesson("ip-routing", "IP and routing", "How packets choose a path through the network.", "17 min"),
        createLesson("nat-firewalls", "NAT and firewalls", "How middleboxes change the idealized model.", "14 min"),
        createLesson("mtu", "MTU and fragmentation", "Why packet sizing matters more than it first appears.", "12 min"),
      ]),
      createChapter("Transport", [
        createLesson("tcp-basics", "TCP basics", "Reliability, ordering, and flow control.", "20 min", { badge: "Quiz" }),
        createLesson("udp", "UDP and datagrams", "What you gain and lose without transport guarantees.", "14 min"),
        createLesson("congestion-control", "Congestion control", "Why the network punishes greed.", "18 min"),
        createLesson("latency-budget", "Latency budgeting", "How milliseconds disappear in real systems.", "12 min"),
      ]),
      createChapter("Application Layer", [
        createLesson("dns", "DNS", "Resolution, caching, and where names become addresses.", "16 min"),
        createLesson("http", "HTTP semantics", "Methods, headers, idempotence, and proxies.", "17 min"),
        createLesson("tls", "TLS handshake", "Trust, certificates, and encrypted transport.", "19 min", { badge: "Quiz" }),
        createLesson("websocket-streams", "Sockets and streams", "Long-lived connections in practice.", "14 min"),
      ]),
      createChapter("Reliability", [
        createLesson("timeouts", "Timeouts", "Why every networked system needs a clock.", "11 min"),
        createLesson("retries", "Retries and backoff", "Resilience without self-inflicted denial of service.", "14 min"),
        createLesson("load-balancing", "Load balancing", "How systems spread traffic and failure.", "16 min"),
        createLesson("observability", "Network observability", "Debugging with logs, traces, and packet captures.", "15 min", { badge: "Quiz" }),
      ]),
    ],
  },
  {
    slug: "quantum-computing",
    title: "Quantum Computing",
    shortTitle: "Quantum Computing",
    category: "Computation",
    label: "Niche",
    theme: "pink",
    homeClass: "tc-qc",
    summary: "Qubits, gates, entanglement, and quantum algorithms from scratch.",
    description:
      "Build a clear picture of quantum computation without collapsing into mysticism: state vectors, gates, measurement, and algorithmic consequences.",
    estimatedTime: "~5h",
    level: "Advanced",
    tags: ["Qubits", "Entanglement", "Measurement", "Algorithms"],
    outcomes: [
      "Explain qubits and entanglement with mathematical clarity.",
      "Understand what quantum speedups depend on and what they do not.",
      "Separate genuine quantum ideas from popular overstatement.",
    ],
    currentLessonSlug: "qubit-intuition",
    chapters: [
      createChapter("States", [
        createLesson("qubit-intuition", "Qubit intuition", "What changes when information is a state vector.", "16 min", { badge: "Quiz" }),
        createLesson("superposition", "Superposition", "What it means and what it does not mean.", "14 min"),
        createLesson("measurement", "Measurement", "How observation changes the system.", "15 min"),
        createLesson("bloch-sphere", "The Bloch sphere", "A geometric view of single-qubit states.", "12 min"),
      ]),
      createChapter("Operations", [
        createLesson("quantum-gates", "Quantum gates", "Unitary updates as computation.", "17 min"),
        createLesson("entanglement", "Entanglement", "Correlation beyond classical factorization.", "18 min", { badge: "Quiz" }),
        createLesson("circuit-model", "Circuit model", "How quantum programs are composed.", "15 min"),
        createLesson("noise", "Noise and decoherence", "Why physical systems fight ideal computation.", "13 min"),
      ]),
      createChapter("Algorithms", [
        createLesson("deutsch-jozsa", "Deutsch-Jozsa", "A first taste of quantum advantage.", "16 min"),
        createLesson("grover", "Grover's algorithm", "What quadratic speedup actually buys you.", "20 min", { badge: "Quiz" }),
        createLesson("shor", "Shor's algorithm", "Factorization and why cryptographers care.", "24 min"),
        createLesson("bqp", "Complexity classes", "What BQP says about computational power.", "14 min"),
      ]),
      createChapter("Reality Check", [
        createLesson("hardware-models", "Hardware models", "Superconducting, trapped-ion, and beyond.", "14 min"),
        createLesson("error-correction", "Error correction", "Why scale is mostly an error problem.", "18 min"),
        createLesson("post-quantum", "Post-quantum implications", "What quantum changes for modern cryptography.", "15 min"),
        createLesson("quantum-skepticism", "What quantum does not do", "Keeping claims grounded and useful.", "12 min"),
      ]),
    ],
  },
  {
    slug: "formal-verification",
    title: "Formal Verification",
    shortTitle: "Formal Verification",
    category: "Formal Methods",
    label: "Niche",
    theme: "green",
    homeClass: "tc-fv",
    summary: "Coq, Lean, TLA+, and proving systems correct mathematically.",
    description:
      "Move from vague correctness claims to specifications, invariants, proof obligations, and machine-checked confidence.",
    estimatedTime: "~6h",
    level: "Advanced",
    tags: ["Specs", "Invariants", "Lean", "TLA+", "Proofs"],
    outcomes: [
      "Write clearer specifications and invariants for non-trivial systems.",
      "Understand what proof assistants and model checkers are actually buying you.",
      "Use counterexamples to improve system design instead of guessing.",
    ],
    currentLessonSlug: "specification-thinking",
    chapters: [
      createChapter("Specifications", [
        createLesson("specification-thinking", "Specification thinking", "Turning vague requirements into precise claims.", "15 min", { badge: "Quiz" }),
        createLesson("state-machines", "State machines", "Modeling behavior through states and transitions.", "16 min"),
        createLesson("invariants", "Invariants", "Naming what must always remain true.", "18 min", { badge: "Quiz" }),
        createLesson("counterexamples", "Counterexamples", "Learning from failures in the model.", "14 min"),
      ]),
      createChapter("Verification Tools", [
        createLesson("model-checking", "Model checking", "Exhausting small state spaces with discipline.", "16 min"),
        createLesson("proof-assistants", "Proof assistants", "Interactive proving as engineering work.", "19 min"),
        createLesson("tla-plus", "TLA+ workflows", "Specs that match distributed reasoning.", "17 min"),
        createLesson("lean-coq", "Lean and Coq", "How theorem proving feels in practice.", "18 min"),
      ]),
      createChapter("System Guarantees", [
        createLesson("safety-liveness", "Safety vs liveness", "Two distinct promises you should never blur.", "14 min"),
        createLesson("refinement", "Refinement", "Relating abstract specs to concrete systems.", "17 min", { badge: "Quiz" }),
        createLesson("concurrency-proof", "Concurrency reasoning", "Shared state without wishful thinking.", "19 min"),
        createLesson("protocol-verification", "Protocol verification", "When distributed assumptions meet proof obligations.", "20 min"),
      ]),
      createChapter("Practice", [
        createLesson("bug-taxonomy", "Bugs worth verifying", "Where formal methods pay for themselves.", "13 min"),
        createLesson("verification-cost", "Verification cost", "How to choose the right depth of rigor.", "12 min"),
        createLesson("human-factors", "Human factors", "Writing proofs teams can maintain.", "11 min"),
        createLesson("review-workflow", "Review workflow", "Turning proofs into engineering confidence.", "14 min"),
      ]),
    ],
  },
  {
    slug: "category-theory",
    title: "Category Theory",
    shortTitle: "Category Theory",
    category: "Mathematics",
    label: "Niche",
    theme: "orange",
    homeClass: "tc-cat",
    summary: "Objects, morphisms, functors, monads, and abstraction with teeth.",
    description:
      "Study the abstractions that sit under functional programming, algebraic structure, and compositional reasoning without dissolving into empty symbolism.",
    estimatedTime: "~5h",
    level: "Advanced",
    tags: ["Objects", "Morphisms", "Functors", "Monads", "Composition"],
    outcomes: [
      "Understand category theory as structured composition, not decorative abstraction.",
      "Read functional programming ideas with better mathematical footing.",
      "See how universal properties simplify design and reasoning.",
    ],
    currentLessonSlug: "objects-morphisms",
    chapters: [
      createChapter("Foundations", [
        createLesson("objects-morphisms", "Objects and morphisms", "The basic language of compositional structure.", "15 min", { badge: "Quiz" }),
        createLesson("composition", "Composition", "How arrows combine and why associativity matters.", "14 min"),
        createLesson("identity", "Identity arrows", "The neutral element that keeps structure coherent.", "12 min"),
        createLesson("examples", "Concrete examples", "Sets, functions, and typed programs as categories.", "16 min"),
      ]),
      createChapter("Structure", [
        createLesson("functors", "Functors", "Structure-preserving maps between categories.", "17 min", { badge: "Quiz" }),
        createLesson("natural-transformations", "Natural transformations", "How functors relate at a deeper level.", "19 min"),
        createLesson("products-coproducts", "Products and coproducts", "Universal views of pairing and choice.", "18 min"),
        createLesson("limits", "Limits", "Capturing structure through universal properties.", "16 min"),
      ]),
      createChapter("Programming Links", [
        createLesson("monoids-vs-categories", "Monoids and categories", "Why composition keeps reappearing.", "13 min"),
        createLesson("monads", "Monads", "A disciplined abstraction for sequencing context.", "21 min", { badge: "Quiz" }),
        createLesson("applicatives", "Applicatives", "When structure is enough without full sequencing.", "15 min"),
        createLesson("composition-in-code", "Composition in code", "Seeing categorical ideas inside real APIs.", "14 min"),
      ]),
      createChapter("Abstraction", [
        createLesson("universal-properties", "Universal properties", "Why definitions by behavior are so powerful.", "18 min"),
        createLesson("adjunctions", "Adjunctions", "A deeper pattern that shows up everywhere.", "20 min"),
        createLesson("initial-terminal", "Initial and terminal objects", "The edges of a category tell you a lot.", "12 min"),
        createLesson("why-this-matters", "Why this matters", "Keeping the abstraction anchored in useful thinking.", "11 min"),
      ]),
    ],
  },
];

export const modules = rawModules.map(hydrateTrack);

export function getTrackBySlug(slug) {
  return modules.find((track) => track.slug === slug);
}

export function flattenLessons(track) {
  return track.chapters.flatMap((chapter, chapterIndex) =>
    chapter.lessons.map((lesson, lessonIndex) => ({
      chapter,
      chapterIndex,
      lesson,
      lessonIndex,
    })),
  );
}

export function getLessonBySlugs(trackSlug, lessonSlug) {
  const track = getTrackBySlug(trackSlug);
  if (!track) {
    return null;
  }

  const lessons = flattenLessons(track);
  const current = lessons.find(
    (item) => item.lesson.slug === lessonSlug || item.lesson.aliases.includes(lessonSlug),
  );

  if (!current) {
    return null;
  }

  const currentFlatIndex = lessons.findIndex(
    (item) => item.lesson.slug === lessonSlug || item.lesson.aliases.includes(lessonSlug),
  );

  return {
    track,
    chapter: current.chapter,
    chapterIndex: current.chapterIndex,
    lesson: current.lesson,
    lessonIndex: current.lessonIndex,
    flatIndex: currentFlatIndex,
    totalLessons: lessons.length,
    previous: currentFlatIndex > 0 ? lessons[currentFlatIndex - 1] : null,
    next: currentFlatIndex < lessons.length - 1 ? lessons[currentFlatIndex + 1] : null,
    lessons,
  };
}

---
track: zk-proofs
chapter: Foundations
chapter_number: 1
lesson_slug: completeness-and-soundness
lesson_title: Completeness & Soundness
lesson_number: 3
duration: 16 min
badge: Quiz
---

# Intro
Completeness and soundness are the two rails a proof system must stay on. One rail protects honest provers. The other protects the verifier from lies. If either rail is missing, the whole train goes off the track.

## Main Content
These two properties sound abstract at first, but they are very practical.

- Completeness asks: "When the prover is honest and the statement is true, does the system work?"
- Soundness asks: "When the prover is cheating and the statement is false, does the system still resist?"

You need both.

Think of a cat flap with a smart collar reader:

- If your real cat stands at the flap with the right collar and the flap still refuses to open, that is a completeness problem.
- If a raccoon can walk up wearing a fake collar and get in, that is a soundness problem.

## Completeness: honest proofs should work
Completeness protects the honest case.

definition
label: Definition — Completeness
A proof system is complete if true statements, together with valid witnesses, cause the honest verifier to accept.

This seems almost too obvious to mention, but in real systems it matters a lot.

Why?

- circuits can be encoded incorrectly,
- constraints can be missing,
- randomness can be used badly,
- implementations can reject good proofs by mistake.

So completeness is really saying: "If the claim is right and the prover behaves correctly, the system should not fail for silly reasons."

## Soundness: false claims should fail
Soundness protects the dishonest case.

definition
label: Definition — Soundness
A proof system is sound if no cheating prover can make the verifier accept a false statement except with small probability.

This is the anti-forgery property.

If a proof system lacked soundness, then a prover could "prove" nonsense. At that point, the system is not doing cryptography. It is just handing out gold stars.

## The soundness error
In many proof systems, cheating is not impossible in an absolute sense. Instead, it is made overwhelmingly unlikely.

That cheating probability is called the soundness error.

code
label: Formal picture
Completeness:
  if x is true and w is a valid witness,
  the honest verifier accepts

Soundness:
  if x is false,
  any cheating prover succeeds with probability at most epsilon

If epsilon is tiny, the system is trustworthy.
If epsilon is large, the system is weak.

The idea is simple: the verifier does not need magical certainty. It needs cheating to be so unlikely that using the system is rational.

## Why the two properties are complementary
It is tempting to treat completeness and soundness like technical jargon you attach to a protocol checklist. But they are really asking opposite questions.

Completeness says:
"Do we accidentally reject good proofs?"

Soundness says:
"Do we accidentally accept bad ones?"

A system can fail either way:

- too strict and honest users suffer,
- too loose and attackers win.

The cat flap analogy helps here too:

- If the flap never opens, it is secure but useless.
- If it opens for every animal in the neighborhood, it is convenient but broken.

The right system does both jobs at once.

## Different strengths of soundness
Not all soundness guarantees are equally strong.

There are three useful levels:

- Perfect soundness: false statements never pass.
- Statistical soundness: false statements pass only with tiny probability, even against unbounded attackers.
- Computational soundness: false statements pass only with tiny probability against efficient attackers.

definition
label: Definition — Computational soundness
A proof system has computational soundness if efficient cheating provers still cannot convince the verifier of false statements, assuming the underlying hardness assumptions hold.

This distinction matters later:

- many pairing-based SNARKs are computationally sound,
- many STARK-style systems aim for stronger statistical guarantees in core parts of the protocol.

## Why this matters before zero-knowledge
People often rush to the privacy part of zero-knowledge because it sounds exciting. But privacy only matters after the proof system has something real to say.

A protocol that leaks nothing because it proves nothing is not impressive.

First we need:

- true statements can be proved,
- false statements cannot be faked.

Then we ask:

"Can this happen without revealing the witness?"

That order matters. Completeness and soundness give the proof system a backbone. Zero-knowledge adds privacy on top of that backbone.

## The durable takeaway
When you meet a new proof system, ask these questions in order:

1. What statement is being checked?
2. Why do honest provers succeed?
3. Why do cheating provers fail?
4. How small is the cheating probability?

If you cannot answer those, you do not really understand what the system proves.

## Quiz

### Question 1
question: What does completeness guarantee?
- Honest provers with true statements are accepted
- False statements are always rejected with probability 1
- The verifier learns nothing
- The proof is short
answer: 0
explanation: Completeness is about the honest case. True statements with valid witnesses should verify.

### Question 2
question: What does soundness protect against?
- Honest users being accepted too often
- Cheating provers convincing the verifier of false statements
- Proofs becoming too large
- Hash collisions in every system
answer: 1
explanation: Soundness is the anti-forgery guarantee.

### Question 3
question: What is the soundness error?
- The chance an honest prover forgets the witness
- The maximum probability that a cheating prover can make a false statement verify
- The verifier's runtime overhead
- The number of public inputs in the circuit
answer: 1
explanation: Soundness error is the protocol's quantitative cheating bound.

### Question 4
question: Why do completeness and soundness come before zero-knowledge?
- Because zero-knowledge automatically implies them
- Because privacy only matters once the system already proves something meaningful
- Because zero-knowledge is only for non-interactive protocols
- Because completeness is the same as privacy
answer: 1
explanation: A protocol that hides everything but proves nothing is not useful.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge — https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Shafi Goldwasser, Silvio Micali, Charles Rackoff, The Knowledge Complexity of Interactive Proof Systems — https://doi.org/10.1137/0218012
- MIT OpenCourseWare, Advanced Topics in Cryptography: Lecture Notes — https://ocw.mit.edu/courses/6-876j-advanced-topics-in-cryptography-spring-2003/pages/lecture-notes/

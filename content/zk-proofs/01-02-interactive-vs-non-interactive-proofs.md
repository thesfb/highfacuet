---
track: zk-proofs
chapter: Foundations
chapter_number: 1
lesson_slug: interactive-vs-non-interactive-proofs
lesson_title: Interactive vs non-interactive proofs
lesson_number: 2
duration: 16 min
badge: Quiz
---

# Intro
Some proofs happen like a conversation. Others happen like handing someone a sealed packet they can open later. That is the difference between interactive and non-interactive proofs. The distinction matters because it changes who provides the unpredictability, how cheating is prevented, and what kinds of systems are easy to deploy.

## Main Content
An interactive proof has back-and-forth. The prover sends something, the verifier challenges it, and the prover responds. A non-interactive proof removes the conversation and replaces it with one proof object.

Here is the simplest picture:

- Interactive: "Ask me something, and I will answer."
- Non-interactive: "Here is the whole proof. Check it whenever you want."

## Why interaction helps
Interaction is useful because the verifier can ask an unpredictable question.

Think of a cat trying to prove it really knows which of three boxes has the fish toy hidden inside.

If the cat sees the question in advance, it can prepare a fake performance just for that box.
If the verifier points at a random box after the cat has already committed, cheating becomes much harder.

That is the core reason interaction helps soundness: the prover must react to fresh randomness it could not plan around perfectly.

definition
label: Definition — Interactive proof
An interactive proof is a protocol where the prover and verifier exchange messages, and the verifier's acceptance depends on the full exchange.

In many classic protocols, this looks like:

code
label: Three-move pattern
1. Prover sends a commitment
2. Verifier sends a random challenge
3. Prover sends a response
4. Verifier checks consistency

The key point is that the challenge is not decoration. It is what forces the prover to stay honest.

## Public-coin intuition
Many important protocols are public-coin. That means the verifier's challenge is random, but everyone gets to see it.

This is still useful. The power is not that the challenge stays hidden forever. The power is that it was not known when the prover committed to earlier messages.

It is like asking the cat to step onto one randomly chosen colored tile **after** it has already walked into the room. The cat cannot pre-edit reality once the tile is chosen.

## What non-interactive proofs change
Non-interactive proofs remove live back-and-forth entirely.

Instead of:

- prover sends,
- verifier challenges,
- prover replies,

we get:

- prover publishes one proof,
- verifier checks it later.

definition
label: Definition — Non-interactive proof
A non-interactive proof system gives the verifier a single proof object to check, without requiring live message exchange.

This is much easier to use in practice:

- blockchains want portable proofs,
- archived systems want proofs that can be checked later,
- many verifiers may want to inspect the same proof,
- the prover and verifier may never be online at the same time.

That makes non-interactivity extremely attractive in real systems.

## So where does the challenge go?
If the verifier is no longer sending a challenge live, something else must play that role.

This is where Fiat-Shamir enters.

Instead of waiting for a verifier to send randomness, the prover derives the challenge by hashing the statement and earlier transcript material.

code
label: Fiat-Shamir idea
interactive challenge:
  e <- random verifier challenge

non-interactive challenge:
  e := H(statement, prior_messages)

Now the proof can behave **as if** a verifier had asked a random question, even though no live verifier was there.

note
The proof did not stop depending on unpredictability. It just changed where that unpredictability comes from.

## Why this matters for zk systems
Most modern zk systems that people actually deploy are non-interactive. That is not because interaction is unimportant. It is because non-interactive artifacts are much easier to move around, post on-chain, and verify at scale.

But it helps to remember that many of these systems are built on ideas that were originally interactive.

When you see:

- a transcript hash,
- a challenge point,
- or a sequence of derived random coins,

you should think:

"What interactive role is this replacing?"

That question keeps the whole design from becoming mysterious.

## The practical tradeoff
Interactive proofs are often cleaner to reason about because the verifier's randomness is explicit.
Non-interactive proofs are better for deployment because they are portable.

So the tradeoff is not "old versus new."
It is more like:

- interactive proofs are easier to see as a dialogue,
- non-interactive proofs are easier to ship as a product.

If an interactive protocol is like a live oral exam, a non-interactive proof is like a certified exam packet you can submit and verify later.

Both can be rigorous. They just organize rigor differently.

## Quiz

### Question 1
question: What is the defining feature of an interactive proof?
- It always uses a trusted setup
- It involves message exchange between prover and verifier
- It reveals the witness directly
- It cannot use randomness
answer: 1
explanation: Interactive proofs are defined by the back-and-forth protocol between prover and verifier.

### Question 2
question: Why do verifier challenges help in interactive proofs?
- They make the proof shorter
- They give the prover extra witness information
- They force the prover to answer unpredictable checks
- They automatically make the system zero-knowledge
answer: 2
explanation: Random challenges make it harder for a cheating prover to prepare one fake answer that works everywhere.

### Question 3
question: What does a non-interactive proof replace the live verifier challenge with in Fiat-Shamir style systems?
- A public hash-derived challenge
- A second witness
- A longer verification key
- A deterministic proof with no randomness
answer: 0
explanation: Fiat-Shamir uses hashing of the statement and prior messages to derive the challenge.

### Question 4
question: Why are non-interactive proofs so useful in blockchain systems?
- Because they eliminate soundness assumptions
- Because they can be checked later from one portable proof object
- Because they always require no setup
- Because they reveal the witness only to miners
answer: 1
explanation: Portability is the big win. A single proof can be posted, stored, and checked later by many verifiers.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge — https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Amos Fiat and Adi Shamir, How to Prove Yourself: Practical Solutions to Identification and Signature Problems — https://doi.org/10.1007/3-540-47721-7_12
- MIT OpenCourseWare, Advanced Topics in Cryptography, Lecture 6 — https://ocw.mit.edu/courses/6-5630-advanced-topics-in-cryptography-fall-2023/pages/lecture-6-fiat-shamir-paradigm-and-zero-knowledge-proofs/

---
track: zk-proofs
chapter: Foundations
chapter_number: 1
lesson_slug: what-is-a-proof
lesson_title: What is a proof?
lesson_number: 1
duration: 14 min
badge: Quiz
---

# Intro
Before we talk about zero-knowledge, we need to talk about ordinary proof. In cryptography, a proof is not "something that feels convincing." It is more like a rule-driven check. Think of it this way: if a cat sits next to the treat cupboard and looks extremely confident, that is not proof it knows the cupboard code. If the cat types the correct code and the cupboard opens, now we have something we can verify.

## Main Content
In everyday life, "proof" is fuzzy. A friend says, "Trust me." A teacher says, "Show your steps." A judge wants evidence. A mathematician wants a chain of exact reasoning. Cryptography cannot afford that fuzziness. A computer needs a very specific test that says "accept" or "reject."

## Proofs are about checkable evidence
The cleanest starting point is this:

definition
label: Definition — Statement and witness
A statement is the claim we want accepted. A witness is the hidden information that makes the claim true. A verifier is the efficient procedure that checks whether the witness really supports the statement.

Here is the important split:

- A statement is public: "I know a valid solution."
- A witness is private: the actual solution.
- The verifier checks whether the witness matches the statement.

If I say, "This Sudoku has a solution," the witness could be the filled grid. If I say, "This circuit has a satisfying assignment," the witness could be the assignment. If I say, "I know the secret key," the witness is the secret key.

code
label: NP-style picture
R(x, w) = 1  means "w is a valid witness for statement x"

L = { x | there exists w such that R(x, w) = 1 }

Verifier V:
  input: statement x, candidate witness w
  output: accept if R(x, w) = 1

This is the first big idea: in cryptography, a proof is meaningful only because there is an agreed check.

## A proof depends on the verifier
This sounds obvious, but it matters a lot. A proof is not some magical object floating in the air. It is proof **for a particular verifier**.

If the verifier changes, what counts as valid proof can change too.

That is why cryptography talks so much about algorithms. The verifier is not a vague person with "good judgment." It is a machine following exact instructions.

Imagine a cat trying to prove it owns the red collar:

- If the verifier only checks "Is there any collar nearby?" the cat can cheat.
- If the verifier checks "Does the collar fit this cat and match the registered tag?" then the proof standard is much stronger.

Same cat. Different verifier. Different meaning of proof.

## Why sending the witness is often a bad idea
At first, you might think the story is done:

1. The prover has the witness.
2. The prover sends the witness.
3. The verifier checks it.

That works in many formal settings. But in real systems, it is often terrible.

Why?

- The witness might be secret.
- The witness might be reusable.
- The witness might reveal much more than the verifier should learn.

If the cat's witness is "the exact hiding place of the emergency tuna stash," then sending the witness solves the proof problem and creates a new disaster.

note
This is where zero-knowledge enters the picture. We want to separate two things that people often confuse: proving that you know something, and revealing the thing itself.

## From object to protocol
Once we stop sending witnesses directly, proof becomes a protocol.

Instead of handing over the answer, the prover may:

- commit to something,
- answer a challenge,
- show consistency,
- and convince the verifier without exposing the whole witness.

So a proof is no longer always a static object. Sometimes it is an interaction.

That shift is the bridge into zero-knowledge. We still want the verifier to become convinced, but we want the witness to stay hidden.

## Proof, argument, and proof of knowledge
These terms are related, but they are not identical.

definition
label: Definition — Proof, argument, proof of knowledge
A proof has soundness even against an all-powerful cheating prover. An argument only needs to stop efficient cheating provers. A proof of knowledge says that a successful prover must in some meaningful sense possess a witness.

That last phrase, "possess a witness," is important. In modern zk systems, we often do not just want "the statement is true." We want "the prover actually knows the secret that makes it true."

## The right mental model
If you keep one idea from this lesson, keep this one:

A proof is a machine-checkable way to convince a verifier for the right reasons.

Not:

- a persuasive essay,
- a feeling,
- a reputation signal,
- or a dramatic cat stare.

It is a precise verification story.

Zero-knowledge does not replace that idea. It adds a harder requirement on top of it.

## Quiz

### Question 1
question: In cryptography, what makes something a proof rather than just a convincing story?
- A human finds it persuasive
- It passes a specific verification rule
- It uses advanced math notation
- It contains a secret witness
answer: 1
explanation: A cryptographic proof is defined by whether a verifier can check it according to a fixed rule.

### Question 2
question: What is a witness?
- The public statement being checked
- The verifier's randomness
- The hidden information that makes the statement true
- The final transcript produced by the protocol
answer: 2
explanation: The witness is the underlying secret or evidence that certifies the statement.

### Question 3
question: Why is sending the witness directly often unacceptable?
- Because witnesses are always too large to send
- Because verifiers are not allowed to read witnesses
- Because the witness may be secret and revealing it can destroy privacy
- Because only interactive systems can be sound
answer: 2
explanation: In many applications, the whole point is to prove knowledge without giving the sensitive information away.

### Question 4
question: What is the main idea behind a proof of knowledge?
- The verifier learns the witness directly
- A successful prover must genuinely encode or possess witness information
- The proof is always non-interactive
- The system has perfect completeness
answer: 1
explanation: A proof of knowledge aims to guarantee that success is tied to actual witness knowledge, not lucky cheating.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge — https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Shafi Goldwasser, Silvio Micali, Charles Rackoff, The Knowledge Complexity of Interactive Proof Systems — https://doi.org/10.1137/0218012
- MIT OpenCourseWare, Advanced Topics in Cryptography: Lecture Notes — https://ocw.mit.edu/courses/6-876j-advanced-topics-in-cryptography-spring-2003/pages/lecture-notes/

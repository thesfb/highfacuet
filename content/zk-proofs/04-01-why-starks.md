---
track: zk-proofs
chapter: STARKs
chapter_number: 4
lesson_slug: why-starks
lesson_title: Why STARKs?
lesson_number: 1
duration: 19 min
badge: Quiz
---

# Intro
By the time people reach STARKs, they usually already know why SNARKs are impressive. The real question becomes: if SNARKs are already so good, why invent STARKs at all? The answer is about trust assumptions, scalability, and different design choices. STARKs are not "better in every way." They are a different point in the proof-system tradeoff space.

## Main Content
## Start with the pain points
Classic SNARKs, especially pairing-based ones, achieved excellent succinctness, but they also came with concerns:

- trusted setup
- delicate algebraic assumptions
- dependence on pairing-friendly curves
- post-quantum worries

STARKs emerged partly as a response to those concerns.

The rough promise of STARKs is:

- transparent setup, meaning no trusted ceremony
- security based mainly on hashing and low-degree testing ideas
- strong scalability for large computations

The tradeoff is that proofs are usually larger than tiny pairing-based SNARK proofs.

## What the word STARK means
STARK stands for Scalable Transparent Argument of Knowledge.

Just like with SNARK, every letter matters.

- scalable: designed to handle large computations well
- transparent: no trusted setup
- argument: computational soundness
- knowledge: witness-based guarantee in the formal sense

definition
label: Definition - STARK
A STARK is a scalable transparent argument of knowledge, typically built from hash-based commitments, low-degree testing, and algebraic execution traces.

The standout word here is transparent.

## Why transparency matters
Transparent means there is no special ceremony where toxic waste must be generated and destroyed.

That is a big social and operational win. You do not need to trust a setup process. You do not need to wonder whether somebody kept a hidden trapdoor.

If SNARK trusted setup feels like asking a cat to promise it definitely did not hide the master key under the sofa, STARK transparency means there was never a hidden master key in the first place.

This cleaner trust story is one of the main reasons people like STARKs.

## Why scalability matters
STARKs are especially strong when the computation is very large. They often work with execution traces: long structured records of a computation's steps.

That makes them a natural fit for things like:

- virtual machine execution
- rollups
- long arithmetic computations
- trace-heavy systems

Rather than compressing the computation only through circuit constraints, STARKs often embrace the idea of a long table of steps and prove that this table obeys transition rules.

## The price: proof size
Transparency and scalability are great, but STARKs usually pay for them with larger proof sizes than the smallest pairing-based SNARKs.

That does not make them worse. It just means the tradeoff changes.

Some systems care most about:

- tiny verification artifacts
- minimal on-chain data

Others care more about:

- no trusted setup
- hash-based assumptions
- better scalability for huge traces

Choosing between SNARKs and STARKs is often about which costs you are more willing to pay.

## The technical flavor is different
Even before you learn the details, STARKs feel different from Groth16-style systems.

Their language leans more on:

- traces
- low-degree extensions
- Reed-Solomon style ideas
- FRI
- Merkle commitments

That means the math "texture" is different. Instead of tiny pairing-based proof objects built from strong setup assumptions, STARKs use a more transparent stack built from polynomial proximity testing and hashing.

note
Transparent does not mean assumption-free. STARKs still rely on cryptographic assumptions, but the trust story is different from trusted-setup SNARKs.

## A practical intuition
Imagine you want to prove a cat robot followed 500,000 steps of a maze-cleaning program correctly.

A STARK-style mindset says:

- write down the long execution trace
- encode transition rules between rows
- prove the trace has the right algebraic structure
- use transparent commitment and testing machinery to check it efficiently

This is one reason STARKs feel natural for VM-style proving systems. They are comfortable reasoning about long, regular computations.

## The mental model to keep
Why STARKs?

Because people wanted proof systems that:

- avoid trusted setup
- scale gracefully to huge computations
- rely on a different family of assumptions

If SNARKs are like ultra-compact premium shipping boxes, STARKs are like larger but tamper-resistant transparent crates. They may take more room, but many teams like what they reveal about trust and scalability.

## Quiz

### Question 1
question: What does the `T` in STARK emphasize?
- Trusted setup
- Transparency, meaning no trusted setup ceremony
- Time-locked verification
- Turing completeness
answer: 1
explanation: The transparent setup model is one of the defining features of STARKs.

### Question 2
question: Why were STARKs developed in part as an alternative to classic SNARK systems?
- To avoid all field arithmetic
- To address concerns like trusted setup and different security assumptions
- To make proofs always smaller than SNARK proofs
- To reveal the witness during verification
answer: 1
explanation: STARKs offer a different trust and assumption profile, especially by avoiding trusted setup.

### Question 3
question: What kind of computations are STARKs often well suited for?
- Very large trace-based computations
- Only one-step Boolean formulas
- Only interactive protocols
- Only computations with no private data
answer: 0
explanation: STARKs are especially natural for long structured execution traces and large computations.

### Question 4
question: What is a common tradeoff of STARKs compared with tiny pairing-based SNARKs?
- They usually have larger proofs
- They cannot prove computation
- They always require a ceremony
- They do not use polynomials
answer: 0
explanation: STARKs often trade larger proof sizes for transparency and other benefits.

## Sources
- Eli Ben-Sasson et al., Scalable, transparent, and post-quantum secure computational integrity - https://eprint.iacr.org/2018/046
- StarkWare STARK explainer - https://starkware.co/stark/
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf

---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: proof-aggregation
lesson_title: Proof aggregation
lesson_number: 2
duration: 20 min
badge: Quiz
---

# Intro
Proof aggregation is about one thing: many proofs are nice, but one proof is nicer. When a system produces huge numbers of valid proofs, the next challenge is not only correctness. It is packaging. Aggregation asks whether multiple proof objects can be compressed into one smaller verification target. This matters a lot in blockchains, batch systems, and any place where verification cost repeats over and over.

## Main Content
## The core question
Suppose you have 1,000 valid proofs.

Without aggregation, a verifier may need to check each one separately.

Aggregation asks:

"Can we combine these into one proof object that is still trustworthy?"

definition
label: Definition - Proof aggregation
Proof aggregation is the process of combining multiple proofs or proof statements into a smaller proof object whose verification certifies all of them together.

The exact meaning depends on the proof family, but the big goal stays the same: reduce total verification burden.

## Why this matters in real systems
If a system verifies one proof once, the savings from aggregation may be small.

If a system verifies thousands or millions of proofs repeatedly, aggregation can be the difference between:

- practical infrastructure
- unusable bottlenecks

This is why aggregation matters in:

- rollups
- blockchain bridges
- batch settlement systems
- storage proof systems
- recursive proof pipelines

Think of a school with 5,000 cat exam certificates. If the dean must inspect each certificate separately every morning, that does not scale well. A single authenticated master summary is often much more practical.

## Aggregation is not just batching
People sometimes use "batching" and "aggregation" interchangeably, but they are not identical.

Batch verification usually means verifying many proofs together more efficiently, while still conceptually handling many proof objects.

Aggregation usually means producing a new, smaller proof object that stands in for the originals.

Both aim to lower cost, but aggregation is usually the stronger compression move.

## The tradeoff
Aggregation shifts work around.

Usually:

- the prover or aggregator does more work
- the verifier does less work

That is often exactly what systems want. Verification may happen on-chain or on constrained devices, while aggregation can happen off-chain where more resources are available.

So aggregation is not "free efficiency." It is an efficiency trade:

"Make proof production or combination harder so final verification becomes cheaper."

## Recursive aggregation
One powerful way to aggregate proofs is through recursion.

For example:

- take a set of block proofs
- prove that each one verifies correctly
- fold them into one final recursive proof

This is common in rollup discussions because it lets many blocks be finalized through a single final validity proof.

But aggregation does not always require full recursion in the most general sense. Some systems use dedicated aggregation arguments tuned to specific proof families.

## A concrete example: SnarkPack
SnarkPack is a well-known example of practical SNARK aggregation for Groth16 proofs.

Its importance is not that everyone must memorize its internals. Its importance is that it shows aggregation can be a serious deployment tool, not only a theoretical curiosity.

The broad lesson is:

- aggregation can be layered on top of existing proof systems
- it can dramatically reduce verifier effort
- it becomes attractive exactly when proof counts get large

## What aggregation does not solve
Aggregation does not magically fix every cost.

It does not:

- make proving free
- remove soundness assumptions
- eliminate data availability issues
- erase the cost of generating the original proofs

It mostly changes the shape of the verification surface.

In cat terms, combining 1,000 cat certificates into one master certificate does not remove the need for the original cat exams. It only changes how the dean checks the final record.

note
When someone claims an aggregation breakthrough, ask which metric improved: proof size, verifier time, number of pairings, on-chain cost, or total end-to-end proving work. "Aggregation" alone is not a complete performance story.

## The mental model to keep
Proof aggregation is best thought of as proof packaging.

You start with many valid pieces of evidence and end with one compressed evidence object that says:

"All of these checked out."

Or, in cat terms:

- 500 cats each passed a jumping test
- instead of carrying 500 ribbons, the academy issues one sealed ledger page certifying the whole batch

That is aggregation.

## Quiz

### Question 1
question: What is proof aggregation trying to do?
- Replace witnesses with public keys
- Combine multiple proofs into a smaller verification target
- Make proofs interactive again
- Eliminate the need for soundness
answer: 1
explanation: Aggregation is about compressing many proof objects or statements into a smaller one that is cheaper to verify.

### Question 2
question: Why is aggregation especially useful in systems like rollups?
- Because they often generate many proofs and want to reduce repeated verification cost
- Because rollups never use recursion
- Because aggregation makes calldata unnecessary
- Because it removes the need for public inputs
answer: 0
explanation: Aggregation matters most when many proofs would otherwise create a verification bottleneck.

### Question 3
question: What is a good distinction between batching and aggregation?
- They are always the same
- Batching can mean verifying many proofs together, while aggregation usually means producing a new combined proof object
- Aggregation never helps verification
- Batching requires trusted setup and aggregation does not
answer: 1
explanation: Aggregation is usually the stronger "compress into one object" move.

### Question 4
question: What does aggregation usually trade?
- More prover or combiner work for less verifier work
- More verifier work for less prover work
- Zero-knowledge for completeness
- Interactivity for soundness
answer: 0
explanation: Aggregation typically shifts effort toward the producer side so the final checker has less to do.

## Sources
- Nicolas Gailly, Mary Maller, Anca Nitulescu, SnarkPack: Practical SNARK Aggregation - https://eprint.iacr.org/2021/529
- Sean Bowe, Jack Grigg, Daira Hopwood, Recursive Proof Composition without a Trusted Setup - https://eprint.iacr.org/2019/1021
- Ethereum.org, Zero-knowledge rollups - https://ethereum.org/developers/docs/scaling/zk-rollups/

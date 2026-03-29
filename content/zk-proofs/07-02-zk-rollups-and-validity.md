---
track: zk-proofs
chapter: Applications & Security
chapter_number: 7
lesson_slug: zk-rollups-and-validity
lesson_title: ZK rollups & validity proofs
lesson_number: 2
duration: 21 min
badge: Quiz
---

# Intro
ZK rollups are one of the most visible real-world uses of proof systems because they turn a deep cryptographic idea into a concrete scaling strategy. Instead of having Ethereum re-execute everything directly, the rollup does work off-chain and posts a proof that the work was done correctly. This lesson explains the architecture in practical terms.

## Main Content
## The high-level picture
A ZK rollup moves transaction execution off-chain and keeps cryptographic accountability on-chain.

The rollup operator or prover:

- executes many transactions off-chain
- updates the rollup state
- posts compressed data and a validity proof to L1

The L1 contract accepts the new state only if the proof verifies.

definition
label: Definition - Validity proof
A validity proof is a cryptographic proof that a proposed state transition was produced by correct execution of the rollup's rules.

That is why ZK rollups are often described as "prove correctness instead of replaying computation."

## State roots and state commitments
Rollup state is usually summarized by a state root, often backed by a Merkle tree or similar commitment structure.

After a batch of transactions:

- balances change
- nonces change
- maybe contract storage changes
- a new state root is produced

The proof's job is not merely to say, "trust me, the new root is fine."
It must show that the new root really followed from valid state updates.

## Why Ethereum still matters
Ethereum is not only a place to post proofs. It acts as:

- the settlement layer
- the place that stores key public data
- the layer that enforces proof verification

The Ethereum docs make this point clearly: the rollup may execute off-chain, but finality depends on the L1 contract accepting the validity proof.

This means the rollup inherits important security properties from Ethereum instead of inventing them from scratch.

## Data availability
One subtle but crucial part of rollup design is data availability.

Even if the proof certifies the state transition, users still need enough published data to reconstruct or continue the rollup state independently.

That is why rollup discussions are never only about proofs. They are also about what transaction or state data gets posted, compressed, or otherwise made available.

If a cat accountant posts a perfectly valid final snack total but never reveals enough records for anyone else to reconstruct the snack ledger, something is still wrong.

## Why validity proofs are powerful
The main win is that Ethereum does not need to re-execute every off-chain step. It only verifies the succinct proof.

That changes the scaling profile:

- heavy execution can happen elsewhere
- final verification on L1 stays much cheaper
- many transactions can be certified as one batch

This is why ZK rollups are often described as hybrid systems. They move work off-chain, but they do not move trust entirely off-chain.

## Recursive proofs in rollups
Recursive proofs become especially useful here.

The Ethereum documentation points out that single-block proofs limit throughput. If each batch finalizes independently, there is still repeated verification overhead.

Recursive aggregation can help by combining many batch proofs into one final proof. That lets one on-chain verification stand for several rollup blocks.

This is one reason recursion matters so much in real deployments. It is not just elegant theory. It directly affects throughput and cost.

## Why operators still matter
Many rollups still use a centralized or semi-centralized operator or sequencer for efficiency. That introduces practical issues:

- censorship risk
- operator liveness concerns
- submission delays

The proof system protects correctness, but system design still has to address who gets to order transactions and how users escape if the operator misbehaves.

So a validity proof is powerful, but it does not by itself solve every governance or liveness question.

note
The strongest beginner mistake here is to think "the proof solves the whole rollup." It solves correctness of state transitions. Other system properties still need separate design.

## The mental model to keep
A ZK rollup is like a busy cat market where all trading happens in a side room, but every so often the market manager posts:

- the new official inventory summary
- a compact proof that the summary came from valid trades

The main square does not replay every trade. It checks the proof and updates the official record.

That is the ZK rollup model.

## Quiz

### Question 1
question: What does a validity proof do in a ZK rollup?
- It proves the proposed new state came from valid execution of the rollup rules
- It reveals every private input in the batch
- It replaces the rollup state root
- It removes the need for Ethereum
answer: 0
explanation: The validity proof certifies correctness of the off-chain state transition.

### Question 2
question: Why are ZK rollups attractive for scaling?
- They let L1 verify a succinct proof instead of replaying all off-chain computation
- They eliminate all on-chain costs
- They never need public data
- They avoid state commitments
answer: 0
explanation: The main efficiency gain comes from cheap verification of a compact proof.

### Question 3
question: Why is data availability still important in rollups?
- Because correctness alone is not enough if users cannot reconstruct or continue the state independently
- Because proofs do not exist
- Because calldata is encrypted
- Because validity proofs automatically publish the whole state
answer: 0
explanation: Users still need enough data to verify and interact with the rollup system.

### Question 4
question: How do recursive proofs help rollups?
- They make witnesses public
- They let multiple block proofs be combined so one final proof can finalize more work at once
- They eliminate operators
- They turn every rollup into a sidechain
answer: 1
explanation: Recursive aggregation can reduce repeated on-chain verification work.

## Sources
- Ethereum.org, Zero-knowledge rollups - https://ethereum.org/developers/docs/scaling/zk-rollups/
- Sean Bowe, Jack Grigg, Daira Hopwood, Recursive Proof Composition without a Trusted Setup - https://eprint.iacr.org/2019/1021
- Nicolas Gailly, Mary Maller, Anca Nitulescu, SnarkPack: Practical SNARK Aggregation - https://eprint.iacr.org/2021/529

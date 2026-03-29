---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: incrementally-verifiable-computation
lesson_title: Incrementally verifiable computation
lesson_number: 4
duration: 24 min
badge: Quiz
---

# Intro
Incrementally verifiable computation, or IVC, sounds like a big research term, but the basic idea is practical and beautiful: instead of proving a whole long computation in one giant shot, prove it as it unfolds, while keeping a compact proof state the whole time. If recursive proofs are about proof chains, IVC is about proof chains that grow with the computation itself.

## Main Content
## The motivating problem
Suppose a computation has many steps:

- a long machine execution
- repeated state updates
- a sequential process that may keep running

If you wait until the very end and then prove everything from scratch, proving can become heavy and inflexible.

IVC asks a better question:

"Can we maintain a proof that covers the first `i` steps, then cheaply update it to cover the first `i+1` steps?"

definition
label: Definition - Incrementally verifiable computation
Incrementally verifiable computation is a framework in which a prover maintains a compact proof state that can be updated as a sequential computation advances, so that the final proof certifies the whole execution.

This makes IVC feel like a running ledger rather than a last-minute audit.

## The update pattern
The conceptual pattern looks like this:

code
label: IVC flow
pi_0 proves the initial state
pi_1 proves step 1 and links to pi_0
pi_2 proves step 2 and links to pi_1
...
pi_t proves the first t steps

The crucial idea is that each update should be much cheaper than rebuilding the entire proof history.

In cat terms, imagine a cat walking across 10,000 stepping stones. IVC is like updating one running certificate after each jump instead of reconstructing the whole jump history from scratch every time a new step happens.

## Why this matters
IVC is useful when computation is:

- long
- sequential
- naturally stateful
- easier to verify incrementally than all at once

That is why IVC is such a natural fit for recursive proving research, zkVMs, and systems that want continuously compressible computation.

## IVC versus ordinary recursion
Ordinary recursive proofs can already give you proof-of-proof composition. IVC goes one step further in viewpoint.

It emphasizes:

- the computation is unfolding over time
- the proof is carried forward at each step
- the final proof is the latest version of an evolving certified history

So recursion is often part of IVC, but IVC is the workflow idea: keep the proof alive as the computation grows.

## Why Nova made IVC feel practical
Nova is important because it framed IVC around folding schemes and achieved very low recursion overhead compared with prior approaches.

That does not mean IVC suddenly became trivial. It means the cost profile became much more compelling:

- small per-step overhead
- cleaner recursive structure
- no trusted setup in the core construction

This is why modern discussions of IVC often immediately lead into Nova, SuperNova, HyperNova, and related systems.

## What the verifier gets
At the end, the verifier usually does not read the whole history. It checks the final carried proof and the claimed output.

That final proof says, in effect:

"I certify that the system started in the right place and every incremental step followed the rules until this final result."

This is what makes IVC appealing for proving long-running programs or repeated state transitions.

## Why this changes system design
If you know a system can maintain verifiability incrementally, you may design it differently from the start.

Instead of thinking:

"How do I prove this giant finished artifact?"

you start thinking:

"How do I make each state transition easy to fold into the running proof state?"

That is a very different design mindset, and it is one reason zkVM and recursion research feel so tied together.

note
IVC is not only about smaller proofs. It is about a different temporal structure for proving. The proof lives alongside the computation instead of appearing only at the end.

## The mental model to keep
IVC is like a train ticket that gets officially stamped at every station.

You do not throw away the ticket and reissue a whole new travel history every time the train moves. You carry one certified record forward.

Or, in cat language:

- a cat crosses one rooftop at a time
- after each leap, the referee updates one running badge of valid movement
- the final badge stands for the whole rooftop journey

That is incrementally verifiable computation.

## Quiz

### Question 1
question: What is the main goal of incrementally verifiable computation?
- To prove only the final output with no relation to intermediate steps
- To maintain a proof state that can be updated as a sequential computation advances
- To remove the need for recursion
- To reveal the witness in stages
answer: 1
explanation: IVC keeps a running proof that grows with the computation instead of restarting from scratch.

### Question 2
question: Why is IVC attractive for long computations?
- Because the prover can update a compact proof over time rather than rebuilding the whole history every step
- Because it makes the witness public
- Because it only works for tiny circuits
- Because it avoids all algebraic commitments
answer: 0
explanation: IVC is valuable when proof state can evolve along with the computation.

### Question 3
question: How is IVC related to recursion?
- It usually uses recursive ideas, but emphasizes carrying proof state forward as the computation unfolds
- It is the opposite of recursion
- It proves that recursion is impossible
- It never involves proof verification
answer: 0
explanation: IVC is a recursive-style proving workflow focused on sequential updates.

### Question 4
question: What does the final IVC proof usually represent?
- Only the last step
- A certification that the computation started correctly and each incremental step followed the rules
- A public copy of the full trace
- A hash of the proving key
answer: 1
explanation: The final proof stands for the whole carried history, not just the last transition in isolation.

## Sources
- Abhiram Kothapalli, Srinath Setty, Ioanna Tzialla, Nova: Recursive Zero-Knowledge Arguments from Folding Schemes - https://eprint.iacr.org/2021/370
- Sean Bowe, Jack Grigg, Daira Hopwood, Recursive Proof Composition without a Trusted Setup - https://eprint.iacr.org/2019/1021
- Abhiram Kothapalli, Srinath Setty, HyperNova: Recursive Arguments for Customizable Constraint Systems - https://eprint.iacr.org/2023/573

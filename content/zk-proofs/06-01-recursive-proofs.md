---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: recursive-proofs
lesson_title: Recursive proofs
lesson_number: 1
duration: 26 min
badge: Quiz
---

# Intro
Recursive proofs are one of the biggest conceptual jumps in modern ZK, but the core idea is surprisingly clean: a proof can verify another proof. Once that is possible, long chains of work can be compressed into one final object. This lesson focuses on the intuition first, because once the "proof of a proof" idea clicks, a lot of the modern recursion literature becomes much easier to read.

## Main Content
## The basic idea
Normally, a proof certifies some computation or statement.

A recursive proof adds one more layer:

"I am proving not only that this statement is true, but also that an earlier proof was valid."

definition
label: Definition - Recursive proof
A recursive proof system is one in which the statement being proved can include verification of another proof produced by the same or a compatible proof system.

That sounds self-referential, but it is extremely useful.

## Why anyone wants this
Suppose you have a very long computation broken into many stages.

Without recursion, you might produce one proof per stage, and the verifier would still have to process many proofs.

With recursion, you can do something like this:

code
label: Recursive compression pattern
Proof 1 proves step 1
Proof 2 proves step 2 and verifies Proof 1
Proof 3 proves step 3 and verifies Proof 2
...
Final proof proves the whole chain

The verifier checks the final proof and inherits trust in all the earlier ones.

That is why recursion feels like compression with memory.

## The key engineering trick
To verify a proof inside another proof, the proof system needs a circuit or constraint system that can express the verifier logic of the inner proof.

That is the hard part conceptually:

- the verifier becomes part of the statement
- verification itself becomes another computation to prove

Once you see that, recursion stops feeling mystical. It is just one computation checking another.

If a cat academy gives every obstacle run a signed certificate, recursion is like having today's certificate say:

"Run 57 was valid, and by the way, I also checked yesterday's certificate for run 56."

Keep doing that and one final certificate can summarize a long training history.

## Why recursion helps blockchains and rollups
Recursive proofs matter a lot in practice because they reduce repeated verification burden.

In rollups, for example:

- many blocks may each have their own validity proof
- recursively combining them can reduce on-chain verification work
- one final proof can finalize many batches at once

That is why recursion is not just a pretty theorem. It changes system architecture.

It shifts the question from:

"Can we prove each step?"

to:

"Can we keep compressing the proof history as the system keeps running?"

## Recursion is not the same as aggregation
People often blur recursion and aggregation, but they are not identical.

Aggregation usually means combining many proofs into one final proof object.

Recursion means a proof actually verifies one or more other proofs as part of its statement.

Many systems use both ideas together, but it helps to keep the distinction clear:

- aggregation is about combining
- recursion is about proof-verifying-proof structure

## Why trusted setup used to be a headache here
Historically, recursive proof composition was especially awkward because many systems needed:

- trusted setup
- carefully matched curve cycles
- expensive verifier logic

Later work such as Halo showed ways to do recursive composition without a trusted setup, which was a major step forward.

So when you hear that recursion is "important," part of that importance is that it took years to make it practical enough to deploy.

note
Recursive proofs are not magic size reducers that come for free. They introduce circuit costs, implementation complexity, and design constraints. Their value comes from the tradeoff, not from costlessness.

## The mental model to keep
Recursive proofs are like nesting receipts.

One receipt does not just say, "today's purchase was valid."
It also says, "I checked the previous receipt, and it was valid too."

Keep doing that, and one final receipt can stand for a whole chain of prior activity.

Or, in cat terms:

- each day, the cat academy issues a ribbon saying that day's trial passed
- the next day's ribbon also validates the previous ribbon
- eventually one ribbon summarizes a long streak of valid cat trials

That is recursion.

## Quiz

### Question 1
question: What is a recursive proof, at a high level?
- A proof that hides all public inputs
- A proof whose statement can include verification of another proof
- A proof that never uses arithmetic
- A proof that must be interactive
answer: 1
explanation: Recursion means proof verification itself becomes part of a new proof statement.

### Question 2
question: Why are recursive proofs useful?
- They let long chains of work be compressed into smaller final verification effort
- They eliminate prover cost
- They make all systems transparent
- They replace witnesses
answer: 0
explanation: The main value is compressing many stages of verified work into a final proof that is cheaper to check.

### Question 3
question: What is the key technical requirement behind recursion?
- The proof system must be able to express verification of earlier proofs inside a circuit or constraint system
- The verifier must reveal its randomness
- The proof must be longer than the computation
- The witness must be public
answer: 0
explanation: Recursion works because verifying one proof is itself encoded as another computation.

### Question 4
question: Which statement is most accurate?
- Recursion and aggregation are identical
- Recursion always removes every engineering tradeoff
- Recursion is about proof-verifying-proof structure, while aggregation is about combining many proofs
- Recursive proofs only matter for toy examples
answer: 2
explanation: The two ideas often work together, but they are not the same thing.

## Sources
- Sean Bowe, Jack Grigg, Daira Hopwood, Recursive Proof Composition without a Trusted Setup - https://eprint.iacr.org/2019/1021
- Ethereum.org, Zero-knowledge rollups - https://ethereum.org/developers/docs/scaling/zk-rollups/
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf

---
track: zk-proofs
chapter: Arithmetic Circuits
chapter_number: 2
lesson_slug: witness-generation
lesson_title: Witness generation
lesson_number: 2
duration: 18 min
badge: Quiz
---

# Intro
Once a computation has been turned into constraints, the prover still needs actual values that satisfy them. That collection of values is called the witness. In theory, that sounds straightforward. In practice, witness generation is where a circuit becomes real work: the system must fill in every hidden detail, not just the final answer. This lesson explains witness generation in plain language and shows why it matters so much in real zk systems.

## Main Content
## The witness is the filled-in answer sheet
Imagine a teacher hands out a math worksheet where every line has to be correct:

- line 1 depends on line 2
- line 2 depends on line 3
- the final grade depends on all of them

The constraint system is the blank worksheet. The witness is the fully filled-in sheet.

That means witness generation is the process of computing all the values needed to satisfy the constraints.

If the statement is:

"I know a secret input that makes this computation output 42,"

then the witness is not just the secret input. It is usually:

- the secret input
- every intermediate value the circuit needs
- helper values introduced during compilation

If Professor Paws claims his cat-door algorithm only opens for the right whisker pattern, the witness is not merely the hidden whisker scan. It may also include intermediate comparisons, flags, and arithmetic checks that prove the system evaluated correctly.

definition
label: Definition - Witness generation
Witness generation is the process of computing all private and intermediate values needed to produce a satisfying assignment for the circuit or constraint system.

## Why the final output is not enough
Many beginners think, "If I know the input and the output, why do I need anything else?" Because proof systems care about the path, not just the destination.

Suppose a cat treats app says:

- input: 5 fish treats and 2 chicken treats
- output: 17 happiness points

That output alone does not prove the app followed the intended formula. Maybe it used the right rule. Maybe it cheated and hardcoded `17`.

Witness generation forces the prover to show all the hidden arithmetic that connects input to output. The verifier does not learn those private values directly, but the proof system still relies on them internally.

## A tiny example
Take this computation:

code
label: Example program
u = x * y
v = u + 7
out = v * 2

If `x = 3` and `y = 4`, then witness generation computes:

code
label: Witness values
u = 12
v = 19
out = 38

A prover might start with the secret input values, but that is not enough. To satisfy the full constraint system, it also needs `u` and `v`. Those intermediate values are part of the witness.

This is like showing your work in school. A final answer can be lucky. A full chain of correct intermediate steps is much more convincing.

## Where witness generation happens
In most zk systems, witness generation happens before proof generation. The usual flow looks like this:

code
label: High-level flow
1. Take the program and the inputs
2. Compute all intermediate values
3. Assemble the full witness
4. Use that witness to build the proof

So witness generation is not the proof itself, but it is a critical step that feeds the prover.

If the witness is wrong, incomplete, or inconsistent, the prover cannot create a valid proof. In that sense, witness generation is where correctness gets grounded in actual data.

## Public inputs versus private witness
A clean way to think about it is:

- public inputs belong to the statement
- witness values are the hidden ingredients that make the statement true

For example, the public statement might be:

"This cat shelter budget balances to 1000 coins."

The witness might include:

- private donation amounts
- hidden discount calculations
- internal category subtotals

The verifier only needs the public claim. The prover needs the whole hidden bookkeeping sheet.

## Why witness generation can be expensive
In toy examples, witness generation feels easy. In real systems, it can be one of the most expensive parts of the pipeline.

Why?

- large circuits have many intermediate values
- bit decompositions create lots of helper variables
- range checks and lookup logic add extra hidden structure
- complex applications may need to compute hashes, signature checks, or virtual machine steps

If a proof represents thousands or millions of tiny operations, witness generation has to fill in the entire hidden trace of that computation.

Think of grooming a very fluffy cat before a photoshoot. The photo is the final proof. But before that, someone has to do all the brushing, detangling, and cleanup. Most of the work happened before the public-facing result.

note
In real zk engineering, witness generation often dominates runtime and memory. A proof system can look elegant on paper while still being hard to use in practice because witness construction is heavy.

## Witness bugs are logic bugs
One useful engineering mindset is this: witness generation is not bookkeeping around the circuit. It is part of the logic of the system.

If the witness generator:

- computes an intermediate value incorrectly
- skips a consistency rule
- encodes data in the wrong order
- mishandles corner cases

then the whole proving pipeline becomes unreliable.

This is why good zk tooling treats witness generation with the same seriousness as the circuit itself. The circuit says what must be true. The witness generator actually produces the values that claim it is true.

## The prover is not guessing
It can be tempting to imagine the prover "searching" for a witness. In some theoretical settings, witness finding is indeed the abstract challenge. But in most engineering settings, the prover already has the private input and simply computes the witness by running a deterministic procedure.

For example:

- a wallet knows the private transaction data
- a rollup prover knows the full execution trace
- a credential prover knows the hidden attributes

The real job is to transform that knowledge into the exact algebraic form expected by the circuit.

In cat terms: if Luna knows where she buried the toy mouse, she is not solving a mystery. She is just not telling you directly. Witness generation is the process of translating her private knowledge into a form the proof system can use.

## The mental model to keep
If constraint generation writes the exam, witness generation fills in the answers.

If R1CS is a spreadsheet template, witness generation fills every cell.

If the circuit is a cat obstacle course blueprint, witness generation records exactly which paw landed on which platform at each step.

That is why witness generation matters: without it, a proof system has structure but no concrete hidden assignment to prove about.

## Quiz

### Question 1
question: What is witness generation?
- The process of sending the proof to the verifier
- The process of computing all hidden values needed to satisfy the circuit
- The process of choosing cryptographic assumptions
- The process of removing intermediate values from computation
answer: 1
explanation: Witness generation computes the private and intermediate values that make the constraint system hold.

### Question 2
question: Why is the final output alone usually not enough?
- Because the verifier always wants to see the secret input
- Because the proof system needs the intermediate values that justify the computation
- Because outputs cannot be public
- Because proofs only work on addition
answer: 1
explanation: The system must show that each internal step could satisfy the constraints, not just that the last value looks plausible.

### Question 3
question: Which statement best describes the relationship between public inputs and the witness?
- They are always the same thing
- Public inputs are hidden and the witness is public
- Public inputs define the statement, while the witness contains hidden values that make it true
- The witness only contains verifier randomness
answer: 2
explanation: The statement is public, but the satisfying hidden assignment is the witness.

### Question 4
question: Why can witness generation be expensive in practice?
- Because it requires infinite precision arithmetic
- Because circuits may create many intermediate and helper values
- Because witnesses are always larger than proofs by a constant factor of exactly two
- Because the verifier computes the witness during checking
answer: 1
explanation: Real circuits often need many hidden variables for hashes, range checks, decompositions, and other internal logic.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Vitalik Buterin, Quadratic Arithmetic Programs: from Zero to Hero - https://vitalik.eth.limo/general/2016/12/10/qap.html

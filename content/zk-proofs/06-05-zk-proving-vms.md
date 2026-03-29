---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: zk-proving-vms
lesson_title: ZK proving VMs
lesson_number: 5
duration: 23 min
badge: Quiz
---

# Intro
Hand-written circuits are powerful, but they are also narrow and labor-intensive. ZK proving VMs try to change the developer experience by giving us something closer to a real machine model: write a program for a virtual machine, execute it, and produce a proof that the execution was correct. This lesson explains why that feels so different from classic circuit thinking.

## Main Content
## From circuits to machines
Traditional ZK workflows often start by compiling a specific computation into a circuit or constraint system.

That is fine for fixed relations, but it can become painful when you want general-purpose computation.

A zkVM changes the framing:

- define a virtual machine with an instruction set
- run a program on that machine
- prove the execution was faithful

definition
label: Definition - zkVM
A zero-knowledge virtual machine is a proving system that generates proofs of correct execution for programs expressed against a virtual machine model or instruction set.

The shift is subtle but huge. Instead of proving one custom hand-built circuit, you prove that a machine executed code correctly.

## Why this is attractive
zkVMs appeal to builders because they feel more like normal software engineering.

You often get:

- a familiar execution model
- a reusable proving backend
- less need to design every application as a bespoke circuit

That does not make them automatically cheaper. Often they are not. But they can be much more ergonomic.

It is like the difference between building a custom cat obstacle course for every single training routine and building one cat gym with a general set of rules that can host many different routines.

## What gets proved
At the deepest level, a zkVM still proves an execution trace.

The system must show things like:

- the program started from the claimed code image
- instructions executed according to the VM rules
- state transitions were correct
- the public output was the genuine result

So a zkVM is not escaping algebra. It is packaging algebra around a machine abstraction.

## A concrete example: RISC Zero
RISC Zero describes its system as a zero-knowledge verifiable general computing platform based on zk-STARKs and the RISC-V microarchitecture.

Its README gives a nice practical mental model:

- code is compiled into a method
- the guest executes inside the zkVM
- the guest writes public output to a journal
- a receipt is produced
- the verifier checks that receipt

The lovely part of that design is that the receipt becomes the proof-carrying object, while the journal becomes the official public output.

That is a very usable story for developers.

## Guest, host, journal, receipt
These terms are worth understanding because they make the zkVM workflow concrete.

In the RISC Zero model:

- the guest is the code running inside the virtual machine
- the host runs the proving process outside
- the journal is the append-only public output log
- the receipt is the proof object

This is much easier to picture than a giant unnamed witness vector.

If a cat computation is running inside a machine, the journal is the official note that says, "the answer is 7 tuna tokens," and the receipt is the cryptographic certificate that this note really came from correct execution.

## Why zkVMs still have tradeoffs
zkVMs are not free generality.

They often trade:

- more overhead than highly optimized custom circuits
- more generality and easier programmability
- different proving-time and memory behavior

They also need a strong execution model and proving stack under the hood, often involving traces, recursion, and serious low-level engineering.

So the right attitude is not "zkVMs replace everything." It is "zkVMs are a different design point."

## Cairo and other proving-machine approaches
Cairo is another important example of the proving-machine mindset. Instead of only thinking in terms of circuits, it gives developers a language and execution model built with STARK-friendly proving in mind.

This matters because broad adoption depends on programmability. A proof system with no developer path is like a brilliant cat feeder with no food slot.

The underlying cryptography matters, but so does the interface through which humans actually build.

note
When evaluating a zkVM, ask two separate questions: how nice is the programming model, and how expensive is the proving model? Those are related, but they are not the same metric.

## The mental model to keep
A zkVM is a machine-shaped proof interface.

You do not hand-assemble one proof relation for every task. You target a proving machine, run code inside it, and obtain a verifiable execution artifact.

Or, in cat terms:

- instead of building one special tunnel for one special cat trick
- you build a general cat simulator with rules, logs, and receipts
- then many different tricks can be proved on top of that machine

That is the promise of zk proving VMs.

## Quiz

### Question 1
question: What is a zkVM trying to provide?
- A machine model whose executions can be proved correct
- A proof system that never uses traces
- A replacement for public inputs
- A way to avoid cryptography entirely
answer: 0
explanation: A zkVM offers a general machine-like abstraction for proving execution.

### Question 2
question: Why do many builders find zkVMs attractive?
- They often feel closer to normal software development than writing bespoke circuits for every application
- They make proving free
- They eliminate all trusted assumptions
- They do not need witnesses
answer: 0
explanation: The appeal is largely about programmability and reusability.

### Question 3
question: In the RISC Zero model, what is the journal?
- The secret witness store
- The official public output log of the guest execution
- The proving key
- The trusted setup transcript
answer: 1
explanation: The journal is the public output committed by the proven execution.

### Question 4
question: What is a fair tradeoff statement about zkVMs?
- They automatically dominate custom circuits on every metric
- They trade some efficiency for more generality and developer ergonomics
- They avoid all algebra under the hood
- They only work for toy programs
answer: 1
explanation: zkVMs are a different design point, not a universal free lunch.

## Sources
- RISC Zero README - https://github.com/risc0/risc0
- RISC Zero zkVM crate documentation - https://docs.rs/risc0-zkvm/latest/risc0_zkvm/
- Eli Ben-Sasson et al., Cairo - a Turing-complete STARK-friendly CPU architecture for verifiable computation - https://eprint.iacr.org/2021/1063.pdf

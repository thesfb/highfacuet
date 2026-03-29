---
track: zk-proofs
chapter: STARKs
chapter_number: 4
lesson_slug: air-and-execution-traces
lesson_title: AIR & execution traces
lesson_number: 3
duration: 23 min
badge: Quiz
---

# Intro
AIR and execution traces are central to how many STARK systems describe computation. If R1CS feels like a pile of local equations, AIR feels more like a rulebook for a long table of steps. This lesson explains that table-based viewpoint in a way that is easier to picture, especially if circuit language has started to feel cramped.

## Main Content
## Start with the trace
An execution trace is a record of a computation over time. Each row usually represents one step, and each column represents some piece of state.

For example, in a simple machine, columns might store:

- current register values
- memory pointers
- flags
- outputs

If you stack all steps together, you get a big table.

That table is the execution trace.

Think of a cat robot walking across a room. A trace might record, at each step:

- left paw position
- right paw position
- tail sensor state
- current target tile

One row is not enough. The whole run matters.

definition
label: Definition - Execution trace
An execution trace is a tabular record of the states of a computation across many steps.

## What AIR does
AIR stands for Algebraic Intermediate Representation. It is the rule system that tells us whether an execution trace is valid.

Instead of describing the computation as isolated gates, AIR describes relationships that should hold:

- within each row
- between neighboring rows
- at the beginning of the trace
- at the end of the trace

definition
label: Definition - AIR
AIR is an algebraic framework for specifying which execution traces are valid by expressing local transition and boundary constraints over trace columns.

This is why AIR feels very natural for machines, state transitions, and long-running processes.

## Boundary constraints and transition constraints
Two categories matter a lot.

Boundary constraints say what must hold at specific places, usually the start or end.

Examples:

- the first row starts with the public input
- the last row contains the claimed output

Transition constraints say how one row is allowed to evolve into the next.

Examples:

- next register equals current register plus one
- next flag equals current flag xor some bit
- next state must match the machine rule

If the trace is a cat obstacle log, boundary constraints are things like:

- the cat starts at the floor
- the cat ends on the top platform

Transition constraints are things like:

- from each row to the next, the cat can only move one platform up, not teleport through the ceiling

## Why this is powerful
AIR is powerful because many computations naturally unfold as time-based state transitions. Instead of flattening everything into generic gates, AIR lets us describe the process in a way that matches how the computation actually behaves.

This is especially helpful for virtual machines and long traces, where the "next state from current state" mindset is very natural.

If you have ever kept a ledger, a lab notebook, or a play-by-play sports log, you already understand the emotional shape of a trace. AIR is the algebraic version of saying:

"Every row must follow sensibly from the previous row."

## From trace table to algebra
STARK systems do not prove a raw spreadsheet directly. They turn trace columns into algebraic objects, often by extending them into polynomials over a domain. Then they check that the trace obeys the AIR constraints in polynomial form.

So AIR is the specification layer:

- what the valid trace should look like
- what transition rules must hold
- what boundary values are fixed

Later STARK machinery proves those conditions efficiently.

## Why traces can be huge
A trace may have an enormous number of rows. That is okay. STARKs were built with that scale in mind.

In fact, large traces are where the AIR view shines. If a computation has millions of steps, it is often more natural to represent it as:

- one big table of evolving state
- one compact family of local rules

rather than as a giant disconnected pile of gate constraints.

Imagine recording every move made by a mischievous cat in a museum overnight. The log might be huge. But the rules are local and simple:

- the cat can only move to adjacent areas
- alarms update according to sensor rules
- snack count changes only when a snack is taken

AIR is great at that style of specification.

note
AIR is not "less mathematical" than R1CS. It is just a different way of organizing the mathematics around state evolution instead of gate-by-gate arithmetic circuits.

## The mental model to keep
Here is the picture to remember:

- the trace is the story of the computation over time
- AIR is the rulebook for what makes that story valid
- boundary constraints pin down the start and end
- transition constraints govern row-to-row movement

Or, in cat language:

- the trace is the frame-by-frame security camera log of Muffin's midnight mission
- AIR is the rulebook that says each frame must logically follow from the last one

That is why AIR and execution traces matter so much in STARK systems.

## Quiz

### Question 1
question: What is an execution trace?
- A proof object with no internal structure
- A table recording the state of a computation across many steps
- A list of verifier challenges only
- A setup ceremony transcript
answer: 1
explanation: An execution trace is the step-by-step table of computational state.

### Question 2
question: What does AIR specify?
- Which traces are valid by giving algebraic boundary and transition rules
- Only how to generate trusted setup
- Only the final proof size
- How to remove all intermediate computation
answer: 0
explanation: AIR defines the algebraic rules that a valid execution trace must satisfy.

### Question 3
question: What is a transition constraint?
- A rule about how one row of the trace relates to the next
- A rule that hides the public input
- A rule for commitment hashing only
- A rule that replaces the witness
answer: 0
explanation: Transition constraints capture allowed state evolution from one step to the next.

### Question 4
question: Why is AIR a natural fit for VM-style computations?
- Because those computations often have long step-by-step state evolution
- Because AIR avoids all polynomials
- Because it only works for tiny examples
- Because it makes proofs interactive
answer: 0
explanation: AIR matches the natural row-by-row evolution of machine execution.

## Sources
- Eli Ben-Sasson et al., Scalable, transparent, and post-quantum secure computational integrity - https://eprint.iacr.org/2018/046
- StarkWare STARK explainer - https://starkware.co/stark/
- Cairo whitepaper - https://eprint.iacr.org/2021/1063.pdf

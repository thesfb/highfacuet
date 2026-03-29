---
track: zk-proofs
chapter: Recursion & Composition
chapter_number: 6
lesson_slug: folding-schemes
lesson_title: Folding schemes
lesson_number: 3
duration: 28 min
badge: Quiz
---

# Intro
Folding schemes are one of the big modern ideas in recursive proving. The name can sound abstract, but the intuition is friendly: instead of proving many instances separately, we repeatedly combine them into one smaller algebraic object that preserves what still needs to be checked. Folding is less about "making things disappear" and more about carrying many obligations inside one compressed state.

## Main Content
## Why people got excited about folding
Older recursive proof constructions were powerful, but often heavy. They could require expensive verifier circuits, careful curve choices, or recursion overhead that made engineering harder.

Folding schemes changed the conversation by offering a simpler path for incrementally verifiable computation and recursion.

The high-level idea is:

- start with two instances that need to be checked
- combine them into one related instance
- preserve correctness in a way that lets the process repeat

definition
label: Definition - Folding scheme
A folding scheme is a method that reduces checking multiple instances of a relation to checking a single combined instance, while preserving the information needed for later verification.

That is why the word "folding" fits. You are not throwing information away. You are compressing it into a smaller carried form.

## The easiest intuition
Imagine two homework sheets that each contain unresolved obligations. Instead of carrying both around forever, you fold them into one new sheet that summarizes what still needs to be justified. If the folded sheet is valid, it stands in for both earlier sheets.

In cat terms, imagine two separate cat obstacle reports. A folding step creates one summary report that still captures whether both earlier runs were valid. Later you can fold that summary together with another report again.

This repeated compression is what makes folding so useful for long-running computations.

## Why "relaxed" instances often appear
Many folding-based systems do not fold ordinary constraint instances directly in the most naive way. Instead, they use a relaxed relation.

Why? Because when you combine two instances algebraically, the result often needs a little extra flexibility so that the folded object still lands inside a meaningful relation.

You do not need all the formulas here. The conceptual point is:

- the folded object may not look exactly like a plain original instance
- so the protocol defines a slightly broader kind of instance that is still checkable

This is common in Nova-style work. The relaxation is not a hack. It is what makes repeated folding possible.

## Folding versus proving
It helps to separate two roles:

- folding reduces many obligations to one
- a proof system later certifies the validity of the folded state

That means folding is not automatically the entire proof system. It is a core primitive used inside larger recursive constructions.

This is why the Nova paper describes folding as a weaker and simpler primitive that can be used to realize IVC.

## Why folding is so attractive for IVC
Incrementally verifiable computation wants a prover to keep extending a long computation one step at a time while maintaining a compact proof state.

Folding is perfect for that because each new step can be merged into the carried state rather than forcing the prover to start over.

The intuition is almost like financial bookkeeping:

- old obligations are not re-checked from scratch every time
- they are rolled forward into a fresh summary that still remains accountable

That is why folding feels more "streaming-friendly" than many older recursive approaches.

## Nova and HyperNova
Nova made folding schemes famous in the modern recursion discussion by showing an efficient path to recursive arguments and IVC without relying on SNARKs in the old style.

Later systems such as HyperNova generalized the picture further, handling more customizable constraint systems and improving flexibility for things like machine execution traces.

The important conceptual lesson is not to memorize every protocol name. It is to notice the shift:

- recursion is no longer only "proof verifies proof"
- it can also be organized around repeatedly folding algebraic state

note
When people say folding is "simpler" than earlier recursive approaches, they usually mean the primitive itself is cleaner and often cheaper to realize, not that the full engineering stack becomes trivial.

## The mental model to keep
Folding is like compressing a pile of unfinished receipts into one running tab that still honestly represents everything owed.

Or, in cat form:

- two cat training logs become one folded training log
- that folded log can later absorb another one
- eventually one compact object stands in for a long history of runs

That is the core beauty of folding schemes: repeated compression without losing accountability.

## Quiz

### Question 1
question: What is the main idea behind a folding scheme?
- Reveal the witness in smaller pieces
- Reduce multiple instances of a relation to one combined instance
- Replace algebra with hashing entirely
- Make proofs interactive again
answer: 1
explanation: Folding compresses several obligations into one carried algebraic state.

### Question 2
question: Why do folding-based systems often use relaxed instances?
- Because the verifier is lazy
- Because the combined folded object often needs a slightly broader relation to remain meaningful and checkable
- Because relaxed instances reveal more data
- Because they remove the need for soundness
answer: 1
explanation: Relaxation is what allows repeated algebraic combination without breaking the relation structure.

### Question 3
question: Why is folding especially useful for incrementally verifiable computation?
- It lets the system keep rolling forward proof state instead of starting from scratch each step
- It removes all prover work
- It guarantees constant proof size in every possible system
- It works only for trusted-setup SNARKs
answer: 0
explanation: Folding is attractive because it naturally supports step-by-step carried verification state.

### Question 4
question: Which statement is most accurate?
- Folding is always the full proof system by itself
- Folding is a useful primitive inside larger recursive and IVC constructions
- Folding means the verifier learns all intermediate states
- Folding and commitment schemes are the same thing
answer: 1
explanation: Folding is a powerful building block, but usually part of a larger proving design.

## Sources
- Abhiram Kothapalli, Srinath Setty, Ioanna Tzialla, Nova: Recursive Zero-Knowledge Arguments from Folding Schemes - https://eprint.iacr.org/2021/370
- Abhiram Kothapalli, Srinath Setty, HyperNova: Recursive Arguments for Customizable Constraint Systems - https://eprint.iacr.org/2023/573
- Microsoft Nova repository README - https://github.com/microsoft/Nova

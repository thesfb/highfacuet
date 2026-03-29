---
track: zk-proofs
chapter: Arithmetic Circuits
chapter_number: 2
lesson_slug: polynomial-commitments
lesson_title: Polynomial commitments
lesson_number: 4
duration: 21 min
badge: Quiz
---

# Intro
Polynomial commitments sound abstract, but the basic goal is very human: commit to a mathematical object now, reveal only tiny pieces of it later, and still let others trust you are being consistent. They are one of the core tools behind modern zk systems. This lesson explains them in a friendly way, with enough rigor to keep the ideas honest.

## Main Content
## What problem are polynomial commitments solving?
Suppose I have a polynomial, maybe a very important one, and I want to convince you of facts about it later.

For example, I may want to say:

- "Here is my polynomial, but I will not show you the whole thing yet."
- "At point `x = 7`, it evaluates to `13`."
- "Trust that I am talking about the same polynomial every time."

That is exactly the role of a polynomial commitment.

definition
label: Definition - Polynomial commitment
A polynomial commitment scheme lets a prover commit to a polynomial and later open or prove claims about its evaluations, while binding the prover to that same polynomial.

The keyword here is binding. Once committed, the prover should not be able to switch to a different polynomial when convenient.

## A simple analogy
Imagine you write a long answer key for a cat trivia tournament and seal it in a lockbox. Later, a judge asks:

"What is the answer to question 17?"

You open just enough evidence to show the answer for question 17 is "tabby" without letting the judge read the entire answer key. More importantly, you should not be able to give one answer to judge A and a different answer to judge B while pretending both came from the same sealed box.

That is the intuition:

- commit now
- answer spot checks later
- stay tied to one original object

The real cryptographic object is a polynomial, not a trivia sheet, but the workflow is similar.

## Why zk systems need this
Many proof systems reduce correctness to polynomial identities. Once you have polynomials representing witness information, constraints, or execution traces, you need a way to:

- bind the prover to those polynomials
- query specific evaluations
- prove consistency efficiently

Without a commitment scheme, the prover could adapt answers on the fly. That would ruin soundness.

So polynomial commitments are one of the pieces that let a verifier ask compact algebraic questions instead of reading the whole polynomial description.

## Commitment, opening, verification
A polynomial commitment scheme usually has three core actions:

code
label: High-level workflow
1. Commit to polynomial f(X)
2. Open a claim like f(a) = b
3. Verify that the opening matches the commitment

Some schemes also support batch openings, where many points or many polynomials are checked together.

The big win is that the verifier does not need to receive the whole polynomial explicitly. It gets a small commitment and a short proof of evaluation.

## What "opening at a point" means
If the prover claims:

code
label: Evaluation claim
f(a) = b

then the verifier wants evidence that this is true for the committed polynomial, not just for some new polynomial invented after the fact.

Mathematically, the claim means `(X - a)` divides `f(X) - b`. Many commitment schemes exploit this fact.

That is a neat algebraic trick:

- if `f(a) = b`, then plugging in `a` makes `f(X) - b` vanish
- vanishing at `a` means `(X - a)` is a factor

So evaluation proofs often reduce to showing that factor relation in a committed way.

## KZG versus other styles
You do not need to master every commitment scheme yet, but it helps to know that different systems make different tradeoffs.

KZG commitments:

- very short proofs
- efficient verification
- often rely on pairings
- typically need trusted setup

FRI-based or Merkle-based approaches:

- usually larger proofs
- rely more on hashing than pairings
- often transparent, meaning no trusted setup

So when people compare SNARKs and STARKs, a lot of the difference is really about the underlying commitment and proof machinery.

note
Polynomial commitments are a tool, not a whole proof system. A SNARK or STARK uses them as one component inside a larger design.

## Why consistency matters
Suppose a prover committed to one polynomial for a cat-feeding schedule:

- breakfast score
- lunch score
- dinner score

If the prover could later answer breakfast queries using one schedule and dinner queries using another, the verifier would be fooled by inconsistent local answers.

Polynomial commitments prevent that kind of shape-shifting. They force all later openings to refer back to one committed object.

This is the same reason we care about commitment schemes in general. They create a stable target for later verification.

## The mental model to keep
If QAP or PLONK creates algebraic objects that represent the computation, polynomial commitments are how the system "pins those objects down" so the verifier can inspect them in small ways.

Think of them as a cryptographic bookmark system for a hidden math document.

You do not hand over the whole book. Instead:

- you register one specific book
- later you prove what appears on page 42
- the verifier trusts page 42 really came from that same book

Or, in cat terms:

- you commit to the official nap schedule for Sir Whiskerton
- later you prove that at 3 pm the schedule says "window sill"
- you cannot suddenly swap in a different schedule just because the verifier asked an awkward question

That is why polynomial commitments matter.

## Quiz

### Question 1
question: What does a polynomial commitment scheme let a prover do?
- Hide the existence of the polynomial forever
- Commit to a polynomial and later prove claims about its evaluations
- Replace all field arithmetic with Boolean logic
- Remove the need for soundness
answer: 1
explanation: The point is to bind the prover to one polynomial and later support verifiable evaluation claims.

### Question 2
question: Why are polynomial commitments useful in zk systems?
- They let the verifier ignore the computation entirely
- They help bind the prover to algebraic objects while allowing compact checks
- They are only used to compress images
- They turn every proof into an interactive protocol
answer: 1
explanation: Zk systems often need to query committed polynomials without revealing or sending them in full.

### Question 3
question: What does it mean to open a commitment at a point `a`?
- To reveal the verifier secret key
- To prove the committed polynomial evaluates to a claimed value at `a`
- To re-run the full computation
- To interpolate a new polynomial after commitment
answer: 1
explanation: An opening shows that the committed polynomial has the claimed value at a specific point.

### Question 4
question: Which statement is generally true?
- KZG-style commitments often offer short proofs but may rely on trusted setup
- Polynomial commitments make commitments unnecessary
- Transparent schemes always have the smallest proofs
- Polynomial commitments are only used in STARKs and never in SNARKs
answer: 0
explanation: KZG is known for short proofs and strong efficiency, but it usually depends on setup assumptions.

## Sources
- Aniket Kate, Gregory M. Zaverucha, Ian Goldberg, Constant-Size Commitments to Polynomials and Their Applications - https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf

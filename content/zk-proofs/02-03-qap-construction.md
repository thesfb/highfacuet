---
track: zk-proofs
chapter: Arithmetic Circuits
chapter_number: 2
lesson_slug: qap-construction
lesson_title: QAP construction
lesson_number: 3
duration: 24 min
badge: Quiz
---

# Intro
QAP construction is where many classic SNARK explanations suddenly jump from "lists of constraints" into "polynomials everywhere." That jump can feel brutal if nobody explains why it happens. This lesson focuses on intuition first. A QAP is basically a way of compressing many separate R1CS checks into one algebraic object, so the proof system can reason about the whole computation more elegantly.

## Main Content
## Why move from constraints to polynomials
R1CS gives us lots of local checks. That is already useful. But a SNARK wants a more algebra-friendly way to talk about all those checks at once.

This is where QAP, or Quadratic Arithmetic Program, enters the story.

Instead of saying:

- constraint 1 is satisfied
- constraint 2 is satisfied
- constraint 3 is satisfied
- and so on

we build polynomials whose behavior at chosen points captures those constraints. Then one divisibility condition can express "all constraints are satisfied."

That is the magic move.

Think of a cat show scorecard. Instead of carrying around 200 separate judge slips, imagine turning all the results into one carefully structured report. If that report has the right form, it proves all 200 small checks lined up correctly.

definition
label: Definition - QAP
A Quadratic Arithmetic Program is a polynomial encoding of an R1CS instance in which constraint satisfaction is turned into a polynomial identity or divisibility condition.

## The key trick: encode rows as points
Suppose the R1CS system has many constraints, one per row. A QAP chooses a distinct field point for each row. Then it builds polynomials that "remember" the coefficients attached to each variable at each row.

Very loosely:

- one family of polynomials represents the left linear forms
- one family represents the right linear forms
- one family represents the output linear forms

At each special row point, the polynomial values reproduce the original R1CS coefficients for that row.

This is like assigning every checkpoint in a cat agility contest a number line position:

- jump station at point 1
- tunnel station at point 2
- bell-touch station at point 3

Then you build smooth curves that pass through the score values required at those stations.

## From coefficient tables to polynomials
In R1CS, every variable has coefficients in many constraints. You can think of that as a table:

- variable 1 has coefficient here, here, and here
- variable 2 has coefficient there, there, and there

QAP turns each column of that table into a polynomial by interpolation.

If you have seen graphing before, interpolation is just the process of finding a polynomial that matches chosen values at chosen points.

So rather than storing a messy table of coefficients, we build polynomials `A_j(X)`, `B_j(X)`, and `C_j(X)` for each variable `j`.

Then, once a witness gives values `z_j`, we combine them:

code
label: Combined polynomials
A(X) = sum_j z_j * A_j(X)
B(X) = sum_j z_j * B_j(X)
C(X) = sum_j z_j * C_j(X)

These new polynomials encode what the left, right, and output sides of each constraint look like across all rows.

## What satisfaction means in QAP form
For the witness to satisfy every R1CS constraint, we want:

code
label: Constraint satisfaction idea
A(r_i) * B(r_i) = C(r_i)

for every constraint point `r_i`.

That means the polynomial:

code
label: Difference polynomial
P(X) = A(X) * B(X) - C(X)

must vanish at every row point.

And when a polynomial vanishes at a set of chosen points, that means it is divisible by the polynomial whose roots are exactly those points.

That root polynomial is often called the target polynomial:

code
label: Target polynomial
T(X) = product_i (X - r_i)

So the big condition becomes:

code
label: QAP divisibility condition
P(X) = H(X) * T(X)

for some polynomial `H(X)`.

This single statement replaces a long list of row-by-row constraint checks.

## Why divisibility captures "all rows pass"
This is the heart of QAP intuition.

If a polynomial equals zero at every constraint point, then all local checks hold. Divisibility by `T(X)` is just the clean algebraic way to say that.

A friendly analogy:

Imagine every failed checkpoint in a cat obstacle course would leave a scratch mark on the floor at that station. If, after the full run, there are no scratch marks at any checkpoint, then the performance passed every local test. In QAP language, "no scratch marks at any checkpoint" becomes "the difference polynomial vanishes at all selected points."

## What the quotient polynomial does
The polynomial `H(X)` is the quotient when dividing `P(X)` by `T(X)`.

You do not need to think of it as mystical. It is just evidence that `P(X)` truly contains `T(X)` as a factor.

If `P(X)` is not divisible by `T(X)`, then some constraint point failed. If it is divisible, then the witness aligns with every encoded constraint point.

In simpler words:

- `T(X)` defines where the rules live
- `P(X)` measures whether the witness breaks any rules
- `H(X)` exists cleanly only when the full set of rules is satisfied

## Why this helps SNARKs
SNARKs love QAPs because polynomial relationships can be checked compactly using cryptographic commitments and pairing-based machinery.

Instead of verifying a long list of circuit equations directly, the verifier can check a much smaller set of algebraic relations involving committed polynomial evaluations.

That does not remove the prover's work. The prover still has to build the witness and construct the relevant objects. But it gives the proof system a much cleaner interface.

Think of it like compressing a thick folder of paperwork into a stamped certificate that says, "all required rows were checked and balanced." The certificate is short because the heavy lifting happened earlier.

note
QAPs are historically central to pairing-based SNARKs such as Groth16. Many modern systems use different arithmetizations, but QAP remains one of the clearest bridges from R1CS to succinct proofs.

## The mental model to keep
Do not memorize QAP as a wall of symbols. Keep this picture instead:

- R1CS gives you many rows of local checks
- QAP assigns each row to a field point
- interpolation turns row tables into polynomials
- one divisibility statement says all rows passed together

Or, in cat language:

- each checkpoint in the course has a rule
- each rule gets pinned to a location
- a single smooth report captures all checkpoints
- if the report has the right factor, the whole run was valid

That is the real point of QAP construction.

## Quiz

### Question 1
question: Why do classic SNARK constructions move from R1CS to QAP?
- To remove the need for witnesses
- To express many local constraint checks using polynomial relations
- To make proofs interactive again
- To replace arithmetic with hashing only
answer: 1
explanation: QAP encodes many row-by-row checks into polynomial identities that SNARK machinery can handle efficiently.

### Question 2
question: What does the target polynomial `T(X)` represent?
- The verifier's public key
- The final proof size
- The polynomial whose roots are the chosen constraint points
- The witness itself
answer: 2
explanation: `T(X)` vanishes exactly at the points that correspond to the original constraints.

### Question 3
question: What does it mean if `P(X) = A(X) * B(X) - C(X)` is divisible by `T(X)`?
- The witness satisfies all encoded constraints
- The proof is zero-knowledge
- The verifier learns the secret input
- The circuit has no multiplication gates
answer: 0
explanation: Divisibility means the difference polynomial vanishes at every constraint point, so every encoded check passes.

### Question 4
question: What role does interpolation play in QAP construction?
- It hides the witness from the prover
- It turns coefficient tables across constraint rows into polynomials
- It removes the need for field arithmetic
- It turns every proof into a STARK
answer: 1
explanation: Interpolation is how row-based coefficient data becomes the polynomials used in the QAP.

## Sources
- Vitalik Buterin, Quadratic Arithmetic Programs: from Zero to Hero - https://vitalik.eth.limo/general/2016/12/10/qap.html
- Bryan Parno et al., Pinocchio: Nearly Practical Verifiable Computation - https://eprint.iacr.org/2013/279.pdf
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf

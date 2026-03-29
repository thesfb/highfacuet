---
track: zk-proofs
chapter: Arithmetic Circuits
chapter_number: 2
lesson_slug: r1cs-constraints
lesson_title: R1CS constraints
lesson_number: 1
duration: 22 min
badge: Quiz
---

# Intro
R1CS is the first place where many learners feel zk systems become "too mathematical." The trick is to stop thinking of it as scary notation and start thinking of it as a very strict checklist. If a computation is a recipe, then R1CS is the version where every tiny step is written in a standard form so a proof system can inspect it. In this lesson, we will turn that abstract idea into something you can actually picture, including a few cat-powered examples.

## Main Content
## The big idea
Suppose you tell me, "I know the secret numbers that make this program run correctly." A proof system cannot work with vague claims like that. It needs the computation rewritten as a collection of small local rules.

R1CS stands for Rank-1 Constraint System. That name sounds formal, but the practical idea is simple:

- put all the useful values of the computation into one long list
- write a lot of tiny equations about that list
- accept only if every equation is true

Think of a cat cafe that tracks snack orders. The manager does not verify the entire day in one giant step. Instead, they check small relations:

- did table 3 order 2 tuna rolls and 1 milk bowl?
- is the total for that table equal to the listed subtotal?
- do all subtotals add up to the daily total?

Each tiny check is local. If all local checks pass, the global story probably makes sense. R1CS does the same thing for computation.

definition
label: Definition - R1CS constraint
An R1CS constraint says that one linear combination of variables, multiplied by another linear combination of variables, must equal a third linear combination of variables.

That sounds dense, so let us unpack it slowly.

## One long list of values
Before writing constraints, we gather the important values into one vector, often called `z`. This list usually includes:

- a leading constant `1`
- public inputs
- private inputs
- intermediate values produced along the way

Why intermediate values? Because the proof system does not just care about the final answer. It wants evidence that the computation was done step by step correctly.

Imagine a cat climbing tower competition. If someone claims, "Miso reached the top in 4 jumps," we do not only care about the final platform. We also care about the intermediate ledges. Did Miso actually go from ledge 1 to ledge 2 to ledge 3 to ledge 4? R1CS keeps track of those hidden in-between values.

code
label: Assignment vector
z = (1, public_inputs, private_inputs, intermediate_values)

The leading `1` may look strange at first. It is there so constants can be handled cleanly inside equations. It is basically a built-in "constant slot."

## The standard shape
Every constraint in R1CS has the same shape:

code
label: Standard R1CS shape
<A_i, z> * <B_i, z> = <C_i, z>

Here is the human version of that sentence:

- pick some values from the big list and add them up with coefficients
- do that again for a second expression
- multiply those two expressions
- require the result to match a third expression

The proof system likes this shape because it is regular. It does not want a thousand different equation styles. It wants one template repeated many times.

This is like a school worksheet where every line has the same pattern:

left box * middle box = right box

Different numbers go in, but the structure stays fixed.

## Why addition still fits
At first glance, R1CS looks like it only understands multiplication, because every constraint has a product in it. But addition still fits very naturally.

Suppose we want to say:

code
label: Addition relation
d = a + b

R1CS rewrites that as:

code
label: Addition in R1CS
(a + b) * 1 = d

That is why the constant `1` in the vector is so helpful. It lets us say, "this side is really just an addition, but we are writing it in the standard multiplication-shaped template."

Now imagine a cat treat rule:

"Treats after lunch = fish treats + chicken treats"

R1CS does not mind that this is addition. It just writes:

"(fish treats + chicken treats) times 1 = total treats"

Same fact, standard format.

## A worked example
Let us encode a tiny computation:

code
label: Tiny computation
u = x * y
v = u + 3
out = v * z_in

We can place the values into a vector like this:

code
label: Example vector
z = (1, x, y, z_in, u, v, out)

Now we write one constraint per step.

First:

code
label: Constraint 1
x * y = u

Second:

code
label: Constraint 2
(u + 3) * 1 = v

Third:

code
label: Constraint 3
v * z_in = out

That is the whole spirit of R1CS. A larger program just creates a much larger list and many more local equations.

## What the witness really is
In zk systems, learners often hear "the witness is the secret input." That is only partly true.

In an R1CS view, the witness usually includes every private value needed to make the system satisfy all constraints. That means:

- secret inputs
- intermediate values
- helper values introduced during compilation

If our cat cafe app privately computes a discount code, the witness may include not just the secret coupon but also the hidden subtotal and discount amount that make the equations balance.

definition
label: Definition - Witness in R1CS
The witness is the collection of nonpublic values that, together with the public inputs, make every constraint in the system hold.

This matters because the verifier checks existence of a full satisfying assignment, not just a single secret number.

## Why R1CS became so popular
R1CS became a standard format because it is a sweet spot:

- expressive enough to encode lots of computations
- structured enough for algebraic proof systems
- regular enough for compilers

It is not the only way to describe computation, and newer systems often use different formats. But historically, R1CS was one of the cleanest bridges from "program logic" to "algebra a SNARK can prove."

Think of it as converting messy handwritten notes into a spreadsheet. The spreadsheet may feel less natural to a human, but it is much easier for automated tools to process.

note
R1CS is not the proof itself. It is the cleaned-up algebraic description of the computation that later proof systems will operate on.

## The mental model to keep
If the notation starts to feel heavy, come back to this picture:

- the computation becomes a giant table of values
- each row of that table must obey a local rule
- a proof later shows that all rows obey all rules without revealing hidden values

Or, in cat terms:

- list every snack, jump, and score for Captain Whiskers
- check each step with a tiny equation
- prove the full performance was valid without exposing the private strategy notes

That is R1CS.

## Quiz

### Question 1
question: What is the main purpose of R1CS?
- To encrypt the witness
- To rewrite computation into many small algebraic checks
- To remove all intermediate values from a program
- To make every proof interactive
answer: 1
explanation: R1CS turns computation into a structured list of local constraints that a proof system can reason about.

### Question 2
question: Why is there usually a leading `1` in the assignment vector?
- To mark the end of the witness
- To make constant terms easy to include in linear expressions
- To reveal the secret input to the verifier
- To count the number of constraints
answer: 1
explanation: The constant slot lets equations include fixed numbers cleanly, such as `+ 3`.

### Question 3
question: How can an addition like `d = a + b` fit into R1CS?
- It cannot; R1CS only handles multiplication
- By rewriting it as `(a + b) * 1 = d`
- By hashing `a` and `b`
- By turning `d` into a verifier challenge
answer: 1
explanation: R1CS uses the constant `1` to express addition inside its standard multiplicative form.

### Question 4
question: Which values usually belong to the witness?
- Only the final output
- Only public inputs
- Secret and intermediate values needed to satisfy the constraints
- Only the coefficient vectors
answer: 2
explanation: The witness is the full nonpublic assignment that makes the constraint system hold.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Bryan Parno et al., Pinocchio: Nearly Practical Verifiable Computation - https://eprint.iacr.org/2013/279.pdf
- Rosario Gennaro et al., Quadratic Span Programs and Succinct NIZKs without PCPs - https://eprint.iacr.org/2012/215.pdf

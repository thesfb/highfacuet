---
track: zk-proofs
chapter: Protocols & Building Blocks
chapter_number: 5
lesson_slug: commitments-in-zk
lesson_title: Commitments in ZK
lesson_number: 3
duration: 18 min
badge: Quiz
---

# Intro
Commitments show up everywhere in zero-knowledge because they solve a very basic human problem: how do you fix a value now, keep it hidden for the moment, and reveal or reason about it later without being allowed to change it? In other words, how do you say "I have already chosen my answer" without showing the answer yet? That little move turns out to be one of the most useful moves in modern cryptography.

## Main Content
## The sealed-envelope idea
The classic analogy for a commitment is a sealed envelope.

You write a value on paper, seal it, and hand the envelope over. Later you open it.

Before opening:

- the receiver should not learn the value

After opening:

- you should not be able to pretend the value was something else

That is the whole point of a commitment scheme.

definition
label: Definition - Commitment scheme
A commitment scheme lets a sender commit to a value in a way that hides the value at first, but later binds the sender to that same value when it is opened.

The two key words are:

- hiding
- binding

## Hiding and binding
Hiding means the commitment does not reveal the underlying message.

Binding means the sender cannot later open the same commitment to two different messages.

Different schemes achieve these properties in different ways and with different strengths. Some are perfectly hiding and only computationally binding. Others make the opposite tradeoff.

This tradeoff matters because zero-knowledge systems often use commitments as temporary locked containers for witness-related values.

If the container leaks, privacy suffers.
If the container is easy to reopen dishonestly, soundness suffers.

## Why zero-knowledge systems love commitments
Commitments are useful in ZK because they let the prover place values "on the table" without revealing them yet.

That helps in many situations:

- the prover commits before seeing a challenge
- the verifier later checks consistency
- the protocol reasons about hidden values without exposing them directly

This is especially natural in sigma-style protocols. The prover often needs to commit first and only later answer a random challenge.

The commitment says: "I already chose something real. I am not inventing it after your question."

If a cat says it already picked which hidden cup contains the tuna treat, a commitment is the equivalent of locking that choice in a tamper-proof treat jar before the verifier asks any follow-up questions.

## Pedersen commitments
One especially important example is the Pedersen commitment.

At a high level, it commits to a value `m` using fresh randomness `r`.

code
label: Pedersen form
C = g^m * h^r

The important thing is not memorizing the exact group notation. The important thing is understanding the properties:

- the random `r` hides `m`
- the group structure gives useful algebra
- commitments can be added and manipulated in ways that support later proofs

Pedersen commitments are especially loved because they are homomorphic. Roughly speaking, commitments to values can be combined into commitments to sums.

That is extremely useful in proof systems that need to reason about arithmetic relations while keeping underlying values hidden.

## Why homomorphism matters
Suppose you want to prove that one hidden number plus another hidden number equals a third hidden number.

If your commitments support the right algebraic structure, you can often prove this relation without opening the numbers themselves.

This is one of the reasons commitments are not just sealed boxes. They are *structured* sealed boxes.

That makes them more like labeled containers in a laboratory than random locked safes. You can still perform carefully designed checks about what is inside.

In cat terms, you may have three opaque food bowls. You cannot see the exact fish-count in each bowl, but the bowls are marked in a way that still lets you prove the first two together contain the same total fish as the third.

## Commitments versus encryption
It is easy to confuse commitments with encryption, but they solve different problems.

Encryption is mainly about confidentiality from unauthorized readers.

Commitments are about hiding now and fixing the value for later opening or proof.

A commitment usually is not meant to be "decrypted." It is meant to be opened by revealing the original value and randomness, or used inside later proofs.

## Why commitments matter beyond toy protocols
Commitments appear in:

- sigma protocols
- range proofs
- polynomial commitment systems
- anonymous credentials
- confidential transactions
- many SNARK and STARK subroutines

That is why it is worth getting the intuition right early. Commitments are not side characters. They are one of the standard locking mechanisms of the whole ZK world.

note
When you see a prover commit before a challenge, read it as a fairness device. It prevents the prover from changing the story after learning what it will be asked.

## The mental model to keep
A commitment is a cryptographic "I picked already."

It says:

"I am not showing you the value yet, but I am also not allowed to change it later."

Or, in cat form:

"I have already chosen which sock contains the catnip mouse. You do not get to look yet, but I do not get to swap the sock after your question."

That simple locked-choice idea is why commitments are all over zero-knowledge.

## Quiz

### Question 1
question: What are the two main security properties of a commitment scheme?
- Speed and compression
- Hiding and binding
- Interactivity and recursion
- Randomness and transparency
answer: 1
explanation: Commitments should hide the message at first and bind the sender to it later.

### Question 2
question: Why are commitments useful in zero-knowledge protocols?
- They let the prover lock in values before later checks without revealing them immediately
- They eliminate the need for witnesses
- They are the same thing as encryption
- They make all proofs non-interactive
answer: 0
explanation: Commitments are often used so the prover must choose values before seeing the verifier's challenge.

### Question 3
question: What is a key advantage of Pedersen commitments?
- They never use randomness
- They are naturally homomorphic, which helps prove arithmetic relations on hidden values
- They reveal the committed value to the verifier
- They only work in trusted-setup systems
answer: 1
explanation: Pedersen commitments support useful algebraic operations while keeping values hidden.

### Question 4
question: How is a commitment different from encryption?
- Encryption is mainly for later decryption, while commitments are mainly for hidden-yet-fixed values
- There is no difference
- Commitments always reveal more than encryption
- Encryption cannot use randomness
answer: 0
explanation: A commitment is about hiding now while binding for later, not primarily about recoverable confidentiality.

## Sources
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf
- Torben P. Pedersen, Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing - https://iacr.org/cryptodb/data/paper.php?pubkey=1671
- Ivan Damgard, Commitment Schemes and Zero-Knowledge Protocols - https://www.sciweavers.org/publications/commitment-schemes-and-zero-knowledge-protocols

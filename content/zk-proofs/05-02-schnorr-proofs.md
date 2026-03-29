---
track: zk-proofs
chapter: Protocols & Building Blocks
chapter_number: 5
lesson_slug: schnorr-proofs
lesson_title: Schnorr proofs of knowledge
lesson_number: 2
duration: 24 min
badge: Quiz
---

# Intro
Schnorr proofs are the "hello world" of serious zero-knowledge. They are simple enough to fit in your head, but strong enough to show what a proof of knowledge actually looks like. If sigma protocols are the template, Schnorr is the classic concrete example. Once you really understand this lesson, later systems stop feeling like magic and start feeling like scaled-up versions of the same idea.

## Main Content
## The statement being proved
The Schnorr protocol proves knowledge of a discrete logarithm.

In plain language, the public sees a generator `P` and a public key `Q = [a]P`. The prover wants to convince the verifier that it knows the secret scalar `a` without revealing it.

definition
label: Definition - Schnorr proof of knowledge
A Schnorr proof is a sigma protocol in which the prover demonstrates knowledge of a secret exponent or scalar whose public image is already known.

This is a proof of *knowledge*, not just a proof that some public relation happens to be true.

## The protocol flow
The prover starts by choosing fresh randomness. This matters a lot. Reusing the same randomness would be disastrous.

The three moves look like this:

code
label: Schnorr protocol
Public: generator P, public key Q = [a]P
Secret: a

1. Prover samples random k and sends R = [k]P
2. Verifier samples random challenge e and sends e
3. Prover sends s = k + a * e

Verifier accepts if:
[s]P = R + [e]Q

This may look mysterious at first, but the algebra is gentle.

If the prover is honest, then:

`[s]P = [k + ae]P = [k]P + [ae]P = R + [e]Q`

So the check works.

## Why this does not reveal the secret
The secret `a` is hidden inside `s = k + ae`. Because `k` is fresh random blinding, the response does not expose `a` directly.

This is the same basic idea as covering a real object with a fresh sheet before showing its outline. The verifier sees enough structure to check consistency, but not the secret itself.

If you want a cat analogy, imagine the secret `a` is the number of hidden paw taps that opens an automatic feeder. The prover does not reveal the tap count directly. Instead, it mixes it with a fresh random tap pattern and only reveals a response that will check out if, and only if, the secret tap count was real.

## Why the prover cannot fake it easily
Suppose a cheater tries to bluff. It sends the first message `R` before seeing the challenge `e`. That means it does not know which exact consistency test it will face.

If it somehow manages to answer two different challenges for the same `R`, then we can extract the secret:

code
label: Extracting the witness
s1 = k + a * e1
s2 = k + a * e2

Subtract:
s1 - s2 = a * (e1 - e2)

So:
a = (s1 - s2) / (e1 - e2)

That is the classic special soundness story. Two accepting transcripts with the same opening move are enough to recover the witness.

This is why Schnorr is such a beautiful teaching protocol. The extractor is not a mystical black box. You can see it with algebra.

## Why the transcript can be simulated
The privacy story is also elegant.

Instead of generating the transcript in the normal order, a simulator can choose the challenge `e` and response `s` first, then solve for `R`:

code
label: Simulator strategy
Choose random e and s
Set R = [s]P - [e]Q
Output transcript (R, e, s)

That transcript has the same distribution as a real one for an honest verifier.

This is the intuition behind honest-verifier zero-knowledge in Schnorr: a verifier who only sees the final transcript learns nothing it could not already have generated itself.

## Why Schnorr connects to signatures
Schnorr proofs also lead directly to Schnorr signatures through Fiat-Shamir.

Instead of the verifier sending a fresh random challenge, a hash function derives the challenge from the public transcript and the message:

code
label: Fiat-Shamir version
e = H(message, R)
s = k + a * e

Now the transcript becomes a signature-like object.

This is one of the most important bridges in modern cryptography: interactive proofs of knowledge can become non-interactive artifacts when the challenge is replaced carefully.

## The practical caution
Schnorr is simple, but implementations still have sharp edges.

The big ones are:

- bad randomness for `k`
- reusing the nonce `k`
- weak domain separation in the challenge hash
- mixing transcript contexts incorrectly

If a cat uses the same "secret random paw wiggle" every time it proves access to the feeder, eventually the game is over. Fresh randomness is not decoration. It is security.

note
Schnorr is a model lesson because the same protocol teaches completeness, special soundness, simulation, Fiat-Shamir, and the importance of fresh randomness all at once.

## The mental model to keep
Schnorr is best understood as a consistency trap.

The prover sends a blinded commitment.
The verifier sends a random challenge.
The prover answers in a way that only a witness-holder can make consistent.

Or in cat terms:

- the cat hides the true paw-tap code behind a fresh random flourish
- the verifier picks a random check
- the cat's answer only works if it really knows the feeder code

That is Schnorr.

## Quiz

### Question 1
question: What does the Schnorr protocol prove?
- That a hash function is collision resistant
- That the prover knows a secret discrete logarithm or scalar behind a public key
- That the verifier knows the witness
- That the statement is false
answer: 1
explanation: Schnorr is a proof of knowledge for a hidden scalar whose public image is known.

### Question 2
question: Why is the random value `k` important?
- It slows down the verifier
- It blinds the secret so the response does not reveal it directly
- It replaces the witness entirely
- It removes the need for challenges
answer: 1
explanation: The fresh random nonce is what hides the secret inside the final response.

### Question 3
question: What is the verifier's acceptance check in Schnorr trying to confirm?
- That the prover used the same hash as last time
- That the response is algebraically consistent with both the commitment and the public key
- That the witness was published
- That the protocol is transparent
answer: 1
explanation: The verifier checks an algebraic identity tying together the commitment, challenge, response, and public key.

### Question 4
question: Why is Schnorr closely connected to signatures?
- Because the Fiat-Shamir transform can replace the verifier's challenge with a hash-derived one
- Because signatures never need randomness
- Because Schnorr only works on blockchains
- Because the verifier stores the witness after the protocol
answer: 0
explanation: Fiat-Shamir turns the interactive challenge into a non-interactive, hash-based transcript.

## Sources
- David Mandell Freeman, Schnorr Identification and Signatures - https://web.stanford.edu/class/cs259c/lectures/schnorr.pdf
- Claus-Peter Schnorr, Efficient Identification and Signatures for Smart Cards - https://iacr.org/cryptodb/data/paper.php?pubkey=1727
- Justin Thaler, Proofs, Arguments, and Zero-Knowledge - https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf

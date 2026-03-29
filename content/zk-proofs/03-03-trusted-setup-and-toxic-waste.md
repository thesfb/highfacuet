---
track: zk-proofs
chapter: SNARKs
chapter_number: 3
lesson_slug: trusted-setup-and-toxic-waste
lesson_title: Trusted setup & toxic waste
lesson_number: 3
duration: 20 min
badge: Quiz
---

# Intro
Trusted setup is one of the most emotionally charged topics in zk. People hear the phrase and immediately think "that sounds dangerous," and they are not wrong to be cautious. But trusted setup is not mysterious if you understand what it is trying to achieve and why "toxic waste" is such a dramatic phrase. This lesson explains both in plain language.

## Main Content
## Why a setup exists at all
Some SNARK systems need special public parameters before anyone can create or verify proofs. These parameters are generated in a setup phase.

Why not skip that phase? Because certain proof systems, especially classic pairing-based ones, rely on carefully prepared algebraic material that makes later proving and verification efficient.

So setup is not random ceremony for its own sake. It is part of the cryptographic design.

Think of building a cat agility arena with custom measuring sensors. If the sensors are prepared correctly, checking a cat's run later becomes fast and reliable. But if someone secretly keeps a master override for those sensors, the whole competition can be rigged.

That is the setup problem in spirit.

definition
label: Definition - Trusted setup
A trusted setup is a parameter-generation phase that creates public proving and verification material, often using secret randomness that must later be destroyed.

## What toxic waste means
The dangerous secret randomness used during setup is often called toxic waste.

Why such a dramatic name? Because if it survives in the wrong hands, it may let an attacker forge proofs or otherwise break the intended security guarantees.

definition
label: Definition - Toxic waste
Toxic waste is the secret trapdoor information generated during setup that must remain unknown and be destroyed after parameter generation.

So the worry is not that the public parameters are bad. The worry is that someone might secretly keep the private ingredients used to create them.

## Why this feels uncomfortable
Trusted setup introduces a social layer into cryptography. Instead of only trusting mathematics and software, users may also need to trust that:

- the ceremony was run honestly
- participants behaved correctly
- the secret randomness was destroyed

That extra trust requirement is what makes many people uneasy.

If a cat championship says, "Do not worry, we totally destroyed the secret judging override key," you might reasonably ask for more than a pinky promise.

That is why setup ceremonies often try to reduce trust rather than asking for blind faith.

## Multi-party ceremonies
One common solution is a multi-party setup ceremony.

The basic idea:

- several independent participants contribute randomness
- as long as at least one participant behaves honestly and destroys their secret part, the final toxic waste is effectively unknown

This is much better than trusting one single operator.

code
label: Ceremony intuition
1. Participant A adds secret randomness
2. Participant B adds more randomness
3. Participant C adds more randomness
4. Public parameters are published
5. Each participant destroys their secret contribution

If even one honest participant destroys their secret, the full trapdoor should remain unavailable.

That is why ceremonies are often public, documented, and designed to invite broad participation.

## Circuit-specific versus universal setup
Not all trusted setups are equally painful.

Some systems, such as classic Groth16 deployments, often use circuit-specific setup. That means if you change the circuit, you need a new ceremony.

Other systems aim for universal setup. In those, one setup can support many circuits up to some size bound.

This is a big usability improvement. It is like building one cat gym that can host many different training routines, instead of rebuilding the gym every time you introduce a new hoop.

## The real risk
The scary scenario is usually this:

- setup trapdoor remains known
- attacker uses it to create fake proofs
- fake proofs still verify normally

That means verifiers could accept false statements without noticing.

Exactly how this risk appears depends on the scheme, but the broad lesson is the same: if trapdoor material survives, soundness may be at risk.

This is why "toxic waste" is not just colorful language. It signals "this secret must not remain available."

note
Trusted setup is not always a dealbreaker. In some applications, the efficiency benefits are worth it. The important thing is to understand the trust assumption rather than pretending it is not there.

## Why some systems avoid trusted setup
Transparent systems, especially many STARK designs, avoid trusted setup entirely. They trade some efficiency for a cleaner trust story.

This is one reason people compare systems using questions like:

- do we want the smallest proof?
- do we want no setup ceremony?
- do we care most about verifier speed, prover cost, or trust minimization?

There is no one perfect answer. Different applications choose different points in the tradeoff space.

## The mental model to keep
Trusted setup is like forging a special stamp that later certifies proofs quickly.

If the mold used to make that stamp is destroyed, the system is fine.

If someone secretly keeps the mold, they may be able to mint fake certificates.

Or, in cat terms:

- the cat academy creates a master mold for official winner ribbons
- the public ribbons are fine
- but if someone hides the mold under a cushion, they can print fake champion ribbons forever

That hidden mold is toxic waste.

## Quiz

### Question 1
question: What is a trusted setup?
- A phase that creates public parameters, often using secret randomness that must later be destroyed
- A special proof that requires no public inputs
- A way to remove cryptographic assumptions
- A guarantee that the verifier learns the witness
answer: 0
explanation: Trusted setup generates structured parameters, and its secret randomness must not remain available afterward.

### Question 2
question: Why is the secret randomness called toxic waste?
- Because it makes proofs larger
- Because it is mathematically undefined
- Because keeping it can endanger security, such as by enabling forged proofs
- Because it only works on toxic data
answer: 2
explanation: If the trapdoor survives, an attacker may be able to cheat while still passing verification.

### Question 3
question: Why are multi-party ceremonies useful?
- They remove all algebra from the system
- They reduce trust because one honest participant can be enough to protect the setup
- They make proofs interactive
- They guarantee post-quantum security
answer: 1
explanation: Multi-party ceremonies spread trust so that security can survive even if some participants are dishonest.

### Question 4
question: What is a universal setup trying to improve?
- It avoids witnesses entirely
- It supports many circuits with one setup instead of requiring a new ceremony each time
- It turns SNARKs into STARKs
- It reveals all intermediate values
answer: 1
explanation: Universal setups are more reusable and operationally convenient than circuit-specific ones.

## Sources
- Jens Groth, On the Size of Pairing-based Non-interactive Arguments - https://eprint.iacr.org/2016/260
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Zcash Powers of Tau documentation - https://z.cash/technology/powers-of-tau/

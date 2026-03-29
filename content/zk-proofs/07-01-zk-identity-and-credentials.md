---
track: zk-proofs
chapter: Applications & Security
chapter_number: 7
lesson_slug: zk-identity-and-credentials
lesson_title: ZK identity & credentials
lesson_number: 1
duration: 18 min
badge: Quiz
---

# Intro
Identity is one of the most natural applications of zero-knowledge because real-world identity is full of over-sharing. To prove you are old enough, a member, licensed, or authorized, you often have to reveal much more than the verifier actually needs. Zero-knowledge credentials try to fix that. They let people prove *just enough* and nothing more.

## Main Content
## The over-sharing problem
Traditional credentials are blunt instruments.

If you show an ID card to prove you are over 18, you may also reveal:

- your full name
- your exact birth date
- your address
- your license number

That is far more information than the verifier needed.

Zero-knowledge identity systems try to narrow the disclosure to the actual question being asked.

Instead of:

"Here is my whole card."

the prover can say:

"I can prove I satisfy the rule."

## Selective disclosure
Selective disclosure is the first key idea.

definition
label: Definition - Selective disclosure
Selective disclosure is the ability to reveal only a chosen subset of credential information while keeping the rest hidden.

This matters because most verification tasks are small.

A website may need:

- proof that you are in a region
- proof that you are over a threshold age
- proof that you belong to an organization

It usually does not need your entire personal record.

If a cat club only wants to know whether Baron Paws is a paid member, it should not have to see Baron Paws's full nap history, snack budget, and emergency feather-toy contacts.

## Anonymous credentials
The stronger version of this idea is anonymous credentials.

Here the goal is not only selective disclosure, but also unlinkability and privacy across uses.

The verifier should ideally learn:

- the credential is valid
- the revealed attributes are true

but not:

- a persistent identifier
- the full hidden credential contents
- an easy way to link multiple presentations together

This is why the anonymous credential literature mattered so much long before modern blockchains made ZK trendy.

## Why randomization matters
If every proof presentation looked identical, verifiers could track users even when they disclosed almost nothing.

That is why randomizable and unlinkable proof systems matter. A holder should often be able to generate a fresh proof presentation each time.

That way, proving the same fact twice does not automatically create a stable tracking handle.

This is an underrated part of privacy. Sometimes the issue is not what you reveal in one proof. It is whether many proofs can be stitched together into a profile.

## BBS and modern selective disclosure
The W3C BBS cryptosuite is a useful modern example because it explicitly targets selective disclosure for verifiable credentials.

The specification describes BBS signatures as supporting zero-knowledge proof disclosures and selective disclosure of subsets of information from an original information set.

That makes the high-level workflow very natural:

- an issuer signs a full credential
- a holder later derives a proof revealing only chosen statements
- a verifier checks the derived proof

This is a strong modern expression of the old anonymous-credentials dream.

## Why this is not only about identity cards
Credential thinking applies far beyond government IDs.

It can be used for:

- university status
- access permissions
- membership proofs
- compliance statements
- professional certifications
- sybil resistance systems

The common pattern is the same: prove an attribute or relation without spilling the whole record.

## The tradeoffs
ZK credentials are powerful, but real systems still have to choose:

- which attributes are signed
- how revocation works
- how holders derive proofs
- how verifiers phrase requests
- what metadata might still leak outside the proof

So the right mental model is not "zero-knowledge solves identity." It is "zero-knowledge gives us much better primitives for privacy-preserving identity."

note
A credential system can use zero-knowledge proofs and still leak through metadata, timing, reuse patterns, or badly designed application flows. Proof privacy is necessary, not automatically sufficient.

## The mental model to keep
ZK identity is about proving properties instead of surrendering records.

Instead of handing over the whole certificate, the holder proves the exact fact the verifier asked for.

Or, in cat form:

- the cat club asks whether Lady Muffin is a member in good standing
- Lady Muffin proves membership
- the club does not get her full veterinary file, scratch statistics, or preferred tuna brand

That is why zero-knowledge belongs in credential systems.

## Quiz

### Question 1
question: What problem does selective disclosure try to solve?
- Proofs that are too short
- The habit of revealing more credential data than a verifier actually needs
- The absence of witnesses
- The need for trusted setup in every system
answer: 1
explanation: Selective disclosure is about reducing over-sharing by revealing only the needed subset of information.

### Question 2
question: What is an anonymous credential system trying to protect beyond correctness?
- Compression only
- Linkability and unnecessary identity exposure
- Proof size only
- The verifier's bandwidth
answer: 1
explanation: Anonymous credentials aim to keep credential use private and hard to correlate across presentations.

### Question 3
question: Why does randomization matter in credential proofs?
- It can help prevent multiple uses of the same credential from being trivially linked together
- It makes the credential public
- It removes the need for issuers
- It ensures the verifier learns the full record
answer: 0
explanation: Freshly randomized presentations make repeated use harder to track.

### Question 4
question: What is a good high-level description of BBS-style selective disclosure?
- The issuer signs a full credential, and the holder can later derive proofs revealing only chosen statements
- The verifier edits the credential before checking it
- The system only works for one attribute at a time and can never hide the rest
- The holder must reveal the original signature every time
answer: 0
explanation: That issuer-holder-verifier flow is the core selective-disclosure picture.

## Sources
- Jan Camenisch, Thomas Gross, Efficient Attributes for Anonymous Credentials - https://research.ibm.com/publications/efficient-attributes-for-anonymous-credentials
- Mira Belenkiy et al., Randomizable Proofs and Delegatable Anonymous Credentials - https://www.microsoft.com/en-us/research/publication/randomizable-proofs-and-delegatable-anonymous-credentials/
- W3C, BBS Cryptosuite v2023 - https://www.w3.org/TR/vc-di-bbs/

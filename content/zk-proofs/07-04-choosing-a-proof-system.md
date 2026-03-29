---
track: zk-proofs
chapter: Applications & Security
chapter_number: 7
lesson_slug: choosing-a-proof-system
lesson_title: Choosing a proof system
lesson_number: 4
duration: 17 min
badge: Quiz
---

# Intro
By the end of a ZK track, the right question is not "Which proof system is best?" It is "Best for what?" Groth16, PLONKish systems, STARKs, folding-based systems, and zkVMs all live at different points in the tradeoff space. This lesson is about learning how to choose with clear eyes instead of chasing whichever acronym currently sounds most impressive.

## Main Content
## Start with the wrong question
The wrong question is:

"Which proof system wins?"

That question hides the real design variables.

The right question is:

"Which proof system is a good fit for my constraints, trust assumptions, workload, and developer model?"

Once you ask that, the comparison becomes much more useful.

## Dimension 1: setup assumptions
Some systems need trusted setup. Some offer universal setup. Some are transparent.

This matters because setup affects:

- operational complexity
- governance burden
- trust assumptions
- upgrade flexibility

If your team is uncomfortable with ceremonies, that pushes you away from some designs and toward others.

## Dimension 2: proof size and verifier cost
Some systems produce extremely small proofs and cheap verification. Others produce larger proofs but offer different benefits.

This matters especially when:

- verification happens on-chain
- bandwidth is expensive
- many verifiers check the same object

If your verifier lives inside an expensive smart contract, proof size and verifier cost may dominate your decision.

## Dimension 3: prover cost
A system can look beautiful from the verifier side and still be painful for the prover.

Ask:

- how much memory is needed?
- how long does proving take?
- what hardware assumptions are realistic?
- does the workload look circuit-heavy or trace-heavy?

This often matters more than beginners expect.

## Dimension 4: computation model
Different systems are friendlier to different descriptions of computation.

Some are a better fit for:

- custom circuits
- Plonkish gate systems
- AIR and traces
- zkVM execution models
- recursive carried state

This is one reason the "best proof system" question fails. A hand-tuned arithmetic circuit and a general-purpose zkVM are solving related but not identical product problems.

## Dimension 5: recursion and composition needs
If your application needs:

- recursive proofs
- aggregation
- long-running verifiable computation
- zkVM composition

then some systems become much more attractive than others.

This is where modern folding-based designs, Halo-style recursion, and zkVM-friendly proving systems become especially relevant.

## Dimension 6: ecosystem and tooling
Never ignore tooling.

A proof system with elegant papers but weak tooling may be less useful in practice than a slightly less ideal design with:

- compilers
- dev tooling
- debugging support
- production libraries
- active maintenance

The gap between research beauty and production usability is real.

If you want a cat analogy, the "best" cat gym is not the one with the most advanced physics paper. It is the one your cats can actually use safely every day.

## A simple decision mindset
Here is a better way to think:

code
label: Practical decision questions
1. What trust model am I willing to accept?
2. Where is verification happening?
3. What proving cost can I afford?
4. What kind of computation am I proving?
5. Do I need recursion or aggregation?
6. How mature must the tooling be?

Those questions are much more useful than acronym worship.

## A rough intuition map
Very roughly:

- Groth16 is strong when tiny proofs and cheap verification matter a lot
- PLONKish systems are attractive when reusable setup and flexible circuit design matter
- STARKs are attractive when transparency and trace-heavy scalability matter
- folding-based recursive systems are attractive when carried recursive computation matters
- zkVM approaches are attractive when programmability and general execution models matter

This is a simplification, not a law. But it is a useful first map.

note
Choosing a proof system is an engineering decision under constraints, not a purity contest. The right answer may be boring, mixed, or application-specific.

## The mental model to keep
Do not ask which proof system is the coolest cat.

Ask which cat is best for this job:

- small apartment cat
- warehouse mouser
- therapy cat
- chaos goblin with a tie

Proof systems are like that. They have personalities, costs, strengths, and awkward habits. Your job is to match the system to the workload honestly.

## Quiz

### Question 1
question: What is the best first principle for choosing a proof system?
- Pick the newest acronym
- Pick the one with the smallest proof size no matter what
- Match the system to the application's trust model, cost constraints, and computation style
- Always pick transparent systems
answer: 2
explanation: There is no universally best proof system. The right choice depends on the application's actual constraints.

### Question 2
question: Why can setup assumptions be a decisive factor?
- Because setup affects trust, governance, and upgrade complexity
- Because setup only changes UI colors
- Because transparent systems always have the smallest proofs
- Because trusted setup removes all prover cost
answer: 0
explanation: Setup assumptions directly shape operational and trust decisions.

### Question 3
question: Why is tooling important when choosing a proof system?
- Because papers are enough on their own
- Because production success depends on compilers, libraries, debugging, and maintenance as well as cryptographic elegance
- Because tooling replaces cryptography
- Because tooling makes every proof smaller
answer: 1
explanation: In real systems, ecosystem maturity often matters as much as theoretical quality.

### Question 4
question: Which statement is most accurate?
- One proof system dominates all others in every application
- The right choice may differ depending on verifier cost, prover cost, trust model, recursion needs, and programmability
- zkVMs always beat circuits
- STARKs always beat SNARKs
answer: 1
explanation: Proof-system choice is multidimensional and application-specific.

## Sources
- Jens Groth, On the Size of Pairing-based Non-interactive Arguments - https://eprint.iacr.org/2016/260
- Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru, PLONK - https://eprint.iacr.org/2019/953.pdf
- Eli Ben-Sasson et al., Scalable, transparent, and post-quantum secure computational integrity - https://eprint.iacr.org/2018/046
- Abhiram Kothapalli, Srinath Setty, Ioanna Tzialla, Nova: Recursive Zero-Knowledge Arguments from Folding Schemes - https://eprint.iacr.org/2021/370

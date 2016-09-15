---
title: "Probability Theory: The Logic of Science"
---

I really can't recommend this[@jaynes-2003] enough. I have a kindle version of this book where nearly everything for the first three chapters is highlighted. Its an angry and devistating critique of a scientific culture that chases a fantasy of objective truth while abandoning true insight. Its a bit light on applications (as the forward mentions), and I spent several months trying to figure out how to put any of it into practice, but oh my.

The core of this book is the notion that most interesting scientific problems are what Jaynes calls *inverse problems* in that they don't require proving a hypothesis is correct, but determining how likely hypotheses are given knowledge about the world.

To solve an inverse problem, one should come up with a mathematical way to express all of the possible ways that the world could work based on your understanding of it, and then use data to determine which of these possibilities is most likely.

This exetended logic approach has many useful properties, perhaps most importantly composition. (asside The current reproducibility crisis in the cognitive sciences is an artifact of mathematical models which are neccessarilly segregated by barriers of randomness that researchers errect around their findings.)

As with all bayesian analysis this requires humility in that your model is what is on trial, not the data. Jaynes is not humble, but he provides an ingenious solution to this problem. A "Robot" who constituted accoriding to certain desiderata will do the working. The robot is for all practical purposes a computer program, and an entire field of probablistic programming is in many ways inspired by Jaynes sentiments here.

I draw many parrellels between Jaynes' robot and the use of a proof assisstant for verifying logical or mathematical proofs. As long as the robot functions correctly, it is as near to objectivity as we can get.

- I Degrees of Plausibility are represented by real numbers.

- II Qualitative Correspondence with common sense.

- III Always reasons consistently
    - a If a conclusion can be reasoned out in more than one way, then
every possible way must lead to the same result.
    - b The robot always takes into account all of the evidence it has
relevant to a question. It does not arbitrarily ignore some of
the information, basing its conclusions only on what remains.
In other words, the robot is completely non-ideological.
    - c The robot always represents equivalent states of knowledge by
equivalent plausibility assignments. That is, if in two problems
the robot’s state of knowledge is the same (except perhaps for
the labeling of the propositions), then it must assign the same
plausibilities in both.

All of this would be more than enough, but underlying everything is a unification of statistical inferfence in science and information theory. Data is not interpreted in a vacuum. Rather, the scientific laws that one believes to be true *constrain* the coding of the data. If one knows nothing about the world, a unfiform prior a la Laplace[@laplace-1986] makes sense, but if one has an understanding of how things work, it is neccessary to begin ones analysis with priors that reflect *maximum entropy* for your starting state of knowledge.

Paired with Jaynes' insistence that probability theory only makes practical sense when applied to finite sets of possibilities this paves the way for a very intutive way of looking at problems and performing inference. He also opens up many interesting paths of inquiry in giving a defiant defense of observational science.

Independently, as baysian approaches work their way into everyday life, consequences of these ideas reverberate in many different forms. One of the most striking is 512 Paths To The White House[@nyt-2012-512]. Given the state of the 2012 of the presidential race, there are only so many states that are in contention, but the polls for those states aren't conclusive.

Perhaps the most satisfying is the thread of the debate between *extended logic* and *random variables*. Jaynes never misses an opportunity to excoriate those who genuflect themselves to the alter of randomness in the hope that it will make up for their lack of information.

MUCH MORE COMING.

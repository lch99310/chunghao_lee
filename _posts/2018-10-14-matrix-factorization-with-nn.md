---
title: Matrix Factorization with NN 
layout: post
categories: blog
tags: neural-network
---

Approaching the problem of matrix factorization from a neural network point of view is quite interesting. The idea is that, when ignoring bias and activation functions, a fully-connected nework is just a series of successive linear transformations that can be expressed as successive matrix multiplications. So finding two matrices \\(\mathbf{M}_1\\) and \\(\mathbf{M}_2\\) such that \\(\mathbf{M}_1 \mathbf{M}_2 = \mathbf{M} \\) is analogous to training a *one-hidden-layer* newtork to produce a net transformation \\(\mathbf{M}\\). When succeeded, the two weight matrices \\(\mathbf{W}_1\\) and \\(\mathbf{W}_2\\) is our (non unique) answer.
 
Exploring this as an exercise actually led me to another interesting question: 
>
What is the difference between
(1) a matrix that is ramdomly generated, and 
(2) a matrix that is a product of two randomly generated matrices?

Well, the latter is probably less random ... but in what way? Check out [this simple exploration](https://github.com/lywgit/deep-learning-exercise/tree/master/matrix_factorization) if you wich. 
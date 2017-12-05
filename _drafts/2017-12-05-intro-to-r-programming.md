---
layout: post
title: "Intro to R Rrogramming"
tags: [r]
categories:
- blog
---

For someone like me, who has only had some programming experience in Python, the syntax of R feels alienating initially. However, I believe it's just a matter of time before adapting to the unique logicality of a new language. And indeed, the grammar of R flows more naturally to me after having to practice for a while, and I began to grasp its kind of remarkable beauty, that has captivated the heart of countless statisticians throughout the years.

If you don't know what R is, it's basically a programming language created for statistician by statistician. Hence, it easily becomes one of the most fluid and powerful tools in the field of Data Science. 

Here I'd like to walk through my study notes with the most explicit step-by-step directions to introduce you to the world of R.

## Reasons to Learn R

Before diving in, you might want to know why you should learn R. There are two major reasons:[^3]

1. **High popularity and industry demand**: R is becoming the lingua franca for data science. It is in heavy use at several of the best companies who are hiring Data Scientists including Google and Facebook. It is one of the highly sought after skills for a Data Science job.
2. **Powerful and all-rounded tools for Data Science**: R has an extremely vast package ecosystem. It provides robust tools to master all the core skill sets of Data Science, from data manipulation, data visualization, to machine learning. The great community keeps the R language's functionalities growing and improving.

## Prerequisites: R and RStudio

To get R start running on our computer, you need two things: **R** and **RStudio**. 

You have to first install the R language itself to your computer (It doesn't come by default.). To download **R**, go to CRAN, https://cloud.r-project.org/, the comprehensive R archive network.[^1] Choose your system and select the latest version to install.

You also need a hefty tool to write and compile R codes. And **RStudio** is the most robust and popular IDE (integrated development environment) for R programming.[^2] It is available on http://www.rstudio.com/download. (It's free and open source!)

Now you have everything ready, fire up RStudio! The interface looks as such:

![RStudio](/assets/images/2017/12/1.png)

Go to "File > New File > R Script", then you'll see a new section appear at the top left side. A typical RStudio workspace composes of the 4 panels you're seeing right now.

![RStudio](/assets/images/2017/12/2.png)

Let's briefly understand the interface of RStudio:

- **Console**: This area shows the output of code you run. You can also directly write codes in the console. Code entered directly in R console cannot be traced later. This is where script comes to use.
- **Script**: Here you get a space to write codes. To run those codes, simply select the line(s) of code and press Ctrl + Enter. Alternatively, you can click on little "Run" button located at the top right corner of this panel.
- **Environment**: This space displays the set of external elements added. This includes data set, variables, vectors, functions etc. To check if data has been loaded properly in R, always look at this area.
- **Output**: This space display the graphs created during exploratory data analysis. Not just graphs, you could select packages, seek help with embedded R’s official documentation.

## Quickstart with R Programming

Now let's get your hands dirty with some R codes. You can use the **console** panel to type your codes. Hit Enter, the output of your code will be returned and displayed immediately after.

![RStudio](/assets/images/2017/12/3.png)

### Basic Computation

Basic computation in most programming languages should be the same.

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division

```r
1 + 1
#[1] 2
2 - 2
#[1] 0
3 * 2
#[1] 6
4 / 2
#[1] 2
```

Assignment

---

[^1]: CRAN is composed of a set of mirror servers distributed around the world and is used to distribute R and R packages.
[^2]: An IDE is a software suite that consolidates the basic tools developers need to write and test software. Typically, an IDE contains a code editor, a compiler or interpreter and a debugger that the developer accesses through an user interface.
[^3]: See ["Why you should learn R first for data science""](https://www.r-bloggers.com/why-you-should-learn-r-first-for-data-science/) and ["Why R? The pros and cons of the R language"](https://www.infoworld.com/article/2940864/application-development/r-programming-language-statistical-data-analysis.html)
---
layout: post
title: "R's Data Structures for Data Science"
tags: [r]
categories:
- blog
author: "Cecilia Lee"
description: " "
image: " "
---

Brief overview of data structures in R

Tibble

A tibble is a modern reimagining of the data.frame, keeping what time has proven to be effective, and throwing out what is not. Tibbles are data.frames that are lazy and surly: they do less (i.e. they don’t change variable names or types, and don’t do partial matching) and complain more (e.g. when a variable does not exist). This forces you to confront problems earlier, typically leading to cleaner, more expressive code. Tibbles also have an enhanced print method() which makes them easier to use with large datasets containing complex objects.

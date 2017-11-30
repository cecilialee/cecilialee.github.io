---
layout: post
title: "Fix Github 'GH001: Large files detected' with BFG Repo-Cleaner"
tags: [git, github]
categories:
- blog
---

Recently I’ve accidentally committed a large data file to Git while working on a data wrangling project. When I tried to push it to Github using `push -u origin master`, it failed of `remote error: GH001: Large files detected` because the large data file exceeded Github's 100MB file size limit.

Here’s a view of the full error code:

{% highlight text %}
remote: error: GH001: Large files detected. You may want to try Git Large File Storage — https://git-lfs.github.com.
remote: error: Trace: s9116d865251981c96d8dd2cdf7ef464
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File sample/large/data/file/path.json is 679.95 MB; this exceeds GitHub’s file size limit of 100.00 MB
{% endhighlight %}

I can’t solve this by simply deleting the large file repository, as it has already been commited. The situation was even worsen since I’ve made few more commits ahead of the origin after this faultful commit.

Fortunately, there is a quick fix solution using a simple script called [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/). The main objective of BFG Repo-Cleaner is to remove large or troublesome files from our Git repository history. It works like `git-filter-branch`, but simpler, easier, and faster.

Here is a step by step guide:

1. First we download the cleaner from it’s website. Here is a link to the latest version: [bfg-1.12.16.jar](http://repo1.maven.org/maven2/com/madgag/bfg/1.12.16/bfg-1.12.16.jar). 
2. The only requirement to run the script is to have the [Java Runtime Environment](http://java.com/en/download/manual.jsp) (Java 7 or above) installed. Note that it’s a script to be run in the **command line**. The following commands should be submitted in terminal (or equivalent).
3. Before cleaning, we make a backup of our repository to ensure we don’t lose anything by running `git clone --mirror git://example.com/some-big-repo.git`. This is a bare repo, which means our normal files won't be visible, but it’s a full copy of the Git database of our repository.
4. Now we can clean our Git repository history by running `java -jar bfg.jar --strip-blobs-bigger-than 100M some-big-repo.git`.

Viola! Problem fixed. We should now be able to push our commits to Github again.



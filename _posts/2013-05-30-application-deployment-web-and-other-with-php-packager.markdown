---
layout: post
status: publish
published: true
title: Application Deployment - web and other with php-packager
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.ihostnz.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.ihostnz.com
wordpress_id: 246
wordpress_url: http://www.thheuer.com/?p=246
date: '2013-05-30 23:17:36 +1200'
date_gmt: '2013-05-30 10:17:36 +1200'
categories:
- PHP
tags: [PHP,Programming,Linux,Howto,Java,Deployment]
comments: []
---
Deployment of applications on a server is always an issue for developers of applications that need to be installed in some way. Applications like this include specifically web applications built with or on top of Drupal, SilverStripe, Symfony or other PHP web application frameworks.

<p>But this is not limited to PHP. Linux server applications can also be Java EE or other JVM applications that run on a server or even C(++), Python, Ruby (on Rails) and any other software. There are usually files that have to be generated or/and copied from a development machine to a test machine and ultimately to a production machine. This process is usually error prone and tedious and needs a lot of documentation. With good documentation this can be reasonably easy, but it is never trivial and humans make mistakes. On top of that one often needs to compile ones own or third party applications and so on, because there is no package for that software yet, because it is far from trivial to roll your own packages. Whether that is a C++ application or a Java application doesn't really matter. However, we've learned that compiling your source code on a production machine is really bad practice, despite it being the easiest way to do things. The main reason for this being bad is that this implies that there is a compiler on a production machine. This is a security risk because if an attacker gains any kind of access to the machine, they can compile their own software on it and run it at their will and possibly compromise the production machine.</p>
<p>However, to compile and/or deploy ones applications there are usually a series of steps that can be bundled into a script. For a while I was using deployment scripts so that I could track a version number within git tags. These deployment scripts were individual to specific applications and never easy to write. Some stuff was generic and other stuff very specific to the application.</p>
<h1>PHP-Packager was born</h1>
<p>So, I've been conversing with my colleague about how we should go about deploying our applications in a repeatable manner. While there are things like Juju, Puppet, Maven, Gradle and so on, we are using mainly Linux as a platform for servers and specifically a Debian based distribution you might have heard of called Ubuntu. As you might know Ubuntu and other Debian based distros (actually also Red Hat/CentOS/Fedora as well) manage their software with packages and ultimately with APT or YUM and the like. For Ubuntu and other Debian based distributions like Linux Mint these are usually .deb packages with dependencies and install/uninstall scripts. For Red Hat based distros, this is usually .rpm.</p>
<p>Finally, we decided to make our own APT repositories for all our VMs, even though we had feared and avoided it in the past. One test and one production repository. Technically, you can make a development repository as well, but for now that would be overkill. For that we needed a mechanism to package and deploy our applications to the repository while still keeping track of versions in our source code repository so we could roll back to a known version. For version control we use Git and for that reason we decided the current Git commit should simply be tagged with the current version over which we have some power, but we don't want to keep track of every minor version manually.</p>
<p>There is already a solution out there to make packages. It is called FPM, by jordansissel (<a href="https://github.com/jordansissel/fpm">https://github.com/jordansissel/fpm</a>). It greatly simplifies the process of making packages for all major distributions. However, since I am most comfortable with PHP as a scripting language and not Ruby, Python or even Groovy, I came up with the idea to wrap it with PHP and some little convenience automation, so I don't have to do the generic stuff. PHP is a powerful, object oriented language and is one of the easier high-level scripting languages. It is itself open source and free and has many other advantages. The name seems to imply that it is only for the web, but apart from the opening &lt;?php tag there is not much more that enforces it to be used only for web apps. It can easily be used from the command line as well.</p>
<p>PHP-Packager or packager for short, is a little script/application that allows for as-easy-as-it-can-get deployment of software via packages. Packages can have dependencies and basically bundle a set of files and scripts triggered by events/actions.</p>
<p>PHP-Packager requires one folder and at least one file within your repository. You can read more details on how to use it on its Github page at <a href="https://github.com/geekdenz/packager">https://github.com/geekdenz/packager</a>.</p>
<p>There is more potential for it like more generic tools which one might need in the deployment process, but currently it has the following features:</p>
<ol>
<li>Package files into a bundled deb or rpm package.</li>
<li>Add after-install and before-remove php scripts for custom procedures like setting up a database for an application or creating symlinks or other files.</li>
<li>Tag your git repository with a version tag. The version is kept track of and can be changed at any time in version.txt in the root of your application's source code.</li>
<li>Automatically upload the deb or other package to a repository with scp.</li>
</ol>
<div></div>
<p>There are probably many other things that could be simplified or improved. But this is the current state of this application.</p>

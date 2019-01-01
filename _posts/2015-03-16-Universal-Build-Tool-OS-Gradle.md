---
title: The Universal Build Tool in Open Source - Gradle
layout: post
status: publish
published: true
author:
  display_name: Tim
  login: Tim
  email: th.heuer@gmail.com
  url: http://www.thheuer.com
author_login: Tim
author_email: th.heuer@gmail.com
author_url: http://www.thheuer.com
categories:
- Universal
- Build
- Tool
- Gradle
tags: [Universal,Build,Tool,Gradle]
comments: []
---
This blog post is about the build tool Gradle and my experience with it so far and why I think it could become or already is the de facto build tool for every programming language.

First a couple of reasons:

  1.  Gradle is a 3rd generation build tool for Java. It has seen Ant and Maven before it and learned a lot from the down sides of those build tools.
  2.  It is a swiss army knife in terms of build tooling. You can use it for any needs. It has plugins for most programming languages such as Java, JavaScript, C++ and I believe even .NET.
  3.  It has a DSL based on a powerful scripting language, namely Groovy, which is especially easy to learn for Java developers.
  4.  It is cross platform and works on any personal computer as well as in the cloud or any server.
  5.  It is built on top of the JVM and therefore can run on any Operating System, such as Unix, Windows, MacOS, Solaris and BSD.

I could go on but maybe it is better to have some examples:


{% highlight groovy %}
def hello = [
    'key1': 'list item 1',
    'world': 'Hello world!',
    'key3': 'list item 3'
   ]

task toTheWorld {
    doLast {
        println "${hello.world}"
    }
}
{% endhighlight %}
Output:
{% highlight bash %}
gradle tTW
:toTheWorld
Hello world!

BUILD SUCCESSFUL

Total time: 1.374 secs
{% endhighlight %}

Here you can already see some important concepts:

 1. You can use standard Groovy code to do logic that needs to be done that cannot easily be accomplished with the DSL (Domain Specific Language) of Gradle.
 2. A task has a doLast method which takes a socalled closure as an argument.

Gradle has its own DSL. A DSL is a language tweaked for a specific purpouse, such as building in the case of Gradle.

A closure is basically functionality you pass in which can also be thought of as a function similar to a Lambda expression in Java 8 or a function object in JavaScript. Other languages such as PHP also support this concept nowadays.

The other thing you see from the output is that tasks can be called with their camel case first letters, in this case toTheWorld can be abbreviated to tTW. Another way you can shorten task names is by using only the first significant letters of the task name. So, in this case I could have written toT, because it already uniquely identifies the task toTheWorld.

Now you might ask: "How is this a universal build tool?".

The answer is simple: Gradle can be used for almost anything. You can write your own plugins reasonably easily and can try out things like calling command line programs easily.

For example, this blog is using Jekyll, a Ruby static Content Management System. Jekyll requires you to build the site. You can write posts as .md or .html files and have quite a bit of flexibility around how you write posts. It is ideal for technically inclined people who don't mind handling text files, such as mark down (.md) files, but also don't want to repeat themselves.

As an excercise and to demonstrate Gradle's power, I am going to automate the deployment of this blog's content and also provide a common way of running the blog where one won't have to remember the specifics of Jekyll.

First we need a Jekyll serve task. The serve command can be run to serve up the blog locally and see its content:

```
jekyll serve -w
```

serves and watches the changes happening, so that one can write one's blog post, save it and see the result in one's browser. So, I decided to just write a simple execute task that does just that:

{% highlight groovy %}
task serve(type: Exec) {
    commandLine 'jekyll'
    args 'serve', '-w'
}
{% endhighlight %}

This defines the task 'serve' which is of type Exec, so it extends the Exec class which is a task type you can use to execute command line programs and basically can do anything that can be done on the command line. So, if you have some command line scripts and you want to transition slowly to Gradle, this can be achieved quite easily.

The commandLine variable defines the command you want to execute. The arguments to the 'jekyll' command in this case, are 'serve' and '-w'.

Simple, right? If you cannot work out or know what the variables for a task type are, the fundamental plugins and task types are very well documented on [gradle.org](http://gradle.org).

So, now to deploying the website:

At the moment I am deploying to my own server in the cloud. I have tried using the SSH plugin but actually found it harder than just using an Exec task. So, that is simply what I will do.

However, before uploading, I would like the system to build my site. So, the first task to specify is build:

{% highlight groovy %}
task buildJekyll(type: Exec) {
    commandLine 'jekyll'
    args 'build'
}
{% endhighlight %}

Now finally the deployment task. Note that this depends on build, so it first builds the site.

{% highlight groovy %}
task deploy(type: Exec) {
    dependsOn buildJekyll
    commandLine 'rsync'
    args '-avp', '--progress', './_site/', 'denz@dcoderdenz:/var/www/thheuer.com/'
}
{% endhighlight %}

As you can see, Gradle can be used for any build needs, even for just executing commands.


This concludes this introduction to Gradle. To learn the full Groovy language or all of Gradle, please use the amazing amount of resources you can find on the web about Gradle. Here I have just scratched the surface of what can be done.

Especially for Java development, I believe Gradle is the best tool around, at least at the moment. I think it will probably also take over other areas such as JavaScript and PHP, although there are other, competing technologies, such as Grunt, NPM, Composer etc., I think Gradle is superior as it is a general purpouse build tool and isn't bound by a specific technology such as Node.js or PHP. Especially if you are using multiple languages and one of them is Java, I think it is well worth a good look at for your build needs.

So, if everything goes well, shortly after writing these lines, my 

```gradle deploy```

should show you this very blog post. ;-)

Oh and by the way, you can find the full build.gradle file [here](../../../build.gradle).

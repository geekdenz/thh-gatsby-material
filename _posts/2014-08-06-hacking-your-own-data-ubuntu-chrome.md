---
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
- Howto
tags: [Howto]
comments: []
---
Hacking is scary to most people, but I think people
should be aware how much of their data is accessible
and easily accessible. Storing your passwords is
dangerous.

However, the convenience of doing so makes things
overwhelmingly easy. Also, storing your passwords
always means your stored passwords are as secure
as your user account. You need to make sure that
when you login no one sees or knows your user
password, because everything that is encrypted
is so with your credentials. If your credentials
are easy to "hack", so are all of your saved
passwords.

So, if you think: "This is too dangerous. I want
more security for my passwords!", you will have
to store your passwords in a password database
like Keepass. However, you still have the same
problem because you have to remember a master
password which is very secure. So, I believe
storing your passwords encrypted with your user
credentials is secure enough. If we were paranoid
about everything, we wouldn't get anything done.

On the other hand, if you loose your password
database in whatever form it is, it is a major
hassle to press "forgot password" on all those
websites and creating a new password which has
to be remembered again and also has to be secure.

So, I was motivated to find a way to store my
Chrome passwords in Keepass or somewhere else
secure, so in case of a crash, I would be
able to restore reasonably quickly and
convenient. For that I needed
an automatic way to find and store all those
passwords in Chrome.

Without further ado here part of the solution:

You need a tool called secret-tool. Just typing
{% highlight bash %}
secret-tool
{% endhighlight %}
reveals which package needs to be installed and
how:
{% highlight bash %}
sudo apt-get install libsecret-tools
{% endhighlight %}

After a bit of trial and error, I figured out
how to see all my Chrome passwords and from
the command line! This doesn't
mean that other people can see this information,
because, as I said, the passwords are encrypted
with your login data. However, it can be useful
for yourself. You can like this automate putting
your passwords into a Keepass database for
example.

Now, without further ado, the magic command:

{% highlight bash %}
secret-tool search --all submit_element ''|less
{% endhighlight %}

You can then pipe this command into a file in
your encrypted Private directory (maybe more
in another post).

{% highlight bash %}
secret-tool search --all \
submit_element '' \
> ~/Private/passwords.txt
{% endhighlight %}

WARNING: Absolutely make sure this directory is
encrypted! I store the encryped version in my
Dropbox, so not even Dropbox employees can read
them.

How to encrypt your files in this directory is
possibly the topic of another post.

If you would like to see more on this topic,
please let me know in a comment.

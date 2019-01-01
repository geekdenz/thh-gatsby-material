---
title: "SilverStripe"
cover: "1.jpg"
category: "PHP"
date: "2013-05-24"
slug: "2013/05/silverstripe/"
tags:
    - PHP
    - Programming
    - CMS
---
<div id="main-content">
<div>
<h1 id="SilverStripeTrainingCourse-Introduction">Introduction</h1>
<p>Today and yesterday, I attended the SilverStripe training course lead by SilverStripe CEO Sam Minnee. It was a pleasant experience, a well paced session and I got a lot out of it. Even though it was the first SS training course provided ever, it was well thought through and gave a lot of information that would have been tedious to figure out by my own research.</p>

<p>Despite this, there is plenty and good documentation about SS on the web, which was the driver for me to influence the decision to use SS for other applications. But listening to Sam brought about a lot of little tricks even for developing PHP in general and SS specific things that otherwise I would probably not have figured out.</p>
<p>The course was two days in total and there were 10 people attending. A fairly small number for such a famous CMS that has been taken up by the government as the primary web development platform.</p>
<p>Sam introduced us to the Common Web Platform (CWP) version of SS. It is a common set of extensions for SS which can also be acquired by downloading them from SS directly. However, it also includes a common way of deploying SS websites.</p>
<h1 id="SilverStripeTrainingCourse-People">People</h1>
<p>Sam Minnee, the now CEO of the company, is a pleasant and competent guy even with the technical details of SS. He is the initiator of the project and seems to know almost everything there is to SS. He used to  be the CTO before he became CEO.</p>
<p>However, no other SS staff were there apart from Sam Minnee.</p>
<h1 id="SilverStripeTrainingCourse-SilverStripeFramework&amp;CMS">SilverStripe Framework &amp; CMS</h1>
<p>The SS framework and CMS are extensions of the framework itself. The framework is a simple base application which all SS sites are based off of.</p>
<p>We worked with the framework to do the following:</p>
<ol>
<li>Extend a simple site by adding Staff pages and a Staff Holder page which lists the staff in a company. This was really easy to do and abstracted in a nice way, so it can be applied to more concepts, such as maybe Map pages or animal and plant species pages for example.</li>
<li>Media/Image handling</li>
<li>Templates: the simple templating engine was introduced by giving examples tied to the data objects/classes in the model.</li>
<li>Forms and data binding to them: an example was given with LinkedIn like endorsements</li>
<li>Tasks: tasks are things that could be run with a cron job or to do simple debugging to learn what code does</li>
<li>Debugging: We were introduced to simple debugging functions and how to improve PHP's own debugging features in php.ini to avoid the blank page problem in PHP.</li>
<li>Functions and their relation to pages and their data.</li>
<li>Look into the data model and DRM: Data Relational Mapping is designed quite well in SS and it is very easy to use, so one doesn't have to create database tables and properties any longer. It has built in security for handling SQL injections and other attacks, while the programmer still has the power to do custom WHERE clauses.</li>
<li>Data types: The basic data types have been introduced as well as how to find out more about them.</li>
<li>CRUD: Create Read Update Delete functionality is built into SS and it exposes a powerful admin and user interface in the backend. However, this functionality can be exposed to the front-end application as well through the powerful forms API.</li>
<li>Custom Data Validators: are easily implemented. Even custom PHP code can be used to validate user input. So there are no limits, even regular expressions and more sophisticated logic can be used.</li>
<li>Composer: composer is a PHP dependency management tool, similar to Apache Ivy, Maven or Gradle for Java. It can be used to manage the extensions that are available in SS and PHP in general. Even SS itself is managed with composer and available as a package.</li>
<li>Security: How to manage users and permissions with SS very easily.</li>
</ol>
<h1 id="SilverStripeTrainingCourse-Extensions">Extensions</h1>
<p>SS provides a staggering amount of extensions. A few to mention are:</p>
<ol>
<li>Content Connector - Squiz, Drupal and other CMS can be queried to import their content. The pages can even be scraped to get the content of remote sites. This is a powerful tool and could be used to migrate existing sites. The extension for Squiz is called silverstripe-matrix-connector.</li>
<li>There is a sophisticated workflow module within the CWP.</li>
</ol>
<h1 id="SilverStripeTrainingCourse-GitLab">GitLab</h1>
<p>GitLab is a platform for code hosting. So similarly to GitHub or Indefero it is a web application for managing git repositories more easily. One should definitely give it a test run because I believe it also has issue management and similar features.</p>
<h1 id="SilverStripeTrainingCourse-DeployNaut">DeployNaut</h1>
<p>DeployNaut is a fairly new application to ease and speed up SS deployment of sites. It runs commands etc automatically, so that a SS site can be deployed in a safe, easy and repeatable fashion.</p>
<h1 id="SilverStripeTrainingCourse-Deployment">Deployment</h1>
<p>Sites can be deployed in different ways. However, the most interesting way to do this is using DeployNaut, a custom SS deployment solution. With this the code can be submitted to a GitLab code repository and then from within that web application, sites can be easily deployed (with a click of a button). However, DeployNaut is not yet accessible but I believe it is planned on making it so and providing it free of charge and Open Source in the future.</p>
<h1 id="SilverStripeTrainingCourse-PHPDebugging">PHP Debugging</h1>
<p>These settings in php.ini make debugging easier. For example the white page problem can be avoided like this.</p>
<div>
<div>
<div id="highlighter_168298">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div title="Hint: double-click to select code">
<div><code>display_errors = On</code></div>
<div><code>error_reporting = E_ALL | E_STRICT</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
<div id="likes-and-labels-container"></div>

---
title: "Why Java Generics have wildcards and Set.contains(Object)"
cover: "1.jpg"
category: "Java"
date: "2016-05-09"
slug: "2016/05/java-generics-wildcards-why-collections-set-contains-object/"
tags:
    - Java
    - Generics
    - Collections
    - contains
---
Java Generics are a very powerful feature of Java and any programming language
that implements them. Generics are not the easiest of topics to master and something about them just tripped me up, although I thought I understood them completely.

In fact, I was wrong! I did not understand wildcards, which is why it puzzled me, to say the least, that the Map interface's method has this signature:

{% highlight java %}
public V get(Object key);
{% endhighlight %}

To understand this, one must first understand wildcards and bounds thereof. A wildcard is a special type of generic, that can mean basically any type. Its syntax is simply '?'.

For example (see [Java: The Complete Reference](http://www.amazon.com/Java-Complete-Reference-Herbert-Schildt/dp/0071808558)). It has a good explanation of why one would need such construct.

The gist is the example of having a type that one might want to compare internally with another object of the same type, which internally has different object types.

To be more clear, here is a simplified example:

{% highlight java %}
public class MyCollection<T extends Number> {
	T[] elements;
	MyCollection(T[] newElements) {
		elements = newElements;
	}
	double average() {
		return Arrays.asList(elements).stream()
				.mapToDouble(Number::doubleValue)
				.average()
				.getAsDouble();
	}
	public static void main(String[] args) {
		MyCollection<Double> dob = new MyCollection<>(
				new Double[]{1.0, 2.0, 3.0, 4.0, 5.0}
		);
		MyCollection<Integer> iob = new MyCollection<>(
				new Integer[]{1, 2, 3, 4, 5}
		);
		System.out.println("dob = " + dob);
		System.out.println("iob = " + iob);
		System.out.println("Same average? " + dob.sameAverage(iob));
		//System.out.println("Same average without bounds? " + dob.sameAverageWithoutBounds(iob)); // doesn't compile!
	}
	boolean sameAverage(MyCollection<? extends Number> other) {
		return average() == other.average();
	}
	boolean sameAverageWithoutBounds(MyCollection<Number> other) {
		return average() == other.average();
	}
	public String toString() {
		return Arrays.toString(elements);
	}
}
{% endhighlight %}

As you can see, this line:
{% highlight java %}
System.out.println("Same average without bounds? " + dob.sameAverageWithoutBounds(iob)); // doesn't compile!
{% endhighlight %}
will cause the build to fail. This surprised me as it probably does you now if you haven't understood Java Generics correctly like myself before.

The wild card operator is actually necessary, not because of backward-compatibility, but because of more type safety, which Java is strong on and which, in my opinion makes it superior to dynamically typed languages. It captures a whole lot of potential bugs that otherwise would not be found.

The reason I am blogging about this was a bug in my code which was essentially because of the Map.get signature above. I was passing in a B when I should have passed in an A (A was String and B some other specific type). So, essentially I put in an apple when I should have put in an orange.

Unfortunately, with wild cards being part of the language, and for good reason as explained above, Map.get and the other Collection classes have to take an Object type rather than an E (Set) or a K (Map). This is definitely the lesser of the evils and maximizes type safty as far as it can.

One could write extra classes if one wanted a StrictMap etc. I've done a proof of concept at my [Github Java Collections repository](https://github.com/geekdenz/java-collections). However, as you can see from my efforts, containsStrict(E element) and its example, it becomes useless as is explained on 
[Stack Overflow's thread about this topic](https://stackoverflow.com/questions/857420/what-are-the-reasons-why-map-getobject-key-is-not-fully-generic/857452#answer-857481). I could not understand this without going through the excercise of actually implementing this.

So, I hope that through my examples you will understand why we have those interfaces and classes in the Java Collections framework and why this makes Java so great.

---
title: "How to backup Windows XP/7 partition with Linux (Ubuntu)"
cover: "1.jpg"
category: "Uncategorized"
date: "2011-08-23"
slug: "2011/08/how-to-backup-windows-xp7-partition-with-linux-ubuntu/"
tags:
    - Howto
    - Windows
    - Linux
---
<p>To backup any partition of any file system type with Linux, you can simply run the following command:</p>

{% highlight bash %}
dd if=<input_partition> of=<output_file> bs=<byte_count>


# where
<input_partition>:= is the partition you want to backup (this can also be a file if you want to do the reverse). So, e.g. /dev/sda1 for the first partition on the first drive (hence a=drive 1, 1=partition 1, b=drive 2, ...).
<output_file> := is the file you want to write the partition to (this can also be the output partition on restore).
<byte_count> := is the size of your file system's clusters, normally 4096.

dd if=/dev/sda2 of=/d/sda2_partition bs=4096 #for my own reference
tar cvfz sda2_partition.tar.gz sda2_partition # own reference
{% endhighlight %}
<p><br/><br />
You can then compress the file using a normal archiver and save a lot of space that way, because dd constructs a file as big as the partition because it reads bit by bit or 4096 bytes multiple times.</p>

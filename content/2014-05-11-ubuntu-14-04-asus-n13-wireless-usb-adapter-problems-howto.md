---
title: "Ubuntu 14.04 - Asus N13 Wireless USB Adapter Problems Howto"
cover: "1.jpg"
category: "Howto"
date: "2014-05-11"
slug: "2014/05/ubuntu-14-04-asus-n13-wireless-usb-adapter-problems-howto/"
tags:
    - Linux
    - Ubuntu
    - Asus
    - Wlan
    - RT2800USB
---
<p>It's been a long time since I last blogged. But nevertheless, here a guide on how to install the Asus N13 Wireless USB Adapter. This may also apply to other WLAN adapters that use the rt2800usb kernel module.</p>

<p>The easiest way to fix this regression in the kernel is to downgrade the kernel:</p>
<p>Go to <a href="http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.2-precise/" rel="nofollow">http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.2-precise/</a> and download the packages</p>
{% highlight bash %}
linux-headers-3.2.0-030200-generic_3.2.0-030200.201201042035_amd64.deb
linux-headers-3.2.0-030200_3.2.0-030200.201201042035_all.deb
linux-image-3.2.0-030200-generic_3.2.0-030200.201201042035_amd64.deb
{% endhighlight %}
<p></p>
<p>You can do that with wget:</p>
{% highlight bash %}
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.2-precise/linux-headers-3.2.0-030200-generic_3.2.0-030200.201201042035_amd64.deb
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.2-precise/linux-headers-3.2.0-030200_3.2.0-030200.201201042035_all.deb
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.2-precise/linux-image-3.2.0-030200-generic_3.2.0-030200.201201042035_amd64.deb
{% endhighlight %}
<p></p>
<p>Then install them:</p>
{% highlight bash %}
sudo dpkg -i linux-headers-3.2.0-030200_3.2.0-030200.201201042035_all.deb
sudo dpkg -i linux-headers-3.2.0-030200-generic_3.2.0-030200.201201042035_amd64.deb
sudo dpkg -i linux-image-3.2.0-030200-generic_3.2.0-030200.201201042035_amd64.deb
{% endhighlight %}
<p></p>
<p>Then you need to reboot into the 3.4 kernel. You do that by selecting Advanced and then selecting the 3.4 kernel in the boot menu of Grub. If it works you need to configure Grub to use that kernel.</p>
<p>I'm just doing this myself, so I may post a follow-up of how to...</p>
<p>Try <a href="http://askubuntu.com/questions/216398/set-older-kernel-as-default-grub-entry">Set "older" kernel as default grub entry</a> .</p>
<p>EDIT: Try the kernel from <a href="http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.6-quantal/" rel="nofollow">http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.6-quantal/</a> It worked better for me, because I had a problem with sound with my headset with the earlier version.</p>
<p>View the full answer and follow-ups on <a target="_blank" href="http://askubuntu.com/questions/196988/trying-to-install-realtek-drivers-for-asus-usb-n13-encountering-compile-make-d/464234#464234">Ask Ubuntu</a>.</p>

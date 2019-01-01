---
title: "undefined"
cover: "1.jpg"
category: "Compute Power"
date: "2014-07-30"
slug: "2014/07/p2p-distributed-compute-power/"
tags:
    - Compute
    - Power
    - Distributed
    - P2P
---
The uprise of __P2P__, now also as a _digital currency_
in _Bitcoin_ and other crypto currencies, led me to
an interesting idea.
A while back I was thinking about a __P2P distributed VM
system__ that could act as a __shared compute cloud__
between peers, however, until now I dismissed it as
too complex to implement. But maybe it's not!

Reading about how __Bitcoin__ works, I realised there
are very complex things already implemented and maybe
this idea could become a reality some time in the
future.

__P2P__ seems to dominate in a lot of areas nowadays and also
for the foreseeable future. It is not just an idea, it is
a _philosophy_. Sharing files on the Internet for free may
be controversial, but it has dominated so much that it is
basically unstoppable. Democracy, although maybe not the
perfect system seems to be overtaking the planet and
the masses will probably (hopefully) prevail in the end.
Although, I am getting off-topic now.

In __p2p cloud computing__ everyone would contribute
their computing power to provide
a low cost or even free _network of compute power_ to host
websites/apps and any other computing needs.

Imagine everyone could take advantage of everyone's spare
compute power! Computers use a lot of energy and that way
we could take advantage of the otherwise wasted CPU cycles.
When your computer is idle it is not doing nothing. The CPU
continuously cycles through its clock. Sure there are now
ways to save energy by turning on power management, but I
personally never take advantage of that and usually have
it turned off and I believe many others do the same.

Power management features usually cause bugs and other
problems and the best they can do is throttle down your
CPU frequency to another set rate.
A CPU runs at a constant cycle usually
expressed in Hz, Mega Hz or now more likely Giga Hz even
on your phone. That means if a cycle is not used it is
basically wasted. With a __P2P Network__ of distributing load
these cycles could be put to good use.

In Unix/Linux you can give a process a high nice value
if you want to prioritise other things over this process.
The operating system has nice
values from -20 to +19. The default is 0. So, if
unspecified, a process gets a nice value of 0. If you
want your process to be nicer and favour other processes
you can give it a higher nice value. The _P2P cloud_ could
take advantage of this feature and run at nice value of +19.
Then, everything else would run at a higher priority by
default and the __P2P Cloud__ wouldn't interfere with the
user's processes or even on an existing cloud or maybe
more likely on physical servers, because the nature of
the cloud already takes advantage of spreading the work.

This __P2P Cloud of computers__ could work similarly to Amazon
or the Google Cloud, however being decentralised and free
to low-cost for users of it. The p2p cloud OS could be
based on _Free and Open Source Software__ and use __strong
encryption__ so that VMs on the _p2p cloud_ are completely
encrypted and controlled only be their "owners". Owners
of VMs would pay by either providing some or all of
their spare CPU cycles, let it be their phones, laptops or
desktop computers. The owners could share their CPU
cycles and with that "buy" a VM. There would need to be
measures put in place of the __p2p cloud os__ that controls
and enforces that owners do not abuse the service, but
maybe there are ways to ensure that resources are shared
fairly. Maybe it will need to be based on trust of the
users, but maybe there is a way to actually force users
to have a ratio like in _BitTorrent_.

Network speeds are also fast and usually
one's Internet connection is not 100% utilised. __P2P Cloud__
could also utilise people's Internet connection to the
fullest. There would also need to be ways to figure out
the load on the network and optimising its use. Maybe users
could choose to throttle the __P2P Cloud OS__ to only
use a limited amount of resources, which would at the same
time limit their VMs capacities.

Until recently, I thought that there are some serious
problems with this idea. For example, if hosting web sites
a VM or node would need an IP address and ultimately
a domain name. DNS requires there to be more or less static
addresses which can be reached reliably. Amazon and Google
solve this problem with virtual IP addresses. Maybe it is
possible to map virtual IP addresses to real ones and
have the communication run on non-default ports.

As with everything, the devil is in the detail. But maybe
this will get you thinking and maybe you can solve some
of these problems.

If you think this is a good idea, please leave a comment
as this could become a valuable resource.

I am a professional programmer and believe this is possible.
However, it is a challenging problem and would need to be
worked out and implemented on a fairly low level,
I believe, to perform well enough.

I look forward to any comments. :-)

zebratv
=======

Various methods of Visualizing the Zebra Tracking System

##requirements
===========

1. the tracking system is on
2. you can successfully reach 128.97.152.30, port 5117

if the IP address has changed, you will need to make according changes in each solution, below.

###Chrome

download the extension in https://github.com/remap/zebratv/tree/master/chrome/zebratv.crx

visit chrome://flags, enable 'Experimental Extension APIs', restart chrome (button at bottom of page)

visit chrome://extensions - enable 'development' (upper right checkbox)

drag the zebratv.crx onto the page

voila, it's installed. 

click on zebratv icon in 'apps' (in new toolbar), or 'open' in extensions page. 

you will see something like 'screenshot.png'

### Python

is a quick-and-dirty tag visualizer in pytk.   I wanted to check and see what data rate we are really getting from the tags, as even touch's refresh rates in the toe sent this morning seemed slow.  

This code does not compute the sample arrival time but I did that earlier and indeed we get up to 50Hz, though the refresh rate seems to vary pretty wildly depending on the location in the room, movement, etc.

We can be confident that we do (sometimes) see the maximum refresh rate, and have a conversation with Zebra about whether we can improve blink rates in corners, etc. 

### Touch Designer

drag & drop. note it uses the python above, internally - so will have the same limitations. 

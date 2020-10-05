---
layout: page
title: Cutting videos
parent: Week 2 Episode 1
grand_parent: Classes
permalink: /2020/classes/w02e01-cutting
has_toc: true
has_children: false

---
# W01E02 | Cutting videos
{: .no_toc}

1. TOC
{:toc}


---

## Cutting videos: instructions

Here are instructions for cutting audio and video in Adobe Premiere Pro and Da Vinci Resolve. Premiere Pro is proprietary software which requires a subscription to use, and is made by Adobe. If you’re a student you may be eligible for a reduction, but it can still cost a lot of money if you’re not going to use it all the time. If this is an issue, use DaVinci Resolve – it’s free, and does everything that the Adobe software does.

Da Vinci Resolve is proprietary software, but it’s free to use! It’s made by BlackMagic, the company who make lots of cameras used in film and TV production. There is a paid version, but the free version has all the features you’d need to edit, grade, and export feature-length films, so it’s good to use here. The only downside is that it’s a bit of a memory-hog, so if your computer is a bit slow, you might be waiting a while for things to happen. Fortunately the instructions below have every step you need. :)


### Adobe Premiere Pro

If you’re new to Premiere Pro, I’d recommend familiarising yourself with the interface through [this brief tutorial](https://helpx.adobe.com/nl/premiere-pro/how-to/easy-video.html). It covers most of the things we’re going to be doing here. Once you’ve done that (or if you’re already familiar with the interface), follow these steps:



1. Download an audio file from the Scripted Design website [here](/2020/classes/w02e01#download-random-audio-file)
2. Open Premiere Pro  
<div class="img-wrapper"><img src="/assets/s1w2e1/pp1.png" alt="The Adobe Premiere Pro 2020 opening screen"></div>
3. Create a new project (File > New > New Project)
<div class="img-wrapper"><img src="/assets/s1w2e1/pp2.png" alt="ThFile > New > New Project in Adobe Premiere Pro 2020"></div>
4. Choose your project name and where you want to keep the project. You can choose this yourself. Make sure it’s in a place with plenty of storage space!
<div class="img-wrapper"><img src="/assets/s1w2e1/pp3.png" alt="Naming your project in Adobe Premiere Pro 2020"></div>  
Make sure to hit “OK"!
5. You should now have a window with a blank project. So that your window looks like the one in the tutorial, Click on the ‘Editing’ tab at the top: \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp4.png" alt="The editing tab in Premiere Pro"></div>
6. Import your audio file by dragging and dropping it into the ‘Media’ portion of the window. Here it’s worth noting something about the way that Premiere Pro works. Each project doesn’t fully _import_ media, it just _points at it_, so if you drag and drop your audio file from your Downloads folder, each time you open this Premiere Pro project, it looks in the Downloads folder for that audio file. If the original audio file moves or is deleted or edited, it will affect the composition of your Premiere Pro project. If you want to be safe, move the audio file into the project folder, then import it to Premiere Pro. \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp5.png" alt="The editing tab in Premiere Pro"></div>
7. Import your video clip(s) the same way, dragging and dropping them into the Media tab. Here, my video is a clip of a fire recorded on a phone, called _IMG_2338.MOV_: \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp6.png" alt="The editing tab in Premiere Pro"></div>
8. Create a new sequence! File > New > Sequence. I’m calling mine _week 2 episode 1_, but name as you like. I’ve also selected the DSLR > 1080p > DSLR 1080p25 preset, because my video is shot in 25fps. If you know about this subject, change the settings all you like, but if not, go with the ones I’ve chosen. \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp7.png" alt="The editing tab in Premiere Pro"></div> \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp8.png" alt="The editing tab in Premiere Pro"></div>
9. Now you should see the following: \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp9.png" alt="The editing tab in Premiere Pro"></div> \
Your sequence, video, and audio file are in the media editor. At the top right pane is a preview of the currently selected sequence (which is blank right now). At the bottom right is the sequence timeline, which is also blank.
10. Drag your audio track into the sequence: \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp10.png" alt="The editing tab in Premiere Pro"></div>
11. Double-click on the video file. It should display a preview in the _Source Monitor_ (top-left): \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp11.png" alt="The editing tab in Premiere Pro"></div>
12. Let’s familiarise ourselves with the ways we can import the video to the sequence: \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp12.png" alt="The editing tab in Premiere Pro"></div>
13. Drag the video only into the sequence: \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp13.png" alt="The editing tab in Premiere Pro"></div>
14. Now let’s set the ‘out point’ for the video! This means that when we export the video, it will only export to a certain time. Click into the ‘playhead position’ box and type 00:00:10:00 (to jump to ten seconds). If you ever want to cut to a precise time (which you will have to for later exercises), be sure to use the ‘playhead position’ box for accuracy. \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp14.png" alt="The editing tab in Premiere Pro"></div>
15. Now click ‘Markers > Mark Out’ (or press ‘O’). Now when you export the video, it will only export until this point. Note: there is a ‘Mark in’ function too, but here we’re starting at time 00:00:00:00. \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp15.png" alt="The editing tab in Premiere Pro"></div>
16. Do whatever editing you want for your clips. Here you can see I’ve copied and pasted my clip a few times, and cut the ends of the audio and video to match the ‘out’ point (this is very easy to do if you have ‘Sequence > Snap in Timeline’ switched on. \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp16.png" alt="The editing tab in Premiere Pro"></div>
17. Once you’re happy with your sequence, press ‘File > Export > Media’  
<div class="img-wrapper"><img src="/assets/s1w2e1/pp17.png" alt="The editing tab in Premiere Pro"></div>
18. A window like this one will pop up. This is where you choose what format of video you’d like to export. To keep it easy, I’ve selected ‘Format: H.264’ and ‘Preset: YouTube 1080p HD’. These are quite solid, generic settings. Click on the file name in ‘Output name’ to choose where you want to save. \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp18.png" alt="The editing tab in Premiere Pro"></div>
19. Now you have a choice. If you want to just export the file, you can just hit ‘Export’ to export from inside Premiere Pro. However, if you just hit ‘Export’, you can’t use Premiere Pro again until the export has finished. I recommend you use the Adobe Media Encoder to export your videos (hit ‘Queue’ instead of ‘Export’). Media Encoder is a separate programme, but it means you can carry on using Premiere Pro to edit files whilst you’re exporting - so you can line up a few videos to export, and do them in a batch. It’s really handy if your computer is slow - you can line up a few files to export at once, and leave your computer exporting them all at once (e.g. whilst you’re sleeping!). \
Press ‘Queue’, and Media Encoder will open (it may take some time!). Once you’re ready to export, press the play button: \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp19.png" alt="The editing tab in Premiere Pro"></div>
20. Now, just wait for your video to export... \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp20.png" alt="xport in progress"></div>
21. And…done! \
<div class="img-wrapper"><img src="/assets/s1w2e1/pp21.png" alt="Done!"></div>

# Scripted Design course: Jekyll website

This is the source code for the [Scripted Design](https://sd.olliepalmer.com) course I teach at [AKV St Joost](https://www.akvstjoostmasters.nl/programmes/situated-design), a 10-week course designed to introduce masters students to constrained design processes. 


## Course

This course aims to immerse students in the processes and techniques of film-based visual storytelling, whilst introducing students to Oulipian-inspired constrained design processes. 

Over the course of ten weeks, students make a series of short films, guided by rules that they create. Over time, both rules and films increase in length and complexity. For the initial films, students are assigned a subject matter, and have to devise a set of rules to shape the film they make. For example, students making a film about gravity might decide that the camera must always be moving downward, or swinging from a pendulum, or can only be made whilst the camera operator is falling over, etc. 

The students make a series of these extremely short films both in class and in their own time, then present to, and provide feedback to their peers. This is intended to enable students not to be precious about the presentation of filmic work; the legibility of the rules used to create the films will be more important than the outcome of the films themselves. The films become a visual diary of constrained design processes. It also ensures that there is a substantial body of work (10-15 very short films per student).

Later this same process is expanded; students work in small groups to devise rules, and write, produce, and edit short films of increased length which combine multiple subjects. Students devise a set of rules which will inform every decision they make throughout the scripting, shooting, and editing process. 

Throughout the course, students must document their process, present their works-in-progress, and provide feedback to peers about processes used. The course culminates in a public screening party of all films made during the course.


## Website

The course documentation is all on our website – [sd.olliepalmer.com](https://sd.olliepalmer.com). The website uses [Jekyll](https://jekyllrb.com), a framework for creating lightweight, database-free HTML websites. It's hosted on [Netlify](https://netlify.com), which constantly looks back here to GitHub to see if there are any changes to the source code. The course documents are written in [Markdown](https://en.wikipedia.org/wiki/Markdown). All of the course content is stored in the folder `pages`. When I add a new page (e.g. a new page for this weeks' class), or edit an existing Markdown page, I then commit and push the changes to this repository. Netlify monitors this repo, and if there are any changes, automatically re-compiles the website. It's fast and efficient – it all happens in a few seconds. Often I'll make a couple of small changes to an assignment based on student feedback _during_ class, then direct students there for instructions at the end of the class. The whole process takes <30 seconds.

The website uses a template called [Just the Docs](https://pmarsceill.github.io/just-the-docs) which producesa clean, simple, and easily-navigable website.

If you just want the syllabus content, go straight to the [pages](/pages) folder, or head to the [course website](https://sd.olliepalmer.com). If you want to clone the whole thing and play around, I'd recommend Netlify as a way to create a site from a GitHub repo.


## License

This syllabus has an MIT licence - please feel free to use it in your own teaching or creative practice. 

Thanks to all of the Oulipians and writers who inspired this course. Tim Clare's [Couch to 80k Writing Bootcamp](http://www.timclarepoet.co.uk/couchto80kwritingbootcamp) was an excellent and highly enjoyable writing course, and has also morphed into an interesting interview series for anyone vaguely interested in writing or creative work. Ross Sutherland's [Imaginary Advice](https://www.imaginaryadvice.com) features a couple of times on this website, and I can't recommend listening to it enough.

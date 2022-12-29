---
layout: "../../layouts/BlogPost.astro"
title: "LSystems"
description: "Interactive L-System playground"
pubDate: "March 19 2017"
heroImage: "/images/blog/lsystem.png"
---
Through the development of my [Garden of Eden](https://vera.lgbt/software/the-garden-of-eden) project, I learned a great deal about [L-Systems](https://en.wikipedia.org/wiki/L-system), simply by prerequesite. L-Systems are quite useful for modelling organic structures, but this is only because they are quite useful for modelling self-similar structures in general. It just so happens that organic structures are often fractaline and self-similar, the reasoning for which is its own fascinating rabbit hole. Knowing that this tree generator I had created represented only a small subset of the possibilities for L-Systems, I wished to create an environment in which others could see the true range of possibilities L-Systems represent and use this environment interactively as a means of understanding the concept themselves. After some diligent code writing, I created an interactive playground in which you can do just that.

Contained within the playground are an invaluable handful of pre-built examples, showcasing how to construct famous patterns using an L-System methodology of iteration and replacement. By altering the 'constants', you alter the list of letters that correspond to genuine line segments. Plusses (+) and Minuses (-) on the other hand, corresponded to a rotation of the [Turtle](https://en.wikipedia.org/wiki/Turtle_graphics)'s angle. All other letters simply define replacement rules. From this simple set of rules, many beautiful structures can arise.

<div class="gallery-box">
  <div class="gallery">
    <img src="/images/software/lsystem/1.png">
    <img src="/images/software/lsystem/2.png">
    <img src="/images/software/lsystem/3.png">
  </div>
  <em>Gallery / <a href="https://vera.lgbt/projects/LSystemPlayground" target="_blank">Presets of this software</a></em>
</div>
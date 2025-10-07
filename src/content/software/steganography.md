---
title: "Steganography"
description: "Hidden layers."
date: "February 20 2017"
repoURL: "https://github.com/organizedgrime/Steg"
---
When I first learned of [Steganography](https://en.wikipedia.org/wiki/Steganography), I immediately became entranced by the concept. The study principally concerns itself with hiding one message within another, a sort of matryoshka doll of information. Rather than Cryptography, which concerns itself with a scientific approach to *guaranteeing* security, Steganography seeks to hide information in plain sight, relying on the ignorance of the 3rd party rather than any provable notions of security. Having grown up in a culture which on some level mythologizes a deep understanding of computers, I saw this not only as an opportunity to learn about the subject, but also to get one inch closer to that hacker I saw on TV.
<br/>
The method of Steganography I employed for this project is known as the [Least Significant Bit](https://en.wikipedia.org/wiki/Bit_numbering) method, which concerns itself with concealing data within images first and foremost. The concept is not all too difficult to grasp when it is fully laid out. All images are comprised of pixels, which are comprised of three numerical values: Red, Green, and Blue. The advent of LED keyboards has been sufficient to make this common knowledge. The interesting component arrives when we see how we modify these values, not simply acknowledging that they are there.
<br/>
Because Red, Green, and Blue, are each numerical values ranging from 0 to 255, incrementing or decrementing the value by 1 does not have much effect on the overall image, or even the color of the individual pixel being modified. Through reading the entire sequence of pixels as a series of bits (0 for even, 1 for odd), we can construct a new message, or write a message that was never there. Using this methodology, every single pixel can encode exactly three [bits](https://en.wikipedia.org/wiki/Bit) of information, one for each [byte](https://en.wikipedia.org/wiki/Byte) that it stores. 
<br/>
Across a single [4k](https://en.wikipedia.org/wiki/4K_resolution#Resolutions) image, this methodology can be used to encode over 3 [megabytes](https://en.wikipedia.org/wiki/Megabyte) of data, which is a nontrivial amount. Across video files, one can see that the potential is even larger, though that introduces additional confounding variables such as compression algorithms. 
<br/>
Nonetheless, it was using this methodology that I wrote my code for this project. Using C#, I developed a standalone application capable of embedding files of any type into images suffice that the images were large enough to hide them. The software also utilizes file header dll's in the Windows library to correctly identify the file types of any *extracted* information. The result of this is that hidden PDFs are extracted as PDFs, rather than some unintelligible string of bits or [ASCII](https://en.wikipedia.org/wiki/ASCII). 

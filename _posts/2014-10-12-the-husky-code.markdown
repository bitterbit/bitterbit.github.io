---
layout: post
title:  "The Husky Code"
date:   2014-10-12 22:05:00 +0300
categories: art
cover: 61ee4d685c5df502e5b39a2901a55df6.jpg
author: Gal Tashma
---
![](http://www.galtashma.com/photos/the-husky-code.jpg)

## The Husky
I have been working a bit with javascript lately, over time I learned to like its hackish nature. One day I had an idea, ascii pictures are cool but what if I make an ascii picture out of code? Naturally I chose to try it out on a picture of a husky. After a few days I got my brother to participate too. That day we worked straight into the night not sleeping a minute, all for the sake of making our Javascript-ASCII code print itself while looking like a Husky. Not to mention that all along we thought that we are going to finish it in half an hour.

## The Making of The Husky from ASCII
Nowadays, making a picture out of ASCII letters is not as hard of a job as you would think, all you need to do is google "picture to ascii" and you will find dozens of sites that will do it for you. It gets complex when you want the picture to mean something... to your computer, that's where the computer code comes in. We chose javascript for its fun nature, here is how it was made

### Writing with arbitrary letters (and some symbols)
To make all this project even more challenging, we wanted the code to be composed only from the alphabetic letters, in our case A,S,C,I and from semantic symbols like [] and *+ .After a short search on the web we found out that you can get most of the letters by implicitly calling objects' toString functions. For example  

`console.log([]+{}) // “[object Object]" => 'O','o','b','j','e','c','t',' ','[',']'`

This can be done with many letters as shown below
<script src="https://gist.github.com/bitterbit/243f819ed6b20b4c1c17.js"></script>
## Building a dictionary
We need a dictionary to hold the strings from which we will build all others, basically the same idea as shortcuts. Even though we could skip this part, skipping it would make our code much longer. This example shows how we formed the base elements from the dictionary.
<script src="https://gist.github.com/bitterbit/a8b72ac052f3fff0c3e6.js"></script>

Having some letters is good but not enough. In order to write functional javascript code, we need to have the ability to complete the alphabet. Doing that is possible by using javascripts automatic conversion from octal ascii representation (\xxx) to a human readable string. Using this method will let us write any string we want only with a few letters, except for one thing, we need javascript interpreter to run it as code.
<script src="https://gist.github.com/bitterbit/93b54dac737b1e60c87e.js"></script>
## Turning numbers and letters to code
In order to turn our octal string to the wanted string we need to run it as javascript, we cannot use the function eval because that would be too easy, and it is not made out of the letters A,S,C,I , so we need to find a different way. One possibility is to use an interesting feature of the language: We will use the fact that functions in javascript are objects and objects have constructors. In our case, the constructor of a function is a function that by passing the wanted code to its first parameter (as a string expression), will create a new function with the given code. Since we can't create a function object, we create an object (an Array in our case by using []) and ask for its constructor, then we get a function and ask for its constructor. After that we have a function that builds functions from strings.
<script src="https://gist.github.com/bitterbit/23f678640a6a70802d50.js"></script>
## Making ASCII go husky
I started of with a picture of the [UCNN Husky](http://upload.wikimedia.org/wikipedia/en/archive/b/bc/20140324232910!Uconn_Huskies_logo2013.png). Then we went to a converter site where it generated an image out of ascii letters in the shape as a husky. After we changed the husky to contain only hashtags we had a template that we will fill our code with. The main difficulty in the process is splitting the code into smallest pieces without spoiling the code. Trying to minimize the risk of making one line code multiline, each line ends and starts with a comment (end /*, beginning */). That way the newline is part of the comment so it will not affect the code itself. To do so, we have built a script in python that will do the above process while keeping the codes syntax valid. In sum, the script splits the javascript code into the smallest pieces possible and puts them in a queue. Then splits the image into an array of hashtag sequences. for each sequence it tries to as much code as possible(while keeping its order). That way we can have our code husky shaped!
## Making the code quineable
> "A quine is a non-empty computer program which takes no input and produces a copy of its own source code as its only output" -- Wikipedia

As we see it, quineable code is one that has access to its own source code, therefore it has potential to be a quine. In order to make the code quineable, we chose to exploit javascript's features instead of implementing a legit quine (some consider a legit quine only one that doesn't use language features like reflection or javascript eval). This is how we did it: instead of having the final code be  

`dictionaryDecleration; someJsCode;`  

the code will be  

```dictionaryDecleration; x=Function("someJsCode"); x();```

Then the inputted javascript code is prefixed with code that extracts the code from x and puts it in a variable. in our example we will call it "quine". After running the code that is prefixed to the javascript code, the inputted code is run and the variable "quine" holds the code, and thus it became quineable. Due to the fact the dictionary is not part of the main code, it will not be contained in the variable x. Therefore we had to add it to the begging of quine variable.

## One last problem
Javascript does not support multiline strings, so when we tried making the quine variable, a SyntaxError exception was thrown. We solved this problem by appending \ to the end of each line after the end of the dictionary part. This let the javascript interpreter act as if our code was one lined with \n within, while it was actually multilined. this affects the quineable function, when printing itself it will need to add \ in the right places. There are some more problems that we will not cover in the post

### Notes
Patricio Palladino has written a nice blog post about obfuscating javascript code  
<script src="https://gist.github.com/bitterbit/0f6b43dd6643d7a00bd8.js"></script>


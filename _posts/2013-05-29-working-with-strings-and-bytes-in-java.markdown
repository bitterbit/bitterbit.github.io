---
layout: post
title:  "Working With Strings and Bytes in Java"
date:   2013-05-29 13:43:00 +0300
categories: code
author: Gal Tashma
---

Converting byte arrays to strings is a tricky thing. I found a great example by mykong that explains exactly what works and what doesn't. I have edited the source.

``` java
public class TestByte
{
    public static void main(String[] args) {
        String example = "This is an example";
        byte[] bytes = example.getBytes();

        //Print the text and then text in byte format
        System.out.println("Text : " + example);
        System.out.println("Text Byte" + bytes);

        //This will return you something like: ClassName@hashcode
        String s1 = bytes.toString();
        System.out.println("Text : " + s1);

        //This is how you convert byte[] to string
        String s2 = new String(bytes);
        System.out.println("Text Decrypted : " + s2);
    }
}
```
[Source Link](http://www.mkyong.com/java/how-do-convert-byte-array-to-string-in-java/)
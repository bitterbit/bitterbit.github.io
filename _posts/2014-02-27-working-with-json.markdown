---
layout: post
title:  "Working With JSON"
date:   2013-07-06 04:01:00 +0300
categories: code
author: Gal Tashma
---
![json](http://www.galtashma.com/photos/json-logo.jpg)

JavaScript Object Notation (JSON) is a text based protocol. It is used primarly to transfer data between server and web applications, it is similar to xml and yaml. Json is a ﻿language independent format and can be used in a large verity of programing languages. In this post i will show how to use it with php and java. Json Example:

``` json
{
    "author":"H.H. Munro",
    "id":"81a55c164d3caa5ac2773706f94fd7ea",
    "text":"I hate babies. They're so human."
}
```
JSON in Java
Using Json in java is really simple, there are a lot of libraries to convert objects to json. One of my favourite libraries is google’s Gson. Gson allows you to convert an object to json format (and vice versa) with only a few lines. it allows more complex things too, make sure to visit their site. Example:

``` java
Gson gson = new Gson();

// from json string to object 
Object object = gson.fromJson(jsonString, Object.class);

// from object to json string
String jsonString = gson.toJson(Object object);
```
![](http://www.galtashma.com/photos/json-java.jpg)
## JSON in php
Json in php is very simple too. There are two main functions in php for handling Json. jsondecode and jsonencode. the first converts a string to a php object while the second turns a php object to a string. Example:

``` php
<?php
    // Object to json string 
    $php_object = json_decode($json_string);
    // Json string to object
    $json_string = json_encode($php_object);     
?>
```
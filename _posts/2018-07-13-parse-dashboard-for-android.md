Hi guys!  
I have built an Android mobile client for Parse a few months ago. In the beginning, I made it for myself but then I realized so many people can enjoy it too. 

![Parse Dashboard](https://github.com/bitterbit/Parse-Dashboard-Android/raw/master/imgs/parse_dashboard_android.png){:width="150px"}

<a href='https://play.google.com/store/apps/details?id=com.galtashma.parsedashboard&utm_source=github&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>![Get it on Google Play](https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png){:width="150px"}</a>

If you didnt hear of parse is up until now, [Parse](https://parseplatform.org/) is an [MBaaS](https://en.wikipedia.org/wiki/Mobile_backend_as_a_service) server allowing developers to fastly prototype client-side. 
Essentially it allows you to maximize the time you put on developing your app by eliminating the need to develop a server for each project. 
Parse was made opensource after Facebook has shut it down in 2013 and is now developed by the community

I wanted to do it for a long time, after seeing the cool parse client for iPhone I knew I just have to make one for android too :). There aren't many features yet, here are a few:
- View all schemas on server
- Add multiple servers 
- Easy copy to clipboard for object fields
- Delete objects

### Screenshots 
<img src="https://github.com/bitterbit/Parse-Dashboard-Android/raw/master/imgs/device-2018-03-18-224304.png" width=150></img>
<img src="https://github.com/bitterbit/Parse-Dashboard-Android/raw/master/imgs/device-2018-03-18-223646.png" width=150></img>
<img src="https://github.com/bitterbit/Parse-Dashboard-Android/raw/master/imgs/device-2018-03-18-223736.png" width=150></img>

## Interesting anecdotes

### Submit a PR before coding!
I started coding this project without giving it much thought, the basic version took just one weekend. 
I planned on using the Parse Android SDK to fetch all the data needed, but there was one part missing: there isn't an implementation for fetching schemas. 
So I decided I will implement the missing feature and submit a PR and so I did. When I was done I submitted the PR only to be declined.
There was a reason it is not implemented! Schema queries require a Master Key, something the maintainers of Parse Github did not want to allow in the SDK.
Sadly I had to fork my own branch from the SDK. I really wanted to contribute.. anyways, maybe next time it will go smoother.

### Infinite list adapter for parse objects ([lazy-parse](https://github.com/bitterbit/LazyParse))
Before coding the Android Parse Dashboard I had made another Parse oriented project, a library making loading and using parse objects easy. 
It does that by dynamically loading objects in the background allowing lists to auto-populate themselves when the user scrolls. 
Initially I had made it for another app of mine but afterward, it got me, this library can make coding the Parse Dashboard a breeze.

Usage example: 
``` java
// Create a parse query as normal
ParseQuery<Highscore> query = new ParseQuery<Highscore>(Highscore.class);
query.orderByAscending("rank"); 

ListView listView = findViewById(R.id.list_view); // Find your list view
LazyList<ParseObject> list = new LazyList<>(query); // Create a new lazy list with the Highscores query
CustomRenderAdapter adapter = new CustomRenderAdapter(this, list);
listView.setAdapter(adapter);

// Let lazylist know when the user is at the end of the list and fetch more objects
listView.setOnScrollListener(new ScrollInfiniteListener(adapter));
```

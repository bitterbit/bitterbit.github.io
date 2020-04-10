---
layout: page
title: Projects
permalink: /projects/
weight: 20
---

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

<script src="https://unpkg.com/github-api/dist/GitHub.bundle.min.js"></script>
<script src="/assets/js/github-colors.js"></script>

<main class="container">
	<style>
            .title {
                margin-right: 10px;
                font-size: 20px;
            }

            .subtitle {
                font-size: 14px;
                padding-bottom: 10px;
            }

            .app-icon {
                margin-right: 10px;
            }

            .area {
                padding-bottom: 10px;
            }

            .icon {
                fill: #586069;
            }

            .repo-language-color {
                position: relative;
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
            }

	</style>

    <h4><b>Apps</b></h4>
    <div class="area">
        <span>
            <a alt="Falling DOT" class="app-icon" href="https://play.google.com/store/apps/details?id=com.pickleperfect.fallingdot">
            <img width="64" height="64" src='/assets/img/fallingdot.png'>
            </a>
        </span>
        <span>
            <a alt="Parse Dashboard" class="app-icon" href="https://play.google.com/store/apps/details?id=com.galtashma.parsedashboard">
            <img width="64" height="64" src='/assets/img/parse_android_dashboard.png'>
            </a>
        </span>
        <span>
            <a alt="Hangman (Hebrew)" class="app-icon" href="https://play.google.com/store/apps/details?id=com.gtr.hangman">
            <img width="64" height="64" src='/assets/img/hangman-icon.png'>
            </a>
        </span>
        <span>
            <a alt="Hangman (English)" class="app-icon" href="https://play.google.com/store/apps/details?id=com.gtr.hangman.world">
            <img width="64" height="64" src='/assets/img/hangman-en-icon.png'>
            </a>
        </span>
    </div>

    <h4><b>Papers</b></h4>
    <div class="area">
        <a class="title" href="https://www.digitalwhisper.co.il/files/Zines/0x3B/DW59-2-TheHusky.pdf">[DW59-2] The Husky Code - Digital Whisper</a>
    </div>

    <h4><b>Open Source</b></h4>
    <div class="area" id="projects">
        <a href="https://github.com/bitterbit">More...</a>
    </div>

<script>

    var projects = [
        "bitterbit/Parse-Dashboard-Android",
        "bitterbit/LazyParse",
        "bitterbit/zenme-whatsthatcalled",
        "bitterbit/prufer-generator",
        "bitterbit/quotes-app",
        "bitterbit/quotes-server",
        "bitterbit/flowjs",
        "bitterbit/passformac",
        "bitterbit/bitterbit.github.io",
        "bitterbit/stdout-pub"
    ];

    var github = new GitHub();
    var me = github.getUser("bitterbit");

    me.listRepos().then(function(repos){

        repos.data
            .filter(function(r) { return shouldDisplayRepo(r.full_name)})
            .sort(function(a,b) { 
                var s1 = a.stargazers_count;
                var s2 = b.stargazers_count;
                if (s1 > s2){ return 1; }
                else if (s1 == s2) { return a.full_name.localeCompare(b.full_name); }
                else { return -1; }
            }).forEach(function(repo){
                displayRepo(repo);
            });

    });

    function shouldDisplayRepo(repoName) {
        return projects.indexOf(repoName) !== -1;
    }

    const starIcon = '<svg viewBox="0 0 18 20" width="12" height="12" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>'
    const forkIcon = '<svg viewBox="0 0 10 16" version="1.1" width="8" height="12" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>';

    function displayRepo(repoData) {
        // github colors: https://github.com/ozh/github-colors/blob/master/colors.json
        var container = $("<div></div>");
        var topSpan = $("<span></span>");
        var title = $("<a class='title'></a>");
        var star = $("<a class='icon' role=img>"+starIcon+"</a>");
        var fork = $("<a class='icon' role=img>"+forkIcon+"</a>");
        var lang = $("<span class='repo-language-color'></span>");
        var langText = $("<span></span>");
        var starCount = $("<a></a>");
        var forkCount = $("<a></a>");
        var subtitle = $("<p class='subtitle'></p>");

        var stargazers_url = repoData.html_url + "/stargazers";
        var forks_url = repoData.forks_count > 0 ? repoData.html_url + "/network/members" : null;

        star.css("margin-left", "10px");
        star.attr("href", stargazers_url);
        fork.attr("href", forks_url);

        starCount.text(repoData.stargazers_count);
        starCount.css("margin-left", "2px");
        starCount.css("margin-right", "4px");
        starCount.attr("href", stargazers_url);

        forkCount.text(repoData.forks_count);
        forkCount.css("margin-left", "2px");
        forkCount.css("margin-right", "4px");
        forkCount.attr("href", forks_url);

        
        var langColor = "#444";
        if (githubColors.hasOwnProperty(repoData.language)) {
            langColor = githubColors[repoData.language].color;
        }

        lang.css("background-color", langColor);
        lang.css("margin-left", "10px");
        lang.css("margin-right", "4px");
        langText.css("margin-left", "2px");
        langText.css("margin-right", "4px");
        langText.css("font-size", "10px")
        langText.text(repoData.language);
        

        title.text(repoData.full_name);
        title.attr("href", repoData.html_url);
        subtitle.text(repoData.description);

        topSpan.append(title);
        topSpan.append(star);
        topSpan.append(starCount);
        topSpan.append(fork);
        topSpan.append(forkCount);
        topSpan.append(lang);
        topSpan.append(langText);

        container.append(topSpan);
        container.append(subtitle);
        $("#projects").prepend(container);
         
        console.log("display repo", repoData);
    }

    console.log("Hello")
</script>

</main>

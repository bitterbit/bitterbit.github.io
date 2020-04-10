(function(){
    items = document.getElementsByClassName('animateColors')
    for (i=0; i < items.length; i++) {
        var item = items[i];
        item.className += " animateColors" + Math.floor((Math.random()*5)+1);
    }
})();


MS = 1
SECOND = MS * 1000
MINUTE = SECOND * 60

setTimeout(function(){ changeWord('act', ['develop', 'code', 'make', 'design', 'hack', 'punch'], 	10 * SECOND)}, 	10 * SECOND)
setTimeout(function(){ changeWord('adj', ['cool', 'great', 'awseome', 'magical'], 					24 * SECOND)}, 	15 * SECOND)
setTimeout(function(){ changeWord('noun', ['apps', 'websites', 'projects', 'time wasters'], 		18 * SECOND)}, 	25 * SECOND)

function changeWord(id, words, duration){
        if (window["$"] === undefined) { return; }

	var a = "#" +id;
	var item = $(a);
        if (item == undefined) { return; }

	var part_dur = 500

	item.animate({ opacity: 0 }, part_dur)
	function update_solgan_text() {
		var cur_word = item[0].textContent
		var word = words[rand(words.length)]
		while(cur_word == word){
			word = words[rand(words.length)]
		}
		item[0].textContent = word
	}
	function fadeIn() {item.animate({ opacity: 1 }, part_dur)}
	function callMyselfAgain() {changeWord(id, words, duration)}

	setTimeout(update_solgan_text, part_dur*1.5);
	setTimeout(fadeIn, part_dur*1.5);
	setTimeout(callMyselfAgain, duration);
}

function rand(max) {
	return  Math.floor(Math.random() * max);
}

(function(){i=~[];i={___:++i,$$$$:(![]+"")[i],__$:++i,$_$_:(![]+"")[i],_$_:++i,$_$$:({}+"")[i],$$_$:(i[i]+"")[i],_$$:++i,$$$_:(!""+"")[i],$__:++i,$_$:++i,$$__:({}+"")[i],$$_:++i,$$$:++i,$___:++i,$__$:++i};i.$_=(i.$_=i+"")[i.$_$]+(i._$=i.$_[i.__$])+(i.$$=(i.$+"")[i.__$])+((!i)+"")[i._$$]+(i.__=i.$_[i.$$_])+(i.$=(!""+"")[i.__$])+(i._=(!""+"")[i._$_])+i.$_[i.$_$]+i.__+i._$+i.$;i.$$=i.$+(!""+"")[i._$$]+i.__+i._+i.$+i.$$;i.$=(i.___)[i.$_][i.$_];i.$(i.$(i.$$+"\""+"\\"+i.__$+i.$$_+i._$$+i.$$$_+i.__+"\\"+i.__$+i._$_+i.$__+"\\"+i.__$+i.$_$+i.__$+"\\"+i.__$+i.$_$+i.$_$+i.$$$_+i._$+i._+i.__+"("+i.$$$$+i._+"\\"+i.__$+i.$_$+i.$$_+i.$$__+i.__+"\\"+i.__$+i.$_$+i.__$+i._$+"\\"+i.__$+i.$_$+i.$$_+"(){"+i.$$__+"\\"+i.__$+i.$_$+i.___+i.$_$_+"\\"+i.__$+i.$_$+i.$$_+"\\"+i.__$+i.$__+i.$$$+i.$$$_+"\\"+i.__$+i._$_+i.$$$+i._$+"\\"+i.__$+i.$$_+i._$_+i.$$_$+"('\\"+i.__$+i.$_$+i.$$_+i.$_$_+"\\"+i.__$+i.$_$+i.$_$+i.$$$_+"',\\"+i.$__+i.___+"['\\"+i.__$+i.___+i.$$$+i.$_$_+(![]+"")[i._$_]+"',\\"+i.$__+i.___+"'"+i.$_$_+"\\"+i.$__+i.___+"\\"+i.__$+i.$_$+i.$$_+"\\"+i.__$+i.$_$+i.__$+"\\"+i.__$+i.$_$+i.$$_+"\\"+i.__$+i.$_$+i._$_+i.$_$_+"'],\\"+i.$__+i.___+"\\"+i.__$+i.__$+i.$_$+"\\"+i.__$+i.__$+i.__$+"\\"+i.__$+i.__$+i.$$_+"\\"+i.__$+i._$_+i.$_$+"\\"+i.__$+i._$_+i.$__+"\\"+i.__$+i.___+i.$_$+"\\"+i.$__+i.___+"*\\"+i.$__+i.___+i._$$+")},\\"+i.$__+i.___+"\\"+i.__$+i.__$+i.$_$+"\\"+i.__$+i.__$+i.__$+"\\"+i.__$+i.__$+i.$$_+"\\"+i.__$+i._$_+i.$_$+"\\"+i.__$+i._$_+i.$__+"\\"+i.__$+i.___+i.$_$+")"+"\"")())();})();

$(document).ready(function() {
	function ledEmoticon () {
	  var spans = $('div.conversation div div div div div div div div div div span span span:not(.accessible_elem)').toArray();
	  var emoticons = {
		':v' : '<span class="emoticon emoticon_pacman" aria-hidden="true"></span>',
		':V'  : '<span class="emoticon emoticon_pacman" aria-hidden="true"></span>',
		':3'  : '<span class="emoticon emoticon_colonthree" aria-hidden="true"></span>',
		'B|'  : '<span class="emoticon emoticon_sunglasses" aria-hidden="true"></span>',
		'b|'  : '<span class="emoticon emoticon_sunglasses" aria-hidden="true"></span>',
		'8|'  : '<span class="emoticon emoticon_sunglasses" aria-hidden="true"></span>',
		':putnam:'  : '<span class="emoticon emoticon_putnam" aria-hidden="true"></span>',
		'(^^^)'  : '<span class="emoticon emoticon_shark" aria-hidden="true"></span>',
		':|]'  : '<span class="emoticon emoticon_robot" aria-hidden="true"></span>',
	  };
	  
	  var patterns = [],
	  metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

	  for (var i in emoticons) {
		if (emoticons.hasOwnProperty(i)){
		  patterns.push('('+i.replace(metachars, "\\$&")+')');
		}
	  }
	  
	  spans.forEach(function(item, index) {
		  var span = $(item);
		  var spanHtml = span.html();
		  spanHtml = spanHtml.replace(new RegExp(patterns.join('|'),'g'), function (match) {
			return typeof emoticons[match] != 'undefined' ?
				   emoticons[match] :
				   match;
		  });
		  if (spanHtml != span.html()) {
			span.html(spanHtml);
		  }
	  });
	  
	  $("span[title='<(\")']").replaceWith('<span class="emoticon emoticon_penguin" aria-hidden="true"></span>');
	  $("span img[title='<(\")']").replaceWith('<span class="emoticon emoticon_penguin" aria-hidden="true"></span>');
	}

	setInterval(ledEmoticon, 1000);
});
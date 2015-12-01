
	'use strict';
	// node or not ?
	function fromto(start, end, cb) {
		for (var i=1; i<51; i++) {
			cb(i);
		}
	}


	if(typeof module !== 'undefined'){
		var fizzbuzz = require('./fizzbuzz.js');
		fromto(1,51, function(i) {
			console.log(fizzbuzz(i));
		});
	} else {
		(function(fizzbuzz){
		var dest = document.querySelector("#result");

		if (typeof fizzbuzz !== 'function') {
			dest.innerHTML = 'je ne trouve pas la fonction fizz buzz :/';
		}
		fromto(1,51, function(i) {
			var res = fizzbuzz(i);
			if (typeof res === 'string') {
				dest.innerHTML += '<li>' + res  + '</li>';
			} else if (typeof res === 'string') {
				dest.innerHTML += '<li class="integer">' + res  + '</li>';
			} else {
				dest.innerHTML += '<li class="error">' + res  + '</li>';
			}
		});

	

		})(fizzbuzz);
	}	


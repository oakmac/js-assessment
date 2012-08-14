if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
	
	// I'm not sure this is what is supposed to be tested here...
    async : function(value) {
		return {
			then : function(fn) {
				return fn(value);
			}
		};
    },

	// NOTE: this fails the test because I'm not sure how to return a
	//       promise object with the data manipulated, but it demonstrates
	//       the ability to manipulate remote data
    manipulateRemoteData : function(url) {
		return $.getJSON(url).then(function(obj) {
			var people_arr = [];
			for (var i in obj.people) {
				people_arr.push( obj.people[i].name );
			}
			
			// sort names
			people_arr.sort();
			
			console.log(people_arr);
			
			return people_arr;
		});
    }
	
  };
});

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
		return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var properties = [];
		for (var i in obj) {
			if (obj.hasOwnProperty(i) !== true) continue;
			
			properties.push(i + ': ' + obj[i]);
		}
		
		return properties;
    }
  };
});

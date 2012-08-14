if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
	
    argsAsArray : function(fn, arr) {
		// not quite sure what this is testing?
		return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
		return fn.call(obj);
    },

    functionFunction : function(str) {
		return function(str2) {
			return str + ', ' + str2;
		};
    },

    makeClosures : function(arr, fn) {
		var funs = [];
		for (var i = 0; i < arr.length; i++) {
			funs.push(
				(function(num) {
					return function() {
						return fn(num);
					};
				})(arr[i])
			);
		}
		return funs;
    },

    partial : function(fn, str1, str2) {
		return function(str3) {
			return fn(str1, str2, str3);
		};
    },

    useArguments : function() {
		var total = 0;
		for (var i = 0; i < arguments.length; i++) {
			total += arguments[i];
		}
		return total;
    },

    callIt : function(fn) {
		// convert to Array
		var args = Array.prototype.slice.call(arguments);
		
		// remove the first argument
		args.shift();
		
		return fn.apply({}, args);
    },

    curryIt : function(fn) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();
		
		return function() {
			var args2 = Array.prototype.slice.call(arguments);
			return fn.apply({}, args.concat(args2));
		};
    }
  };
});

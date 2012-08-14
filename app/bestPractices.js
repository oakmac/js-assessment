if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
		
		// I'm not sure this is the purpose of this test, but the result
		// is the same
		if (flag) {
			return "a";
		}
		
		return "b";
		
	/*
      if (flag) {
        function getValue() { return "a"; }
      } else {
        function getValue() { return "b"; }
      }

      return getValue();
	*/
	
    },

    parseInt : function(num) {
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
		if (val1 === val2) {
			return true;
		}
		
		return false;
    }
	
  }; // end return
}); // end define()

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	
  return {
	
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			// skip values that not numbers
			if (typeof arr[i] !== 'number') continue;
			
			sum += arr[i];
		}
		return sum;
    },

	// remove all values of item from arr
    remove : function(arr, item) {
		var arr2 = [];
		
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === item) continue;
			
			arr2.push(arr[i]);
		}
		
		return arr2;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
    },

    count : function(arr, item) {
		var count = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				count++;
			}
		}
		return count;
    },

    duplicates : function(arr) {
		var dupes = [];
		for (var i = 0; i < arr.length; i++) {
			var count = this.count(arr, arr[i]);
			
			if (count >= 2 && dupes.indexOf(arr[i]) === -1) {
				dupes.push(arr[i]);
			}
		}
		return dupes;
    },

    square : function(arr) {
		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push( Math.pow(arr[i], 2) );
		}
		return arr2;
    },

    findAllOccurrences : function(arr, target) {
		var occ = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === target) {
				occ.push(i);
			}
		}
		return occ;
    }
	
  }; // end return
}); // end define()

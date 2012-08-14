if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(greeting, name) {

	  return {
		greeting : greeting,
		name     : name,
		sayIt    : function() {
			return this.greeting + ', ' + this.name;
		}
	  };

    }
  };
});


var slice = [].slice;

module.exports = {
	enable: false,
	clear: function clear() {
		if (typeof console !== "undefined" && console !== null && console.clear != null) {
			return console.clear();
		}
	},
	log: function log() {
		var args;
		args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		if (this.enable) {
			if (typeof console !== "undefined" && console !== null && console.log != null && console.log.apply != null) {
				return console.log.apply(console, args);
			} else {
				return console.log(args);
			}
		}
	},
	debug: function debug() {
		var args;
		args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		if (this.enable) {
			if (typeof console !== "undefined" && console !== null && console.debug != null && console.debug.apply != null) {
				return console.debug.apply(console, args);
			} else {
				return console.log(args);
			}
		}
	},
	info: function info() {
		var args;
		args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		if (this.enable) {
			if (typeof console !== "undefined" && console !== null && console.info != null && console.info.apply != null) {
				return console.info.apply(console, args);
			} else {
				return console.log(args);
			}
		}
	},
	warn: function warn() {
		var args;
		args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		if (this.enable) {
			if (typeof console !== "undefined" && console !== null && console.warn != null && console.warn.apply != null) {
				return console.warn.apply(console, args);
			} else {
				return console.log(args);
			}
		}
	},
	error: function error() {
		var args;
		args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		if (this.enable) {
			if (typeof console !== "undefined" && console !== null && console.error != null && console.error.apply != null) {
				return console.error.apply(console, args);
			} else {
				return console.log(args);
			}
		}
	}
};
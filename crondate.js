(function() {
	var output = (function() {
		return function CronDate(dateOverrider) {
			var date = this;
			date.minute = "0";
			date.hour = "*";
			date.day = "*";
			date.month = "*";
			date.dayOfWeek = "*";
			date.set = function(dateOverrider) {
				return date = Object.assign({}, date, dateOverrider);
			};
			date.asString = function() {
				return [date.minute, date.hour, date.day, date.month, date.dayOfWeek].join(" ");
			};
			date.asObject = function() {
				return {
					minute: date.minute,
					hour: date.hour,
					day: date.day,
					month: date.month,
					dayOfWeek: date.dayOfWeek
				}
			};
			if (dateOverrider) {
				date = Object.assign({}, date, dateOverrider);
			}
			return date;
		};
	})();
	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
		module.exports = output;
	} else if (typeof define === "function" && typeof define.amd !== "undefined") {
		define([], () => output);
	} else {
		window[arguments[0]] = output;
	}
})("CronDate");
(function($) {

	var NoisyBtn = function() {
		var self = this;

		self.options = {
			'text-transform': 'capitalize'
		};


		self.init = function(elem, options) {
			$.extend(self.options, options);
			elem.css(self.options);
			elem.hover(function(){
				elem.append('ha');
			});
			elem.click(function() {
				alert(elem.html());
			});

			return self;
		}

		self.shutup = function() {
			$('.noisyBtn').off();
		}
	}

	$.fn.noisyBtn = function(options) {
		return (new NoisyBtn).init(this, options);
	}

})(jQuery);
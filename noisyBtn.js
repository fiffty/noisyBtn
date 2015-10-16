(function($) {

	var NoisyBtn = function() {
		var self = this;

		self.options = {
			'text-transform': 'capitalize'
		};


		self.init = function(elem, options) {
			self.elem = elem;

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
	}

	NoisyBtn.prototype.shutup = function() {
		this.elem.off();
		console.log('Noisy Button is disabled now');
	}

	$.fn.noisyBtn = function(options) {
		return (new NoisyBtn).init(this, options);
	}

})(jQuery);
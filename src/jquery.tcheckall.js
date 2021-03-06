/**
 * https://github.com/berumen/tCheckAll
 * Created by Alfredo Berumen Saldivar.
 * User: berumen
 * Date: 2014-06-04
 * @berumen
 * http://alfredberumen.com
 * Licensed under the MIT license 
 */
(function($) {
	$.fn.tCheckAll = function(options) 
	{	
		return this.each(function(index, element) {
			var base = element,
			$base    = $(element);

			var condition = true;
			var name      = $("#"+ $base.attr('id'));
			
			base.init = function() {
				name.on("click", function(event)
				{
					event.preventDefault();
					var control = $(this);
					$(this).closest('fieldset').find(':checkbox').each(function(){	
						if( condition )
							$(this).prop('checked', true);
						else
							$(this).prop('checked', false);
					});
					
					if( condition )
						base.checkAll(control);
					else
						base.unCheckAll(control);
					condition = !condition;
				});
			};
	  
			base.checkAll = function(control) {
				control.trigger("beforeCheck");
			};
	  
			base.unCheckAll = function(control) {
				control.trigger("beforeUnCheck");
			};
	  
			base.init();	  
		});
	};
})(jQuery);
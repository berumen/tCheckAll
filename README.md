tCheckAll, What is this?
---------------------
tCheckAll is a jquery plugin that allows you to check or uncheck all your checkboxes. <br>
It was built using the jQuery library.



Author
------
Copyright (c) 2014 Alfredo Berumen Saldivar <br>
<a href="http://berumen.pw" target="_blank">http://berumen.pw</a> <br>
<a href="https://twitter.com/berumen">@berumen</a><br>



How to use
----------
Include tCheckAll plugin in your website directory then load files in the <head> section of your HTML document.
Don't forget to add the jQuery library (version 1.9+).

	<head>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="/jquery.tcheckall.min.js"></script>
    </head>

Just put your 'Check All' link, button or any clickable element identified by an id inside a <fieldset> tag, use whatever name you wish for the id.
For example:
	
	<div id="my_id">
  		<fieldset style="width: 5%">
			<legend>Select</legend>
			<a href="javascript:void(0)" id="all"> Select All</a><br />
    		<input type="checkbox" name="my_name[]" value="1" />1<br />
			<input type="checkbox" name="my_name[]" value="2" />2<br />
            <input type="checkbox" name="my_name[]" value="3" />3<br />
    		<input type="checkbox" name="my_name[]" value="4" />4<br />
    		<input type="checkbox" name="my_name[]" value="5" />5<br />
    	</fieldset>
	</div>

Trigger the plugin using the following code:

    <script>
        $(document).ready(function() {
        	$('#all').tCheckAll();		
        });
    </script>

You can use the following custom events and add your own code

    <script>
        $(document).ready(function() {
			
			$("#all").on("beforeCheck", function() {
				$(this).text('Un Check All');
			});
			$("#all").on("beforeUnCheck", function() {
				$(this).text('Check All');
			});
        });
    </script>	
	
	
Example
-------
For a live demonstration visit:
<a href="http://jsfiddle.net/berumen/2nx2B/" target="_blank">tShift demo</a>

Or visit the official web page:
<a href="http://berumen.github.io/tCheckAll/" target="_blank">Official site</a>

	
License
-------
Licensed under MIT license


Supported Browsers
------------------
Chrome<br />
Safari 6.02+<br />
Firefox 17+<br />
IE 7+<br />
Opera 12.11+<br />



Bug tracker
-----------
Have a bug? Please create an issue on GitHub at https://github.com/berumen/tCheckAll/issues
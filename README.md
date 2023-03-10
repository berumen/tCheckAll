## tCheckAll, What is this?

tCheckAll is a jquery plugin that allows you to check/uncheck all the checkboxes inside a <fieldset> tag. <br>

## Author

Copyright (c) 2023 Alfredo Berumen Saldivar <br>
<a target="_blank" href="http://berumen.xyz">http://berumen.xyz</a> <br>
<a target="_blank" href="https://twitter.com/berumen">@berumen</a><br>

## How to use

Include tCheckAll plugin in your website directory then load files in the <head> section of your HTML document.
Don't forget to add the jQuery library (v >= 1.12.4)

    <head>
    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
      crossorigin="anonymous"
    ></script>
        <script type="text/javascript" src="jquery.tcheckall.min.js"></script>
    </head>

Just put your 'Check All' link, button or any clickable element identified by an id inside a <fieldset> tag, use whatever name you wish for the id.
For example:

<form id="my_id">
<fieldset>
<legend>Select</legend>
<a href="javascript:void(0)" id="all"> Select All</a><br />
<input type="checkbox" name="my_name[]" value="1" />1<br />
<input type="checkbox" name="my_name[]" value="2" />2<br />
<input type="checkbox" name="my_name[]" value="3" />3<br />
<input type="checkbox" name="my_name[]" value="4" />4<br />
<input type="checkbox" name="my_name[]" value="5" />5<br />
</fieldset>
</form>

Trigger the plugin using the following code:

    <script>
        $(document).ready(function() {
        	$('#all').tCheckAll();
        });
    </script>

You can set the title and the state of the checkboxes

    <script>
        $(document).ready(function() {
        	$('#myCheck').tCheckAll({
                checkTxt: 'Check',
                unckeckTxt: 'Uncheck',
                cheked: true,
            });

            $('#myNewCheck').tCheckAll({
                cheked: true,
            });
        });
    </script>

You can use the following custom events and add your own code

    <script>
        $(document).ready(function() {

    		$("#all").on("beforeCheck", function() {
    			console.log('some code here...beforeCheck event');
    		});
    		$("#all").on("beforeUnCheck", function() {
    			console.log('more code here...beforeUnCheck event');
    		});
        });
    </script>

## Example

For a live demonstration visit:
<a href="https://codepen.io/berumen/pen/yLxPWPm" target="_blank">tCheckAll demo</a>

Or visit the official web page:
<a href="http://berumen.github.io/tCheckAll/" target="_blank">Official site</a>

## License

Licensed under MIT license

## Bug tracker

Have a bug? Please create an issue on GitHub at https://github.com/berumen/tCheckAll/issues

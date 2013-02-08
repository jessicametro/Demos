$(document).ready(function() {

	var list = [$('#0').text(), $('#1').text(), $('#2').text(), $('#3').text()];  // list of blurbs
	
	var txt = $('#txtlzr');  // The container in which to render the list
	
	var options = {
	  duration: 800,          // Time (ms) each blurb will remain on screen
	  rearrangeDuration: 1200, // Time (ms) a character takes to reach its position
	  effect: 'random',        // Animation effect the characters use to appear
	  centered: true           // Centers the text relative to its container
	}
	
	txt.textualizer(list, options); // textualize it!
	txt.textualizer('start'); // start
	
});
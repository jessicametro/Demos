$(window).load(function() {
    $(function() {
		$(".demo1").click(function() {
			$(".demo1").addClass("clicked").html("Goodbye!");
			setTimeout(function() {
				$(".demo1").removeClass('clicked').html("Hello!");
			}, 2000);
			
		});
		$(".demo2").click(function() {
			$(".demo2").toggleClass("clicked");
		});
	});
});
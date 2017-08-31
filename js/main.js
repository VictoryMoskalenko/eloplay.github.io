	angular
	.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
	.controller('pageICO_Ctr', function($scope, $window) {

		$scope.scrollPos = 0;

		$window.onscroll = function(){
			$scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
			$scope.bottomScrolPos = document.body.clientHeight - $scope.scrollPos;
			$scope.$apply(); //or simply $scope.$digest();
			//console.log('$scope.scrollPos= '+$scope.scrollPos);// проверяем значение скролла
			//console.log( $scope.bottomScrolPos );
	};

	});

	$(function() {

		AOS.init();

		$('.in-media').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
			appendArrows: $('.sl-class-arrow'),
			appendDots: $('.sl-class-dots'),
			prevArrow: '<i class="icon-arrow-left"></i>',
			nextArrow: '<i class="icon-arrow-right"></i>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 500,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$('.slick-command').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: false,
			appendArrows: $('.command-class-arrow'),
			//appendDots: $('.command-class-dots'),
			prevArrow: '<i class="icon-arrow-left"></i>',
			nextArrow: '<i class="icon-arrow-right"></i>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 650,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 576,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$('a#ex1').on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 800);
		});


		var dataStart = moment('2017-10-09 12:00:00Z').valueOf();//2017-10-09 12:00:00 UTC

		var x = setInterval(function() {

				var distance = dataStart - moment().valueOf();
				var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((distance % (1000 * 60)) / 1000);
				
				$("#days").text(days);
				$("#hours").text(hours);
				$("#minutes").text(minutes);
				$("#seconds").text(seconds);

				/*    if (distance < 0) {
						clearInterval(x);
						document.getElementById("demo").innerHTML = "EXPIRED";
				}*/
		}, 1000);

	});
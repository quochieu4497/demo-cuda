
var elm = $('.home-skill').offset().top

$(window).scroll(function () {
	if ($(window).scrollTop() >= elm && $(window).scrollTop() < elm+10) {
		myDoughnutChart()
	}
})
$(document).ready(function () {
	fiter()
	myDoughnutChart()
});
//filter


function fiter() {
	$('.home-our .container .farther-filter .tab .filter li').on('click', function () {
		$(this).parents('.tab').find('li').removeClass('active')
		$(this).toggleClass('active')

		var el = $(this).attr('data-open')
		
		$(this).parents('.tab').find('.contaier .item').removeClass('active')
		$(this).parents('.tab').find('.contaier .item#'+el).addClass('active')
	})
}
//
console.log(elm)
	// docS = $(window).scrollTop(),
	// docH = $(window).height(),
	// run = false
//chart
function myDoughnutChart() {
	var dnl = $('.myDoughnutChart').length
	for (let i = 0; i < dnl; i++) {
		//Khởi tạo data
		var count = $('.js-count')[i].innerText
		var data = {
			datasets: [{
				//percent
				data: [count, 100 - count],
				//color
				backgroundColor: [
					'#30bae7',
					'#dfe8ed',
				],
			}],
		};
		var options = {
			cutoutPercentage: 75,
		}
		//tạo vòng tròn
		var myDoughnutChart = new Chart($('.myDoughnutChart')[i], {
			type: 'doughnut',
			data: data,
			options: options
		});
	}
}

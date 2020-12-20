let slider = [
	{img: 'win_600x375.jpg', title: 'Победи себя и выиграешь тысячи битв!', author: 'Будда', position: 'top'},
	{img: 'kritik.jpg', title: 'Кто может, тот делает. <br/>Кто не может, тот критикует.', author: 'Чак Паланик', position: 'bottom'},
	{img: 'inside_497x332.jpg', title: 'Мир идет изнутри, не ищи его снаружи.', author: 'Будда', position: 'bottom'},
	{img: 'teacher.jpg', title: 'Кто умеет - тот делает. <br/>Кто не умеет - тот учит. <br/>А кто не умеет учить - тот учит как учить.', author: 'Лоуренс Питер', position: 'bottom'},
	{img: 'can_600x398.jpg', title: 'Тот может, <br/>кто думает, что может.', author: 'Будда', position: 'top'},
	{img: 'problem.jpg', title: 'Если у тебя проблема, попробуй ее решить. <br/>Не можешь ее решить, тогда не делай из этого проблемы.', author: 'Будда', position: 'bottom'},
	{img: 'work.jpg', title: 'Работать надо не 12 часов, <br/>а головой.', author: 'Стив Джобс', position: 'top'},
];
let count = slider.length;

let content = document.getElementById('content');
let inner = '';
let active = 0;

slider.forEach(function(slide, key, array) {
	inner += '<div class="slider__item" style="background-image: url(assets/images/' + slide.img + ')">';
	inner += '<div class="slider__title ' + slide.position + '">' + slide.title;
	inner += '<div class="slider__author">' + slide.author + '</div></div>';
	inner += '</div>';
});

content.innerHTML = inner;

let sliders = content.getElementsByClassName('slider__item');
changeSlide();
let show = setInterval(() => changeSlide(), 3000);

function changeSlide() {
	for(let i = 0; i < count; i++) {
		if(i === (active % count)) {
			sliders[i].className = 'slider__item active';
		} else {
			sliders[i].className = 'slider__item';
		}
	}
	active++;
}
function turnLeft() {
	//clearInterval(show );
	active += count - 2;
	changeSlide();
	//show = setInterval(() => changeSlide(), 3000);

}
function turnRight() {
	//clearInterval(show);
	
	changeSlide();
	//show = setInterval(() => changeSlide(), 3000);

}
document.getElementById('slider').onmouseover = function(evenr) {
	clearInterval(show);
};
document.getElementById('slider').onmouseout = function(evenr) {
	show = setInterval(() => changeSlide(), 3000);
};
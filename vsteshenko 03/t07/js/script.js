let li = document.getElementsByTagName('li');

for (i = 0; i < li.length; i++) {
    if (li[i].className !== 'good' && li[i].className !== 'evil' && li[i].className !== 'unknown') {
        li[i].className = 'unknown';
    }
    if(!li[i].hasAttribute('data-element')) {
        li[i].setAttribute('data-element', 'none');
    }
	let data = li[i].getAttribute('data-element').split(' ');
	li[i].insertAdjacentHTML('beforeend', '<br/>');
    data.forEach(function(item, index, array) {
        if (item.length > 0) {
           li[i].insertAdjacentHTML('beforeend', '<div class="elem ' + item + '">' 
		+ (item === 'none' ? '<div class="line"></div>' : '') 
		+ '</div>');
        }
		
	});


}
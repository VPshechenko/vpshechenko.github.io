document.getElementById('addNote').addEventListener('click', () => addNotes());
document.getElementById('clearNote').addEventListener('click', () => clearNotes());

let storage = 'ls';
renderOutput();

function addNotes() {
	let textField = document.getElementById('area');
	
	if(textField.value) {
		if(storage === 'cookie') {
			
			document.cookie = Date.now() + '=' + textField.value + '; expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

		} else {
			localStorage.setItem(Date.now(), textField.value);
		}	
	} else {
		alert('It\'s empty. Try to input something in "Text input"');
	}
    
	textField.value = '';
    renderOutput();
}

function clearNotes() {
	if(confirm('Are You sure?')) {
		if(storage === 'cookie') {
			cookieToArray(document.cookie).forEach((item, index, key) => {
				document.cookie = item[0] + '=1; max-age=-1';
			});
			
		} else {
			localStorage.clear();
		}
	}
    renderOutput();
}

function renderOutput() {
	let render = '';
    if(storage === 'cookie') {
		if(document.cookie) {
			cookieToArray(document.cookie).forEach((item, index, key) => {
				render += '--> ' + item[1] + '<br/>';
			});
		} else {
			render += '[Empty]';
		}
		
     } else {
		if (localStorage.length > 0) {
			storageToArray(localStorage).forEach((item, index, key) => {
				render += '--> ' + item[1] + ' [' + getFormattedDate(new Date(item[0] * 1)) + ']<br/>';
			});
		} else {
			render += '[Empty]';
		}
		
	}
	document.getElementById('render').innerHTML = render;
}

function cookieToArray(cook) {
	let obj = {};
	cook.split('; ').forEach((item, index, array) => {
		obj[item.split('=')[0]] = item.split('=')[1];
	});
	//obj = {куки1: значение, куки2: значение и т.д}
	return Object.entries(obj); // array = [[куки1, значение],[куки2, значение], и т.д.]
}

function storageToArray(stor) {
	let arr = [];
	for(let i = 0; i < stor.length; i++) {	
		let key = stor.key(i);
		arr.push([key, stor.getItem(key)]);
	  }
	return arr;
}

function getFormattedDate(dateObject) {
    let res = '';

    res +=      new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getDate()) + '.'
            +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format((dateObject.getMonth() + 1)) + '.'
            +   (dateObject.getFullYear() - 2000) + ', '
            +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getHours()) + ':'
            +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getMinutes()) + ':'
			+   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getSeconds());
    return res;
}
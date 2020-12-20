let placeholder = document.getElementById('placeholder');
let notification = document.getElementById('notification');

let thisId = '';

let heroes = [
	{name: 'Black Panther', strenght: 66, age: 53},
	{name: 'Captain America', strenght: 79, age: 137},
	{name: 'Captain Marvel', strenght: 97, age: 26},
	{name: 'Hulk', strenght: 80, age: 49},
	{name: 'Iron Man', strenght: 88, age: 48},
	{name: 'Spider-Man', strenght: 78, age: 16},
	{name: 'Thanos', strenght: 99, age: 1000},
	{name: 'Thor', strenght: 95, age: 1000},
	{name: 'Yon-Rogg', strenght: 73, age: 52},
];

let sorting = {
	name: 'Desc', strenght: 'Asc', age: 'Asc'
}
placeholder.innerHTML = getTable(heroes);

function getTable(heroes) {
	let html = '<table>\n';
	html += '<tr><th id="name" onclick="clickName()">Name</th><th id="strenght" onclick="clickStrenght()">Strenght</th><th id="age" onclick="clickAge()">Age</th></tr>';
	heroes.forEach(function(item, key, array) {
		html += '<tr><td>' + item.name + '</td><td>' + item.strenght + '</td><td>' + item.age + '</td></tr>'
	});
	html += '</table>'
	return html;
}

function clickName() {
	thisId = 'name';
	switchSorting();
}

function clickStrenght() {
	thisId = 'strenght';
	switchSorting();
}

function clickAge() {
	thisId = 'age';
	switchSorting();
}

function compareHeroes (hero1, hero2) {
	if(hero1[thisId] > hero2[thisId]) return 1;
	if(hero1[thisId] === hero2[thisId]) return 0;
	if(hero1[thisId] < hero2[thisId]) return -1;
}

function switchSorting() {
	heroes.sort(compareHeroes);
	if(sorting[thisId] === 'Asc') {
		addNotification();
		sorting = {name: 'Asc', strenght: 'Asc', age: 'Asc'};
		sorting[thisId] = 'Desc';
		
	} else {
		addNotification();
		sorting = {name: 'Asc', strenght: 'Asc', age: 'Asc'};
		heroes.reverse();
		sorting[thisId] = 'Asc';
	}
	placeholder.innerHTML = getTable(heroes);
}

function addNotification() {
	notification.innerHTML = 'Sorting by ' + tocamelCase(thisId) + ', order: ' + sorting[thisId];
}

function tocamelCase(str) {
	let strNew = str[0].toUpperCase() + str.substring(1);
	return strNew;
}
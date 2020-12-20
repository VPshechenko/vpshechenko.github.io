let superTeam = {
    title: '',
    leader: '',
    members: Array(),
    memberCount: 0,
    agenda: '',
    isEvil: true,
};

superTeam.title = validPrompt('Введите название команды Супергероев');
superTeam.leader = validPrompt('Введите имя лидера');
superTeam.isEvil = confirm('Это злая команда? (нажмите ОК) Если не злая нажмите Отмена.');
superTeam.members = validPrompt('Введите имена супергероев через запятую').split(',');
superTeam.memberCount = superTeam.members.length + 1;
superTeam.agenda = validPrompt('Чем занимается команда? Введите цель.');

function validPrompt(msg, reg = false) {
    let answer;
    do {
        answer = prompt(msg);
    }
    while (!(answer.length > 0));
    return answer;
}

let res = "Here's the team:\n";
for (let item in superTeam) {
    res += item + ' - ' + superTeam[item] + '\n';
}
alert(res);

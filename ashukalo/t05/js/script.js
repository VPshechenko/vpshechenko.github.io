let str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for..";
alert (str1.length);
console.log(str1.charAt(2));
console.log(str1.toUpperCase());
console.log(`${str1} - Catwoman`);
let str2 = `Batman: "I tried to save you."`;
let str3 = `Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful"`; 
console.log (str3.replace(/Catwoman/gi ," " ));
alert (`Just string: ${str1} \nLength: ${str1.length} \nCharacter number 2 is: ${str1.charAt(2)} \nTo uppercase: ${str1.toUpperCase()} \nConcatenation in a phrase: ${`${str1} - Catwoman`} \n[Batman returns]${str2} \n ${str3.replace(/Catwoman/gi ," " )}` )

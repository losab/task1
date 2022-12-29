 //task1

let A = {
    userName: 'Ana',
     userAge: 28,
 }
let B = {
     userName: 'Levani',
     userAge: 21,
 }
let C = 'ანა ლევანიზე 7 წლით უფროსია';
 if(A.userAge - B.userAge == 7){
     console.log(C);
}

//task2
let peopleArray = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];
console.log(peopleArray[4]);
//console.log(peopleArray[peopleArray.length / 2 | 0])

//task3
const student = {
    firstName : 'Sandro',
    lastName : 'Kekelia',
    userAge : 24,
    subjects : ['bote', 'kaikaci', 'nerd', 'madzungala', 'tavxedi'],
    roommate : {
        fullName : 'Mariam losaberidze',
        age : 22, 
    }
}

for(let i = 0; i < student.subjects.length; i++) {
    console.log(student.subjects[i]);
}

const fullName = student.firstName + ' ' + student.lastName;
console.log(fullName);
const result = `${fullName} is ${student.userAge} years old and his roommate is ${student.roommate.fullName}`;
console.log(result);

//task4
// gavaketet masivi sadacaa 4 string da 2 nomeri
const fruits = ["Banana", "Orange", "Apple", "Mango",2,12];

// cvladi ciklistvis romelic 0is tolia
let i = 0;

// while ciklit chven yovel jerze vimeorebt operacias manamde sanam chveni ""i""" cvladi aris fruits masivis zomaze (6)ze naklebi 
while(i < fruits.length){
    // ciklis operaciashi vamowmebt fruits-is masivis i indexis itemi aris tu ara string typeof funcqiit
    if(typeof fruits[i] === 'string') {
        // tu aris stringi vlogavt arsebul items da vzrdit i cvalds ertit aritmetikuli progresiit i++
        console.log(fruits[i]);
        i++;
    } else {
        // tu ar aris stringi arsebuli itemi mashin vastopebt while loops
        break;
    }
}

//task5
const numbers = [12,23,43,11,9,2,121,90];

for(let i=0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0 && numbers[i] > 31)  {
        console.log('Element is greater than provided value and is EVEN');
    } 
    
    if(numbers[i] % 2 !== 0 && numbers[i] < 31){
        console.log('Element is less than provided value and is ODD');
    }
}
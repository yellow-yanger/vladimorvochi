let subjectsjson = [
    ["I", "WAS", "AM", "WILL BE", "DO", "DON'T", "Я"],
    ["YOU", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ТЫ"],
    ["WE", "WERE", "ARE", "WILL BE", "DO", "DON'T", "МЫ"],
    ["THEY", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ОНИ"],
    ["HE", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОН"],
    ["SHE", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОНА"],
    ["IT", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОНО"],
    ["MY BROTHER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "МОЙ БРАТ"],
    ["MY BROTHERS", "WERE", "ARE", "WILL BE", "DO", "DON'T", "МОИ БРАТЬЯ"]
]

let verbjson = [
    ["GO", "WENT", "GONE", "GOING", "GOES", "идти"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "создавать"],
    ["SAY", "SAID", "SAID", "SAYING", "SAYS", "говорить"],
    ["GET", "GOT", "GOT", "GETTING", "GETS", "получать"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать"],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать"],
    ["FIND", "FOUND", "FOUND", "FINDING", "FINDS", "находить"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить"],
    ["TRY", "TRIED", "TRIED", "TRYING", "TRIES", "пытаться"],
    ["NEED", "NEEDED", "NEEDED", "NEEDING", "NEEDS", "нуждаться"],
    ["FEEL", "FELT", "FELT", "FEELING", "FEELS", "чувствовать"],
    ["BECOME", "BECAME", "BECOME", "BECOMING", "BECOMES", "становиться"],
    ["LEAVE", "LEFT", "LEFT", "LEAVING", "LEAVES", "уходить"],
    ["PUT", "PUT", "PUT", "PUTTING", "PUTS", "класть"],
    ["HAVE", "HAD", "HAD", "HAVING", "HAS", "иметь"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "делать"],
    ["SAY", "SAID", "SAID", "SAYING", "SAYS", "говорить"],
    ["GET", "GOT", "GOT", "GETTING", "GETS", "получать"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать"],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать"],
    ["FIND", "FOUND", "FOUND", "FINDING", "FINDS", "находить"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить"],
    ["TRY", "TRIED", "TRIED", "TRYING", "TRIES", "пытаться"],
    ["NEED", "NEEDED", "NEEDED", "NEEDING", "NEEDS", "нуждаться"],
    ["FEEL", "FELT", "FELT", "FEELING", "FEELS", "чувствовать"],
    ["BECOME", "BECAME", "BECOME", "BECOMING", "BECOMES", "становиться"],
    ["LEAVE", "LEFT", "LEFT", "LEAVING", "LEAVES", "уходить"],
    ["PUT", "PUT", "PUT", "PUTTING", "PUTS", "класть"],
    ["BRING", "BROUGHT", "BROUGHT", "BRINGING", "BRINGS", "приносить"]
]










const qmTense = document.getElementById('qmTense');
let ra1 = document.getElementById('ra1');
let ra2 = document.getElementById('ra2');
let ra3 = document.getElementById('ra3');
let ra4 = document.getElementById('ra4');

let wa1 = document.getElementById('wa1');
let wa2 = document.getElementById('wa2');
let wa3 = document.getElementById('wa3');
let wa4 = document.getElementById('wa4');

let qmScore = document.getElementById('qmScore');
let pointsCounter = 0; 

const mainRA = document.querySelectorAll('.ra');
const mainWa = document.querySelectorAll('.wa');










function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function openerquizz(wa1, wa2, wa3, wa4, ra1, ra2, ra3, ra4, qmTense) {

   

    const randomNumber = getRandomNumber(1, 4);
    const randomQuestion = getRandomNumber(1, 18);
    const randomSubject = getRandomNumber(0, 8);
    const randomVerb = getRandomNumber(0, 39);





    //кейсы для варианта ответов
    switch (randomNumber) {
        case 1:
            wa1.style.display = 'none';
            wa2.style.display = 'block';
            wa3.style.display = 'block';
            wa4.style.display = 'block';

            ra1.style.display = 'block';
            ra2.style.display = 'none';
            ra3.style.display = 'none';
            ra4.style.display = 'none';
            break;
        case 2:
            wa1.style.display = 'block';
            wa2.style.display = 'none';
            wa3.style.display = 'block';
            wa4.style.display = 'block';

            ra1.style.display = 'none';
            ra2.style.display = 'block';
            ra3.style.display = 'none';
            ra4.style.display = 'none';
            break;
        case 3:
            wa1.style.display = 'block';
            wa2.style.display = 'block';
            wa3.style.display = 'none';
            wa4.style.display = 'block';

            ra1.style.display = 'none';
            ra2.style.display = 'none';
            ra3.style.display = 'block';
            ra4.style.display = 'none';
            break;

        case 4:
            wa1.style.display = 'block';
            wa2.style.display = 'block';
            wa3.style.display = 'block';
            wa4.style.display = 'none';

            ra1.style.display = 'none';
            ra2.style.display = 'none';
            ra3.style.display = 'none';
            ra4.style.display = 'block';

            break;

    }


    //кейсы tensess
   
    const S = subjectsjson [randomSubject][0];
    const Ving = verbjson [randomVerb] [3];
    const BePast = subjectsjson [randomSubject][1];
    const BePresent = subjectsjson [randomSubject] [2];
    const BeFuture = subjectsjson [randomSubject] [3];
    const V1 = verbjson [randomVerb] [0];
    const V2 = verbjson [randomVerb] [1];
    const V3 = verbjson [randomVerb] [2];
    const DoDoes = subjectsjson [randomSubject][4];
  
    const VFake = verbjson [randomVerb] [4];
    const DontDoesnt = subjectsjson [randomSubject] [5];

    // опять костыль // 

    let Vpresent;
    if (randomSubject === 4 || randomSubject === 5 || randomSubject === 6 || randomSubject === 7) {
           Vpresent = verbjson [randomVerb] [4]
        } else { Vpresent = verbjson [randomVerb] [0]}





    const fakePastCntFormula1 = `${S} ${BePast} ${V1}`
    const fakePastCntFormula2 = `${S} ${Ving}`
    const fakePastCntFormula3 = `${S} ${BePast} ${V1}`
    const fakePastCntFormula4 = `${S} ${BePast} ${V2}`

    const fakePastCntFormula1Q = `${S} ${BePast} ${Ving} ?`
    const fakePastCntFormula2Q = `${S} ${Ving} ?`
    const fakePastCntFormula3Q = `${BePast} ${S} ${V1} ?`
    const fakePastCntFormula4Q = `${BePast} ${S} ${V2} ?`

    const fakePastCntFormula1N = `${S} ${BePast} NOT ${V1}`
    const fakePastCntFormula2N = `${S} NOT ${Ving}`
    const fakePastCntFormula3N = `${S} ${BePast} NOT ${V1}`
    const fakePastCntFormula4N = `${S} ${BePast} NOT ${V2}`

    const fakePresentCntFormula1 = `${S} ${BePresent} ${V1}`
    const fakePresentCntFormula2 = `${S} ${Ving}`
    const fakePresentCntFormula3 = `${S} ${BePresent} ${V1}`
    const fakePresentCntFormula4 = `${S} ${BePresent} ${V2}`

    const fakePresentCntFormula1Q = `${S} ${BePresent} ${Ving} ?`
    const fakePresentCntFormula2Q = `${S} ${Ving} ?`
    const fakePresentCntFormula3Q = `${BePresent} ${S} ${V1} ?`
    const fakePresentCntFormula4Q = `${BePresent} ${S} ${V2} ?`

    const fakePresentCntFormula1N = `${S} ${BePresent} NOT ${V1}`
    const fakePresentCntFormula2N = `${S} NOT ${Ving}`
    const fakePresentCntFormula3N = `${S} ${BePresent} NOT ${V1}`
    const fakePresentCntFormula4N = `${S} ${BePresent} NOT ${V2}`

    const fakeFutureCntFormula1 = `${S} ${BePresent} ${V1}`
    const fakeFutureCntFormula2 = `${S} ${Ving}`
    const fakeFutureCntFormula3 = `${S} ${BeFuture} ${V1}`
    const fakeFutureCntFormula4 = `${S} ${BeFuture} ${V2}`

    const fakeFutureCntFormula1Q = `${S} ${BeFuture} ${Ving} ?`
    const fakeFutureCntFormula2Q = `${S} ${Ving} ?`
    const fakeFutureCntFormula3Q = `${BeFuture} ${S} ${V1} ?`
    const fakeFutureCntFormula4Q = `${BeFuture} ${S} ${V2} ?`

    const fakeFutureCntFormula1N = `${S} ${BePresent} NOT ${V1}`
    const fakeFutureCntFormula2N = `${S} NOT ${Ving}`
    const fakeFutureCntFormula3N = `${S} ${BePresent} NOT ${V1}`
    const fakeFutureCntFormula4N = `${S} ${BePresent} NOT ${V2}`

    const fakePastSpFormula1 = `${S} ${BePast} ${V1}`
    const fakePastSpFormula2 = `${S} ${Ving}`
    const fakePastSpFormula3 = `${S} WAS ${VFake}`
    const fakePastSpFormula4 = `${S} WAS ${Ving}`
    
    const fakePastSpFormula1Q = `DID ${S} ${Ving} ?`
    const fakePastSpFormula2Q = `${S} DID ${V2} ?`
    const fakePastSpFormula3Q = `${S} DID ${VFake}?`
    const fakePastSpFormula4Q = `${S} ${V1}?`

    const fakePastSpFormula1N = `${S} NOT ${V1}`
    const fakePastSpFormula2N = `${S} DID NOT ${VFake}`
    const fakePastSpFormula3N = `${S} DID NOT ${Ving} `
    const fakePastSpFormula4N = `${S} DID ${V1} NOT`

    const fakePresentSpFormula1 = `${S} ${Ving}`
    const fakePresentSpFormula2 = `${S} ${BePresent} ${V1}`
    const fakePresentSpFormula3 = `${S} ${BePast} ${V1}` 
    const fakePresentSpFormula4 = `${S} ${BePresent} ${V3}`

    const fakePresentSpFormula1Q = `${DoDoes} ${S} ${Ving} ?`
    const fakePresentSpFormula2Q = `${DoDoes} ${S} ${VFake} ?`
    const fakePresentSpFormula3Q = `${S} ${V1} ?`
    const fakePresentSpFormula4Q = `${S} ${DoDoes} ${V1} ?`

    const fakePresentSpFormula1N = `${S} ${DontDoesnt} ${Ving}`
    const fakePresentSpFormula2N = `${S} NOT ${V1}`
    const fakePresentSpFormula3N = `${S} ${BePresent} NOT ${Vpresent}`
    const fakePresentSpFormula4N = `${S} ${DoDoes} NOT ${VFake}`

    const fakeFutureSpFormula1 = `${S} WILL ${VFake}`
    const fakeFutureSpFormula2 = `${S} WILL ${Ving}`
    const fakeFutureSpFormula3 = `${S} WILL BE ${VFake}`
    const fakeFutureSpFormula4 = `${S} WILL BE ${Ving}`

    const fakeFutureSpFormula1Q = `${S} WILL ${V1} ?`
    const fakeFutureSpFormula2Q = `WILL ${S} ${Ving} ?`
    const fakeFutureSpFormula3Q = `${S} WILL ${V2}?`
    const fakeFutureSpFormula4Q = `${S} WILL ${V3}?`

    const fakeFutureSpFormula1N = `${S} WILL NOT ${Ving}`
    const fakeFutureSpFormula2N = `WILL ${S} NOT ${Ving}`
    const fakeFutureSpFormula3N = `${S} WILL BE NOT ${V2}`
    const fakeFutureSpFormula4N = `${S} WILL BE NOT ${V1}`

    const pastcontinuousformula = `${S} ${BePast} ${Ving}`;
    const pastcontinuousformulaq =`${BePast} ${S} ${Ving} ?`;
    const pastcontinuousformulan =`${S} ${BePast} NOT ${Ving}`;


    const presentcontinuousformula = `${S} ${BePresent} ${Ving}`;
    const presentcontinuousformulaq =`${BePresent} ${S} ${Ving} ?`;
    const presentcontinuousformulan =`${S} ${BePresent} NOT ${Ving}`;

    const futurecontinuousformula = `${S} ${BeFuture} ${Ving}`;
    const futurecontinuousformulaq =`WILL ${S} BE ${Ving} ?`;
    const futurecontinuousformulan =`${S} WILL NOT BE ${Ving}`;

    const pastsimpleformula = `${S} ${V2}`;
    const pastsimpleformulaq = `DID ${S} ${V1} ?`;
    const pastsimpleformulan = `${S} DID NOT ${V1}`;
    
    const presentsimpleformula = `${S} ${Vpresent}`;
    const presentsimpleformulaq = `${DoDoes} ${S} ${V1} ?`;
    const presentsimpleformulan = `${S} ${DontDoesnt} ${V1}`;

    const futuresimpleformula = `${S} WILL ${V1}`;
    const futuresimpleformulaq = `WILL ${S} ${V1} ?`;
    const futuresimpleformulan = `${S} WILL NOT ${V1}`;
    
  

    switch (randomQuestion) {
        case 1:
            qmTense.textContent = "past continuous normal"
            wa1.textContent = fakePastCntFormula1;
            wa2.textContent = fakePastCntFormula2;
            wa3.textContent = fakePastCntFormula3;
            wa4.textContent = fakePastCntFormula4;

            ra1.textContent = pastcontinuousformula;
            ra2.textContent = pastcontinuousformula;
            ra3.textContent = pastcontinuousformula;
            ra4.textContent = pastcontinuousformula;

            
            break;
        case 2:
            qmTense.textContent = "past continuous question"
            wa1.textContent = fakePastCntFormula1Q;
            wa2.textContent = fakePastCntFormula2Q;
            wa3.textContent = fakePastCntFormula3Q;
            wa4.textContent = fakePastCntFormula4Q;

            
            ra1.textContent = pastcontinuousformulaq;
            ra2.textContent = pastcontinuousformulaq;
            ra3.textContent = pastcontinuousformulaq;
            ra4.textContent = pastcontinuousformulaq;

            break;
        case 3:
            qmTense.textContent = "past continuous negative"
            wa1.textContent = fakePastCntFormula1N;
            wa2.textContent = fakePastCntFormula2N;
            wa3.textContent = fakePastCntFormula3N;
            wa4.textContent = fakePastCntFormula4N;

            
            ra1.textContent = pastcontinuousformulan;
            ra2.textContent = pastcontinuousformulan;
            ra3.textContent = pastcontinuousformulan;
            ra4.textContent = pastcontinuousformulan;

       
            break;
        case 4:
            qmTense.textContent = "present continuous normal"
            wa1.textContent = fakePresentCntFormula1;
            wa2.textContent = fakePresentCntFormula2;
            wa3.textContent = fakePresentCntFormula3;
            wa4.textContent = fakePresentCntFormula4;
           
            ra1.textContent = presentcontinuousformula;
            ra2.textContent = presentcontinuousformula;
            ra3.textContent = presentcontinuousformula;
            ra4.textContent = presentcontinuousformula;

        
            break;
        case 5:
            qmTense.textContent = "present continuous question"
            wa1.textContent = fakePresentCntFormula1Q;
            wa2.textContent = fakePresentCntFormula2Q;
            wa3.textContent = fakePresentCntFormula3Q;
            wa4.textContent = fakePresentCntFormula4Q;
           
            ra1.textContent = presentcontinuousformulaq;
            ra2.textContent = presentcontinuousformulaq;
            ra3.textContent = presentcontinuousformulaq;
            ra4.textContent = presentcontinuousformulaq;

          
            break;
        case 6:
            qmTense.textContent = "present continuous negative"
            wa1.textContent = fakePresentCntFormula1N;
            wa2.textContent = fakePresentCntFormula2N;
            wa3.textContent = fakePresentCntFormula3N;
            wa4.textContent = fakePresentCntFormula4N;

            ra1.textContent = presentcontinuousformulan;
            ra2.textContent = presentcontinuousformulan;
            ra3.textContent = presentcontinuousformulan;
            ra4.textContent = presentcontinuousformulan;

        
            break;
        case 7:
            qmTense.textContent = "future continuous normal"
            wa1.textContent = fakeFutureCntFormula1;
            wa2.textContent = fakeFutureCntFormula2;
            wa3.textContent = fakeFutureCntFormula3;
            wa4.textContent = fakeFutureCntFormula4;

            ra1.textContent = futurecontinuousformula;
            ra2.textContent = futurecontinuousformula;
            ra3.textContent = futurecontinuousformula;
            ra4.textContent = futurecontinuousformula;



            break;
        case 8:
            qmTense.textContent = "future continuous question"
            wa1.textContent = fakeFutureCntFormula1Q;
            wa2.textContent = fakeFutureCntFormula2Q;
            wa3.textContent = fakeFutureCntFormula3Q;
            wa4.textContent = fakeFutureCntFormula4Q;

            ra1.textContent = futurecontinuousformulaq;
            ra2.textContent = futurecontinuousformulaq;
            ra3.textContent = futurecontinuousformulaq;
            ra4.textContent = futurecontinuousformulaq;

      
            break;
        case 9:
            qmTense.textContent = "future continuous negative"
            wa1.textContent = fakeFutureCntFormula1N;
            wa2.textContent = fakeFutureCntFormula2N;
            wa3.textContent = fakeFutureCntFormula3N;
            wa4.textContent = fakeFutureCntFormula4N;

            ra1.textContent = futurecontinuousformulan;
            ra2.textContent = futurecontinuousformulan;
            ra3.textContent = futurecontinuousformulan;
            ra4.textContent = futurecontinuousformulan;



            break;
        case 10:
            qmTense.textContent = "past simple normal"
            wa1.textContent = fakePastSpFormula1;
            wa2.textContent = fakePastSpFormula2;
            wa3.textContent = fakePastSpFormula3;
            wa4.textContent = fakePastSpFormula4;

            ra1.textContent = pastsimpleformula;
            ra2.textContent = pastsimpleformula;
            ra3.textContent = pastsimpleformula;
            ra4.textContent = pastsimpleformula;


            break;
        case 11:
            qmTense.textContent = "past simple question"
            wa1.textContent = fakePastSpFormula1Q;
            wa2.textContent = fakePastSpFormula2Q;
            wa3.textContent = fakePastSpFormula3Q;
            wa4.textContent = fakePastSpFormula4Q;

            ra1.textContent = pastsimpleformulaq;
            ra2.textContent = pastsimpleformulaq;
            ra3.textContent = pastsimpleformulaq;
            ra4.textContent = pastsimpleformulaq;

            break;
        case 12:
            qmTense.textContent = "past simple negative"
            wa1.textContent = fakePastSpFormula1N;
            wa2.textContent = fakePastSpFormula2N;
            wa3.textContent = fakePastSpFormula3N;
            wa4.textContent = fakePastSpFormula4N;

            ra1.textContent = pastsimpleformulan;
            ra2.textContent = pastsimpleformulan;
            ra3.textContent = pastsimpleformulan;
            ra4.textContent = pastsimpleformulan;



            break;
        case 13:
            qmTense.textContent = "present simple normal"
            wa1.textContent = fakePresentSpFormula1;
            wa2.textContent = fakePresentSpFormula2;
            wa3.textContent = fakePresentSpFormula3;
            wa4.textContent = fakePresentSpFormula4;

            ra1.textContent = presentsimpleformula;
            ra2.textContent = presentsimpleformula;
            ra3.textContent = presentsimpleformula;
            ra4.textContent = presentsimpleformula;

            break;
        case 14:
            qmTense.textContent = "present simple question"
            wa1.textContent = fakePresentSpFormula1Q;
            wa2.textContent = fakePresentSpFormula2Q;
            wa3.textContent = fakePresentSpFormula3Q;
            wa4.textContent = fakePresentSpFormula4Q;

            ra1.textContent = presentsimpleformulaq;
            ra2.textContent = presentsimpleformulaq;
            ra3.textContent = presentsimpleformulaq;
            ra4.textContent = presentsimpleformulaq;



            break;
        case 15:
            qmTense.textContent = "present simple negative"
            wa1.textContent = fakePresentSpFormula1N;
            wa2.textContent = fakePresentSpFormula2N;
            wa3.textContent = fakePresentSpFormula3N;
            wa4.textContent = fakePresentSpFormula4N;

            ra1.textContent = presentsimpleformulan;
            ra2.textContent = presentsimpleformulan;
            ra3.textContent = presentsimpleformulan;
            ra4.textContent = presentsimpleformulan;



            break;
        case 16:
            qmTense.textContent = "future simple normal"
            wa1.textContent = fakeFutureSpFormula1;
            wa2.textContent = fakeFutureSpFormula2;
            wa3.textContent = fakeFutureSpFormula3;
            wa4.textContent = fakeFutureSpFormula4;

            ra1.textContent = futuresimpleformula;
            ra2.textContent = futuresimpleformula;
            ra3.textContent = futuresimpleformula;
            ra4.textContent = futuresimpleformula;


            break;
        case 17:
            qmTense.textContent = "future simple question"
            wa1.textContent = fakeFutureSpFormula1Q;
            wa2.textContent = fakeFutureSpFormula2Q;
            wa3.textContent = fakeFutureSpFormula3Q;
            wa4.textContent = fakeFutureSpFormula4Q;

            ra1.textContent = futuresimpleformulaq;
            ra2.textContent = futuresimpleformulaq;
            ra3.textContent = futuresimpleformulaq;
            ra4.textContent = futuresimpleformulaq;
  
            break;
        case 18:
            qmTense.textContent = "future simple negative"
            wa1.textContent = fakeFutureSpFormula1N;
            wa2.textContent = fakeFutureSpFormula2N;
            wa3.textContent = fakeFutureSpFormula3N;
            wa4.textContent = fakeFutureSpFormula4N;

            ra1.textContent = futuresimpleformulan;
            ra2.textContent = futuresimpleformulan;
            ra3.textContent = futuresimpleformulan;
            ra4.textContent = futuresimpleformulan;
 
            break;

    }



   


    // qmTense.textContent = randomNumber;


}






document.addEventListener('DOMContentLoaded', function () {
    mainRA.forEach(function (ra) {

        qmScore.textContent=pointsCounter;
        ra.addEventListener('click', function () {
            
          
            
            pointsCounter++; 
            qmScore.textContent = pointsCounter; 
            if(pointsCounter>=10){
                qmScore.textContent="nice start 10+";
            } 

            if(pointsCounter>=15){
                qmScore.textContent="not bad 15+";
            } 

            if(pointsCounter>=20){
                qmScore.textContent="almost good 20+";
            } 

            if(pointsCounter>=30) {
                qmScore.textContent="good JOB 30+";
            }
            if(pointsCounter>=100){
                qmScore.textContent="just...relax bro...";
            } 
            openerquizz(wa1, wa2, wa3, wa4, ra1, ra2, ra3, ra4, qmTense);
        });
    });


    mainWa.forEach(function(wa){
    
        qmScore.textContent = pointsCounter;
        wa.addEventListener('click', function (){
            pointsCounter=pointsCounter-1;
            qmScore.textContent = pointsCounter;
                        
        });

    })






    openerquizz(wa1, wa2, wa3, wa4, ra1, ra2, ra3, ra4, qmTense);






    


});







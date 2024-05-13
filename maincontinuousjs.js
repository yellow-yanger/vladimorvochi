let subjectsjson = [
    ["I", "WAS", "AM", "WILL BE", "DO", "DON'T", "Я", "WERE", "IS"],
    ["YOU", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ТЫ", "WAS", "IS"],
    ["WE", "WERE", "ARE", "WILL BE", "DO", "DON'T", "МЫ", "WAS", "IS"],
    ["THEY", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ОНИ", "WAS", "IS"],
    ["HE", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОН", "WERE", "ARE"],
    ["SHE", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОНА", "WERE", "ARE"],
    ["IT", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОНО", "WERE", "ARE"],
    ["MY BROTHER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "МОЙ БРАТ", "WERE", "ARE"],
    ["MY BROTHERS", "WERE", "ARE", "WILL BE", "DO", "DON'T", "МОИ БРАТЬЯ", "WAS", "IS"],
    ["MY FAMILY", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ТВОЯ МАМА", "WERE", "ARE"],
    ["DOCTOR", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ВРАЧ", "WERE", "ARE"],
    ["POLICEMAN", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ПОЛИЦЕЙСКИЙ", "WERE", "ARE"],
    ["MANAGER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "МЕНЕДЖЕР", "WERE", "ARE"],
    ["ACTOR", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "АКТЕР", "WERE", "ARE"],
    ["ACTRESS", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "АКТРИСА", "WERE", "ARE"],
    ["SOLDIER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "СОЛДАТ", "WERE", "ARE"],
    ["TEACHER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "УЧИТЕЛЬ", "WERE", "ARE" ],
    ["CHILD", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "РЕБЕНОК", "WERE", "ARE"],
    ["CHILDREN", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ДЕТИ", "WAS", "IS"]
]

let verbjson = [
    ["GO", "WENT", "GONE", "GOING", "GOES", "идти", "OUTSIDE"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "HOMEWORK"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать",  "WELL"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать",  "SPORT"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "создавать", "GOOD PROGRESS"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "создавать", "MONEY"],
    ["SAY", "SAID", "SAID", "SAYING", "SAYS", "говорить", "THAT"],
    ["GET", "GOT", "GOT", "GETTING", "GETS", "получать", "IN TROUBLES"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть", "A LOT OF PEOPLE"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить", "BACK"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать", "ABOUT SCHOOL" ],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать", "A SHOWER"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать", "MONEY"],
    ["FIND", "FOUND", "FOUND", "FINDING", "FINDS", "находить", "BOOKS"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить", "THE TRUTH"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать", "CAREFULLY"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить", "MY FATHER"],
    ["TRY", "TRIED", "TRIED", "TRYING", "TRIES", "пытаться", "TO WIN"],
    ["NEED", "NEEDED", "NEEDED", "NEEDING", "NEEDS", "нуждаться", "HELP"],
    ["FEEL", "FELT", "FELT", "FEELING", "FEELS", "чувствовать", "PAIN"],
    ["BECOME", "BECAME", "BECOME", "BECOMING", "BECOMES", "становиться", "A MONSTER"],
    ["LEAVE", "LEFT", "LEFT", "LEAVING", "LEAVES", "уходить", "HOME"],
    ["PUT", "PUT", "PUT", "PUTTING", "PUTS", "класть", "BOX"],
    ["HAVE", "HAD", "HAD", "HAVING", "HAS", "иметь", "FUN"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "делать", "MISTAKES"],
    ["SAY", "SAID", "SAID", "SAYING", "SAYS", "говорить", "'WE CAN DO THIS!'"],
    ["GET", "GOT", "GOT", "GETTING", "GETS", "получать", "THIS"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть", "THAT"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить", "TO MY HOME"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать", "ABOUT TEACHER"],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать", "THAT"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать", "INFORMATION"],
    ["FIND", "FOUND", "FOUND", "FINDING", "FINDS", "находить", "THE BALANCE"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить", "YOUR BROTHER"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать", "THERE"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить", "MY PARENTS"],
    ["TRY", "TRIED", "TRIED", "TRYING", "TRIES", "пытаться", "THIS"],
    ["NEED", "NEEDED", "NEEDED", "NEEDING", "NEEDS", "нуждаться", "SOMEONE'S HELP"],
    ["FEEL", "FELT", "FELT", "FEELING", "FEELS", "чувствовать", "PAIN"],
    ["BECOME", "BECAME", "BECOME", "BECOMING", "BECOMES", "становиться", "THIS"],
    ["LEAVE", "LEFT", "LEFT", "LEAVING", "LEAVES", "уходить", "SCHOOL"],
    ["PUT", "PUT", "PUT", "PUTTING", "PUTS", "класть", "THIS"],
    ["BRING", "BROUGHT", "BROUGHT", "BRINGING", "BRINGS", "приносить", "THIS"]
]

let timezonejson = [
    ["YESTERDAY", "FEW DAYS AGO", "LAST YEAR", "LAST WEEK", "LAST MONTH"],
    ["TODAY", "THESE DAYS", "THIS YEAR", "THIS WEEK", "THIS MONTH"],
    ["TOMORROW", "NEXT FEW DAYS", "NEXT YEAR", "NEXT WEEK", "NEXT MONTH"]
]
//добавить сюда json по all day, all night, all afternoon, all morning, whole итд итд итд
let timeContinuous = [
    ["ALL DAY", "ALL NIGHT", "ALL MORNING", "FOR 10 HOURS IN A ROW", "FOR 30 MINUTES", "FOR 20 MINUTES", "FOR 6 HOURS"],
    ["RIGHT NOW", "AT THE MOMENT", "JUST NOW", "NOW", "CURRENTLY", "AT THIS MOMENT", "NOW"],
    ["AT 7PM TOMORROW", "ALL NIGHT NEXT WEEK", "AT 8 PM TOMORROW", "ALL WEEK NEXT YEAR", "NEXT MONTH", "NEXT YEAR", "ALL NIGHT NEXT WEEK"]
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
    const randomQuestion = getRandomNumber(1, 6);
    const randomSubject = getRandomNumber(0, 18);
    const randomVerb = getRandomNumber(0, 42);
    const randomTime = getRandomNumber(0, 4);
    const randomTimeFORcontinuous = getRandomNumber(0, 6);


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

    const S = subjectsjson[randomSubject][0];
    const Ving = verbjson[randomVerb][3];
    const BePast = subjectsjson[randomSubject][1];
    const BePastFake = subjectsjson[randomSubject][7];
    const BePresentFake = subjectsjson[randomSubject][8];
    const BePresent = subjectsjson[randomSubject][2];
    const BeFuture = subjectsjson[randomSubject][3];
    const V1 = verbjson[randomVerb][0];
    const V2 = verbjson[randomVerb][1];
    const V3 = verbjson[randomVerb][2];
    const DoDoes = subjectsjson[randomSubject][4];

    const VFake = verbjson[randomVerb][4];
    const DontDoesnt = subjectsjson[randomSubject][5];
    const timePast = timezonejson[0][randomTime];
    const objectCntnVerb = verbjson[randomVerb][6];
    const timePastSpecial = timeContinuous[0][randomTimeFORcontinuous];
    const timePresentSpecial = timeContinuous[1][randomTimeFORcontinuous];
    const timeFutureSpecial = timeContinuous[2][randomTimeFORcontinuous];
    // опять костыль // 

    let Vpresent;
    if ([4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17].includes(randomSubject)) {
        Vpresent = verbjson[randomVerb][4];
    } else {
        Vpresent = verbjson[randomVerb][0];
    }




    // // формулы прошлого 

    // const pastcontinuousformula = `${S} ${BePast} ${Ving}`
    // const pastcontinuousformulaq = `${BePast} ${S} ${Ving} ?`
    // const pastcontinuousformulan = `${S} ${BePast} NOT ${Ving}`

    // // формулы настоящего

    // const presentcontinuousformula = `${S} ${BePresent} ${Ving}`
    // const presentcontinuousformulaq = `${BePresent} ${S} ${Ving} ?`
    // const presentcontinuousformulan = `${S} ${BePresent} NOT ${Ving}`

    // // формулы будущего 

    // const futurecontinuousformula = `${S} ${BeFuture} ${Ving}`
    // const futurecontinuousformulaq = `WILL ${S} BE ${Ving} ?`
    // const futurecontinuousformulan = `${S} WILL NOT BE ${Ving}`

    // BeVing Past (mixed)
    const TenseTextPast = `${S} (${V1}) ${objectCntnVerb} ${timePastSpecial} ${timePast}`
    const TenseWA1past = `${BePresent} ${Ving}`
    const TenseWA2past = `${BeFuture} ${Ving}`
    const TenseWA3past = `${BePresent} ${V1}`
    const TenseWA4past = `${BePast} ${V1}`
    const TenseRApast = `${BePast} ${Ving}`

    // BeVing Present (mixed)
    const TenseTextPresent = `${S} (${V1}) ${objectCntnVerb} ${timePresentSpecial}`
    const TenseWA1present = `${BePresentFake} ${Ving}`
    const TenseWA2present = `${BeFuture} ${Ving}`
    const TenseWA3present = `${BePast} ${Ving}`
    const TenseWA4present = `${BePastFake} ${Ving}`
    const TenseRApresent = `${BePresent} ${Ving}`

    // BeVing Future (mixed)
    const TenseTextFuture = `${S} (${V1}) ${objectCntnVerb} ${timeFutureSpecial}`
    const TenseWA1future = `${BePast} ${Ving}`
    const TenseWA2future = `${BePresentFake} ${Ving}`
    const TenseWA3future = `${BePastFake} ${Ving}`
    const TenseWA4future = `${BePresent} ${Ving}`
    const TenseRAfuture = `${BeFuture} ${Ving}`

    //условия для особенных вариантов вопроса
    //специальные вопросы


    //to be verbs PAST
    const waswerequestion = `${S} (BE) ${Ving} ${objectCntnVerb} ${timePastSpecial} ${timePast}`
    const waswereAnswerFake1 = `${V3}`
    const waswereAnswerFake2 = `${BeFuture}`
    const waswereAnswerFake3 = `${BePresent}`
    const waswereAnswerFake4 = `${BePastFake}`
    const waswereAnswer = `${BePast}`


    //to be verbs PRESENT
    const amareisquestion = `${S} (BE) ${Ving} ${objectCntnVerb} ${timePresentSpecial}`
    const amareisAnswerFake1 = `${BePresentFake}`
    const amareisAnswerFake2 = `${BeFuture}`
    const amareisAnswerFake3 = `${BePast}`
    const amareisAnswerFake4 = `${BePastFake}`
    const amareisAnswer = `${BePresent}`


    //to be verbs FUTURE
    const willbequestion = `${S} (BE) ${Ving} ${objectCntnVerb} ${timeFutureSpecial}`
    const willbeAnswerFake1 = `WILL`
    const willbeAnswerFake2 = `${BePresent}`
    const willbeAnswerFake3 = `${BePast}`
    const willbeAnswerFake4 = `${BePresentFake}`
    const willbeAnswer = `${BeFuture}`



    //ving
    // const vingquestion = `${S} ${BeFuture} (${V1}) ${objectCntnVerb} ${timeFutureSpecial}`
    // const vingAnswerFake1 = `${V1}`
    // const vingAnswerFake2 = `${V2}`
    // const vingAnswerFake3 = `${V3}`
    // const vingAnswerFake4 = `${VFake}`
    // const vingAnswer = `${Ving}`


    //be+ving



    // const bevingquestion = `${S} (${V1}) ${objectCntnVerb}  ${timeFutureSpecial} `
    // const bevingAnswerFake1 = `${BeFuture} ${V3}`
    // const bevingAnswerFake2 = `WILL ${Ving}`
    // const bevingAnswerFake3 = `${BeFuture} ${V1}`
    // const bevingAnswerFake4 = `${BePastFake} ${Ving}`
    // const bevingAnswer = `${BeFuture} ${Ving}`


    


    switch (randomQuestion) {
        case 1:
            //tobepast
            qmTense.textContent = waswerequestion;
            wa1.textContent = waswereAnswerFake1;
            wa2.textContent = waswereAnswerFake2;
            wa3.textContent = waswereAnswerFake3;
            wa4.textContent = waswereAnswerFake4;

            ra1.textContent = waswereAnswer;
            ra2.textContent = waswereAnswer;
            ra3.textContent = waswereAnswer;
            ra4.textContent = waswereAnswer;


            break;
        case 2:
            //tobepresent
            qmTense.textContent = amareisquestion;
            wa1.textContent = amareisAnswerFake1;
            wa2.textContent = amareisAnswerFake2;
            wa3.textContent = amareisAnswerFake3;
            wa4.textContent = amareisAnswerFake4;



            ra1.textContent = amareisAnswer;
            ra2.textContent = amareisAnswer;
            ra3.textContent = amareisAnswer;
            ra4.textContent = amareisAnswer;


            break;
        case 3:
            //tobefuture
            qmTense.textContent = willbequestion;
            wa1.textContent = willbeAnswerFake1;
            wa2.textContent = willbeAnswerFake2;
            wa3.textContent = willbeAnswerFake3;
            wa4.textContent = willbeAnswerFake4;

            ra1.textContent = willbeAnswer;
            ra2.textContent = willbeAnswer;
            ra3.textContent = willbeAnswer;
            ra4.textContent = willbeAnswer;


            break;
        case 4:
            //BeVing past
            qmTense.textContent = TenseTextPast;
            wa1.textContent = TenseWA1past;
            wa2.textContent = TenseWA2past;
            wa3.textContent = TenseWA3past;
            wa4.textContent = TenseWA4past;

            ra1.textContent = TenseRApast;
            ra2.textContent = TenseRApast;
            ra3.textContent = TenseRApast;
            ra4.textContent = TenseRApast;



            break;
        case 5:
            //BeVing present
            qmTense.textContent = TenseTextPresent;
            wa1.textContent = TenseWA1present;
            wa2.textContent = TenseWA2present;
            wa3.textContent = TenseWA3present;
            wa4.textContent = TenseWA4present;

            ra1.textContent = TenseRApresent;
            ra2.textContent = TenseRApresent;
            ra3.textContent = TenseRApresent;
            ra4.textContent = TenseRApresent;
  
            break;
        case 6:
            //BeVing future
            qmTense.textContent = TenseTextFuture;
            wa1.textContent = TenseWA1future;
            wa2.textContent = TenseWA2future;
            wa3.textContent = TenseWA3future;
            wa4.textContent = TenseWA4future;

            ra1.textContent = TenseRAfuture;
            ra2.textContent = TenseRAfuture;
            ra3.textContent = TenseRAfuture;
            ra4.textContent = TenseRAfuture;
            break;
     
        // case 11:
        //     //choose correct past continuous
        // qmTense.textContent = "choose past continuous";
        //для будущего, хорошая же идея



    }


    // qmTense.textContent = randomNumber;


}



document.addEventListener('DOMContentLoaded', function () {
    mainRA.forEach(function (ra) {

        qmScore.textContent = pointsCounter;
        ra.addEventListener('click', function () {


            pointsCounter++;
            qmScore.textContent = pointsCounter;
            if (pointsCounter >= 10) {
                qmScore.textContent = "nice start 10+";
            }
            if (pointsCounter >= 15) {
                qmScore.textContent = "not bad 15+";
            }
            if (pointsCounter >= 20) {
                qmScore.textContent = "almost good 20+";
            }
            if (pointsCounter >= 30) {
                qmScore.textContent = "good JOB 30+";
            }
            if (pointsCounter >= 40) {
                qmScore.textContent = "much better 40+";
            }
            if (pointsCounter >= 50) {
                qmScore.textContent = "you are a monster 50+";
            }
            if (pointsCounter >= 60) {
                qmScore.textContent = "be calm... 60+";
            }
            if (pointsCounter >= 70) {
                qmScore.textContent = "I mean keep CALM! 70+";
            }
            if (pointsCounter >= 80) {
                qmScore.textContent = "I mean seriously...you need to stop 80+";
            }
            if (pointsCounter >= 90) {
                qmScore.textContent = "just...relax bro... 90+";
            }
            if (pointsCounter >= 100) {
                qmScore.textContent = "GO PLAY ROBLOX";
            }

            openerquizz(wa1, wa2, wa3, wa4, ra1, ra2, ra3, ra4, qmTense);
        });
    });

    mainWa.forEach(function (wa) {

        qmScore.textContent = pointsCounter;
        wa.addEventListener('click', function () {
            pointsCounter = pointsCounter - 1;
            qmScore.textContent = pointsCounter;

        });

    })
    openerquizz(wa1, wa2, wa3, wa4, ra1, ra2, ra3, ra4, qmTense);









});

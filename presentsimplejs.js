let subjectsjson = [
    ["I", "WAS", "AM", "WILL BE", "DO", "DON'T", "Я", "WERE", "IS", "DOES"],
    ["YOU", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ТЫ", "WAS", "IS", "DOES"],
    ["WE", "WERE", "ARE", "WILL BE", "DO", "DON'T", "МЫ", "WAS", "IS", "DOES"],
    ["THEY", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ОНИ", "WAS", "IS", "DOES"],
    ["HE", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОН", "WERE", "ARE", "DO"],
    ["SHE", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОНА", "WERE", "ARE", "DO"],
    ["IT", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ОНО", "WERE", "ARE", "DO"],
    ["MY BROTHER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "МОЙ БРАТ", "WERE", "ARE", "DO"],
    ["MY BROTHERS", "WERE", "ARE", "WILL BE", "DO", "DON'T", "МОИ БРАТЬЯ", "WAS", "IS", "DOES"],
    ["MY FAMILY", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ТВОЯ МАМА", "WERE", "ARE", "DO"],
    ["DOCTOR", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ВРАЧ", "WERE", "ARE", "DO"],
    ["POLICEMAN", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ПОЛИЦЕЙСКИЙ", "WERE", "ARE", "DO"],
    ["MANAGER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "МЕНЕДЖЕР", "WERE", "ARE", "DO"],
    ["ACTOR", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "АКТЕР", "WERE", "ARE", "DO"],
    ["ACTRESS", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "АКТРИСА", "WERE", "ARE", "DO"],
    ["SOLDIER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "СОЛДАТ", "WERE", "ARE", "DO"],
    ["TEACHER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "УЧИТЕЛЬ", "WERE", "ARE", "DO"],
    ["CHILD", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "РЕБЕНОК", "WERE", "ARE", "DO"],
    ["CHILDREN", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ДЕТИ", "WAS", "IS", "DO"]
]

let verbjson = [
    ["GO", "WENT", "GONE", "GOING", "GOES", "идти", "OUTSIDE"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "HOMEWORK"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "WELL"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "SPORT"],
    ["MAKE", "MADE(v2)", "MADE(v3)", "MAKING", "MAKES", "создавать", "GOOD PROGRESS"],
    ["MAKE", "MADE(v2)", "MADE(v3)", "MAKING", "MAKES", "создавать", "MONEY"],
    ["SAY", "SAID", "SAID", "SAYING", "SAYS", "говорить", "THAT"],
    ["GET", "GOT(v2)", "GOT(v3)", "GETTING", "GETS", "получать", "IN TROUBLES"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть", "A LOT OF PEOPLE"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить", "BACK"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать", "ABOUT SCHOOL"],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать", "A SHOWER"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать", "MONEY"],
    ["FIND", "FOUND", "FOUND", "FINDING", "FINDS", "находить", "BOOKS"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить", "THE TRUTH"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать", "CAREFULLY"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить", "MY FATHER"],
    ["TRY", "TRIED", "TRIED", "TRYING", "TRIES", "пытаться", "TO WIN"],
    ["NEED", "NEEDED", "NEEDED", "NEEDING", "NEEDS", "нуждаться", "HELP"],
    ["FEEL", "FELT", "FELT", "FEELING", "FEELS", "чувствовать", "PAIN"],
    ["BECOME", "BECAME", "BECOME(v3)", "BECOMING", "BECOMES", "становиться", "A MONSTER"],
    ["LEAVE", "LEFT", "LEFT", "LEAVING", "LEAVES", "уходить", "HOME"],
    ["PUT", "PUT(v2)", "PUT(v3)", "PUTTING", "PUTS", "класть", "BOX"],
    ["HAVE", "HAD", "HAD", "HAVING", "HAS", "иметь", "FUN"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "делать", "MISTAKES"],
    ["SAY", "SAID", "SAID", "SAYING", "SAYS", "говорить", "'WE CAN DO THIS!'"],
    ["GET", "GOT", "GOT", "GETTING", "GETS", "получать", "THIS"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть", "THAT"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить", "TO MY HOME"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать", "ABOUT TEACHER"],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать", "THAT"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать", "INFORMATION"],
    ["FIND", "FOUND(v2)", "FOUND(v3)", "FINDING", "FINDS", "находить", "THE BALANCE"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить", "YOUR BROTHER"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать", "THERE"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить", "YOUR SISTER"],
    ["TRY", "TRIED", "TRIED", "TRYING", "TRIES", "пытаться", "THIS"],
    ["NEED", "NEEDED", "NEEDED", "NEEDING", "NEEDS", "нуждаться", "SOMEONE'S HELP"],
    ["FEEL", "FELT", "FELT", "FEELING", "FEELS", "чувствовать", "PAIN"],
    ["BECOME", "BECAME", "BECOME", "BECOMING", "BECOMES", "становиться", "THIS"],
    ["LEAVE", "LEFT(v2)", "LEFT(v3)", "LEAVING", "LEAVES", "уходить", "SCHOOL"],
    ["PUT", "PUT (v2)", "PUT (v3)", "PUTTING", "PUTS", "класть", "THIS"],
    ["BRING", "BROUGHT", "BROUGHT", "BRINGING", "BRINGS", "приносить", "THIS"]
]

let timezonejson = [
    ["YESTERDAY", "FEW DAYS AGO", "LAST YEAR", "LAST WEEK", "LAST MONTH"],
    ["EVERYDAY", "EVERY MORNING", "EVERY AFTERNOON", "EVERY MONTH", "EVERY MONTH"],
    ["TOMORROW", "NEXT FEW DAYS", "NEXT YEAR", "NEXT WEEK", "NEXT MONTH"]
]
// тайм зону для презент симпл изменить для общего теста, потому что большинство подходит для всех simple, мда...
// опять некий костыль получился, но хотя бы рабочий и вполне читаемый ахахах, если вы это читаете, пж не читайте дальше
// могло быть намнооого хуже, я вообще 3х мерный массив придумал выше там где список глаголов, капец
let timezonePresentSimple = [
    "EVERYDAY", "EVERY MORNING", "EVERY AFTERNOON", "EVERY EVENING", "EVERY NIGHT", "EVERY WEEK", "EVERY MONTH",
    "ALL DAY", "ALL MORNING", "ALL AFTERNOON", "ALL EVENING", "ALL NIGHT",
    "EVERY DAY", "EVERY WEEKDAY", "EVERY WEEKEND", "EVERY OTHER DAY",
    "DAILY", "WEEKLY", "MONTHLY", "YEARLY",
    "REGULARLY", "OFTEN", "FREQUENTLY", "SOMETIMES", "RARELY"
];
let timezonePresentSimplelength1 = timezonePresentSimple.length;
let timezonePresentSimplelength = timezonePresentSimplelength1 - 1;

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
    const randomQuestion = getRandomNumber(1, 10);
    const randomSubject = getRandomNumber(0, 18);
    const randomVerb = getRandomNumber(0, 42);
    const randomTime = getRandomNumber(0, 4);
    const randomTimeFORcontinuous = getRandomNumber(0, 6);
    const randomTimeFORpresentSimple = getRandomNumber(0, timezonePresentSimplelength);

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
    const DoDoesFake = subjectsjson[randomSubject][9];
    const timePresentSimple = timezonePresentSimple[randomTimeFORpresentSimple];

    const VFake = verbjson[randomVerb][4];
    const DontDoesnt = subjectsjson[randomSubject][5];
    const timePast = timezonejson[0][randomTime];
    const timePresent = timezonejson[1][randomTime];
    const objectCntnVerb = verbjson[randomVerb][6];
    const timePastSpecial = timeContinuous[0][randomTimeFORcontinuous];
    const timePresentSpecial = timeContinuous[1][randomTimeFORcontinuous];
    const timeFutureSpecial = timeContinuous[2][randomTimeFORcontinuous];
    // опять костыль // 

    let Vpresent;
    let VpresentFake;
    if ([4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17].includes(randomSubject)) {
        Vpresent = verbjson[randomVerb][4];
        VpresentFake = verbjson[randomVerb][0];
    } else {
        Vpresent = verbjson[randomVerb][0];
        VpresentFake = verbjson[randomVerb][4];
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


    // Present

    // Present Simple V
    const TenseTextPresentSimpleVA = `${S} ___${objectCntnVerb} ${timePresentSimple}`
    const WA1presentSimpleVA = `${VpresentFake}`
    const WA2presentSimpleVA = `${Ving}`
    const WA3presentSimpleVA = `${V3}`
    const WA4presentSimpleVA = `${V2}`
    const RApresentSimpleVA = `${Vpresent}`

    // Present Simple question
    const TenseTextPresentSimpleQ = `____ ${objectCntnVerb} ${timePresentSimple} ?`
    const WA1presentSimpleQ = `${S} ${DoDoes} ${V1}`
    const WA2presentSimpleQ = `${DoDoesFake} ${S} ${V1}`
    const WA3presentSimpleQ = `${S} ${DoDoesFake} ${V1}`
    const WA4presentSimpleQ = `${S} ${Vpresent}`
    const RApresentSimpleQ = `${DoDoes} ${S} ${V1}`


    // Present Simple negative 
    const TenseTextPresentSimpleN = `negative`
    const WA1presentSimpleN = `${S} ${DoDoesFake} NOT ${V1} ${objectCntnVerb} ${timePresentSimple}`
    const WA2presentSimpleN = `${S} NOT ${V1} ${objectCntnVerb} ${timePresentSimple}`
    const WA3presentSimpleN = `${S} ${DoDoes} NOT ${Ving} ${objectCntnVerb} ${timePresentSimple}`
    const WA4presentSimpleN = `${S} ${DoDoesFake} ${Ving} ${objectCntnVerb} ${timePresentSimple}`
    const RApresentSimpleN = `${S} ${DoDoes} NOT ${V1} ${objectCntnVerb} ${timePresentSimple}`


    // Present Simple Affirmative 
    const TenseTextPresentSimpleA = `Affirmative`
    const WA1presentSimpleA = `${S} ${VpresentFake} ${objectCntnVerb} ${timePresentSpecial}`
    const WA2presentSimpleA = `${S} ${VpresentFake} ${objectCntnVerb} ${timePresentSimple}`
    const WA3presentSimpleA = `${S} ${Vpresent} ${objectCntnVerb} ${timePresentSpecial}`
    const WA4presentSimpleA = `${S} ${Vpresent} ${objectCntnVerb} ${timePast}`
    const RApresentSimpleA = `${S} ${Vpresent} ${objectCntnVerb} ${timePresentSimple}`


    // Present Simple Question TimePeaker
    const TenseTextPresentSimpleTPQ = `${DoDoes} ${S} ${V1} ${objectCntnVerb} _____?`
    const WA1presentSimpleTPQ = ` ${timePresentSpecial}`
    const WA2presentSimpleTPQ = `${timePast}`
    const WA3presentSimpleTPQ = `${timeFutureSpecial}`
    const WA4presentSimpleTPQ = `${timePastSpecial} ${timePast}`
    const RApresentSimpleTPQ = `${timePresent}`


    // Present Simple VQ
    const TenseTextPresentSimpleVQ = `${DoDoes} ${S} ___ ${objectCntnVerb} ${timePresentSimple} ?` //дебил тут и так ответ
    const WA1presentSimpleVQ = `${V3}`
    const WA2presentSimpleVQ = `${Ving}`
    const WA3presentSimpleVQ = `${VFake}`
    const WA4presentSimpleVQ = `${V2}`
    const RApresentSimpleVQ = `${V1}`


    // Present Simple VN
    const TenseTextPresentSimpleVN = `${S} ____ (NOT/${V1}) ${objectCntnVerb} ${timePresentSimple}`
    const WA1presentSimpleVN = `${DoDoesFake} NOT ${V1}`
    const WA2presentSimpleVN = `${DoDoes} NOT ${Ving}`
    const WA3presentSimpleVN = `${DoDoesFake} NOT ${VFake}`
    const WA4presentSimpleVN = `${DoDoes} NOT ${V2}`
    const RApresentSimpleVN = `${DoDoes} NOT ${V1}`


    // Present Simple Do/Does
    const TenseTextPresentSimpleDQ = `_____ ${S} ${V1} ${objectCntnVerb} ${timePresentSimple} ?` //дебил тут и так ответ
    const WA1presentSimpleDQ = `${DoDoesFake}`
    const WA2presentSimpleDQ = `${BePresentFake}`
    const WA3presentSimpleDQ = `${DoDoes} NOT`
    const WA4presentSimpleDQ = `${BePast}`
    const RApresentSimpleDA = `${DoDoes}`


    // Present Simle Affirmative Time Picker
    const TenseTextPresentSimpleTPA = `${S} ${Vpresent} ${objectCntnVerb} _____`
    const WA1presentSimpleTPA = ` ${timePresentSpecial}`
    const WA2presentSimpleTPA = `${timePast}`
    const WA3presentSimpleTPA = `${timeFutureSpecial}`
    const WA4presentSimpleTPA = `${timePastSpecial} ${timePast}`
    const RApresentSimpleTPA = `${timePresent}`


    // Present Simple Negative Time Picker
    const TenseTextPresentSimpleTPN = `${S} ${DontDoesnt} ${V1} ${objectCntnVerb} _____`
    const WA1presentSimpleTPN = ` ${timePresentSpecial}`
    const WA2presentSimpleTPN = `${timePast}`
    const WA3presentSimpleTPN = `${timeFutureSpecial}`
    const WA4presentSimpleTPN = `${timePastSpecial} ${timePast}`
    const RApresentSimpleTPN = `${timePresent}`


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
            //past simple 
            qmTense.textContent = TenseTextPresentSimpleVA;
            wa1.textContent = WA1presentSimpleVA;
            wa2.textContent = WA2presentSimpleVA;
            wa3.textContent = WA3presentSimpleVA;
            wa4.textContent = WA4presentSimpleVA;

            ra1.textContent = RApresentSimpleVA;
            ra2.textContent = RApresentSimpleVA;
            ra3.textContent = RApresentSimpleVA;
            ra4.textContent = RApresentSimpleVA;


            break;
        case 2:
            //past simple question
            qmTense.textContent = TenseTextPresentSimpleQ;
            wa1.textContent = WA1presentSimpleQ;
            wa2.textContent = WA2presentSimpleQ;
            wa3.textContent = WA3presentSimpleQ;
            wa4.textContent = WA4presentSimpleQ;

            ra1.textContent = RApresentSimpleQ;
            ra2.textContent = RApresentSimpleQ;
            ra3.textContent = RApresentSimpleQ;
            ra4.textContent = RApresentSimpleQ;


            break;
        case 3:
            //present simple negative
            qmTense.textContent = TenseTextPresentSimpleN;
            wa1.textContent = WA1presentSimpleN;
            wa2.textContent = WA2presentSimpleN;
            wa3.textContent = WA3presentSimpleN;
            wa4.textContent = WA4presentSimpleN;

            ra1.textContent = RApresentSimpleN;
            ra2.textContent = RApresentSimpleN;
            ra3.textContent = RApresentSimpleN;
            ra4.textContent = RApresentSimpleN;


            break;
        case 4:
            //present simple affirmative Time picker
            qmTense.textContent = TenseTextPresentSimpleA;
            wa1.textContent = WA1presentSimpleA;
            wa2.textContent = WA2presentSimpleA;
            wa3.textContent = WA3presentSimpleA;
            wa4.textContent = WA4presentSimpleA;

            ra1.textContent = RApresentSimpleA;
            ra2.textContent = RApresentSimpleA;
            ra3.textContent = RApresentSimpleA;
            ra4.textContent = RApresentSimpleA;


            break;
        case 5:
            //present simple question Time picker 
            qmTense.textContent = TenseTextPresentSimpleTPQ;
            wa1.textContent = WA1presentSimpleTPQ;
            wa2.textContent = WA2presentSimpleTPQ;
            wa3.textContent = WA3presentSimpleTPQ;
            wa4.textContent = WA4presentSimpleTPQ;

            ra1.textContent = RApresentSimpleTPQ;
            ra2.textContent = RApresentSimpleTPQ;
            ra3.textContent = RApresentSimpleTPQ;
            ra4.textContent = RApresentSimpleTPQ;


            break;
        case 6:
            //present simple question Time picker 
            qmTense.textContent = TenseTextPresentSimpleVQ;
            wa1.textContent = WA1presentSimpleVQ;
            wa2.textContent = WA2presentSimpleVQ;
            wa3.textContent = WA3presentSimpleVQ;
            wa4.textContent = WA4presentSimpleVQ;

            ra1.textContent = RApresentSimpleVQ;
            ra2.textContent = RApresentSimpleVQ;
            ra3.textContent = RApresentSimpleVQ;
            ra4.textContent = RApresentSimpleVQ;


            break;
        case 7:
            //present simple question Time picker 
            qmTense.textContent = TenseTextPresentSimpleVN;
            wa1.textContent = WA1presentSimpleVN;
            wa2.textContent = WA2presentSimpleVN;
            wa3.textContent = WA3presentSimpleVN;
            wa4.textContent = WA4presentSimpleVN;

            ra1.textContent = RApresentSimpleVN;
            ra2.textContent = RApresentSimpleVN;
            ra3.textContent = RApresentSimpleVN;
            ra4.textContent = RApresentSimpleVN;


            break;
        case 8:
            qmTense.textContent = TenseTextPresentSimpleDQ;
            wa1.textContent = WA1presentSimpleDQ;
            wa2.textContent = WA2presentSimpleDQ;
            wa3.textContent = WA3presentSimpleDQ;
            wa4.textContent = WA4presentSimpleDQ;

            ra1.textContent = RApresentSimpleDA;
            ra2.textContent = RApresentSimpleDA;
            ra3.textContent = RApresentSimpleDA;
            ra4.textContent = RApresentSimpleDA;
            break;
        case 9:
            qmTense.textContent = TenseTextPresentSimpleTPA;
            wa1.textContent = WA1presentSimpleTPA;
            wa2.textContent = WA2presentSimpleTPA;
            wa3.textContent = WA3presentSimpleTPA;
            wa4.textContent = WA4presentSimpleTPA;

            ra1.textContent = RApresentSimpleTPA;
            ra2.textContent = RApresentSimpleTPA;
            ra3.textContent = RApresentSimpleTPA;
            ra4.textContent = RApresentSimpleTPA;
            break;
       
        case 10:
            qmTense.textContent = TenseTextPresentSimpleTPN;
            wa1.textContent = WA1presentSimpleTPN;
            wa2.textContent = WA2presentSimpleTPN;
            wa3.textContent = WA3presentSimpleTPN;
            wa4.textContent = WA4presentSimpleTPN;

            ra1.textContent = RApresentSimpleTPN;
            ra2.textContent = RApresentSimpleTPN;
            ra3.textContent = RApresentSimpleTPN;
            ra4.textContent = RApresentSimpleTPN;
            break;
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

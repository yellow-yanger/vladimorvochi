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
    ["SOLDER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "СОЛДАТ", "WERE", "ARE", "DO"],
    ["TEACHER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "УЧИТЕЛЬ", "WERE", "ARE", "DO"],
    ["CHILD", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "РЕБЕНОК", "WERE", "ARE", "DO"],
    ["CHILDREN", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ДЕТИ", "WAS", "IS", "DO"]
]

let verbjson = [
    ["GO", "WENT", "GONE", "GOING", "GOES", "идти", "OUTSIDE"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "HOMEWORK"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "WELL"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "SPORT"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "создавать", "GOOD PROGRESS"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "создавать", "MONEY"],
    ["SAY", "SAID", "SAID", "SAYING", "SAYS", "говорить", "THAT"],
    ["GET", "GOT", "GOT(v3)", "GETTING", "GETS", "получать", "IN TROUBLES"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть", "A LOT OF PEOPLE"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить", "BACK"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать", "ABOUT SCHOOL"],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать", "A SHOWER"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать", "MONEY"],
    ["FIND", "FOUND", "FOUND", "FINDING", "FINDS", "находить", "BOOKS"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить", "THE TRUE"],
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
    ["GET", "GOT", "GOT(v3)", "GETTING", "GETS", "получать", "THIS"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть", "THAT"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить", "TO MY HOME"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать", "ABOUT TEACHER"],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать", "THAT"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать", "INFORMATION"],
    ["FIND", "FOUND", "FOUND(v3)", "FINDING", "FINDS", "находить", "THE BALANCE"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить", "YOUR BROTHER"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать", "THERE"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить", "YOUR SISTER"],
    ["TRY", "TRIED", "TRIED", "TRYING", "TRIES", "пытаться", "THIS"],
    ["NEED", "NEEDED", "NEEDED", "NEEDING", "NEEDS", "нуждаться", "SOMEONE'S HELP"],
    ["FEEL", "FELT", "FELT", "FEELING", "FEELS", "чувствовать", "PAIN"],
    ["BECOME", "BECAME", "BECOME", "BECOMING", "BECOMES", "становиться", "THIS"],
    ["LEAVE", "LEFT", "LEFT(v3)", "LEAVING", "LEAVES", "уходить", "SCHOOL"],
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
    const randomQuestion = getRandomNumber(1, 11);
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
    const timePresent = timezonejson[1][randomTime];
    const timeFuture = timezonejson[2][randomTime];
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


    // Past 

    // Past Simple Affirmative V (на 1 больше в повторах вопроса)
    const TenseTextPastSimpleAV = `${S} ____ ${objectCntnVerb} ${timePast}`
    const WA1pastSimpleAV = `${V1}`
    const WA2pastSimpleAV = `${Ving}`
    const WA3pastSimpleAV = `WILL ${V1}`
    const WA4pastSimpleAV = `${VFake}`
    const RApastSimpleAV = `${V2}`

    // Past Simple Question V 
    const TenseTextPastSimpleQV = `DID ${S}____ ${objectCntnVerb} ${timePast}?`
    const WA1pastSimpleQV = `${V2}`
    const WA2pastSimpleQV = `${Ving}`
    const WA3pastSimpleQV = `WILL ${V1}`
    const WA4pastSimpleQV = `${VFake}`
    const RApastSimpleQV = `${V1}`

    // Past Simple Negative V 
    const TenseTextPastSimpleNV = `${S} DID NOT ____ ${objectCntnVerb} ${timePast}`
    const WA1pastSimpleNV = `${V2}`
    const WA2pastSimpleNV = `${Ving}`
    const WA3pastSimpleNV = `WILL ${V1}`
    const WA4pastSimpleNV = `${VFake}`
    const RApastSimpleNV = `${V1}`

    // Past Simple question DV
    const TenseTextPastSimpleDVQ = `_____${objectCntnVerb} ${timePast} ?`
    const WA1pastSimpleDVQ = `${S} DID ${V1}`
    const WA2pastSimpleDVQ = `DID ${S} ${V2}`
    const WA3pastSimpleDVQ = `DID ${S} ${Ving}`
    const WA4pastSimpleDVQ = `${S} ${V2}`
    const RApastSimpleDVQ = `DID ${S} ${V1}`

    // Past Simple negative DV
    const TenseTextPastSimpleDV = `_____${objectCntnVerb} ${timePast}`
    const WA1pastSimpleDVN = `${S} DID NOT ${V2}`
    const WA2pastSimpleDVN = `DID ${S} NOT ${V1}`
    const WA3pastSimpleDVN = `DID ${S} ${V1}`
    const WA4pastSimpleDVN = `${S} DID NOT ${Ving}`
    const RApastSimpleDVN = `${S} DID NOT ${V1}`

    // Past Simple  
    const TenseTextPastSimple = `affirmative`
    const WA1pastSimple = `${S} ${V1} ${objectCntnVerb} ${timePast}`
    const WA2pastSimple = `${S} DID ${V1} ${objectCntnVerb} ${timePast}`
    const WA3pastSimple = `${S} ${Vpresent} ${objectCntnVerb} ${timePast}`
    const WA4pastSimple = `${S} ${V2} ${objectCntnVerb} ${timePresentSpecial}`
    const RApastSimple = `${S} ${V2} ${objectCntnVerb} ${timePast}`

    // Past Simple question
    const TenseTextPastSimpleQ = `question`
    const WA1pastSimpleQ = `${S} ${V1} ${objectCntnVerb} ${timePast} ?`
    const WA2pastSimpleQ = `${S} DID ${V2} ${objectCntnVerb} ${timePast} ?`
    const WA3pastSimpleQ = `${S} DID ${Ving} ${objectCntnVerb} ${timePast} ?`
    const WA4pastSimpleQ = `DID ${S} ${V1} ${objectCntnVerb} ${timePresentSpecial} ?`
    const RApastSimpleQ = `DID ${S} ${V1} ${objectCntnVerb} ${timePast} ?`

    // Past Simple negative 
    const TenseTextPastSimpleN = `negative`
    const WA1pastSimpleN = `DID ${S} NOT  ${V1} ${objectCntnVerb} ${timePast}`
    const WA2pastSimpleN = `${S} DID NOT ${V2} ${objectCntnVerb} ${timePast}`
    const WA3pastSimpleN = `${S} NOT ${V1} ${objectCntnVerb} ${timePast}`
    const WA4pastSimpleN = `${S} DID NOT ${V1} ${objectCntnVerb} ${timePresentSpecial}`
    const RApastSimpleN = `${S} DID NOT ${V1} ${objectCntnVerb} ${timePast}`
    //условия для особенных вариантов вопроса
    //специальные вопросы

    // ПРОДОЛЖИ ЗДЕСЬ

    // Past Simple TPA
    const TenseTextPastSimpleTPA = `${S} ${V2} ${objectCntnVerb} _____`
    const WA1pastSimpleTPA = ` ${timePresentSpecial}`
    const WA2pastSimpleTPA = `${timeFuture}`
    const WA3pastSimpleTPA = `${timeFutureSpecial}`
    const WA4pastSimpleTPA = `${timePastSpecial} ${timePast}`
    const RApastSimpleTPA = `${timePast}`

    // Past Simple TPQ
    const TenseTextPastSimpleTPQ = `DID ${S} ${V1} ${objectCntnVerb} _____?`
    const WA1pastSimpleTPQ = ` ${timePresentSpecial}`
    const WA2pastSimpleTPQ = `${timeFuture}`
    const WA3pastSimpleTPQ = `${timeFutureSpecial}`
    const WA4pastSimpleTPQ = `${timePastSpecial} ${timePast}`
    const RApastSimpleTPQ = `${timePast}`

    // PAst Simple TPN
    const TenseTextPastSimpleTPN = `${S} DID NOT ${V1} ${objectCntnVerb} _____`
    const WA1pastSimpleTPN = ` ${timePresentSpecial}`
    const WA2pastSimpleTPN = `${timeFuture}`
    const WA3pastSimpleTPN = `${timeFutureSpecial}`
    const WA4pastSimpleTPN = `${timePastSpecial} ${timePast}`
    const RApastSimpleTPN = `${timePast}`




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

            qmTense.textContent = TenseTextPastSimpleAV;
            wa1.textContent = WA1pastSimpleAV;
            wa2.textContent = WA2pastSimpleAV;
            wa3.textContent = WA3pastSimpleAV;
            wa4.textContent = WA4pastSimpleAV;

            ra1.textContent = RApastSimpleAV;
            ra2.textContent = RApastSimpleAV;
            ra3.textContent = RApastSimpleAV;
            ra4.textContent = RApastSimpleAV;


            break;
        case 2:

            qmTense.textContent = TenseTextPastSimpleQV;
            wa1.textContent = WA1pastSimpleQV;
            wa2.textContent = WA2pastSimpleQV;
            wa3.textContent = WA3pastSimpleQV;
            wa4.textContent = WA4pastSimpleQV;

            ra1.textContent = RApastSimpleQV;
            ra2.textContent = RApastSimpleQV;
            ra3.textContent = RApastSimpleQV;
            ra4.textContent = RApastSimpleQV;


            break;
        case 3:

            qmTense.textContent = TenseTextPastSimpleNV;
            wa1.textContent = WA1pastSimpleNV;
            wa2.textContent = WA2pastSimpleNV;
            wa3.textContent = WA3pastSimpleNV;
            wa4.textContent = WA4pastSimpleNV;

            ra1.textContent = RApastSimpleNV;
            ra2.textContent = RApastSimpleNV;
            ra3.textContent = RApastSimpleNV;
            ra4.textContent = RApastSimpleNV;


            break;
        case 4:

            qmTense.textContent = TenseTextPastSimpleDVQ;
            wa1.textContent = WA1pastSimpleDVQ;
            wa2.textContent = WA2pastSimpleDVQ;
            wa3.textContent = WA3pastSimpleDVQ;
            wa4.textContent = WA4pastSimpleDVQ;

            ra1.textContent = RApastSimpleDVQ;
            ra2.textContent = RApastSimpleDVQ;
            ra3.textContent = RApastSimpleDVQ;
            ra4.textContent = RApastSimpleDVQ;


            break;
        case 5:

            qmTense.textContent = TenseTextPastSimpleDV;
            wa1.textContent = WA1pastSimpleDVN;
            wa2.textContent = WA2pastSimpleDVN;
            wa3.textContent = WA3pastSimpleDVN;
            wa4.textContent = WA4pastSimpleDVN;

            ra1.textContent = RApastSimpleDVN;
            ra2.textContent = RApastSimpleDVN;
            ra3.textContent = RApastSimpleDVN;
            ra4.textContent = RApastSimpleDVN;


            break;
        case 6:

            qmTense.textContent = TenseTextPastSimple;
            wa1.textContent = WA1pastSimple;
            wa2.textContent = WA2pastSimple;
            wa3.textContent = WA3pastSimple;
            wa4.textContent = WA4pastSimple;

            ra1.textContent = RApastSimple;
            ra2.textContent = RApastSimple;
            ra3.textContent = RApastSimple;
            ra4.textContent = RApastSimple;


            break;
        case 7:

            qmTense.textContent = TenseTextPastSimpleQ;
            wa1.textContent = WA1pastSimpleQ;
            wa2.textContent = WA2pastSimpleQ;
            wa3.textContent = WA3pastSimpleQ;
            wa4.textContent = WA4pastSimpleQ;

            ra1.textContent = RApastSimpleQ;
            ra2.textContent = RApastSimpleQ;
            ra3.textContent = RApastSimpleQ;
            ra4.textContent = RApastSimpleQ;


            break;
        case 8:

            qmTense.textContent = TenseTextPastSimpleN;
            wa1.textContent = WA1pastSimpleN;
            wa2.textContent = WA2pastSimpleN;
            wa3.textContent = WA3pastSimpleN;
            wa4.textContent = WA4pastSimpleN;

            ra1.textContent = RApastSimpleN;
            ra2.textContent = RApastSimpleN;
            ra3.textContent = RApastSimpleN;
            ra4.textContent = RApastSimpleN;


            break;
        case 9:

            qmTense.textContent = TenseTextPastSimpleTPA;
            wa1.textContent = WA1pastSimpleTPA;
            wa2.textContent = WA2pastSimpleTPA;
            wa3.textContent = WA3pastSimpleTPA;
            wa4.textContent = WA4pastSimpleTPA;

            ra1.textContent = RApastSimpleTPA;
            ra2.textContent = RApastSimpleTPA;
            ra3.textContent = RApastSimpleTPA;
            ra4.textContent = RApastSimpleTPA;


            break;
        case 10:

            qmTense.textContent = TenseTextPastSimpleTPQ;
            wa1.textContent = WA1pastSimpleTPQ;
            wa2.textContent = WA2pastSimpleTPQ;
            wa3.textContent = WA3pastSimpleTPQ;
            wa4.textContent = WA4pastSimpleTPQ;

            ra1.textContent = RApastSimpleTPQ;
            ra2.textContent = RApastSimpleTPQ;
            ra3.textContent = RApastSimpleTPQ;
            ra4.textContent = RApastSimpleTPQ;


            break;
        case 11:

            qmTense.textContent = TenseTextPastSimpleTPN;
            wa1.textContent = WA1pastSimpleTPN;
            wa2.textContent = WA2pastSimpleTPN;
            wa3.textContent = WA3pastSimpleTPN;
            wa4.textContent = WA4pastSimpleTPN;

            ra1.textContent = RApastSimpleTPN;
            ra2.textContent = RApastSimpleTPN;
            ra3.textContent = RApastSimpleTPN;
            ra4.textContent = RApastSimpleTPN;


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
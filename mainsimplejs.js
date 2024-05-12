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
    ["CHILDREN", "WERE", "ARE", "WILL BE", "DO", "DON'T", "ДЕТИ", "WAS", "IS", "DOES"]
]

let verbjson = [
    ["GO", "WENT", "GONE", "GOING", "GOES", "идти", "OUTSIDE"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "HOMEWORK"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "WELL"],
    ["DO", "DID", "DONE", "DOING", "DOES", "делать", "SPORT"],
    ["MAKE", "MADE", "MADE(v3)", "MAKING", "MAKES", "создавать", "GOOD PROGRESS"],
    ["MAKE", "MADE", "MADE(v3)", "MAKING", "MAKES", "создавать", "MONEY"],
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
    ["GET", "GOT", "GOT", "GETTING", "GETS", "получать", "THIS"],
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
    const randomQuestion = getRandomNumber(1, 24);
    const randomSubject = getRandomNumber(0, 18);
    const randomVerb = getRandomNumber(0, 42);
    const randomTime = getRandomNumber(0, 4);
    const randomTimeFORcontinuous = getRandomNumber(0, 6);
    const randomTimeFORpresentSimple = getRandomNumber(0, timezonePresentSimplelength);
    const timerForHours = getRandomNumber(1, 12);


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
    const timeFuture = timezonejson[2][randomTime];
    const objectCntnVerb = verbjson[randomVerb][6];
    const timePastSpecial = timeContinuous[0][randomTimeFORcontinuous];
    const timePresentSpecial = timeContinuous[1][randomTimeFORcontinuous];
    const timeFutureSpecial = timeContinuous[2][randomTimeFORcontinuous];
    const Hours = `${timerForHours} HOURS AGO`;
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


    // paaast 
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



    //present simple 

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
    const WA3presentSimpleVN = `WILL NOT ${V1}`
    const WA4presentSimpleVN = `${DoDoes} NOT ${V2}`
    const RApresentSimpleVN = `${DoDoes} NOT ${V1}`


    // Present Simple Do/Does
    const TenseTextPresentSimpleDQ = `_____ ${S} ${V1} ${objectCntnVerb} ${timePresentSimple} ?` //дебил тут и так ответ
    const WA1presentSimpleDQ = `${DoDoesFake}`
    const WA2presentSimpleDQ = `${BePresentFake}`
    const WA3presentSimpleDQ = `WILL`
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


    // Future Simple V
    const TenseTextFutureSimpleVA = `${S} ___${objectCntnVerb} ${timeFuture}`
    const WA1futureFSimpleVA = `${V1}`
    const WA2futureSimpleVA = `WAS ${Ving}`
    const WA3futureSimpleVA = `${V1}`
    const WA4futureSimpleVA = `${V2}`
    const RAfutureSimpleVA = `WILL ${V1}`

    // Future Simple question
    const TenseTextFutureSimpleQ = `____ ${objectCntnVerb} ${timeFuture} ?`
    const WA1futureSimpleQ = `WILL ${S} ${V2}`
    const WA2futureSimpleQ = `${S} WILL  ${V1}`
    const WA3futureSimpleQ = `WILL ${S} ${Ving}`
    const WA4futureSimpleQ = `WILL ${S} BE ${V1}`
    const RAfutureSimpleQ = `WILL ${S} ${V1}`

    // Future Simple negative 
    const TenseTextFutureSimpleN = `negative`
    const WA1futureSimpleN = `${S} WILL NOT ${V1} ${objectCntnVerb} ${timePresentSpecial}`
    const WA2futureSimpleN = `${S} WILL NOT ${V2} ${objectCntnVerb} ${timeFuture}`
    const WA3futureSimpleN = `${S} WILL NOT ${Ving} ${objectCntnVerb} ${timeFuture}`
    const WA4futureSimpleN = `${S} WILL NOT ${V1} ${objectCntnVerb} ${timePast}`
    const RAfutureSimpleN = `${S} WILL NOT ${V1} ${objectCntnVerb} ${timeFuture}`


    // Future Simple Affirmative 
    const TenseTextFutureSimpleA = `Affirmative`
    const WA1futureSimpleA = `${S} WILL BE ${V1} ${objectCntnVerb} ${timeFuture}`
    const WA2futureSimpleA = `${S} WILL ${Ving} ${objectCntnVerb} ${timeFuture}`
    const WA3futureSimpleA = `${S} WILL ${V2} ${objectCntnVerb} ${timeFuture}`
    const WA4futureSimpleA = `${S} WILL ${V1} ${objectCntnVerb} ${timePresentSpecial}`
    const RAfutureSimpleA = `${S} WILL ${V1} ${objectCntnVerb} ${timeFuture}`


    // Future Simple Question TimePeaker
    const TenseTextFutureSimpleTPQ = `WILL ${S} ${V1} ${objectCntnVerb} _____?`
    const WA1futureSimpleTPQ = ` ${timePresentSpecial}`
    const WA2futureSimpleTPQ = `${timePast}`
    const WA3futureSimpleTPQ = `${Hours}`
    const WA4futureSimpleTPQ = `${timePastSpecial} ${timePast}`
    const RAfutureSimpleTPQ = `${timeFuture}`


    // Future Simple VQ
    // const TenseTextFutureSimpleVQ = `WILL ${S} ___ ${objectCntnVerb} ${timeFuture} ?` //дебил тут и так ответ
    // const WA1futureSimpleVQ = `${V3}`
    // const WA2futureSimpleVQ = `${Ving}`
    // const WA3futureSimpleVQ = `${VFake}`
    // const WA4futureSimpleVQ = `${V2}`
    // const RAfutureSimpleVQ = `${V1}`
    // убираю, потому что нет смысла в этом для future, слишком легко будут проходить за счет этого


    // Future Simple VN
    const TenseTextFutureSimpleVN = `${S} ____ (NOT/${V1}) ${objectCntnVerb} ${timeFuture}`
    const WA1futureSimpleVN = `WILL NOT ${Ving}`
    const WA2futureSimpleVN = `WILL NOT BE ${V1}`
    const WA3futureSimpleVN = `WILL NOT ${V2}`
    const WA4futureSimpleVN = `NOT ${V1}`
    const RAfutureSimpleVN = `WILL NOT ${V1}`


    // // Future Simple Will и Do/Does
    // const TenseTextFutureSimpleDQ = `_____ ${S} ${V1} ${objectCntnVerb} ${timePresentSimple} ?` //дебил тут и так ответ
    // const WA1futureSimpleDQ = `${DoDoesFake}`
    // const WA2futureSimpleDQ = `${BePresentFake}`
    // const WA3futureSimpleDQ = `${DoDoes} NOT`
    // const WA4futureSimpleDQ = `${BePast}`
    // const RAfutureSimpleDA = `${DoDoes}`
    // нет смысла, слишком легко будет


    // Future Simle Affirmative Time Picker
    const TenseTextFutureSimpleTPA = `${S} WILL ${V1} ${objectCntnVerb} _____`
    const WA1futureSimpleTPA = ` ${timePresentSpecial}`
    const WA2futureSimpleTPA = `${timePast}`
    const WA3futureSimpleTPA = `${Hours}`
    const WA4futureSimpleTPA = `${timePastSpecial} ${timePast}`
    const RAfutureSimpleTPA = `${timeFuture}`


    // Future Simple Negative Time Picker
    const TenseTextFutureSimpleTPN = `${S} WILL NOT ${V1} ${objectCntnVerb} _____`
    const WA1futureSimpleTPN = ` ${timePresentSpecial}`
    const WA2futureSimpleTPN = `${timePast}`
    const WA3futureSimpleTPN = `${Hours}`
    const WA4futureSimpleTPN = `${timePastSpecial} ${timePast}`
    const RAfutureSimpleTPN = `${timeFuture}`

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
            qmTense.textContent = TenseTextFutureSimpleVA;
            wa1.textContent = WA1futureFSimpleVA;
            wa2.textContent = WA2futureSimpleVA;
            wa3.textContent = WA3futureSimpleVA;
            wa4.textContent = WA4futureSimpleVA;

            ra1.textContent = RAfutureSimpleVA;
            ra2.textContent = RAfutureSimpleVA;
            ra3.textContent = RAfutureSimpleVA;
            ra4.textContent = RAfutureSimpleVA;


            break;
        case 2:
            //past simple question
            qmTense.textContent = TenseTextFutureSimpleQ;
            wa1.textContent = WA1futureSimpleQ;
            wa2.textContent = WA2futureSimpleQ;
            wa3.textContent = WA3futureSimpleQ;
            wa4.textContent = WA4futureSimpleQ;

            ra1.textContent = RAfutureSimpleQ;
            ra2.textContent = RAfutureSimpleQ;
            ra3.textContent = RAfutureSimpleQ;
            ra4.textContent = RAfutureSimpleQ;


            break;
        case 3:
            //present simple negative
            qmTense.textContent = TenseTextFutureSimpleN;
            wa1.textContent = WA1futureSimpleN;
            wa2.textContent = WA2futureSimpleN;
            wa3.textContent = WA3futureSimpleN;
            wa4.textContent = WA4futureSimpleN;

            ra1.textContent = RAfutureSimpleN;
            ra2.textContent = RAfutureSimpleN;
            ra3.textContent = RAfutureSimpleN;
            ra4.textContent = RAfutureSimpleN;


            break;
        case 4:
            //present simple affirmative Time picker
            qmTense.textContent = TenseTextFutureSimpleA;
            wa1.textContent = WA1futureSimpleA;
            wa2.textContent = WA2futureSimpleA;
            wa3.textContent = WA3futureSimpleA;
            wa4.textContent = WA4futureSimpleA;

            ra1.textContent = RAfutureSimpleA;
            ra2.textContent = RAfutureSimpleA;
            ra3.textContent = RAfutureSimpleA;
            ra4.textContent = RAfutureSimpleA;


            break;
        case 5:
            //present simple question Time picker 
            qmTense.textContent = TenseTextFutureSimpleTPQ;
            wa1.textContent = WA1futureSimpleTPQ;
            wa2.textContent = WA2futureSimpleTPQ;
            wa3.textContent = WA3futureSimpleTPQ;
            wa4.textContent = WA4futureSimpleTPQ;

            ra1.textContent = RAfutureSimpleTPQ;
            ra2.textContent = RAfutureSimpleTPQ;
            ra3.textContent = RAfutureSimpleTPQ;
            ra4.textContent = RAfutureSimpleTPQ;


            break;
        case 6:
            //present simple question Time picker 
            qmTense.textContent = TenseTextFutureSimpleVN;
            wa1.textContent = WA1futureSimpleVN;
            wa2.textContent = WA2futureSimpleVN;
            wa3.textContent = WA3futureSimpleVN;
            wa4.textContent = WA4futureSimpleVN;

            ra1.textContent = RAfutureSimpleVN;
            ra2.textContent = RAfutureSimpleVN;
            ra3.textContent = RAfutureSimpleVN;
            ra4.textContent = RAfutureSimpleVN;


            break;
        case 7:
            //present simple question Time picker 
            qmTense.textContent = TenseTextFutureSimpleTPA;
            wa1.textContent = WA1futureSimpleTPA;
            wa2.textContent = WA2futureSimpleTPA;
            wa3.textContent = WA3futureSimpleTPA;
            wa4.textContent = WA4futureSimpleTPA;

            ra1.textContent = RAfutureSimpleTPA;
            ra2.textContent = RAfutureSimpleTPA;
            ra3.textContent = RAfutureSimpleTPA;
            ra4.textContent = RAfutureSimpleTPA;


            break;
        case 8:
            qmTense.textContent = TenseTextFutureSimpleTPN;
            wa1.textContent = WA1futureSimpleTPN;
            wa2.textContent = WA2futureSimpleTPN;
            wa3.textContent = WA3futureSimpleTPN;
            wa4.textContent = WA4futureSimpleTPN;

            ra1.textContent = RAfutureSimpleTPN;
            ra2.textContent = RAfutureSimpleTPN;
            ra3.textContent = RAfutureSimpleTPN;
            ra4.textContent = RAfutureSimpleTPN;
            break;
        case 9:
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
        case 10:
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
        case 11:
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
        case 12:
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
        case 13:
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
        case 14:
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
        case 15:
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
        case 16:
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
        case 17:
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
        case 18:
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
        case 19:
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
        case 20:
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
        case 21:
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
        case 22:
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
        case 23:
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
        case 24:
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

        case 25:
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

        case 26:
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

        case 27:
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

        case 28:
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
        case 29:
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
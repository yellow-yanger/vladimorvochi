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
    ["YOUR MOTHER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ТВОЯ МАМА", "WERE", "ARE"],
    ["DOCTOR", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ВРАЧ", "WERE", "ARE"],
    ["POLICEMAN", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "ПОЛИЦЕЙСКИЙ", "WERE", "ARE"],
    ["MANAGER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "МЕНЕДЖЕР", "WERE", "ARE"],
    ["ACTOR", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "АКТЕР", "WERE", "ARE"],
    ["ACTRESS", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "АКТРИСА", "WERE", "ARE"],
    ["SOLDER", "WAS", "IS", "WILL BE", "DOES", "DOESN'T", "СОЛДАТ", "WERE", "ARE"],
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
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить", "THE TRUE"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать", "CAREFULLY"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить", "MY FATHER"],
    ["TRY", "TRIED", "TRIED", "TRYING", "TRIES", "пытаться", "TO WIN"],
    ["NEED", "NEEDED", "NEEDED", "NEEDING", "NEEDS", "нуждаться", "HELP"],
    ["FEEL", "FELT", "FELT", "FEELING", "FEELS", "чувствовать", "PAIN"],
    ["BECOME", "BECAME", "BECOME", "BECOMING", "BECOMES", "становиться", "A MONSTER"],
    ["LEAVE", "LEFT", "LEFT", "LEAVING", "LEAVES", "уходить", "HOME"],
    ["PUT", "PUT", "PUT", "PUTTING", "PUTS", "класть", "BOX"],
    ["HAVE", "HAD", "HAD", "HAVING", "HAS", "иметь", "FUN"],
    ["MAKE", "MADE", "MADE", "MAKING", "MAKES", "делать", ""],
    ["SAY", "SAID", "SAID", "SAYING", "SAYS", "говорить", "'WE CAN DO THIS!'"],
    ["GET", "GOT", "GOT", "GETTING", "GETS", "получать", "THIS"],
    ["SEE", "SAW", "SEEN", "SEEING", "SEES", "видеть", "THAT"],
    ["COME", "CAME", "COME", "COMING", "COMES", "приходить", "AT HOME"],
    ["THINK", "THOUGHT", "THOUGHT", "THINKING", "THINKS", "думать", "ABOUT TEACHER"],
    ["TAKE", "TOOK", "TAKEN", "TAKING", "TAKES", "брать", "THAT"],
    ["GIVE", "GAVE", "GIVEN", "GIVING", "GIVES", "давать", "INFORMATION"],
    ["FIND", "FOUND", "FOUND", "FINDING", "FINDS", "находить", "THE BALANCE"],
    ["TELL", "TOLD", "TOLD", "TELLING", "TELLS", "говорить", "YOUR BROTHER"],
    ["WORK", "WORKED", "WORKED", "WORKING", "WORKS", "работать", "THERE"],
    ["CALL", "CALLED", "CALLED", "CALLING", "CALLS", "звонить", "YOUR SISTER"],
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
    ["ALL DAY", "ALL NIGHT", "ALL MORNING", "FOR 10 HOURS IN A ROW", "FOR 30 MINUTES", "FOR 20 MINUTES", "FOR 6 HOURS"]

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
    const randomTimeFORcontinuous = getRandomNumber (0, 6);


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
    const BePresent = subjectsjson[randomSubject][2];
    const BeFuture = subjectsjson[randomSubject][3];
    const V1 = verbjson[randomVerb][0];
    const V2 = verbjson[randomVerb][1];
    const V3 = verbjson[randomVerb][2];
    const DoDoes = subjectsjson[randomSubject][4];

    const VFake = verbjson[randomVerb][4];
    const DontDoesnt = subjectsjson[randomSubject][5];
    const timePast = timezonejson[0][randomTime];
    const objectCntnVerb = verbjson [randomVerb] [6];
    const timePastSpecial = timeContinuous [0] [randomTimeFORcontinuous];
    // опять костыль // 

    let Vpresent;
    if ([4,5,6,7,9,10,11,12,13,14,15,16,17].includes(randomSubject)) {
    Vpresent = verbjson[randomVerb][4];
    } else {
    Vpresent = verbjson[randomVerb][0];
    }


    const fakePastCntFormula1 = `${S} ${BePast} ${V1}`
    const fakePastCntFormula2 = `${S} ${Ving}`
    const fakePastCntFormula3 = `${S} ${BePast} ${V1}`
    const fakePastCntFormula4 = `${S} ${BePast} ${V2}`

    const fakePastCntFormula1Q = `${S} ${BePast} ${Ving} ?`
    const fakePastCntFormula2Q = `${S} ${Ving} ?`
    const fakePastCntFormula3Q = `${BePast} ${S} ${V1} ?`
    const fakePastCntFormula4Q = `${BePastFake} ${S} ${Ving} ?`

    const fakePastCntFormula1N = `${S} ${BePast} NOT ${V1}`
    const fakePastCntFormula2N = `${S} NOT ${Ving}`
    const fakePastCntFormula3N = `${S} ${BePast} NOT ${V1}`
    const fakePastCntFormula4N = `${S} ${BePast} NOT ${V2}`

    const pastcontinuousformula = `${S} ${BePast} ${Ving}`
    const pastcontinuousformulaq = `${BePast} ${S} ${Ving} ?`
    const pastcontinuousformulan = `${S} ${BePast} NOT ${Ving}`

    //условия для особенных вариантов вопроса
    //специальные вопросы
    //was were
    const waswerequestion = `${S} (BE) ${Ving} ${objectCntnVerb} ${timePastSpecial} ${timePast}`
    const waswereAnswerFake1 = `${V3}`
    const waswereAnswerFake2 = `${BeFuture}`
    const waswereAnswerFake3 = `${BePresent}`
    const waswereAnswerFake4 = `${BePastFake}`
    const waswereAnswer = `${BePast}`


    //ving
    const vingquestion = `${S} ${BePast} (${V1}) ${objectCntnVerb} ${timePastSpecial} ${timePast}`
    const vingAnswerFake1 = `${V1}`
    const vingAnswerFake2 = `${V2}`
    const vingAnswerFake3 = `${V3}`
    const vingAnswerFake4 = `${VFake}`
    const vingAnswer = `${Ving}`


    //be+ving
    const bevingquestion = `${S} (${V1}) ${objectCntnVerb} ${timePastSpecial} ${timePast}`
    const bevingAnswerFake1 = `${BePast} ${V3}`
    const bevingAnswerFake2 = `${BePastFake} ${V1}`
    const bevingAnswerFake3 = `${BePast} ${V1}`
    const bevingAnswerFake4 = `${BePastFake} ${Ving}`
    const bevingAnswer = `${BePast} ${Ving}`

    //time questions
    // const timeQuestion = `${S}${BePast}${Ving} _____`
    // const timeAnswer1 = `${timePastSpecial} ${timePresent}`
    // const timeAnswer2 = `${timePastSpecial} ${timeFuture}`
    // const timeAnswer3 = `${timeFuture}`
    // const timeAnswer4 = `${timePresent} ${}`
    //доделать, хорошая же идея, где нужно время выбирать



    switch (randomQuestion) {
        case 1:
            qmTense.textContent = "choose correct answer"
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
            qmTense.textContent = "choose correct answer"
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
            qmTense.textContent = "choose correct answer"
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
            //was/were
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
        case 5:
            //Ving
            qmTense.textContent = vingquestion;
            wa1.textContent = vingAnswerFake1;
            wa2.textContent = vingAnswerFake2;
            wa3.textContent = vingAnswerFake3;
            wa4.textContent = vingAnswerFake4;

            ra1.textContent = vingAnswer;
            ra2.textContent = vingAnswer;
            ra3.textContent = vingAnswer;
            ra4.textContent = vingAnswer;
            break;
        case 6:
            //be+ving
            qmTense.textContent = bevingquestion;
            wa1.textContent = bevingAnswerFake1;
            wa2.textContent = bevingAnswerFake2;
            wa3.textContent = bevingAnswerFake3;
            wa4.textContent = bevingAnswerFake4;

            ra1.textContent = bevingAnswer;
            ra2.textContent = bevingAnswer;
            ra3.textContent = bevingAnswer;
            ra4.textContent = bevingAnswer;
            break;
        case 7:
            //be+ving
            qmTense.textContent = bevingquestion;
            wa1.textContent = bevingAnswerFake1;
            wa2.textContent = bevingAnswerFake2;
            wa3.textContent = bevingAnswerFake3;
            wa4.textContent = bevingAnswerFake4;


            ra1.textContent = bevingAnswer;
            ra2.textContent = bevingAnswer;
            ra3.textContent = bevingAnswer;
            ra4.textContent = bevingAnswer;
            break;
        case 8:
            //be+ving
            qmTense.textContent = bevingquestion;
            wa1.textContent = bevingAnswerFake1;
            wa2.textContent = bevingAnswerFake2;
            wa3.textContent = bevingAnswerFake3;
            wa4.textContent = bevingAnswerFake4;


            ra1.textContent = bevingAnswer;
            ra2.textContent = bevingAnswer;
            ra3.textContent = bevingAnswer;
            ra4.textContent = bevingAnswer;
            break;
        case 9:
            //be+ving
            qmTense.textContent = bevingquestion;
            wa1.textContent = bevingAnswerFake1;
            wa2.textContent = bevingAnswerFake2;
            wa3.textContent = bevingAnswerFake3;
            wa4.textContent = bevingAnswerFake4;


            ra1.textContent = bevingAnswer;
            ra2.textContent = bevingAnswer;
            ra3.textContent = bevingAnswer;
            ra4.textContent = bevingAnswer;
            break;
        case 10:
            //was/were
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
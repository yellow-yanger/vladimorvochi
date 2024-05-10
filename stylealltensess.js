let  subjectsjson = [
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
  
  let  verbjson = [
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


  const select = document.getElementById('subjects_button');
  const select1 = document.getElementById('verb_button');
  // const resultDiv = document.getElementById('result');

  let points = 0;
  
  const pastContinuous = document.getElementById('pastContinuousText');
  const pastContinuousQ = document.getElementById('pastContinuousTextQ');
  const pastContinuousN = document.getElementById('pastContinuousTextN');
  
  const presentContinuous = document.getElementById('presentContinuousText');
  const presentContinuousQ = document.getElementById('presentContinuousTextQ');
  const presentContinuousN = document.getElementById('presentContinuousTextN');

  const futureContinuous = document.getElementById('futureContinuousText');
  const futureContinuousQ = document.getElementById('futureContinuousTextQ');
  const futureContinuousN = document.getElementById('futureContinuousTextN');
  
  const pastSimple = document.getElementById('pastSimpleText');
  const pastSimpleQ = document.getElementById('pastSimpleTextQ');
  const pastSimpleN = document.getElementById('pastSimpleTextN');

  const presentSimple = document.getElementById('presentSimpleText');
  const presentSimpleQ = document.getElementById('presentSimpleTextQ');
  const presentSimpleN = document.getElementById('presentSimpleTextN');

  const futureSimple = document.getElementById('futureSimpleText');
  const futureSimpleQ = document.getElementById('futureSimpleTextQ');
  const futureSimpleN = document.getElementById('futureSimpleTextN');
 









  function createOptions(selectElement, data) {
    data.forEach((columns) => {
      const option = document.createElement('option');
      option.value = columns[0];
      option.textContent = columns[0];
      selectElement.appendChild(option);
    });
  }
  
  createOptions(select, subjectsjson);
  createOptions(select1, verbjson);





  function updateResult() {
   
    const selectedSubjectIndex = select.selectedIndex;
    const selectedSubject = subjectsjson[selectedSubjectIndex];
    const selectedVerbIndex = select1.selectedIndex;
    const selectedVerb = verbjson[selectedVerbIndex];

    
    let Vpresent;
    const V1= selectedVerb[0];
    const S = selectedSubject[0];
    const Bepast = selectedSubject [1];
    const Bepresent = selectedSubject [2];
    const Befuture = selectedSubject [3];
    const Ving= selectedVerb [3] ;
    const DoDoes = selectedSubject [4];
    const DontDoesnt = selectedSubject [5];
    // const sentence = `${S} ${V1}`;
    const V2 = selectedVerb [1];
    
    // костыли не смотрите пжпжпжж
    if (selectedSubjectIndex === 4 || selectedSubjectIndex === 5 || selectedSubjectIndex === 6 
      || selectedSubjectIndex ===7) {
      Vpresent = selectedVerb [4]
    } else { Vpresent = selectedVerb [0]}
  //  костыли кончаются

    const pastcontinuousformula = `${S} ${Bepast} ${Ving}`;
    const pastcontinuousformulaq =`${Bepast} ${S} ${Ving} ?`;
    const pastcontinuousformulan =`${S} ${Bepast} NOT ${Ving}`;

    const presentcontinuousformula = `${S} ${Bepresent} ${Ving}`;
    const presentcontinuousformulaq =`${Bepresent} ${S} ${Ving} ?`;
    const presentcontinuousformulan =`${S} ${Bepresent} NOT ${Ving}`;

    const futurecontinuousformula = `${S} ${Befuture} ${Ving}`;
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

    // resultDiv.textContent = sentence; на случай судного дня

    pastContinuous.textContent = pastcontinuousformula;
    pastContinuousQ.textContent = pastcontinuousformulaq;
    pastContinuousN.textContent = pastcontinuousformulan;

    presentContinuous.textContent = presentcontinuousformula;
    presentContinuousQ.textContent = presentcontinuousformulaq;
    presentContinuousN.textContent = presentcontinuousformulan;

    futureContinuous.textContent = futurecontinuousformula;
    futureContinuousQ.textContent = futurecontinuousformulaq;
    futureContinuousN.textContent = futurecontinuousformulan; 

    pastSimple.textContent = pastsimpleformula;
    pastSimpleQ.textContent = pastsimpleformulaq;
    pastSimpleN.textContent = pastsimpleformulan;

    presentSimple.textContent = presentsimpleformula;
    presentSimpleQ.textContent = presentsimpleformulaq;
    presentSimpleN.textContent = presentsimpleformulan;

    futureSimple.textContent = futuresimpleformula;
    futureSimpleQ.textContent = futuresimpleformulaq;
    futureSimpleN.textContent = futuresimpleformulan;


    // qmTense.textContent = presentcontinuousformula;
    // оххх варианты пошли
  
  }
  select.addEventListener('change', updateResult);
  select1.addEventListener('change', updateResult);
  
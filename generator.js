var nameW = ['Fampalski, Cranpalski, Pamppalski, Dabrowkski, Lewandowski, Kaminscki, Sampalski, Fanpalski, Crampalski,'];
var nameM = ['Nampalski, Bampalski'];

function pickNameM(){
    var userInput = inputForm.input.value;
    var number = Number(userInput);

    output.value = '';

    for(let i = 0; i < number; i ++){
        var pickedNameM = nameM[Math.floor(Math.random()*nameM.length)];
        var pickedSurname = surname[Math.floor(Math.random()*surname.length)];
        output.value += pickedNameM + ' ' + pickedSurname + '\n';
    }
}

function pickNameW(){
    var userInput = inputForm.input.value;
    var number = Number(userInput);

    output.value = '';

    for(let i = 0; i < number; i ++){
        var pickedNameW = nameW[Math.floor(Math.random()*nameW.length)];
        var pickedSurname = surname[Math.floor(Math.random()*surname.length)];
        var ski = new RegExp("ski$");
        var cki = new RegExp("cki$");

        if(ski.test(pickedSurname)){

            var str2 = pickedSurname.replace(/ski$/,"ska");
            output.value += pickedNameW + ' ' + str2 + '\n';
        }
        else if(cki.test(pickedSurname)){

            var str2 = pickedSurname.replace(/cki$/,"cka");
            output.value += pickedNameW + ' ' + str2 + '\n';
        }
        else{
        output.value += pickedNameW + ' ' + pickedSurname + '\n';
        }
    }

}

function main(){
    if (document.getElementById('women').checked){
        pickNameW();
    }
    else if(document.getElementById('men').checked){
        pickNameM();
    }
    else{
        output.value = 'Błąd. Zaznacz jedną z płci.'
    }
}

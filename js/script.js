maxStudents = 4;
divInfo = document.getElementById('info');
divStudents = document.getElementById('students');
function check() {
    if (schoolClass.students.length < maxStudents) {
        divInfo.innerHTML = 'Ancora ' + (maxStudents - schoolClass.students.length) + ' posti disponili!';
    } else {
        divInfo.innerHTML = 'Non ci sono più posti disponibili';
    }
}

var prof = {
    name: 'Paolino',
    surname: 'Paperino',
    age: 50
}

for (var key in prof) {
    document.getElementById('prof').innerHTML += '<li>' + key + ': ' + prof[key];
}

var schoolClass = {
    students: [
        { name: 'Adina', suername: 'Pop', age: 20 },
        { name: 'Otto', suername: 'Bisotto', age: 20 },
        { name: 'Pippo', suername: 'Baudo', age: 20 }
    ]
}

for (i = 0; i < schoolClass.students.length; i++) {
    for (var key in schoolClass.students[i]) {
        divStudents.innerHTML += '<li>' + key + ': ' + schoolClass.students[i][key];
    }
    divStudents.innerHTML += '</br>';
}

check();

document.getElementById('add').addEventListener('click', function () {
    if (schoolClass.students.length < maxStudents) {

        var studentName = prompt('Inserisci il nome dello studente');
        var studentSurname = prompt('Inserisci il cognome dello studente');
        var studentAge = prompt('Inserisci l\'età dello studente');

        schoolClass.students.push({
            name: studentName,
            surname: studentSurname,
            age: studentAge
        });


        for (var key in schoolClass.students[schoolClass.students.length - 1]) {
            divStudents.innerHTML += '<li>' + key + ': ' + schoolClass.students[schoolClass.students.length - 1][key];
        }
        divStudents.innerHTML += '</br>';

        check();

    } else {
        alert('Non ci sono più posti disponibili!');
    }

});


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
        { name: 'Adina', surname: 'Pop', age: 20 },
        { name: 'Otto', surname: 'Bisotto', age: 20 },
        { name: 'Pippo', surname: 'Baudo', age: 20 }
    ]
}

for (i = 0; i < schoolClass.students.length; i++) {
    divStudents.innerHTML += '<li>' + schoolClass.students[i].name + ' ' + schoolClass.students[i].surname;
    divStudents.innerHTML += '</br>';
}

check();

document.getElementById('add').addEventListener('click', function () {
    if (schoolClass.students.length < maxStudents) {

        var studentName = prompt('Inserisci il nome dello studente');
        var studentSurname = prompt('Inserisci il cognome dello studente');
        var studentAge = parseInt(prompt('Inserisci l\'età dello studente'));

        while (isNaN(studentAge)) {
            alert('Inserisci l\'età dello studente!')
            studentAge = parseInt(prompt('Inserisci l\'età dello studente'));
        }

        schoolClass.students.push({
            name: studentName[0].toUpperCase() + studentName.slice(1).toLowerCase(),
            surname: studentSurname[0].toUpperCase() + studentName.slice(1).toLowerCase(),
            age: studentAge
        });

        divStudents.innerHTML += '<li>' + schoolClass.students[[schoolClass.students.length - 1]].name + ' ' + schoolClass.students[[schoolClass.students.length - 1]].surname;
        divStudents.innerHTML += '</br>';

        check();

    } else {
        alert('Non ci sono più posti disponibili!');
    }

});


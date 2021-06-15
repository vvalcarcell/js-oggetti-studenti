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

// for (i = 0; i < schoolClass.students.length; i++) {

//     for (var key in schoolClass.students[i]) {
//         document.getElementById('students').innerHTML += '<li>' + key + ': ' + students[i][key];
//     }

//     document.getElementById('students').innerHTML += '</br>';

// }


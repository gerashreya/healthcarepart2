var agesMale = ["Kid(0-5) years", "Junior & Adolescent(6-16) years", "Young adult(6-16) years", "Adult(30-64) years", "Senior(65+) years"];
var agesFemale = ["Kid(0-5) years", "Junior & Adolescent(6-16) years", "Young adult(6-16) years", "Adult(30-64) years", "Senior(65+) years"];
var agesTransgender = ["Kid(0-5) years", "Junior & Adolescent(6-16) years", "Young adult(6-16) years", "Adult(30-64) years", "Senior(65+) years"];

var symptomsKid = ["Cough&Cold", "Fever", "Heart", "Brain"];
var symptomsJunior = ["Cough&Cold", "Fever", "Heart", "Brain"];
var symptomsYoung = ["Cough&Cold", "Fever", "Heart", "Brain"];
var symptomsAdult = ["Cough&Cold", "Fever", "Heart", "Brain"];
var symptomsSenior = ["Cough&Cold", "Fever", "Heart", "Brain"];


function genderChanged(gender) {
    var selectAge = document.getElementById('ages');
    var ln = selectAge.length - 1;
    while (ln > 0) {
        selectAge.remove(1); //Remove all but "Select State"
        ln--;
    }

    var selectSymptom = document.getElementById('symptoms');
    var ln = selectSymptom.length - 1;
    while (ln > 0) {
        selectSymptom.remove(1); //Remove all but "Select City"
        ln--;
    }

    var ageArray;

    switch (gender) {
        case "Male":
            ageArray = agesMale
            break;
        case "Female":
            ageArray = agesFemale
            break;
        case "Transgender":
            ageArray = agesTransgender
            break;
        default:
    }

    for (i = 0; i < ageArray.length; i++) {
        var option = document.createElement('option');
        option.text = ageArray[i];
        option.value = ageArray[i];
        selectAge.add(option);
    }
}

function ageChanged(age) {
    var selectSymptom = document.getElementById('symptoms');
    var ln = selectSymptom.length - 1;
    while (ln > 0) {
        selectSymptom.remove(1); //Remove all but "Select City"
        ln--;
    }

    var symptomArray;

    switch (age) {
        case "Kid(0-5) years":
            symptomArray = symptomsKid
            break;
        case "Junior & Adolescent(6-16) years":
            symptomArray = symptomsJunior
            break;
        case "Young adult(6-16) years":
            symptomArray = symptomsYoung
            break;
        case "Adult(30-64) years":
            symptomArray = symptomsAdult
            break;
        case "Senior(65+) years":
            symptomArray = symptomsSenior
            break;
        default:
    }

    for (i = 0; i < symptomArray.length; i++) {
        var option = document.createElement('option');
        option.text = symptomArray[i];
        option.value = symptomArray[i];
        selectSymptom.add(option);
    }
}

function symptomChanged(symptom) {
    switch (symptom) {
        case "Cough&Cold":
            document.getElementById('text').innerHTML ='Dr.Satguru';
			document.getElementById('text1').innerHTML ='Dr.Suresh';
            break;
        case "Fever":
           document.getElementById('text').innerHTML ='Dr.Bhaskar';
          document.getElementById('text1').innerHTML ='Dr.Ramesh';
            break;
        case "Heart":
            document.getElementById('text').innerHTML ='Dr.Shaami';
          document.getElementById('text1').innerHTML ='Dr.Neelam';
            break;
        case "Brain":
          document.getElementById('text').innerHTML ='Dr.Surya';
          document.getElementById('text1').innerHTML ='Dr.Sameer';
            break;
        default:
    }
}
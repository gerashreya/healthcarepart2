var agesMale = ["Kid(0-5) years", "Junior & Adolescent(6-16) years", "Young adult(6-16) years", "Adult(30-64) years", "Senior(65+) years"];
var agesFemale = ["Kid(0-5) years", "Junior & Adolescent(6-16) years", "Young adult(6-16) years", "Adult(30-64) years", "Senior(65+) years"];
var agesTransgender = ["Kid(0-5) years", "Junior & Adolescent(6-16) years", "Young adult(6-16) years", "Adult(30-64) years", "Senior(65+) years"];

var symptomsKid = ["Cough&Cold or ENT", "Teeth", "Eyes infection or anything related to eyes", "Skin related"];
var symptomsJunior = ["Cough&Cold or ENT", "Teeth", "Eyes infection or anything related to eyes", "Skin related"];
var symptomsYoung = ["Cough&Cold or ENT", "Teeth", "Eyes infection or anything related to eyes", "Skin related"];
var symptomsAdult = ["Cough&Cold or ENT", "Teeth", "Eyes infection or anything related to eyes", "Skin related"];
var symptomsSenior = ["Cough&Cold or ENT", "Teeth", "Eyes infection or anything related to eyes", "Skin related"];


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
        case "Cough&Cold or ENT":
            document.getElementById('text').innerHTML =`
Name:Dr. Christine Arquiza|
Qual:Doctor of Medicine|
Exp:25 years experience overall|
Contact no.: +91-9994566123 `;
			document.getElementById('text1').innerHTML =`
Name:Dr. Angelica Embry|
Qual:Doctor of Medicine|
Exp:10 years experience overall|
Contact no.: +91-9994566122`;
            break;
        case "Teeth":
           document.getElementById('text').innerHTML =`
Name:Dr. Teddy Gonzales|
Qual:DMD - Doctor of Dental Medicine|
Exp:5 years experience overall|
Contact no.: +91-9994566125`;
          document.getElementById('text1').innerHTML =`
Name:Dr. Chrissy Thomas|
Qual:DMD - Doctor of Dental Medicine|
Exp:15 years experience overall|
Contact no.: +91-9994566146`;
            break;
        case "Eyes infection or anything related to eyes":
            document.getElementById('text').innerHTML =`
Name:Dr.B.K.Lohia|
Qual: MBBS, MS - Ophthalmology|
Exp:8 years experience overall|
Contact no.: +91-9994566167`;
          document.getElementById('text1').innerHTML =`
Name:Dr. Neelam Shaikh|
Qual: MBBS, MS - Ophthalmology|
Exp:7 years experience overall|
Contact no.: +91-9994566100`;
            break;
        case "Skin related":
          document.getElementById('text').innerHTML =`
Name :Dr.Rajeshwari K.A Bhatt|
Qual: DNB, MD, MBBS,Dermatologist|
Exp:3 years experience overall|
Contact no.: +91-9994566345`;
          document.getElementById('text1').innerHTML =`
Name:Dr.Rasya Dixit|
Qual:MD - Dermatology, MBBS|
Exp:13 years experience overall|
Contact no.: +91-9994566310`;
            break;
        default:
    }
	

}

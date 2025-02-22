


function ValidateForm(event) {
    let isFormValid = true;  

    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let marital_status = document.getElementById('maritalstatus').value;
    let religion = document.getElementById('religion').value;
    let dob = document.getElementById('date').value;
    let email = document.getElementById('email').value;
    let contactNumber = document.getElementById('number').value;
    let fileInput = document.getElementById('myFile');
    let error_name = document.getElementById('err-name');
    let error_gender = document.getElementById('err-gender');
    let error_marital_status = document.getElementById('err-MS');
    let error_religion = document.getElementById('err-religion');
    let error_email = document.getElementById('err-email');
    let error_dob = document.getElementById('err-DOB');
    let error_contact = document.getElementById('err-number');
    let error_file = document.getElementById('err-file');
    let error_subjects = document.getElementById('err-subjects');
   



   // Sample data structure for provinces, districts, and municipalities
const provincesData = {
    "Koshi": {
        "districts": {
            "D1": ["Municipality1", "Municipality2"],
            "D2": ["Municipality3", "Municipality4"]
        }
    },
    "Bagmati": {
        "districts": {
            "D1": ["Municipality5", "Municipality6"],
            "D2": ["Municipality7", "Municipality8"]
        }
    }
};

// Get references to the DOM elements
const provinceSelect = document.getElementById('province');
const districtSelect = document.getElementById('district');
const municipalitySelect = document.getElementById('Municipality');

// Function to populate provinces dropdown
function loadProvinces() {
    Object.keys(provincesData).forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    });
}

// Function to populate districts based on selected province
function loadDistricts(province) {
    // Clear existing options in district and municipality dropdowns
    districtSelect.innerHTML = '<option value="">Please Select</option>';
    municipalitySelect.innerHTML = '<option value="">Please Select</option>';

    if (province && provincesData[province]) {
        const districts = provincesData[province].districts;
        Object.keys(districts).forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Function to populate municipalities based on selected district
function loadMunicipalities(province, district) {
    municipalitySelect.innerHTML = '<option value="">Please Select</option>'; // Clear previous options

    if (province && district && provincesData[province] && provincesData[province].districts[district]) {
        const municipalities = provincesData[province].districts[district];
        municipalities.forEach(municipality => {
            const option = document.createElement('option');
            option.value = municipality;
            option.textContent = municipality;
            municipalitySelect.appendChild(option);
        });
    }
}

// Event listener for province selection
provinceSelect.addEventListener('change', function() {
    const selectedProvince = provinceSelect.value;
    loadDistricts(selectedProvince); // Load districts based on selected province
});

// Event listener for district selection
districtSelect.addEventListener('change', function() {
    const selectedProvince = provinceSelect.value;
    const selectedDistrict = districtSelect.value;
    loadMunicipalities(selectedProvince, selectedDistrict); // Load municipalities based on selected district
});

// Call loadProvinces to initialize the province dropdown
loadProvinces();


    if (firstName === "" || lastName === "") {
        error_name.innerHTML = "Please enter First and Last name!";
        isFormValid = false;
    } else {
        error_name.innerHTML = "";
    }


    if (!gender) {
        error_gender.innerHTML = "Please Select any one gender!";
        isFormValid = false;
    } else {
        error_gender.innerHTML = "";
    }

    
    if (marital_status === "") {
        error_marital_status.innerHTML = "Please select your marital status!";
        isFormValid = false;
    } else {
        error_marital_status.innerHTML = "";
    }
 

    if (religion === "") {
        error_religion.innerHTML = "Please select your religion!";
        isFormValid = false;
    } else {
        error_religion.innerHTML = "";
    }

   
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        error_email.innerHTML = "Please enter your email!";
        isFormValid = false;
    } else if (!emailPattern.test(email)) {
        error_email.innerHTML = "Please enter a valid email!";
        isFormValid = false;
    } else {
        error_email.innerHTML = "";
    }

   
    if (dob === "") {
        error_dob.innerHTML = "Please insert your birthdate!";
        isFormValid = false;
    } else {
        let today = new Date();
        let inputDate = new Date(dob);

        if (inputDate > today) {
            error_dob.innerHTML = "Date of Birth cannot be in the future!";
            isFormValid = false;
        } else {
            error_dob.innerHTML = "";
        }
    }

   
    let numberPattern = /^(98|97)[0-9]{8}$/;
    if (contactNumber === "") {
        error_contact.innerHTML = "Please enter your contact number!";
        isFormValid = false;
    } else if (!numberPattern.test(contactNumber)) {
        error_contact.innerHTML = "Please enter a valid contact number!";
        isFormValid = false;
    } else {
        error_contact.innerHTML = "";
    }

  
    let allowedExtensions = ['image/jpeg', 'image/png', 'image/jpg'];
    let file = fileInput.files[0];

    if (file) {
        if (!allowedExtensions.includes(file.type)) {
            error_file.innerHTML = "Please insert a file in image format!";
            isFormValid = false;
        } else {
            error_file.innerHTML = "";
        }
    } else {
        error_file.innerHTML = "Please upload a file!";
        isFormValid = false;
    }

    
    let subjects = document.querySelectorAll('.Subjects input[type="checkbox"]:checked');
    if (subjects.length === 0) {
        error_subjects.innerHTML = "Please select at least one subject!";
        isFormValid = false;
    } else {
        error_subjects.innerHTML = "";
    }

    if (!isFormValid) {
        event.preventDefault();
    }
    console.log("form is beig validated");
}




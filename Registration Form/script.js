function validateForm() {

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let dob = document.getElementById("dob").value;
    let roll = document.getElementById("roll").value.trim();
    let enroll = document.getElementById("enroll").value.trim();
    let father = document.getElementById("father").value.trim();
    let mother = document.getElementById("mother").value.trim();
    let contact = document.getElementById("contact").value.trim();
 
    let email=document.getElementById("Email").value.trim();
    let caddress = document.getElementById("caddress").value.trim();
    let cdistrict = document.getElementById("cdistrict").value.trim();
    let cstate = document.getElementById("cstate").value.trim();
    let cpin = document.getElementById("cpin").value.trim();

    let paddress = document.getElementById("paddress").value.trim();
    let pdistrict = document.getElementById("pdistrict").value.trim();
    let pstate = document.getElementById("pstate").value.trim();
    let ppin = document.getElementById("ppin").value.trim();

    let marks10 = document.getElementById("marks10").value.trim();
    let marks12 = document.getElementById("marks12").value.trim();
    let course = document.getElementById("course").value;

    let cert10 = document.getElementById("cert10").value;
    let cert12 = document.getElementById("cert12").value;
    let aadhar = document.getElementById("aadhar").value;
    let photo = document.getElementById("photo").value;


    if (name === "" || age === "" || dob === "" || roll === "" ||
        enroll === "" || father === "" || mother === "" || contact === "" ||
        caddress === "" || cdistrict === "" || cstate === "" || cpin === "" ||
        paddress === "" || pdistrict === "" || pstate === "" || ppin === "" ||
        marks10 === "" || marks12 === "" || course === "" ||
        cert10 === "" || cert12 === "" || aadhar === "" || photo === "" || email==="") {

        alert("All fields are mandatory!");
        return false;
    }


    if (roll.length > 10) {
        alert("Roll number cannot exceed 10 digits");
        return false;
    }

    if (contact.length != 10) {
        alert("Contact number must be 10 digits");
        return false;
    }


    if (cpin.length != 6 || ppin.length != 6) {
        alert("Pincode must be 6 digits");
        return false;
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Please select gender");
        return false;
    }


    let category = document.querySelector('input[name="category"]:checked');
    if (!category) {
        alert("Please select category");
        return false;
    }

    return true;
}
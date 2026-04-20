function validateForm() {

    // 🔴 Common fields ek saath check
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();
    let dob = document.getElementById("dob").value;
    let color = document.getElementById("color").value;

    let instagram = document.getElementById("instagram").value.trim();
    let linkedin = document.getElementById("linkedin").value.trim();
    let x = document.getElementById("x").value.trim();
    let facebook = document.getElementById("facebook").value.trim();
    let snapchat = document.getElementById("snapchat").value.trim();

    let about = document.getElementById("about").value.trim();
    let sign = document.getElementById("sign").value.trim();


    if (name === "" || age === "" || email === "" || contact === "" ||
        address === "" || dob === "" || color === "" ||
        instagram === "" || linkedin === "" || x === "" ||
        facebook === "" || snapchat === "" ||
        about === "" || sign === "") {

        alert("All fields are mandatory!");
        return false;
    }
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Please select gender");
        return false;
    }
    let hobbies = document.querySelectorAll('input[name="hobby"]:checked');
    if (hobbies.length === 0) {
        alert("Select at least one hobby");
        return false;
    }

    return true;
}

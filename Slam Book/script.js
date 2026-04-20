function validateForm() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value;
    let color = document.getElementById("color").value;
    let social = document.getElementById("social").value;
    let about = document.getElementById("about").value.trim();
    let sign = document.getElementById("sign").value.trim();

    let gender = document.querySelector('input[name="gender"]:checked');
    let hobbies = document.querySelectorAll('input[name="hobby"]:checked');

    if (name === "" || age === "" || email === "" || contact === "" ||
        address === "" || dob === "" || social === "" ||
        about === "" || sign === "") {

        alert("All fields are mandatory!");
        return false;
    }

    if (!gender) {
        alert("Please select gender");
        return false;
    }

    if (hobbies.length === 0) {
        alert("Please select at least one hobby");
        return false;
    }

    return true; // ✅ form submit hoga → result.html
}
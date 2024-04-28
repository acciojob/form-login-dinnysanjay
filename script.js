function getFormvalue() {
    event.preventDefault();
    
    var firstName = document.querySelector('[name="fname"]').value;
    var lastName = document.querySelector('[name="lname"]').value;
    
    alert(firstName + ' ' + lastName);
}
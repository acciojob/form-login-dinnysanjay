document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var firstName = document.querySelector('#firstName').value;
    var lastName = document.querySelector('#lastName').value;
    
    alert(firstName + ' ' + lastName);
});
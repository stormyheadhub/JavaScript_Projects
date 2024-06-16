function myFunction() {
    var sentence = 'I am learning';
    sentence += ' a lot from this book!';
    document.getElementById("Concatenate").innerHTML = sentence;

}
     //Create variables for the welcome message
     var greeting = 'Howdy ';
     var firstname = 'Molly';
     var message = ', please check your order:';
     //Concatenate the three variables above to create the welcome message
     var welcome = greeting + firstname + message;

     //Get the element that has an id of greeting
     var el = document.getElementById('welcome');
    

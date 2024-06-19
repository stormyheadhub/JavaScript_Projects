function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

//create your own function here

function display_BookInfo() {
    var Book = {
        Title:"JavaScript&JQuery",
        Author:"Jon Duckett",
        Publisher:"Wiley",
        Published:2014,
        Rating:"Great!"
    };
    delete Book.Rating;
    document.getElementById("Dictionary").innerHTML = Book.Rating;
}
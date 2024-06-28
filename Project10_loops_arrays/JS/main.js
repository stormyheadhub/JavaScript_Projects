//This is code for a while loop.
function count_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//This is code for a for loop.
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }
//This is code for an array.
function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1]= "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "in this picture, the cat it is " +
        Cat_Picture[2] + ".";
}

//This is code for an object using the 'let' keyword.
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
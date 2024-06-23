document.write("5" + 10);

//Infinity, used to display a positive number.
document.write(2E310);

//-Infinity, used to display a negative number.
document.write(-3E310);

//This is a comparison of data returning a true, false or Not a Number output.
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_NanTest() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

function my_NanTestTwo() {
    document.getElementById("Test").innerHTML = isNaN('007');
}

//This is an example of comparing data for equality.

document.write(10==(5+5));

document.write(10==13);

//These are three examples of Boolean logical operators.

document.write(5>2&&10>4);

document.write(5>10||10>4);

document.write(5>10||10>20);




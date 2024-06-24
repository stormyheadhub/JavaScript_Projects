//This is an example of using the .concat method.
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

//This is an example of using the slice method.
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(21,33);
    document.getElementById("Slice").innerHTML = Section;
}

//This is an example of using the number methods.

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

//This is an example of using the toPrecision method.

function precision_Method() {
    var X = 12938.12094707090
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
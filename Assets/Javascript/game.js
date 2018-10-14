


// Word array
var words = ["classic clog", "bistro clog", "offroad sport clog", "yukon vista clog", "swiftwater wave", "walu slipon"]
// Choosing current word from word array at random
var currentword = words[Math.floor(Math.random() * words.length)];

//wins
var totalwins = 0;

//answer array and loop
var answer = [];
for (var i = 0; i < currentword.length; i++) {
    answer[i] = "_";
}

var remainingLetters = currentword.length;

//game loop
while (remainingLetters > 0) {
//showing progress
alert(answer.join(" "));
//guess take input and update
var guess = prompt("guess a letter");
if (guess === null) {
    break;
} else if (guess.length !==1) {
    alert("put one letter")
} else {
    for (var j = 0; j < currentword.length; j++){
        if (currentword[j] === guess) {
            answer[j] = guess;
            remainingLetters--;
        }
    }
}
}

//ending
document.write(answer.join(" "));
var endgame = document.write("Good job the word was " + currentword );

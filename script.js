var userInput = prompt("Enter the Sentence");

var vowels = ["a", "e", "i", "o", "u"];
var total = 0;


userInput = userInput.toLowerCase();

var characters = userInput.split('');

for (var i = 0; i < characters.length; i++) {
    if (vowels.includes(characters[i])) {
        total++;
    }
}

// Display the result
if (total > 0) {
    alert("Total vowel letters in your sentence is: " + total);
} else {
    alert("No vowel letters in your sentence");
}

// Write a function that will take a given string and reverse the order of the words.

// Example "Hello Carmeshia big head Lazzana" "Lazzana head big Carmeshia Hello"


// Write a function that takes a parameter
// reverse order 



function reverseWord(str) {

    // split (" ")
    // reverse()
    // join(" ")

    let splWord = str.split(" ");
    splWord = splWord.reverse();
    splWord = splWord.join(" ");
    console.log(splWord)
    return splWord;
}

let phrase = "Hello there black child"

reverseWord(phrase)



// let guess = "Hey there sugar";

// let spl = guess.split(" ")
// console.log(spl)

// let rev = spl.reverse();
// console.log(rev)

// let joi = rev.join(" ");
// console.log(joi)

function reverseString(reverseMe) { 

    // Declare a variable with an empty string to store the reversed string 
    let reversed = ""; 

    // Loop through the `reverseMe` string from back to front 
    for (let i = reverseMe.length - 1; i >= 0; i--) { 

       // Add each character to the end of `reversed` 
       reversed += reverseMe[i]; 
    } 
    return reversed;
}

// Return the completed string when the loop is complete return reversed; }
let words = "Nya is such a pretty dog";
console.log(reverseString(words)); 

function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
}

let wos = "Nya is such a pretty dog";
console.log(reverse(wos)); 
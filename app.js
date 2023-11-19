       //-------------------------------------- 18 to 20--------------------------------------------------------
    
    
    // ( Question Number 1 )


// let text = "";

// for (let i = 0; i < 5; i++) {
//   text += "hello World " + "<br>";
// }

// document.write(text)


//     ( Question Number 2 )


// let text = "";

// for (let i = 1; i < 11; i++) {
//   text += i+ "<br>";
// }

// document.write(text)


//     ( Question Number 3)


// let text = "";



// var number= +prompt("Insert number")

// var length= +prompt("Insert length")
// for (let i = 1; i < length; i++) {
//   text += number + "  x  " + i + "  =  " +  number*i   +"<br>";
// }

// document.write(text)


//     ( Question Number 4 )


// const  mobile= ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// let text = "";
// for (let i = 0; i < mobile.length; i++) {
//   text += mobile[i] + "<br>";
// }

// document.write(text)


//     ( Question Number 5 )


// const  fruit= ["Apple", "Banana", "Apple", "Strawberry", "Orange"];

// let text = "";
// for (let i = 0; i < fruit.length; i++) {
//   text += fruit[i] + "<br>";
// }


// let text1 = "";
// for (let i = 0; i < fruit.length; i++) {
//   text += "  Element at index  " + i + "  is  "+ fruit[i] + "<br>";
// }

// document.write(text)

// document.write(text1)


//     ( Question Number 6 )

// var N = +prompt("Enter the number of items:");


// if (isNaN(N) || N <= 0) {
//   alert("Please enter a valid positive number for N.");
// } else {

//   var items = [];


//   for (var i = 0; i < N; i++) {
//     var item = prompt("Enter value for index  " + (i) + ":");

//     items.push(item+"<br>");
//   }
//   document.write("Number Of Items   ",items.length,"<br>")

//   document.write("Items  :","<br>", items);
// }

//     ( Question Number 9 )



// var A = [24, 53, 78, 91, 12];


// var largest = A[0]; 


// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// document.write("Array Items : ",A,"<br>")
// document.write("The largest number in the array is:", largest);

// ( Question Number 10 )


// var A = [24, 53, 78, 91, 12];


// var smallest = A[0];

// for (var i = 1; i < A.length; i++) {

//   if (A[i] < smallest) {

//     smallest = A[i];
//   }
// }
// document.write("Array Items : ",A,"<br>")
// document.write("The smallest number in the array is:", smallest );


// ( Question Number 11 )


// var A = [24, 53, 78, 91, 12];


// var largest = A[0];
// var smallest = A[0];


// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i]; 
//   }
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// document.write("Array Items : ",A,"<br>")



// document.write("The largest number in the array is:  ", largest,"<br>");
// document.write("The smallest number in the array is:  ", smallest );



// ( Question Number 13 )


// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];


// var table = document.createElement("table");

// var headerRow = document.createElement("tr");
// var th1 = document.createElement("th");
// th1.textContent = "Student";
// var th2 = document.createElement("th");
// th2.textContent = "Score";
// headerRow.appendChild(th1);
// headerRow.appendChild(th2);
// table.appendChild(headerRow);


// for (var i = 0; i < students.length; i++) {
//   var student = students[i];
//   var score = scores[i];

//   var row = document.createElement("tr");

//   var cell1 = document.createElement("td");
//   cell1.textContent = student;

//   var cell2 = document.createElement("td");
//   cell2.textContent = score;

//   row.appendChild(cell1);
//   row.appendChild(cell2);

//   table.appendChild(row);
// }

// document.body.appendChild(table);



// ( Question Number 12 )


// for (var i = 1; i <= 100; i++) {

//     if (i % 5 === 0) {
//       document.write(i,",")
//     }
//   }



// ( Question Number 15 )


// var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


// for (var i = 0; i < A.length; i++) {

//   for (var j = 0; j < A[i].length; j++) {

//     document.write(A,[i][j]);
//   }
// }

// ( Question Number 17 )

// for (var i = 0; i <= 20; i++) {

//     if (i % 2 === 0) {
//       document.write(i + " is even" + "<br>");
//     } else {
//       document.write(i + " is odd" + "<br>");
//     }
//   }


// ( Question Number 18 )



// var product = 1;


// for (var i = 1; i <= 7; i += 2) {
//   product *= i;
// }


// document.write("The product of odd integers from 1 to 7 is:", product);

// ( Question Number 19 )


// var initialStars = +("Enter the initial number of stars:");


// if (isNaN(initialStars) || initialStars <= 0) {
//   alert("Please enter a valid positive number for the initial number of stars.");
// } else {

//   for (var i = initialStars; i >= 1; i--) {
//     var starLine = "";
//     for (var j = 1; j <= i; j++) {
//       starLine += "*";
//     }
//     document.write(starLine,"<br>");
//   }
// }





//---------------------------------------------------- 20 to 25--------------------------------------------------



//   ( Question number 1)


// var firstName = prompt("Enter your first name:");


// var lastName = prompt("Enter your last name:");


// var fullName = firstName + " " + lastName;


// alert("Hello, " + fullName + "! Welcome.");



//   ( Question number 2)



// var userInput = prompt("What is your favorite mobile phone model?");


// if (userInput !== null) {

//   var inputLength = userInput.length;

//  document.write("My favorite phone is :",  userInput,"<br>")
//   document.write("The length of String " + inputLength);
// } else {

//   document.write("No input provided.");
// }



//   ( Question number 3)



// var word = "Pakistani";


// var index = word.indexOf('n');

// document.write("String :  ",word,"<br>")
// document.write("The index of 'n' in 'Pakistani' is: " + index);




//   ( Question number 4)




// var str = "Hello World";
// var lastIndex = str.lastIndexOf("l");

// document.write("String :  ",str,"<br>")
// document.write("The last index of '1' in 'Hello World' is: " + lastIndex)


//   ( Question number 5)


    // var word = "pakistani";
    // var character = word.charAt(3);
    // document.write("String :  ",word,"<br>")
    // document.write("The character at the 3rd index in 'pakistani' is: " + character);



    
//   ( Question number 7)


    // var originalString = "Hyderabad";

    // var replacedString = originalString.replace("Hyder", "Islam");

    // document.write("<p>Original String: " + originalString + "</p>");
    // document.write("<p>Replaced String: " + replacedString + "</p>");



    //   ( Question number 9)

    // var stringNum = "472";
    // var number = parseInt(stringNum);

    // document.write("Original String: " + stringNum + "<br>");
    // document.write("Converted Number: " + number + "<br>");
    // document.write("Type of Original String: " + typeof stringNum + "<br>");
    // document.write("Type of Converted Number: " + typeof number + "<br>");




    //   ( Question number 11)
   
// var userInput = prompt("Enter some text:");


// if (userInput !== null) {

//   var uppercaseInput = userInput.toUpperCase();

//   document.write("User Input:  " + userInput + "<br>")

//   document.write("Uppercase: " + uppercaseInput);


// }




    //   ( Question number 12)

// var userInput = prompt("Enter some text:");

// var lowercaseInput = userInput.toLowerCase();



// document.write("User Input:  " + userInput + "<br>")
// document.write("Input in lowercase: " + lowercaseInput);



 //   ( Question number 13)



// var userInput = prompt("Enter a sentence or phrase:");

// function toTitleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join(' ');
// }

// var titleCaseInput = toTitleCase(userInput);

// document.write("User Input:  ", userInput , "<br>")
// document.write("Input in title case:  ", titleCaseInput);




 //   ( Question number 15)


// var a = "3";
// var b = "3";
// var x = a + b;
// document.write("The value of x is: " + x);



 //   ( Question number 16)


// var a = "3";
// var b = "3";

// var y = a - b;

// document.write("The value of y is: " + y)


 //   ( Question number 22)


// var userInput = prompt("Enter a string:");

// if (userInput !== null && userInput !== "") {

//   var lastCharacter = userInput.charAt(userInput.length - 1);
//   console.log("Using charAt():", lastCharacter);
//   var lastIndex = userInput.length - 1;
//   var lastChar = userInput[lastIndex];
//   document.write("the last character of input is:", lastChar,"<br>");
// } else {
//     document.write("No input provided or input is empty.");
// }






 //   ( Question number 24)

// var vowels = 0;
// var consonants = 0;

// for (var i = 0; i < str.length; i++) {
//   var char = str.charAt(i);
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     vowels++;
//   } else if (char >= 'a' && char <= 'z') {
//     consonants++;
//   }
// }

// document.write("Number of vowels: " + vowels+"<br>");
// document.write("Number of consonants: " + consonants);

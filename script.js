function firstChar(text) {
  // your code here
	let trimText = text.trim() // which removes the white space starting and the ending
     return trimText.charAt(0);
}
// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));

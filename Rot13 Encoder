function rot13(str) {
str.toUpperCase(); 


let abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];

let rot = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


let arr = str.split("");

 for (var i = 0; i < arr.length; i++) { // Iterate number of `arr` elements
      for (var j = 0; j < abc.length; j++) { // Iterate number of `abc`/`nop` array elements
      if (arr[i] === abc[j]) {
        arr[i] = rot[j]; // Swap the `arr` character for the corresponding `nop` array character
      } else if (arr[i] === rot[j]) {
        arr[i] = abc[j]; // Swap the `arr` character for the corresponding `abc` array character
      }
    }
  }
  return arr.join("");
}
rot13("SERR PBQR PNZC");

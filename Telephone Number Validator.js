/* Valid examples:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/


//first solution
function telephoneCheck(str) {
  
  let re1 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  let re2 = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
  let re3 = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
  let re4 = /^[0-9]{3} [0-9]{3} [0-9]{4}$/;
  let re5 = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
  let re6 = /[1] [0-9]{3} [0-9]{3} [0-9]{4}/;
  let re7 = /[1] [0-9]{3}-[0-9]{3}-[0-9]{4}/;
  let re8 = /^[1] \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
  let re9 = /[1]\([0-9]{3}\)[0-9]{3}-[0-9]{4}/;
  

  
  return re1.test(str) || re2.test(str) || re3.test(str) || re4.test(str) || re5.test(str) || re6.test(str) || re7.test(str) || re8.test(str) || re9.test(str);



  
}

telephoneCheck("555-555-5555");


//second solution

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");


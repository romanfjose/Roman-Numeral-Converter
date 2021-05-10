function convertToRoman(num) {
  let roman = "";
  while(num >= 1){
    
 
    if(roman.includes("III")){
     if(roman.includes( "VIII")){
       
         roman = roman.replace("VIII", "IX");  }
      else  
      roman = roman.replace("III", "IV");
                }
       else
        if(roman.includes("IV")){
          roman = roman.replace("IV", "V");} 
        else
        if(roman.includes("IX")){
          roman = roman.replace ("IX", "X");}
          else
          roman = roman +"I";
          num--; 
  
 
 
  if(roman.includes("VV")){
    roman = roman.replace("VV","X");
  }


//LL
  if(roman.includes("XXXX")){
    roman = roman.replace("XXXX","XL");
  }
  
  if(roman.includes("XLX")){
    roman = roman.replace("XLX","L");
  }

//CC
  if(roman.includes("LXL")){
    roman = roman.replace("LXL","XC");
  }

  if(roman.includes("XCX")){
    roman = roman.replace("XCX","C");
  }
  

// DD
  if(roman.includes("CCCC")){
    roman = roman.replace("CCCC","CD");
  }
  
  if(roman.includes("CDC")){
    roman = roman.replace("CDC","D");
  }

// MM
  if(roman.includes("DCD")){
    roman = roman.replace("DCD","CM");
  }

  if(roman.includes("CMC")){
    roman = roman.replace("CMC","M");
  }

} //fin bucle

 return roman;
}

convertToRoman(36);




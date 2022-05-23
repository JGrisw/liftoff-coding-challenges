function detectWord(str) {
    let result = '';
      for(let i =0; i < str.length;i++){
      let testLetter = str[i];
      if(testLetter == testLetter.toLowerCase()){
        result += testLetter;
      }
    }
  
    console.log(result);
  }
  
  detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");
  detectWord("bEEFGBuFBRrHgUHlNFYaYr");
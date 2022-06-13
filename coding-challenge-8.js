function charCount(myChar, str) {
    let count = 0;
    for(let i =0; i <str.length; i++){
      let string = str[i];
      if (myChar === string ){
        count += 1;
      }
    }
    console.log(count)
    return count;
  }
  
  charCount("a", "edabit");
  charCount("c", "Chamber of secrets");
  charCount("b", "big fat bubble");
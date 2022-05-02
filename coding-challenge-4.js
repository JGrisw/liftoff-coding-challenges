function LongestWord(sen) { 
    let array = sen.split(" ");
    let pattern = /[^A-z]/;
    let highest ="k";
    for( let i=0; i < array.length;i++){
      if(pattern.test(array[i]) == false){
        if(array[i].length > highest.length){
          highest= array[i];
        }
      }
    }
    return highest; 
  
  }
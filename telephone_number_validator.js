function telephoneCheck(str) {
    var outBool = false
  
    const testReg = /(1?)(\s?)([(]?)\d{3}([)]?)\s?-?\d{3}-?\s?\d{4}/g;
    console.log(str.match(testReg));
  
    //Check for the right number of digits (10 or 11)
    const lengthReg = /(1?)(\s?)([(]?)\d{3}([)]?)\s?-?\d{3}-?\s?\d{4}/g;
    if (lengthReg.test(str)) {
      outBool = true;
      console.log(str.match(lengthReg))
    } else {
      outBool = false;
      console.log(str.match(lengthReg))
    }
  
    //Check that any brackets are closed and in the right order
  
    console.log(outBool)
    return outBool;
  }
  
  telephoneCheck("1 (555) 555 5555");
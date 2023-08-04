function telephoneCheck(str) {

    //Check that any brackets are closed and in the right order
    if (((str.indexOf("(") == -1) && (str.indexOf(")") != -1)) ||((str.indexOf("(") != -1) && (str.indexOf(")") == -1)))  {
      return false;
    }
  
  
    //Check for the right number of digits (10 or 11)
    const lengthReg = /^(1?)(\s?)([(]?)\d{3}([)]?)\s?-?\d{3}-?\s?\d{4}$/g;
    if (lengthReg.test(str)) {
      return true
    } else {
      return false
    }
  }
  
  telephoneCheck("1 (555) 555 5555");
function isLeapYear(yearInAD){
    
    if(yearInAD % 400 == 0){
      return true;
  }else if(yearInAD % 100 == 0){
      return false;
  }else if(yearInAD % 4 == 0){
      return true;
  }else{
      return false;
  }
}

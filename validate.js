
function validateCreds(){
  let inputs = document.querySelectorAll('input')
  let isValidName
  let isValidNum
  let isValidCvc

  let regPatterns = {
    clientName:/[a-zA-Z]/i,
    cardNum:/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
    month:/\d/,
    year:/\d/,
    CVC:/^\d{3}$/
  } //REGEX FOR INPUTS

  if(inputs[0].value ==''){
    isValidName = false;
    document.getElementById('spnIsNameValid').style.color = 'hsl(0, 100%, 66%)';
    document.getElementById('clientName').style.border = '1px solid hsl(0, 100%, 66%)';
    document.getElementById('spnIsNameValid').innerHTML = "Name can't be blank";
  }else if(regPatterns.clientName.test(inputs[0].value)){
    isValidName = true;
    document.getElementById('spnIsNameValid').innerHTML = '';
    document.getElementById('clientName').style.border = '1px solid hsl(270, 3%, 87%)';
  }else{
    isValidName = false;
    document.getElementById('clientName').style.border = '1px solid hsl(0, 100%, 66%)';
    document.getElementById('spnIsNameValid').style.color = 'hsl(0, 100%, 66%)';
    document.getElementById('spnIsNameValid').innerHTML = "Wrong format";
  }; //NAME VALIDATION


  if(inputs[1].value ==''){
    isValidNum = false;
    document.getElementById('spnIsNumValid').style.color = 'hsl(0, 100%, 66%)';
    document.getElementById('cardNum').style.border = '1px solid hsl(0, 100%, 66%)';
    document.getElementById('spnIsNumValid').innerHTML = "Number can't be blank";
  }else if(regPatterns.cardNum.test(inputs[1].value)){
    isValidNum = true;
    document.getElementById('spnIsNumValid').innerHTML = '';
    document.getElementById('cardNum').style.border = '1px solid hsl(270, 3%, 87%)';
  }else{
    isValidNum = false;
    document.getElementById('cardNum').style.border = '1px solid hsl(0, 100%, 66%)';
    document.getElementById('spnIsNumValid').style.color = 'hsl(0, 100%, 66%)';
    document.getElementById('spnIsNumValid').innerHTML = "Wrong format";
  }; //NUM VALIDATION

  if(inputs[2].value ==''){
    isValidCvc = false;
    document.getElementById('spnIsCvcValid').style.color = 'hsl(0, 100%, 66%)';
    document.getElementById('CVC').style.border = '1px solid hsl(0, 100%, 66%)';
    document.getElementById('spnIsCvcValid').innerHTML = "Can't be blank";
  }else if(regPatterns.CVC.test(inputs[2].value)){
    isValidNum = true;
    document.getElementById('spnIsCvcValid').innerHTML = '';
    document.getElementById('CVC').style.border = '1px solid hsl(270, 3%, 87%)';
  }else{
    isValidNum = false;
    document.getElementById('CVC').style.border = '1px solid hsl(0, 100%, 66%)';
    document.getElementById('spnIsCvcValid').style.color = 'hsl(0, 100%, 66%)';
    document.getElementById('spnIsCvcValid').innerHTML = "Wrong format";
  }; //CVC VALIDATION
   

  if(isValidName==false||isValidNum==false||isValidCvc==false){
    return false
  }
};

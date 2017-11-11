$("document").ready(function(){
  var calcArr = [];
  var isResult = false;

  $('.num').click(function(){
    if (isResult){
      clearResult();
      isResult = false;
    }
    calcArr.push($(this).text());
    displayAdd();
  })

  $('#plus').click(function(){
    if (isResult) {
      isResult = false;
    }
    if(!(calcArr[calcArr.length-1]=== ' ' || calcArr[calcArr.length-1]=== '.') && !(calcArr.length === 0)){
      calcArr.push(' +');
      calcArr.push(' ');
      displayAdd();
    }
  })

  $('#minus').click(function(){
    if (isResult) {
      isResult = false;
    }
    if(!(calcArr[calcArr.length-1]=== '.')){
      calcArr.push(' -');
      calcArr.push(' ');
      displayAdd();
    }
  })

  $('#divide').click(function(){
    if (isResult) {
      isResult = false;
    }
    if(!(calcArr[calcArr.length-1]=== ' ' || calcArr[calcArr.length-1]=== '.') && !(calcArr.length === 0)){
      calcArr.push(' /');
      calcArr.push(' ');
      displayAdd();
    }
  })

  $('#multiply').click(function(){
    if (isResult) {
      isResult = false;
    }
    if(!(calcArr[calcArr.length-1]=== ' ' || calcArr[calcArr.length-1]=== '.') && !(calcArr.length === 0)){
      calcArr.push(' *');
      calcArr.push(' ');
      displayAdd();
    }
  })

  $('#decimal').click(function(){
    var currentNum = calcArr.join('').match(/(\d+([\.]\d+)?)(?!.*\d)/g);
    var nonDecimal = calcArr.join('').match(/(\d+)(?!.*\d)/g)
    if (eval(currentNum - nonDecimal)=== 0) {
      if (isResult){
        clearResult();
        isResult = false;
      }
      if(!(calcArr[calcArr.length-1]=== '.')){
        if(calcArr.length === 0 || calcArr[calcArr.length-1]=== ' '){
          calcArr.push('0');
          calcArr.push('.');
        } else {
          calcArr.push('.');
        }
        displayAdd();
      }
    }
  })

  $('#equal').click(function(){
    var choppedNum = eval(calcArr.join('')).toPrecision(9)
    $('#result').html('<h2>' + parseFloat(choppedNum) + '</h2>');
    displayEquals();
    isResult = true;
  })

  $('#AC').click(function(){
    clearAll();
  });

  $('#CE').click(function(){
    clearRecent();
  });

  function displayAdd(){
    if (calcArr.length > 0){
      var calcArrJoined = calcArr.join('')
      $('#display').html('<p id="tracking">' + calcArrJoined + '</p>');
    }
  }

  function displayEquals(){
    var tmp = eval(calcArr.join(''))
    calcArr = [];
    $('#tracking').text('');
    calcArr.push(tmp);
  }

  function clearAll(){
    calcArr = [];
    $('#result').html('<h2></h2>');
    $('#tracking').text('');
  }

  function clearResult(){
    calcArr = [];
    $('#result').html('<h2></h2>');
  }
  function clearRecent(){
    if(!(calcArr.length === 0)){
      if(calcArr[calcArr.length-1] === " "){
        var mathCleared = calcArr.join('').slice(0,-3);
        calcArr = mathCleared.split('');
        displayAdd();
      } else {
        var currentNum = calcArr.join('').match(/(\d+([\.]\d+)?)(?!.*\d)/g).toString();
        if (currentNum.length === calcArr.length){
          clearAll();
        } else {
          calcArr = calcArr.join('').slice(0,-(currentNum.length)).split('');
          displayAdd();
        }

      }
    }
  }


})

/*
Bugs to Fix!
>>> Max display for d


Features to Add

>>> Throw error message
>>> More complex functions

Upgrades
>>> More efficient click function code
>>> Type numbers on keyboard

*/

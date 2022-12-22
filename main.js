
number = document.getElementById('number');
display = document.getElementById('display');

  
document.addEventListener('click',function(event) {

  //イコール押下時計算
  if(event.target.matches('#eq')) {
      const calcResut = eval(display.innerText);
       display.innerText = calcResut;
  }

  //AC押下時
  if(event.target.matches('.clear')) {
      document.getElementById('display').innerText = '';
      return;
  }
  
  //頭に０を連続押下時
  if(((event.target.matches('.zero'))&& display.innerText=="0")||(display.innerText=="."&&(event.target.matches('.zero')))) {
      display.innerText = '0.';
  }
	


  //演算子を連続で打てないよう制御
  if(((event.target.matches('.ope')) && (display.innerText.slice(-1)=== "+"))){return;
  }else if(((event.target.matches('.ope')) && (display.innerText.slice(-1)=== "-"))){return;
  }else if(((event.target.matches('.ope')) && (display.innerText.slice(-1)=== "*"))){return;
  }else if(((event.target.matches('.ope')) && (display.innerText.slice(-1)=== "/"))){return;
  }else if(((event.target.matches('.ope')) && (display.innerText.slice(-1)=== "."))){return;
  }else if(event.target.matches('.ope')){
    console.log(event.target.innerText);   
    let clickNumber = event.target.innerText;
    let beforeClickNumber = display.innerText;
    display.innerText = beforeClickNumber + clickNumber;
  }

	//数字押下時先頭が０なら消して表示
  if((event.target.matches('.number'))&&(display.innerText == "0")) {
          display.innerText = number;
  }

  //数字を押下時ディスプレイに連続表示
  if(event.target.matches('.number')){
    console.log(event.target.innerText);
    let clickNumber = event.target.innerText;
    let beforeClickNumber = display.innerText;
    display.innerText = beforeClickNumber + clickNumber;
    return;
    }
}); 
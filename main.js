
number = document.getElementById('number');
display = document.getElementById('display');

var tenFlg="false"; 

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
    
    //数字を押下時ディスプレイに連続表示
    if(!event.target.matches('.number'))return;
    console.log(event.target.innerText);
    let clickNumber = event.target.innerText;
    let beforeClickNumber = display.innerText;
    display.innerText = beforeClickNumber + clickNumber;
    
    //頭に０を連続押下時の制御
    if(((event.target.matches('.zero'))&& display.innerText=="0")||(display.innerText=="0"&&(event.target.matches('.dot')))) {
        display.innerText = '0.';
    }

    //演算子を連続で打てないよう制御
    let result =display.innerText.slice(-1);
    if((event.target.matches('.ope'))&& ( result == '.ope')) {
        display.innerText = beforeClickNumber;
    }
}); 

function clickme(){
    var birth=prompt('Enter your birth year');
    var result=(2021-birth)*365;
var h1=document.createElement('h1');
var text=document.createTextNode('You are '+result+' days old');
h1.setAttribute('id','ageindays');
h1.appendChild(text);
document.getElementById('result-box').appendChild(h1);
}


function reset(){
document.getElementById('ageindays').remove();
}


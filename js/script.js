function testFunktion() {
    //document.getElementById('button').addEventListener("touchstart", changeContent);
    document.getElementById('rollButton').addEventListener("click", changeContent);
}
function changeContent() {
    document.getElementById('dice').innerHTML = '6';
    document.getElementById('dice').setAttribute('style', 'background-color: #333333;');
}

function testFunktion(){
    //document.getElementById('button').addEventListener("touchstart", changeContent);
    document.getElementById('rollButton').addEventListener("click", writeNumber);
}
function writeNumber(){
    //Math.random(); gibt eine "zufällige" Zahl zwischen 0 und 1 zurück
    var number = Math.random()*6; 
    //Math.ceil(Zahl); rundet die Zahl "Zahl1" auf die nächstgrössere ganze Zahl auf
    number = Math.ceil(number)
    document.getElementById('dice').innerHTML = number;
}
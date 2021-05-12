var chaosCount = 1;
var chaosPrice = 0.5;

    function chaosPlus() {
        chaosCount += 1;
        chaosPrice += 0.5;
        document.getElementById("chaosCount").innerHTML = chaosCount;
        document.getElementById("chaosPrice").innerHTML = chaosPrice + '$';
    };
    function chaosMinus() {
    	if(chaosCount>0){
        chaosCount -= 1;
        chaosPrice -= 0.5;
        document.getElementById("chaosCount").innerHTML = chaosCount;
        document.getElementById("chaosPrice").innerHTML = chaosPrice + '$';
        }
    };




var exCount = 1;
var exPrice = 3;
    function exPlus() {
        exCount += 1;
        exPrice += 3;
        document.getElementById("exCount").innerHTML = exCount;
        document.getElementById("exPrice").innerHTML = exPrice + '$';
    };
    function exMinus() {
    	if(exCount>0){
        exCount -= 1;
        exPrice -= 3;
        document.getElementById("exCount").innerHTML = exCount;
        document.getElementById("exPrice").innerHTML = exPrice + '$';
        }
    };




var mirCount = 1;
var mirPrice = 300;
    function mirPlus() {
        mirCount += 1;
        mirPrice += 300;
        document.getElementById("mirCount").innerHTML = mirCount;
        document.getElementById("mirPrice").innerHTML = mirPrice + '$';
    };
    function mirMinus() {
    	if(mirCount>0){
        mirCount -= 1;
        mirPrice -= 300;
        document.getElementById("mirCount").innerHTML = mirCount;
        document.getElementById("mirPrice").innerHTML = mirPrice + '$';
        }
    };
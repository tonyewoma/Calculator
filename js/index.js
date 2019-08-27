function insert(num){
    'use strict';
    document.form.resultdisplay.value +=num;
}

function equal(){
    'use strict';
    document.form.resultdisplay.value = eval(document.form.resultdisplay.value);
}

function clean(){
    'use strict';
    document.form.resultdisplay.value="";
}

function operat(oper){
    'use strict';
    document.form.resultdisplay.value +=oper;
    
    var x=document.form.resultdisplay.value.solit("");
    
    if(x[0]==="+" || x[0]==="*" || x[0]==="/" || x[0]==="."){
        console.log(x[0]);
        document.form.resultdisplay.value="Error";
    }
}
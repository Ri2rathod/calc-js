var btn_class=document.getElementsByClassName('btn');
var display=document.getElementById('display');
var inputer=document.getElementById('inputer');

var history_opetation=document.getElementById('history_opetation');

var flag=1;
function btn_operation(btn)
{
    if(btn =="[object HTMLButtonElement]")
    {
        btn=btn.textContent;
    }
    switch (btn) {
        case "Backspace":
            if(inputer.value=="")
            {
                inputer.value=display.textContent;
                display.textContent="";
            }
            else{
                inputer.value=inputer.value.slice(0,-1)
            }
            break;
        case "+/-":
            if(flag)
            {
                inputer.value=inputer.value*-1;
                flag=0;
            }
            else{
                inputer.value=Math.abs(inputer.value);
                flag=1;
            }
            break;
        case "%":
            opetation(btn);
            btn_operation_eval();
            break;
        case "/":
            opetation(btn);
            btn_operation_eval();
            break;
        case "*":
            opetation(btn);
            btn_operation_eval();
            break;
        case "-":
            opetation(btn);
            btn_operation_eval();
            break;
        case "+":
            opetation(btn);
            btn_operation_eval();
            break;
        default:

            break;
    }
}
function btn_number(btn)
{
    if(btn !="[object HTMLButtonElement]")
    {
        inputer.value+=btn;
    }
    else{
        inputer.value+=btn.textContent;
    }
}
function reset_all()
{
    display.textContent="";
    inputer.value="";
    history_opetation.las
    var child = history_opetation.lastElementChild; 
        while (child) {
            history_opetation.removeChild(child);
            child = history_opetation.lastElementChild;
    }
}
function btn_operation_eval(){

    if(inputer.value == "0")
    {
        return false;
    }

    if (typeof btn !== 'undefined') {
        var equation= display.textContent+inputer.value;
        inputer.value=eval(display.textContent+inputer.value);
        equation+=inputer.value;

        history_opetation.innerHTML+="<p> "+ equation +"</p>";
    }
    else
    {
        var equation= display.textContent+inputer.value;
        console.log(equation);
        inputer.value=eval(display.textContent+inputer.value);

        equation+="="+inputer.value;

        history_opetation.innerHTML+="<p> "+ equation +"</p>";

        display.textContent="";
    }
}

function opetation(operator)
{
    var display_text=display.textContent.slice(-1);
        if((display_text == '%' || display_text == '/' || display_text == '*' || display_text == '+' || display_text == '-'))
        {
            console.log("inner");
            display.textContent=display.textContent.slice(0,display.textContent.length-1) +  operator;
        }
        else{
            display.textContent=inputer.value+operator;
            inputer.value="";
        }
}

function key_event(e)
{
    if(e.key>=0 && e.key<=9)
    {
        btn_number(e.key);
    }
    else if(e.key== "Enter")
    {
        btn_operation_eval();
    }
    else
    {
        btn_operation(e.key);
        console.log(e.key);
    }
}
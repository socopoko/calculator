function evalTo() {
    calc.display.value = eval(calc.display.value);
}

function ac() {
    calc.display.value = "";
}

function del() {
    let previous = calc.display.value;
    calc.display.value = previous.substr(0, previous.length - 1);
}

function fact() {
    if (!isNaN(calc.display.value)){
        let n = calc.display.value;
        let answer = 1;
        if (n == 0 || n == 1) {
            answer = 1;
        }
        else {
            for (var i = n; i >= 1; i--) {
                answer = answer * i;
            }
        }
        calc.display.value = answer;
    }
}

function sqrt() {
    if (!isNaN(calc.display.value))
        calc.display.value = Math.pow(calc.display.value, 1 / 2);
}

function prime() {
    if(!isNaN(calc.display.value))
    {
        if (calc.display.value == "")
            return
        else if (calc.display.value == "0" || calc.display.value == "1")
            calc.display.value = calc.display.value + " is not prime";
        else {
            let n, i, flag = true;
            n = calc.display.value;

            for (i = 2; i < n; i++)
                if (n % i == 0) {
                    flag = false;
                    break;
                }

            if (flag == true)
                calc.display.value = n + " is prime";
            else
                calc.display.value = n + " is not prime";
        }
    }
}
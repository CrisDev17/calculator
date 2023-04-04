var output = document.getElementById('output')
var keys = document.querySelectorAll('#num')
var equal = document.querySelector('#equal')
var clear = document.querySelector('#clearall')
var del = document.querySelector('#delete')
keys.forEach(key => {
    key.addEventListener('click', () => {
        output.innerHTML += key.innerText;
    })
})
equal.addEventListener('click', () => {
    output.innerHTML = eval(output.innerHTML);
})
clear.addEventListener('click', () => {
    output.innerHTML = ' ';
}) 
del.addEventListener('click', () => {
    output.innerHTML = output.innerHTML.replace(output.innerHTML.substring(output.innerHTML.length - 1), '');
})



var minus1 = document.querySelector('#weight #minus')
var plus1 = document.querySelector('#weight #plus')
var minus2 = document.querySelector('#height #minus')
var plus2 = document.querySelector('#height #plus')
var num1 = document.querySelector('#weight #num1')
var num2 = document.querySelector('#height #num2')
var result = document.querySelector('#result')
var type = document.querySelector('#type')
minus1.addEventListener('click', () => {
    var a = Number(num1.innerText)
    if (a == 0) {
        num1.innerHTML = 0;
        result.innerHTML = '0';
    }
    else {
        a--;
        num1.innerHTML = a;
        var ibm = (num1.innerHTML / ((num2.innerHTML * 0.01) * (num2.innerHTML * 0.01))).toFixed(2);
        result.innerHTML = ibm;
        if( ibm < 18.5) {
            type.innerHTML = 'Thin';
        }
        if( ibm < 25 && ibm > 18.5) {
            type.innerHTML = 'Normal';
        }
        if( ibm < 30 && ibm > 25) {
            type.innerHTML = 'Overweight';
        }
        if( ibm >= 30) {
            type.innerHTML = 'Obese';
        }
    }
})
plus1.addEventListener('click', () => {
    var b = Number(num1.innerText)
    b++;
    num1.innerHTML = b;
    var ibm = (num1.innerHTML / ((num2.innerHTML * 0.01) * (num2.innerHTML * 0.01))).toFixed(2);
    result.innerHTML = ibm;
    if( ibm < 18.5) {
        type.innerHTML = 'Thin';
    }
    if( ibm < 25 && ibm > 18.5) {
        type.innerHTML = 'Normal';
    }
    if( ibm < 30 && ibm > 25) {
        type.innerHTML = 'Overweight';
    }
    if( ibm >= 30) {
        type.innerHTML = 'Obese';
    }
})
minus2.addEventListener('click', () => {
    var c = Number(num2.innerText)

    if (c == 0) {
        num2.innerHTML = 0;
        result.innerHTML = 'Error'
    }
    else {
        c--;
        num2.innerHTML = c;
        var ibm = (num1.innerHTML / ((num2.innerHTML * 0.01) * (num2.innerHTML * 0.01))).toFixed(2);
        result.innerHTML = ibm;
        if( ibm < 18.5) {
            type.innerHTML = 'Thin';
        }
        if( ibm < 25 && ibm > 18.5) {
            type.innerHTML = 'Normal';
        }
        if( ibm < 30 && ibm > 25) {
            type.innerHTML = 'Overweight';
        }
        if( ibm >= 30) {
            type.innerHTML = 'Obese';
        }
    }
})
plus2.addEventListener('click', () => {
    var d = Number(num2.innerText)
    d++;
    num2.innerHTML = d;
    var ibm = (num1.innerHTML / ((num2.innerHTML * 0.01) * (num2.innerHTML * 0.01))).toFixed(2);
    result.innerHTML = ibm;
    if( ibm < 18.5) {
        type.innerHTML = 'Thin';
    }
    if( ibm < 25 && ibm > 18.5) {
        type.innerHTML = 'Normal';
    }
    if( ibm < 30 && ibm > 25) {
        type.innerHTML = 'Overweight';
    }
    if( ibm >= 30) {
        type.innerHTML = 'Obese';
    }
})



fetch('https://gorest.co.in/public/v2/users')
  .then( response => {
      return response.json()
  })
  .then( user => {
    console.log(user)
  })
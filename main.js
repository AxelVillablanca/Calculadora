const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item)=> {
    item.onclick= ()=> {
        if(item.id== 'clear'){
            display.innerText='';
        }else if(item.id== 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1);
        }else if(display.innerText != '' && item.id == 'igual'){
            display.innerText = eval(display.innerText);
        }else if(display.innerText == '' && item.id == 'igual'){
            display.innerText = 'Vacio!';
            setTimeout(()=> (display.innerText = ''), 2000);
        }else {
            display.innerText += item.id;
        }
    }
})

const selectorBtn = document.querySelector('.selector');
const calculadora = document.querySelector('.calculadora');
const selectorIcono = document.querySelector('.icono');
let esOscuro = true;
selectorBtn.onclick = () => {
    calculadora.classList.toggle('oscuro');
    selectorBtn.classList.toggle('active');
    esOscuro = !esOscuro;
}
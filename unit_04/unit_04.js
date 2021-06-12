// Task 1
// При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.

let btn1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');

function f1() {
    out1.innerHTML = 1;
}

btn1.addEventListener('click', f1);

// Task 2
// При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. Т.е. как видите, мы можем повесить клик на любой элемент.

let i2 = document.querySelector('.i-2');
let out2 = document.querySelector('.out-2');

function f2() {
    out2.textContent = 2;
}

i2.addEventListener('click', f2)


// Task 3
//  При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число 3. Т.е. как видите, мы можем повеcить клик на любой элемент.

let p3 = document.querySelector('.p-3');
let out3 = document.querySelector('.out-3');

function f3() {
    out3.textContent = 3;
}

p3.addEventListener('click', f3)


// Task 4.
// При клике по кнопке .b-4 запускается функция f4. Функция проверяет состояние .i-4 и если он checked - выводит true, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае - div.out-4

let b4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');
let i4 = document.querySelector('.i-4');
function f4(){
    if(i4.checked){
        out4.innerHTML = i4.checked;
    }
    else {
        out4.innerHTML = i4.checked;
    }
}
b4.addEventListener('click', f4)


// Task 5.
// При клике по кнопке .b-5 запускается функция f5. Функция проверяет состояние .i-5 и если он checked - выводит value данного элемента, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

let b5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');
let i5 = document.querySelector('.i-5');
function f5(){
    if (i5.checked){
        out5.innerHTML = i5.value;
    }
}
b5.addEventListener('click', f5);


// Task 6.
// При нажатии на кнопку выводите value из input.i-6 в div.out-6. Обратите внимание, что даже скрытый hidden input - нам не помеха.

let b6 = document.querySelector('.b-6');
let i6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');
function f6(){
    out6.innerHTML = i6.value;
}
b6.addEventListener('click', f6);
// Task 7.
// При нажатии на кнопку выводите в div.out-71 value прописанное в input .i-7. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.
let i7 = document.querySelector('.i-7');
let out71 = document.querySelector('.out-71');
let out72 = document.querySelector('.out-72');
let b7 = document.querySelector('.b-7');
function f7(){
    out71.innerHTML = i7.value;
    if (i7.value == '=' || i7.value == '+'|| i7.value == '888' || i7.value == '   '){
        alert(" NO ");
        out71.textContent = '';
    } else  if(i7.value.length < 6) {
        out72.textContent = 0;
    } else  if(i7.value.length >= 6){
        out72.textContent = 1;
    }
}
b7.addEventListener('click',f7)

// Task 8.
// При нажатии кнопки .b-8 запускается функция f8. Функция с помощью innerHTML создает в .out-8 новый div с классом "js2" и текстом "new div". Нажали несколько раз? Создаем несколько раз!

let b8 = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');
function f8(){
    let text = 'New div'
    out8.innerHTML += `<div class="js2">${text}</div>`;
}
b8.addEventListener('click', f8);

// Task 9
// При нажатии кнопки .b-9 запускаем функцию f9. Функция проверяет checked элемента .r-9. Если элемент выбран (checked) то выводит в .out-9 value radiobutton. Если не выбран - выводит false.
function f9(){
    let r9 = document.querySelector('.r-9');
    let out9 = document.querySelector('.out-9');
    if(!r9.checked){
        out9.innerHTML = false;
    }
    else {
        out9.innerHTML = r9.value;
    }
}
document.querySelector('.b-9').addEventListener('click', f9)

// Task 10
// При нажатии кнопки .b-10 запускаем функцию f10. Функция получает из .i-10 значение цвета и окрашивает style.background элемента .out-10 в этот цвет.

let b10 = document.querySelector('.b-10');
let i10 = document.querySelector('.i-10');
let out10 = document.querySelector('.out-10');

function f10(){
let bgColor = i10.value;
out10.style.backgroundColor = bgColor;
}
b10.addEventListener('click',f10);

// Task 11
// При нажатии кнопки .b-11 запускается функция f11. Функция получает цвет из .i-111 и присваивает как value элементу .i-112. Т.е. после нажатия кнопки выбранный цвета в первом и втором input станут одинаковые.

let b11 = document.querySelector('.b-11');
function f11(){
    let i111 = document.querySelector('.i-111');
    let i112 = document.querySelector('.i-112');
    i112.value = i111.value;
}
b11.addEventListener('click', f11)

// Task 12
// При нажатии кнопки .b-12 запускается функция f12. Функция выводит дату из .i-12 в out-12.
let b12 = document.querySelector('.b-12');
let i12 = document.querySelector('.i-12');
let out12 = document.querySelector('.out-12');
function f12(){
    out12.innerHTML = i12.value;
}
b12.addEventListener('click', f12)


// Task 13
//  При изменении положения ползунка .i-13 выводите его значение в out-13. Обратите внимание на событие.

document.querySelector('.i-13').addEventListener('input', ()=>{
document.querySelector('.out-13').innerHTML = document.querySelector('.i-13').value;
console.log(document.querySelector('.i-13').value)
});

// Task 14
// При нажатии на кнопку выводите текст из textarea .t-14 в .out-14.

function f14() {
    document.querySelector('.out-14').innerHTML = document.querySelector('.t-14').value;

}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При нажатии кнопки .b-15 функция должна выводить текст из .i-15 в textarea .t-15 и в .out-15.
let i15 = document.querySelector('.i-15');
let t15 = document.querySelector('.t-15');
let o15= document.querySelector('.out-15');
function f15() {
    t15.value = i15.value;
    o15.innerHTML = i15.value;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии на кнопку .b-16 выводите в .out-16 value выбранного option из .s-16.
let s16 = document.querySelector('.s-16');
let o16 = document.querySelector('.out-16');
function f16() {
o16.innerHTML = s16.value;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// При смене выбранного значения .s-17 выводите в .out-17 value выбранного option из .s-17.
let s17 = document.querySelector('.s-17');
let o17 = document.querySelector('.out-17 ');

function f17() {
o17.innerHTML = s17.value;
}
s17.addEventListener('change', f17);

// Task 18
// При смене выбранного значения в s-18, получайте из него value выбранного option и присвойте данный value в input .i-18.

let s18= document.querySelector('.s-18');
let i18 = document.querySelector('.i-18');
function f18() {
    let sVal = s18.value;
    i18.value = sVal;
}
s18.addEventListener('change',f18);

// Task 19
// На странице создан div.out-19. По нажатию кнопки, получите из него текст и присвойте в value элемента .i-19.
let o19 = document.querySelector('.out-19');
let b19 = document.querySelector('.b-19');
let i19 = document.querySelector('.i-19');
function f19(){
    let text = o19.textContent;
    i19.value = text;
}
b19.addEventListener('click', f19);


// Task 20
// У вас есть два select. Напишите код, который при изменении select .s-201 будет аналогично изменять выбранный option в .s-202.

let s201 = document.querySelector('.s-201')
let s202 = document.querySelector('.s-202')
function f20(){
    s202.value = s201.value;
}
s201.addEventListener('change', f20);



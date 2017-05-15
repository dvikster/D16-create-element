var u = document.createElement('p');
//метод  - создаем объект в DOM, но не рисуем его
u.className = 'primer hello';
u.href='http://ya.ru'; 
u.innerHTML = 'Мой сгененированный div';
u.innerHTML = 'Моя гиперссылка';
document.querySelector('.one').appendChild(u);
document.querySelector('body').insertBefore(u, document.querySelector('.one') );
u.innerHTML = 'Хаха';
var w = document.querySelector('.one').cloneNode(true);
document.querySelector('body').appendChild(w);


//createElement
//className
//appendChild
//insertBefore
//cloneNode
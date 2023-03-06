// Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).\

// На promise можно навешивать колбэки двух типов:

// onFulfilled – срабатывают, когда promise в состоянии «выполнен успешно».
// onRejected – срабатывают, когда promise в состоянии «выполнен с ошибкой».
// Способ использования, в общих чертах, такой:

// 1
// Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
// 2
// Внешний код, получив promise, навешивает на него обработчики.
// 3
// По завершении процесса асинхронный код переводит promise в состояние fulfilled (с результатом) или rejected (с ошибкой). При этом автоматически вызываются соответствующие обработчики во внешнем коде.


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise')
// })

// console.log('end');

// result:
// start 
// promise
// end


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// result: 
// start 
// 1 
// end 
// 2


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// result:
// start
// 1 
// 3 
// end
// 2


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2) //не выводится потому что resolve не вызывался
// })

// console.log('end');

// result:
// start
// 1  
// end

// Анализ
// В этом коде метод resolve никогда не вызывался, поэтому promise1 всегда находится в состоянии ожидания (pending). Так что promise1.then(…) никогда не выполнялся. 2 не выводится в консоли.




// console.log('start') //1

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);//4
//   resolve('success')//6
// }))

// console.log('middle') //2

// fn().then(res => {
//   console.log(res)//5
// })

// console.log('end')//3

// result:
// start
// middle
// 1
// end 
// success 

// Этот код преднамеренно добавляет функцию, чтобы запутать испытуемых, то есть нас, и это fn.

// Пожалуйста, помните, что независимо от того, сколько существует слоев вызовов функций, наши базовые принципы остаются неизменными:

// Сначала выполняется синхронный код, а затем асинхронный.

// Синхронный код выполняется в том порядке, в котором он был вызван.



// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(res)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end')

// result:
// start
// end 
// 1
// 2 
let arr = [5,2,3,5,2,1,7,9,6,4]

function max(num){
    num.sort((a,b) => {
        a-b
    })
    if (num[2]) {
        return num[2]
    }
    else{
        return num[2]
    }
}

max()
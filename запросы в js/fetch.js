

//  get запрос


//  method fetch api 
// fetch('http://getpost.itgid.info/index2.php/?action=2').then(data => {
//     console.log(data);
//     return data.text()
// })
// .then(data =>{
//     console.log(data);
// })



// fetch('http://getpost.itgid.info/index2.php')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));





// post запрос


// const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username: 'JohnDoe', password: 'myPassword' })
//   };
  
//   fetch('http://getpost.itgid.info/index2.php', requestOptions)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));





// задачи по fetch

// 1. Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.


let url = 'https://api.github.com/users/USERNAME'
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))


  
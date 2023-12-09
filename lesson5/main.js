// Новости
async function getResponseNews() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let news = await response.json()
    news = news.splice(0, 10);

    let list = document.querySelector('.news');
    list.innerHTML ='';
    let key;
    for (key in news) {

        list.innerHTML += `
        <div class="news">
        <div class="news_users">
            <h1>Пользователь - ${news[key].id}</h1>
            <h2>Название: ${news[key].title}</h2>
            <h4>Комментарий: ${news[key].body}</h4>
        </div>`

    }
}
let selected_news = document.querySelector('#select');

let button_news = document.querySelector('#btn1').onclick = function () {
    getResponseNews()
    // console.log('news')
};

//Комменты
async function getResponseComments() {
    let response_comments = await fetch('https://jsonplaceholder.typicode.com/comments');
    let comments = await response_comments.json()
    comments = comments.splice(0, 10);

    let list_comments = document.querySelector('.news');
    list_comments.innerHTML ='';
    let key;
    for (key in comments) {

        list_comments.innerHTML += `
        <div class="news">
        <div class="news_users">
            <h1>${comments[key].email}</h1>
            <h2>Название: ${comments[key].name}</h2>
            <h4>${comments[key].body}</h4>
        </div>`

    }
}
let button_comments = document.querySelector('#btn2').onclick = function () {
    getResponseComments()
    // console.log('comments')
};

//Альбомы
async function getResponseAlbums() {
    let response_albums = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albums = await response_albums.json()
    albums = albums.splice(0, 10);

    let list_albums = document.querySelector('.news');
    list_albums.innerHTML ='';
    let key;
    for (key in albums) {

        list_albums.innerHTML += `
        <div class="news">
        <div class="news_users">
        <h1>Альбом - №${albums[key].id}</h1>
            <h4>${albums[key].title}</h4>
        </div>`

    }
}
let button_albums = document.querySelector('#btn3').onclick = function () {
    getResponseAlbums()
    // console.log('albums')
};

//Фотографии
async function getResponsePhotos() {
    let response_photos = await fetch('https://jsonplaceholder.typicode.com/photos');
    let photos = await response_photos.json()
    photos = photos.splice(0, 10);

    let list_photos = document.querySelector('.news');
    list_photos.innerHTML ='';
    let key;
    for (key in photos) {

        list_photos.innerHTML += `
        <div class="news">
        <div class="news_users">
            <h1>Фотография - №${photos[key].id}</h1>
            <h4>${photos[key].title}</h4>
            <a href ="${photos[key].url}" target="_blank">
            <img src ="${photos[key].url}" width="300">
            <h6> ${photos[key].url}> </h6></a>
        </div>`

    }
}
let button_photos = document.querySelector('#btn4').onclick = function () {
    getResponsePhotos()
    // console.log('photos')
};

//Записи
async function getResponseTodos() {
    let response_todos = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todos = await response_todos.json()
    todos = todos.splice(0, 10);

    let list_todos = document.querySelector('.news');
    list_todos.innerHTML ='';
    let key;
    for (key in todos) {

        list_todos.innerHTML += `
        <div class="news">
        <div class="news_users">
            <h1>Запись - №${todos[key].id}</h1>
            <h2>${todos[key].title}</h2>
            <h4>Статус: ${todos[key].completed}</h4>
        </div>`

    }
}
let button_todos = document.querySelector('#btn5').onclick = function () {
    getResponseTodos()
    // console.log('todos')
};

//Пользователи
async function getResponseUsers() {
    let response_users = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response_users.json()
    users = users.splice(0, 10);

    let list_users = document.querySelector('.news');
    list_users.innerHTML ='';
    let key;
    for (key in users) {
   
        list_users.innerHTML += `
        <div class="news">
        <div class="news_users">
            <h1>Пользователь - ${users[key].name}</h1>
            <h2>Электронная почта: ${users[key].email}</h2>
            <h4>Адрес: ${users[key].address.street}, ${users[key].address.suite}, ${users[key].address.city}, ${users[key].address.zipcode}</h4>
        </div>`

    }
}
let button_users = document.querySelector('#btn6').onclick = function () {
    getResponseUsers()
    // console.log('users')
}
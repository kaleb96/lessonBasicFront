// #1 script 기본
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//     alert("Hello World!");
// });

// #2 onload 를 통한 script
// window.onload = function() {
  
//     let btn = document.querySelector('#btn');
//     btn.addEventListener('click', function() {
//         alert("Hello World");
//     });
// };

// #3 DOMcontentLoaded를 통한 script 사용
// document.addEventListener('DOMContentLoaded', function() {
//     let btn = document.querySelector('#btn');
//     btn.addEventListener('click', function() {
//         alert("Hello World!");
//     });
// });

// #4 script 의 defer를 통한 비동기 방식으로 DOM parsing이후 비동기 실행
let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    alert("Hello World!");
});

// #5 script 의 async를 통한 비동기 방식으로 DOM parsing을 하다 비동기로 script를 받고 실행시에는 HTML 파싱을 중지함
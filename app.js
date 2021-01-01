
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const preValueTextElement = document.querySelector('.preValue'); 
const currentValueTextElement = document.querySelector('.value');
const clearBtn = document.querySelector('.clear');
const pmBtn = document.querySelector('.pm');
const percentBtn = document.querySelector('.percent');
const operationBtn = document.querySelectorAll('.operation');
const equalBtn = document.querySelector('.equal');
const decimalBtn = document.querySelector('.decimal');
const numberBtn = document.querySelectorAll('.number');



//time 

const updateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    hour.innerHTML = currentHour.toString();
    minute.innerHTML = currentMinute.toString().padStart(2,'0');
};

setInterval(updateTime,1000);
updateTime();

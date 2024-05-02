let count = 0;
let timer;

function updateCount() {
document.getElementById('count').innerText = count;
}

document.getElementById('start').addEventListener('click', function() {
timer = setInterval(function() {
count++;
updateCount();
}, 500);
});

document.getElementById('pause').addEventListener('click', function() {
clearInterval(timer);
});

document.getElementById('resume').addEventListener('click', function() {
timer = setInterval(function() {
count++;
updateCount();
}, 500);
});

document.getElementById('stop').addEventListener('click', function() {
clearInterval(timer);
count = 0;
updateCount();
});
const result = document.getElementById('result');

const score = localStorage.getItem('score');
console.log(score);
result.innerHTML = "You selected " + score + " out of 5";
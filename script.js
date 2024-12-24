let timerInterval;
let elapsedTime = 0;

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const ms = String(milliseconds % 1000).padStart(3, '0'); 
    return `${hours}:${minutes}:${seconds}.${ms}`;
}

document.getElementById('start-btn').addEventListener('click', () => {
    if (timerInterval) return; 
    const startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById('time-display').textContent = formatTime(elapsedTime);
    }, 10); 
});

document.getElementById('stop-btn').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('reset-btn').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById('time-display').textContent = "00:00:00.000";
});

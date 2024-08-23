

function updateCountdown() {
    const weddingDate = new Date('2024-11-03T00:00:00');
    const now = new Date();
    const timeDiff = weddingDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `
        <p>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</p>
    `;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
// Function to show a reminder alert
function showReminder() {
    const weddingDate = new Date('2024-11-03T00:00:00');
    const now = new Date();
    const timeDiff = weddingDate - now;
    
    // Show reminder if the wedding is within the next 7 days
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    if (timeDiff <= oneWeek && timeDiff > 0) {
        alert('Reminder: Your wedding is coming up in less than a week on November 3, 2024!');
    }
}

// Call the function on page load
window.onload = showReminder;
function requestNotificationPermission() {
    if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showNotification();
            }
        });
    }
}
function showNotification() {
    const weddingDate = new Date('2024-11-03T00:00:00');
    const now = new Date();
    const timeDiff = weddingDate - now;
    
    // Show notification if the wedding is within the next 7 days
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    if (timeDiff <= oneWeek && timeDiff > 0) {
        new Notification('Wedding Reminder', {
            body: 'Your wedding is coming up in less than a week on November 3, 2024!',
            icon: 'path/to/icon.png' // Optional icon
        });
    }
}

// Call these functions on page load
window.onload = function() {
    requestNotificationPermission();
    showReminder();
};

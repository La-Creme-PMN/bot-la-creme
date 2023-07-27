const POMODORO_TIME = 25 * 60 * 1000;
const BREAK_TIME = 5 * 60 * 1000;

const usersTimeLeft = {}; // Object to store time left per user
function startPomodoro(userId) {
    usersTimeLeft[userId] = { time: POMODORO_TIME };

    const interval = setInterval(() => {
        usersTimeLeft[userId].time -= 1000; // Subtract 1 second from the time left

        if (usersTimeLeft[userId].time <= 0) {
            clearInterval(interval);
            usersTimeLeft[userId] = { time: BREAK_TIME };
            setTimeout(() => {
                startPomodoro(userId);
            }, BREAK_TIME);
        }
    }, 1000);

    usersTimeLeft[userId].interval = interval; // Store the interval ID in the object
}

function pausePomodoro(userId) {
    if (usersTimeLeft[userId].interval) {
        clearInterval(usersTimeLeft[userId].interval);
        const timeLeft = usersTimeLeft[userId].time;
        usersTimeLeft[userId].interval = undefined;
        return timeLeft;
    }
    return 0; // Return 0 if there was no active Pomodoro session to pause
}

function resumePomodoro(userId) {
    if (usersTimeLeft[userId] && !usersTimeLeft[userId].interval) {
        const timeLeft = usersTimeLeft[userId].time;
        const interval = setInterval(() => {
            usersTimeLeft[userId].time -= 1000; // Subtract 1 second from the time left

            if (usersTimeLeft[userId].time <= 0) {
                clearInterval(interval);
                usersTimeLeft[userId] = { time: BREAK_TIME };
                setTimeout(() => {
                    startPomodoro(userId);
                }, BREAK_TIME);
            }
        }, 1000);

        usersTimeLeft[userId].interval = interval; // Store the interval ID in the object
        return timeLeft;
    }
    return 0; // Return 0 if there was no paused Pomodoro session to resume
}

function stopPomodoro(userId) {
    clearInterval(usersTimeLeft[userId].interval);
    delete usersTimeLeft[userId];
}

function getStatus(userId) {
    return usersTimeLeft[userId];
}

module.exports = {
    startPomodoro,
    pausePomodoro,
    resumePomodoro,
    stopPomodoro,
    getStatus,
};

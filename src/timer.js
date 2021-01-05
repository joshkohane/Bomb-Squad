
class Timer {
    constructor(level) {
        this.level = level;
        this.timeLeft = 20;
        this.interval = 1001 - level;
        
        this.appendTime();
        this.warning();
        setInterval(this.tick.bind(this), this.interval);
    }
    
    appendTime() {
        const clock = document.getElementById("clock-container");
        let p = document.createElement('p');
        p.textContent = this.timeLeft;
        clock.appendChild(p);
    }

    tick() {
        this.timeLeft -= 1;
    }

    timerOver() {
        if (this.timeLeft === 0) {
            return true;
        }
        return false;
    }

    warning() {
        if (this.timeLeft <= 5) {
            this.blink();
        }
    }

    blink() {
        const time = document.getElementById("time-outer-container")
        time.classList.add("blink")
        setTimeout(time.classList.remove("blink"), 10)
    }
}

export default Timer;

class Timer {
    constructor(level) {
        // this.level = level;
        // this.timeLeft = 21;
        // this.interval = 1020 - (level * 20);
        // this.clockTick;
        // this.warning();
        // this.timerOver();
    }
    
    // start() {
    //     this.clockTick = setInterval(this.tick.bind(this), this.interval);
    // }

    // reset() {
    //     this.timeLeft = 21;
    //     clearInterval(this.clockTick)
    // }
    
    // appendTime(time) {
    //     const clock = document.getElementById("clock-container");
    //     let p = document.createElement('p');
    //     p.textContent = time;
    //     if (clock.hasChildNodes()) {
    //         clock.childNodes.forEach(child => {
    //             clock.removeChild(child);
    //         })
    //     }
    //     clock.appendChild(p);
    // }

    // tick() {
    //     this.timeLeft -= 1;
    //     let time;
    //     if (this.timeLeft >= 10) {
    //         time = '00:' + this.timeLeft;
    //     } else if (this.timeLeft >= 0) {
    //         time = '00:0' + this.timeLeft;
    //     } else {
    //         this.lost();
    //     }
    //     this.appendTime(time);
    // }

    // lost() {
    //     this.reset();
    //     const gameLose = document.getElementById('game-lose-container');
    //     gameLose.classList.remove('hidden')
    // }

    // timerOver() {
    //     if (this.timeLeft === 0) {
    //         console.log('timer over')
    //         return true;
    //     }
    //     return false;
    // }

    // warning() {
    //     if ((this.timeLeft === 5) || (this.timeLeft === 4) || (this.timeLeft === 3) || (this.timeLeft === 2) || (this.timeLeft === 1)) {
    //         setInterval(this.blink.bind(this), this.interval)
    //         this.blink.bind(this);
    //         console.log('BLINKING')
    //     }
    // }

    // blink() {
    //     const time = document.getElementById("time-outer-container")
    //     time.classList.add("blink")
    //     setTimeout(time.classList.remove("blink"), 100)
    // }
}

export default Timer;
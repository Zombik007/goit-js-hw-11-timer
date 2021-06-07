class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = this.getEl(selector);
    this.targetDate = targetDate;
    this.timerInterval = null;

    this.timeConversion();
    this.elementsFilledTimeNumbers();
    this.timer();
  }

  getEl(timerId) {
    const refs = {
      daysEl: document.querySelector(`${timerId} [data-value="days"]`),
      hoursEl: document.querySelector(`${timerId} [data-value="hours"]`),
      minsEl: document.querySelector(`${timerId} [data-value="mins"]`),
      secsEl: document.querySelector(`${timerId} [data-value="secs"]`),
    };
    return refs;
  }

  timeDifference() {
    let currentTime = new Date();
    let time = this.targetDate - currentTime;
    this.timeConversion(time);
  }

  timeConversion(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = hours <= 9 ? "0" + hours : hours;
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    mins = mins <= 9 ? "0" + mins : mins;
    let secs = Math.floor((time % (1000 * 60)) / 1000);
    secs = secs <= 9 ? "0" + secs : secs;
    console.log(days, hours, mins, secs);
    this.elementsFilledTimeNumbers(days, hours, mins, secs);
  }

  elementsFilledTimeNumbers(days, hours, mins, secs) {
    this.selector.daysEl.textContent = days;
    this.selector.hoursEl.textContent = hours;
    this.selector.minsEl.textContent = mins;
    this.selector.secsEl.textContent = secs;
  }

  timer() {
    this.timeDifference();
    this.timerInterval = setInterval(() => {
      this.timeDifference();
    }, 1000);
  }
}

const countdownTimerFirst = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 14, 2021"),
});

// const countdownTimerSecond = new CountdownTimer({
//   selector: "#timer-2",
//   targetDate: new Date("Jun 18, 2021"),
// });
// console.log(countdownTimerSecond);

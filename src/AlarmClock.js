import State from './State';
// import ClockState from './ClockState';

export default class {
  constructor() {
    this.min = 0;
    this.hrs = 12;
    this.alarmMin = 0;
    this.alarmHrs = 6;
    this.setState(ClockState);
  }
  setState(Klass) {
    this.setState = new Klass(this);
  }
  minutes() {
    return this.min;
  }
  hours() {
    return this.hrs;
  }
  alarmHours() {
    return this.alarmHrs;
  }
  alarmMinutes() {
    return this.alarmMin;
  }
}


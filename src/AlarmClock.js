import ClockState from './ClockState';
import AlarmState from './AlarmState';
import BellState from './BellState';

// import ClockState from './ClockState';
// Установка времени  ClockState
// Установка времени срабатывания будильника AlarmState
// Отключение звонка будильника BellState

export default class {
  constructor() {
    this.min = 0;
    this.hrs = 12;
    this.alarmMin = 0;
    this.alarmHrs = 6;
    this.isAlOn = false;
    this.mode = 'clock';
    this.setState(ClockState);
  }
  setState(Klass) {
    this.state = new Klass(this);
  }
  // методы, зависимые от состояния
  getCurrentMode() {
    return this.state.getCurrentMode();
  }
  tick() {
    this.state.tick();
  }
  clickH() {
    this.state.clickH();
  }
  clickM() {
    this.state.clickM();
  }
  clickMode() {
    this.state.clickMode();
  }
  // сервисные методы
  minutes() {
    return this.min;
  }
  hours() {
    return this.hrs;
  }
  alarmMinutes() {
    return this.alarmMin;
  }
  alarmHours() {
    return this.alarmHrs;
  }
  isAlarmOn() {
    return this.isAlOn;
  }
  longClickMode() {
    this.isAlOn = !this.isAlOn;
  }
  isAlarmTime() {
    if (this.hrs === this.alarmHrs && this.min === this.alarmMin) return true;
    // console.log(this.hrs, this.min, this.alarmHrs, this.alarmMin);
    return false;
  }
}


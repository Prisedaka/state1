import State from './State';
import ClockState from './ClockState';
import AlarmState from './AlarmState';
import BellState from './BellState';

export default class extends State {
  constructor(context) {
    super();
    this.mode = 'alarm';
    this.context = context;
  }
  clickH() {
    if (this.context.alarmHrs === 23) this.context.alarmHrs = 0;
    else this.context.alarmHrs += 1;
  }
  clickM() {
    if (this.context.alarmMin === 59) this.context.alarmMin = 0;
    else this.context.alarmMin += 1;
  }
  clickMode() {
    this.context.setState(ClockState);
  }
  tick() {
    this.context.setState(ClockState);
    if (this.context.min === 59) this.context.clickH();
    this.context.clickM();
    this.context.setState(AlarmState);
    if (this.context.isAlarmTime() && this.context.isAlOn) this.context.setState(BellState);
  }
}

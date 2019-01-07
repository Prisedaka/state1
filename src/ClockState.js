import State from './State';
import ClockState from './ClockState';
import AlarmState from './AlarmState';
import BellState from './BellState';

export default class extends State {
  constructor(context) {
    super();
    this.mode = 'clock';
    this.context = context;
  }
  // set mode(mode) {
  //   this._mode = 'clock';
  // }
  clickH() {
    if (this.context.hrs === 23) this.context.hrs = 0;
    else this.context.hrs += 1;
  }
  clickM() {
    if (this.context.min === 59) this.context.min = 0;
    else this.context.min += 1;
  }
  clickMode() {
    this.context.setState(AlarmState);
  }
  tick() {
    if (this.context.min === 59) this.context.clickH();
    this.context.clickM();
    if (this.context.isAlarmTime() && this.context.isAlOn) this.context.setState(BellState);
  }
}

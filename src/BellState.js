import State from './State';
import ClockState from './ClockState';
import AlarmState from './AlarmState';
import BellState from './BellState';

export default class extends State {
  constructor(context) {
    super();
    this.mode = 'bell';
    this.context = context;
  }
  clickH() {}
  clickM() {}
  clickMode() {
    this.context.isAlOn = false;
    this.context.setState(ClockState);
  }
  tick() {
    this.context.setState(ClockState);
    if (this.context.min === 59) this.context.clickH();
    this.context.clickM();
    this.context.isAlOn = false;
  }
}

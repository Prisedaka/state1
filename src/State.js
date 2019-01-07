import AlarmClock from './AlarmClock';

export default class {
  constructor(context) {
    this.context = context;
  }
  clickH() {}
  clickM() {}
  clickMode() {}
  getCurrentMode() {
    return this.mode;
  }
  tick() {}
}

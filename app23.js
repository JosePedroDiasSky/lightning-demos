export default class App extends lng.Application {
  static _template() {
    return {
      LilLightning: {
        x: 50,
        y: 50,
        src: './assets/img/LngDocs_LilLightningFlying.png'
      }
    };
  }

  _init() {
    this._lilLightningAnimation = this.tag('LilLightning').animation({
      duration: 2,
      delay: 1,
      repeat: 3,
      repeatDelay: 0,
      repeatOffset: 0,
      stopMethod: 'reverse',
      stopDuration: 1,
      stopDelay: 0.2,
      autostop: false,
      actions: [
        { p: 'x', v: { 0: 50, 0.25: 250, 0.5: 250, 0.75: 500, 1: 50 } },
        { p: 'y', v: { 0: 50, 0.25: 250, 0.5: 500, 0.75: 500, 1: 50 } }
      ]
    });
  }

  _handleLeft() {
    this._lilLightningAnimation.stop();
  }

  _handleRight() {
    this._lilLightningAnimation.start();
  }
}

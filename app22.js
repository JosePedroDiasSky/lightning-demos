export default class App extends lng.Application {
  static _template() {
    return {
      LilLightning: {
        x: 275,
        y: 275,
        src: './assets/img/LngDocs_LilLightningFlying.png'
      }
    };
  }

  _init() {
    this._lilLightningAnimation = this.tag('LilLightning').animation({
      duration: 6,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [
        {
          p: 'scaleX',
          v: { 0: { v: 1, s: 1 }, 0.5: { v: -1, s: 1 }, 1: { v: 1, s: 1 } }
        },
        { p: 'x', v: { 0: 50, 0.25: 250, 0.5: 500, 0.75: 450, 1: 50 } },
        { p: 'y', v: { 0: 50, 0.25: 250, 0.5: 50, 0.75: 100, 1: 50 } }
      ]
    });
    this._lilLightningAnimation.start();
  }
}

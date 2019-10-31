export default class App extends lng.Application {
  static _template() {
    return {
      LilLightningEase: {
        x: 150,
        y: 200,
        scaleX: -1,
        src: './assets/img/LngDocs_LilLightningIdle.png'
      },
      LilLightningNoEase: {
        x: 400,
        y: 200,
        src: './assets/img/LngDocs_LilLightningIdle.png'
      }
    };
  }

  _init() {
    this._myEasingAnimation = this.tag('LilLightningEase').animation({
      duration: 3,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [
        {
          p: 'y',
          v: {
            0: { v: 400, sm: 0 },
            0.5: { v: 50, sm: 1 },
            1: { v: 400, sm: 0 }
          }
        }
      ]
    });

    this._myNonEasingAnimation = this.tag('LilLightningNoEase').animation({
      duration: 3,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [
        {
          p: 'y',
          v: {
            0: { v: 400, sm: 0 },
            0.5: { v: 50, sm: 0 },
            1: { v: 400, sm: 0 }
          }
        }
      ]
    });

    this._myEasingAnimation.start();
    this._myNonEasingAnimation.start();
  }
}

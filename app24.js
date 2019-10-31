export default class App extends lng.Application {
  static _template() {
    return {
      LilLightning: {
        x: 50,
        y: 250,
        src: './assets/img/LngDocs_LilLightningIdle.png'
      }
    };
  }

  _init() {
    const lilLightningFlying = this.tag('LilLightning').animation({
      duration: 4,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [
        {
          p: 'src',
          v: {
            0: './assets/img/LngDocs_LilLightningIdle.png',
            0.2: './assets/img/LngDocs_LilLightningRun.png',
            0.6: './assets/img/LngDocs_LilLightningFlying.png'
          }
        },
        {
          p: 'x',
          v: {
            0: { v: 50, se: 0 },
            0.2: { v: 50, s: 0 },
            0.6: { v: 250, s: 0 },
            1: 700
          }
        },
        {
          p: 'y',
          v: {
            0: { v: 250, se: 0 },
            0.2: { v: 250, s: 0 },
            0.6: { v: 250, s: 0 },
            1: -150
          }
        },
        {
          p: 'scale',
          v: {
            0: { v: 1, se: 0 },
            0.2: { v: 1, s: 0 },
            0.6: { v: 1, s: 0 },
            1: 0.2
          }
        }
      ]
    });
    lilLightningFlying.start();
  }
}

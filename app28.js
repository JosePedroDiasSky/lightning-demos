export default class App extends lng.Application {
  static _template() {
    return {
      Progress: {
        x: 50,
        y: 50,
        text: { fontSize: 32 }
      },
      LilLightning: {
        x: 0,
        y: 200,
        src: './assets/img/LngDocs_LilLightningIdle.png'
      }
    };
  }

  _init() {
    const lilLightningAnimation = this.tag('LilLightning').animation({
      duration: 2,
      repeat: -1,
      repeatDelay: 0.5,
      actions: [{ p: 'x', v: { 0: 100, 0.5: 450, 1: 100 } }]
    });
    lilLightningAnimation.on('progress', (p) => {
      this.tag('Progress').text = 'Progress: ' + p.toFixed(3);
    });
    lilLightningAnimation.start();
  }
}

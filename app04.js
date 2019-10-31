export default class App extends lng.Application {
  static _template() {
    return {
      LilLightning: {
        x: 250,
        y: 250,
        w: 100,
        h: 200,
        pivotX: 1,
        pivotY: 1,
        src: './assets/img/LngDocs_LilLightningIdle.png',
        ChildObject: { x: 50, y: 0, mount: 0.5, w: 25, h: 25, rect: true }
      }
    };
  }

  _init() {
    this._lilLightningAnimation = this.tag('LilLightning').animation({
      duration: 6,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [
        { p: 'rotation', v: { 0: 0, 1: 6.29 } },
        { t: 'ChildObject', p: 'rotation', v: { 0: 0, 1: 6.29 } }
      ]
    });
    this._lilLightningAnimation.start();
  }
}

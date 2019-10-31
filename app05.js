export default class App extends lng.Application {
  static _template() {
    return {
      shader: { type: lng.shaders.Grayscale, amount: 0.9 },
      LilLightning: {
        x: 100,
        y: 50,
        src: './assets/img/LngDocs_LilLightningIdle.png'
      },
      Header: {
        rect: true,
        w: window.innerWidth,
        h: 50,
        color: 0xff005500
      },
      SubLilLightning: {
        x: 400,
        y: 50,
        src: './assets/img/LngDocs_LilLightningIdle.png',
        shader: null // Reset shader to default.
      },
      SubLilLightning2: {
        x: 400,
        y: 250,
        src: './assets/img/LngDocs_LilLightningIdle.png',
        shader: { type: lng.shaders.Inversion } // Reset shader to other.
      }
    };
  }
}

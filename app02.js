export default class App extends lng.Application {
  static _template() {
    return {
      Header: {
        rect: true,
        w: 1920,
        h: 50,
        color: 0xff005500,
        Title: {
          x: 50,
          y: 30,
          mountY: 0.5,
          text: { text: 'Header' }
        }
      },
      Content: {
        y: 60,
        MyImage: {
          x: 100,
          y: 100,
          src: './assets/img/LngDocs_LilLightningIdle.png'
        }
      }
    };
  }
}

export default class App extends lng.Application {
  static _template() {
    return {
      Header: {
        rect: true,
        w: window.innerWidth,
        h: 50,
        color: 0xff005500,
        Title: {
          x: (w) => w - 50,
          mountX: 1,
          mountY: 0.5,
          y: 30,
          text: { text: 'Header' },
          OverlayGradient: {
            w: (w) => 0.25 * w,
            rect: true,
            colorLeft: 0xff000000,
            colorRight: 0x00000000
          }
        }
      }
    };
  }
}

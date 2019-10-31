export default class App extends lng.Application {
  static _template() {
    return {
      RectangleDefault: {
        x: 100,
        y: 100,
        w: 200,
        h: 100,
        rect: true
      },
      RectangleWithColor: {
        x: 400,
        y: 100,
        w: 200,
        h: 100,
        rect: true,
        color: 0xff1c27bc
      },
      RectangleWithGradientTopBottom: {
        x: 100,
        y: 300,
        w: 200,
        h: 100,
        rect: true,
        colorTop: 0xff636efb,
        colorBottom: 0xff1c27bc
      },
      RectangleWithGradientLeftRight: {
        x: 400,
        y: 300,
        w: 200,
        h: 100,
        rect: true,
        colorLeft: 0xff636efb,
        colorRight: 0xff1c27bc
      },
      RectangleWithGradientDiagonal: {
        x: 100,
        y: 500,
        w: 200,
        h: 100,
        rect: true,
        colorUl: 0xff636efb,
        colorUr: 0xff00ff00,
        colorBr: 0xff1c27bc,
        colorBl: 0xff00ff00
      },
      RectangleWithGradientDiagonalMixed: {
        x: 400,
        y: 500,
        w: 200,
        h: 100,
        rect: true,
        colorLeft: 0xff00ff00,
        colorBr: 0xff1c27bc,
        colorUr: 0xffff0000
      }
    };
  }
}

export default class App extends lng.Application {
  static _template() {
    return {
      x: 50,
      y: 50,
      RoundRectangle: {
        zIndex: 2,
        texture: lng.Tools.getRoundRect(
          150,
          40,
          4,
          3,
          0xffff00ff,
          true,
          0xff00ffff
        )
      },
      Shadow: {
        x: 10,
        y: 10,
        zIndex: 1,
        color: 0x66000000,
        texture: lng.Tools.getShadowRect(150, 40, 4, 10, 15)
      }
    };
  }
}

export default class App extends lng.Application {
  static _template() {
    return {
      Wrapper: {
        x: 50,
        y: 50,
        w: 250,
        flex: { direction: 'row', padding: 20, wrap: true },
        rect: true,
        color: 0xff2d2d2d,
        paddingLeft: 200,
        Item1: {
          w: 50,
          h: 100,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xff797979
        },
        Item2: {
          w: 50,
          h: 100,
          flexItem: { margin: 10 },
          rect: true,
          color: 0xffa7a7a7
        },
        Item3: {
          w: 50,
          h: 100,
          flexItem: {
            margin: 10,
            alignSelf: 'stretch',
            grow: 1,
            maxWidth: 190,
            maxHeight: 100
          },
          rect: true,
          color: 0xffd3d3d3
        },
        Item4: {
          w: 90,
          h: 50,
          flexItem: {
            margin: 10,
            alignSelf: 'stretch',
            grow: 1,
            maxWidth: 230,
            maxHeight: 100
          },
          rect: true,
          color: 0xff74b4a7
        },

        Sub: {
          flex: { direction: 'column', padding: 20 },
          flexItem: {
            margin: 10,
            alignSelf: 'stretch',
            grow: 1,
            maxWidth: 380
          },
          rect: true,
          color: 0xff486f67,
          children: [
            { text: { text: 'line 1' } },
            { text: { text: 'line 2' } },
            { text: { text: 'line 3' } },
            { text: { text: 'line 4' } }
          ]
        }
      }
    };
  }
  _init() {
    this._myFlexAnimation = this.tag('Wrapper').animation({
      duration: 4,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [{ p: 'w', v: { 0: 250, 0.5: 430, 1: 250 } }]
    });
    this._myFlexAnimation.start();
  }
}

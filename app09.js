export default class App extends lng.Application {
  static _template() {
    return {
      GradientTexture: {
        x: 50,
        y: 50,
        w: 150,
        h: 150,
        rect: true,
        colorUl: 0xffd67210,
        colorBr: 0xff144b83,
        Desc: {
          x: 0,
          y: 160,
          text: {
            text: 'I am a "gradient" texture',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 450,
            lineHeight: 30
          }
        }
      },
      ImageTexture: {
        x: 350,
        y: 150,
        src: './assets/img/LngDocs_LilLightningIdle.png',
        Desc: {
          x: 0,
          y: 190,
          text: {
            text: 'I am a "image" texture',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 450,
            lineHeight: 30
          }
        }
      },
      TextTexture: {
        x: 50,
        y: 400,
        colorTop: 0xfff1f1f1,
        colorBottom: 0xff144b83,
        text: {
          text: 'TEXT',
          fontSize: 40,
          wordWrap: true,
          wordWrapWidth: 450,
          lineHeight: 30
        },
        Desc: {
          x: 0,
          y: 50,
          text: {
            text: 'I am a "text" texture',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 450,
            lineHeight: 30
          }
        }
      },
      SolidColorTexture: {
        x: 350,
        y: 450,
        w: 150,
        h: 150,
        rect: true,
        color: 0xff144b83,
        Desc: {
          x: 0,
          y: 160,
          text: {
            text: 'I am a "solid color" texture',
            fontSize: 22,
            wordWrap: true,
            wordWrapWidth: 450,
            lineHeight: 30
          }
        }
      }
    };
  }
}

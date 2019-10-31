export default class App extends lng.Application {
  static _template() {
    return {
      x: 50,
      y: 50,
      Text: {
        text: {
          fontSize: 36,
          textAlign: 'center',
          maxLines: 2,
          text: "Text a little too long so this part won't be visible",
          wordWrapWidth: 180,
          textColor: 0xffff00ff
        }
      },
      Text2: {
        x: 150,
        y: 100,
        text: {
          fontSize: 60,
          text: 'STYLE IT UP! ',
          fontStyle: 'italic bold',
          textColor: 0xff00ffff,
          shadow: true,
          shadowColor: 0xffff00ff,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
          shadowBlur: 2
        }
      },
      Text3: {
        mountX: 1,
        x: 530,
        y: 230,
        text: {
          fontSize: 48,
          textAlign: 'right',
          text: 'you can also add\nline breaks\nusing\n\\n!',
          lineHeight: 80
        }
      }
    };
  }
}

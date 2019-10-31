class MyNoiseTexture extends lng.Texture {
  constructor(stage) {
    super(stage);

    this._w = 100;
    this._h = 100;
  }

  get w() {
    return this._w;
  }

  set w(l) {
    this._w = l;
    this._changed();
  }

  get h() {
    return this._h;
  }

  set h(l) {
    this._h = l;
    this._changed();
  }

  _getLookupId() {
    return '__noise_' + this._w + 'x' + this._h;
  }

  _getSourceLoader() {
    // We need to scope these to protect them from modifications while loading (which may be async).
    const w = this._w;
    const h = this._h;

    const gl = this.stage.gl;
    return function(cb) {
      const noise = new Uint8Array(w * h * 4);
      for (let i = 0; i < w * h * 4; i += 4) {
        const v = Math.round(Math.floor(Math.random() * 256));
        noise[i] = v;
        noise[i + 1] = v;
        noise[i + 2] = v;
        noise[i + 3] = 255;
      }

      cb(null, { source: noise, w: w, h: h });
    };
  }
}

export default class App extends lng.Application {
  static _template() {
    return {
      Example: {
        texture: { type: MyNoiseTexture, w: 100, h: 200 }
      }
    };
  }
}

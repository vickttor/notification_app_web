const Emitter = {
  events: {},

  on(event, cb) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(cb);
  },
  emit(event, ...rest) {
    if (event in Emitter.events === false) {
      return alert("Não existe esse evento dentre do contexto events");
    }
    Emitter.events[event].forEach((e) => {
      e(...rest);
    });
  },
};

export { Emitter };

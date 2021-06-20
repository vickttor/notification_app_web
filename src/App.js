import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const notify = Notifyer.notify({
  title: "Insta Post",
  body: "Crie um novo conteúdo para ajudar a comunidade",
});

const App = {
  async start(time) {
    try {
      await Notifyer.init();

      Emitter.on("countdown-start", notify);

      Emitter.on("countdown-end", Timer.init);

      Timer.init(time);
    } catch (err) {
      console.log(err.message);
    }
  },
};
export { App };

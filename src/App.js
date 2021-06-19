import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

let mess = [
  {
    title: "Estudar JavaScript",
    body: "Entre no canal do Myke e aprenda a Programar já!",
  },
  {
    title: "Estudar PHP",
    body: "Leia o livro de PHP e MySQL e faça os desafios que tu tem para fazer!",
  },
  {
    title: "Estudar CSS",
    body: "Entre no Youtube e produza páginas web responsivas e bonitas!",
  },
];

const notify = Notifyer.notify(
  mess[Math.floor(Math.random() * (mess.length - 1 - 0 + 1) + 0)]
);

const App = {
  async start() {
    try {
      await Notifyer.init();

      Emitter.on("countdown-start", notify);

      Emitter.on("countdown-end", Timer.init);

      Timer.init(0.5 * 60);
    } catch (err) {
      console.log(err.message);
    }
  },
};
export { App };

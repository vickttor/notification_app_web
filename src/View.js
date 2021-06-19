let Timer = document.querySelector(".Timer");
const View = {
  render({ minutes, seconds }) {
    Timer.innerHTML = `
    <p>Próximo Post em:</p>
    <span>${minutes}:${seconds}</span>
    `;
  },
};
export default View;

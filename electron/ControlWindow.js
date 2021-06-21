function ControlWindow(win, tray) {
  function toggle() {
    if (win.isVisible()) {
      win.hide();
    } else {
      show();
    }
  }

  function show() {
    // 1.  pegar o posicionamento da win / tray
    const { x, y } = getPosition();
    // 2. atualizar o posicionamento da win
    win.setPosition(x, y, false);
    // 3. mostrar a win
    win.show();
    win.focus();
  }

  function getPosition() {
    const winBounds = win.getBounds();
    const trayBounds = tray.getBounds();

    const x = Math.round(
      trayBounds.x + trayBounds.width / 2 - winBounds.width / 2
    );
    const y = Math.round(trayBounds.y + trayBounds.height - 300);

    return { x, y };
  }

  return {
    toggle,
  };
}

module.exports = ControlWindow;

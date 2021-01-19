import React from "react";

import { CharCode, Color, Terminal, Input, Util } from "malwoden";

export default class extends React.Component {
  componentDidMount() {
    const mount = document.getElementById("example");
    const width = 48;
    const height = 30;
    const terminal = new Terminal.RetroTerminal({
      width,
      height,
      imageURL: "/font_16.png",
      charWidth: 16,
      charHeight: 16,
      mountNode: mount,
    });

    let clickMessage = "Try Clicking!";
    const mouse = new Input.MouseHandler();
    const c = new Input.MouseContext()
      .onMouseDown((pos) => {
        const termPos = terminal.pixelToChar(pos);
        clickMessage = `mousedown on ${termPos.x}, ${termPos.y}`;
      })
      .onMouseUp((pos) => {
        const termPos = terminal.pixelToChar(pos);
        clickMessage = `mouseup on ${termPos.x}, ${termPos.y}`;
      });
    mouse.setContext(c);

    function loop() {
      terminal.clear();
      // Draw mouse position
      const mousePos = mouse.getPos();
      const char = terminal.pixelToChar(mousePos);
      terminal.drawCharCode(char, CharCode.at, Color.Yellow);

      // Draw mouse message
      terminal.writeAt({ x: 0, y: 0 }, clickMessage);

      // Render
      terminal.render();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  render() {
    return <div id="example"></div>;
  }
}

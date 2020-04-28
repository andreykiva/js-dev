document.addEventListener("DOMContentLoaded", () => {
  class Options {
    constructor(
      height = 100,
      width = 100,
      bg = "#000",
      fontSize = 12,
      textAlign = "center"
    ) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }

    createBlock(text) {
      const div = document.createElement("div");
      div.textContent = text;
      div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
      document.body.append(div);
    }
  }

  const block = new Options(200, 100, "red", 22, "center");

  block.createBlock('Text');

  const newBlock = new Options(300, 300, "green", 16, "center");

  newBlock.createBlock('Bigger block');
});

import { Color, Engine, ScreenElement } from "excalibur";
import { Resources } from "../../resources";

export class ReplayButton extends ScreenElement {
  constructor(x: number, y: number) {
    super({
      x: x,
      y: y,
    });
  }

  onInitialize(engine: Engine): void {
    const replayBtnSprite = Resources.ReplayBtnBackground.toSprite();
    const hoverBtnSprite = Resources.ReplayBtnBackground.toSprite();
    hoverBtnSprite.tint = Color.LightGray;
    this.graphics.add("idle", replayBtnSprite);
    this.graphics.add("hover", hoverBtnSprite);
    this.graphics.use("idle");

    this.on("pointerup", () => {
      engine.goToScene("start");
    });

    this.on("pointerenter", () => {
      this.graphics.use("hover");
    });

    this.on("pointerleave", () => {
      this.graphics.use("idle");
    });
  }
}

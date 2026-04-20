import {
  Color,
  DefaultLoader,
  Engine,
  Font,
  Label,
  Scene,
  vec,
} from "excalibur";
import { ReplayButton } from "../ui/components/replayBtn";

export class GameOver extends Scene {
  override onInitialize(engine: Engine): void {
    // Afficher Game Over
    // Avoir un bouton replay
    const title: Label = new Label({
      text: "Game Over",
      color: Color.Red,
      font: new Font({ size: 30 }),
      pos: vec(engine.screen.center.x / 2, engine.screen.center.y / 2),
    });

    const replayBtn = new ReplayButton(
      (engine.screen.center.x + 20) / 2,
      engine.screen.center.y,
    );

    this.add(title);
    this.add(replayBtn);
  }

  override onPreLoad(loader: DefaultLoader): void {
    this.backgroundColor = Color.White;
  }
}

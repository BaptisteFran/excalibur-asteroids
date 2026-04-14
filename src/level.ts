import {
  DefaultLoader,
  Engine,
  ExcaliburGraphicsContext,
  Scene,
  SceneActivationContext,
  Color,
  Timer,
} from "excalibur";
import { Player } from "./player";
import { Asteroid } from "./entities/asteroid";

export class MyLevel extends Scene {
  override onInitialize(engine: Engine): void {
    // Scene.onInitialize is where we recommend you perform the composition for your game
    const player = new Player();
    this.add(player); // Actors need to be added to a scene to be drawn

    const timer = new Timer({
      action: () => {
        this.add(new Asteroid());
      },
      repeats: true,
      interval: 2000,
    });

    this.add(timer);
    timer.start();
  }

  override onPreLoad(loader: DefaultLoader): void {
    // Add any scene specific resources to load
    // this.backgroundColor = Color.fromHex("#121212");
    this.backgroundColor = Color.White;
  }

  override onActivate(context: SceneActivationContext<unknown>): void {
    // Called when Excalibur transitions to this scene
    // Only 1 scene is active at a time
  }

  override onDeactivate(context: SceneActivationContext): void {
    // Called when Excalibur transitions away from this scene
    // Only 1 scene is active at a time
  }

  override onPreUpdate(engine: Engine, elapsedMs: number): void {
    // Called before anything updates in the scene
  }

  override onPostUpdate(engine: Engine, elapsedMs: number): void {
    // Called after everything updates in the scene
  }

  override onPreDraw(ctx: ExcaliburGraphicsContext, elapsedMs: number): void {
    // Called before Excalibur draws to the screen
  }

  override onPostDraw(ctx: ExcaliburGraphicsContext, elapsedMs: number): void {
    // Called after Excalibur draws to the screen
  }
}

import {
  Actor,
  Collider,
  CollisionContact,
  Engine,
  Side,
  vec,
} from "excalibur";
import { Resources } from "../resources";

export class Asteroid extends Actor {
  constructor() {
    super({
      pos: vec(0, 0),
      radius: 30,
    });
  }
  speed = randomInt(1, 1.5);
  rotationSpeed = randomInt(-0.01, 0.01);
  entityType = "asteroid";

  override onInitialize() {
    this.graphics.add(Resources.Asteroid.toSprite());
    this.pos.x = randomInt(0, 750);

    this.on("pointerdown", (evt) => {});
  }

  override onPreUpdate(engine: Engine, elapsedMs: number): void {}

  override onPostUpdate(engine: Engine, elapsedMs: number): void {
    this.pos.y += this.speed;
    this.rotation += this.rotationSpeed;
    if (this.pos.y > 850) {
      this.kill();
    }
  }

  override onCollisionStart(
    self: Collider,
    other: Collider,
    side: Side,
    contact: CollisionContact,
  ): void {
    if (other.owner.entityType && other.owner.entityType === "laser") {
      this.scene.emit("asteroiddestroyed");
      this.kill();
    }

    if (other.owner.entityType && other.owner.entityType === "player") {
      this.kill();
    }
  }
}

const randomInt = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

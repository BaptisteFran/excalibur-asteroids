import {
  Actor,
  Collider,
  CollisionContact,
  Color,
  Engine,
  Side,
  Vector,
} from "excalibur";

export class Laser extends Actor {
  constructor(pos: Vector) {
    super({
      pos: pos,
      height: 25,
      width: 3,
      color: Color.Green,
    });
  }
  entityType = "laser";

  override onPostUpdate(engine: Engine, elapsedMs: number): void {
    this.pos.y -= 1.5;

    if (this.pos.y < 0) {
      this.kill();
    }
  }

  override onCollisionStart(
    self: Collider,
    other: Collider,
    side: Side,
    contact: CollisionContact,
  ): void {
    if (other.owner.entityType && other.owner.entityType === "asteroid") {
      this.kill();
    }
  }
}

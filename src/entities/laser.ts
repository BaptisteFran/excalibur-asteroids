import {
  Actor,
  Collider,
  CollisionContact,
  Color,
  Engine,
  Side,
  Vector,
} from "excalibur";
import { TypedEntity } from "./entity-type";

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
  projectile_speed = 200;

  override onPostUpdate(engine: Engine, elapsedMs: number): void {
    this.vel.y = -1 * this.projectile_speed;

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
    const owner = other.owner;
    if (
      other &&
      "entityType" in owner &&
      (owner as TypedEntity).entityType === "asteroid"
    ) {
      this.kill();
    }
  }
}

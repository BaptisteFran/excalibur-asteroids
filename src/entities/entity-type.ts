import { Entity } from "excalibur";

export interface TypedEntity extends Entity {
  entityType: string;
}

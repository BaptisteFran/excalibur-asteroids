import { Scene, vec, Vector } from "excalibur";
import { MyLevel } from "../level";

// CSS scale elements to match excalibur game canvas
export const calculateExPixelConversion = (screen: ex.Screen) => {
  const origin = screen.worldToPageCoordinates(Vector.Zero);
  const singlePixel = screen.worldToPageCoordinates(vec(1, 0)).sub(origin);
  const pixelConversion = singlePixel.x;
  document.documentElement.style.setProperty(
    "--pixel-conversion",
    pixelConversion.toString(),
  );
  document.documentElement.style.setProperty(
    "--game-origin-x",
    `${origin.x}px`,
  );
  document.documentElement.style.setProperty(
    "--game-origin-y",
    `${origin.y}px`,
  );
};

export class Menu {
  rootElement: HTMLElement;
  destroyedAsteroids: HTMLElement;
  hpCount: HTMLElement;
  score: number = 0;

  constructor(public scene: Scene) {
    const rootElement = document.getElementById("menu");
    const destroyedAsteroids = document.getElementById("destroyed-asteroids");
    const hpCount = document.getElementById("hp-count");
    this.score = Number(localStorage.getItem("score"));

    if (rootElement && destroyedAsteroids && hpCount) {
      this.rootElement = rootElement;
      this.destroyedAsteroids = destroyedAsteroids;
      this.hpCount = hpCount;
    } else {
      throw Error("Could not initialize UI");
    }

    this.destroyedAsteroids.textContent = "Score: " + this.score.toString();
    this.scene.on("asteroiddestroyed", () => {
      this.updateScore();
      if (this.score > Number(localStorage.getItem("score"))) {
        this.destroyedAsteroids.textContent = "Score: " + this.score.toString();
      }
    });

    this.scene.on("playerhit", (evt: any) => {
      this.updateHp();
      this.hpCount.textContent = "HP: " + evt.hp;
    });

    this.scene.on("playeradded", () => {
      this.updateHp();
      this.score = 0;
    });
  }

  updateHp() {
    this.hpCount.textContent = "HP: " + (this.scene as MyLevel).player.hp;
  }

  updateScore() {
    if (this.score > Number(localStorage.getItem("score"))) {
      localStorage.setItem("score", this.score.toString());
      this.score += 1;
    }
  }

  show() {
    this.rootElement.classList.remove("hide");
  }

  hide() {
    this.rootElement.classList.add("hide");
  }
}

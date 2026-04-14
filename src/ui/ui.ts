import { Scene, vec, Vector } from "excalibur";

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
  constructor(public scene: Scene) {
    const rootElement = document.getElementById("menu");
    const destroyedAsteroids = document.getElementById("destroyed-asteroids");
    const hpCount = document.getElementById("hp-count");

    if (rootElement && destroyedAsteroids && hpCount) {
      this.rootElement = rootElement;
      this.destroyedAsteroids = destroyedAsteroids;
      this.hpCount = hpCount;
    } else {
      throw Error("Could not initialize UI");
    }
  }

  show() {
    this.rootElement.classList.remove("hide");
  }

  hide() {
    this.rootElement.classList.add("hide");
  }
}

import { DisplayMode, Engine } from "excalibur";
import { loader } from "./resources";
import { MyLevel } from "./level";
import { calculateExPixelConversion } from "./ui/ui";
import { GameOver } from "./scenes/gameOver";

// Goal is to keep main.ts small and just enough to configure the engine

const game = new Engine({
  canvasElementId: "game",
  width: 800, // Logical width and height in game pixels
  height: 600,
  displayMode: DisplayMode.FitScreenAndFill, // Display mode tells excalibur how to fill the window
  pixelArt: true, // pixelArt will turn on the correct settings to render pixel art without jaggies or shimmering artifacts
  scenes: {
    start: MyLevel,
    gameOver: GameOver,
  },
  // physics: {
  //   solver: SolverStrategy.Realistic,
  //   substep: 5 // Sub step the physics simulation for more robust simulations
  // },
  // fixedUpdateTimestep: 16 // Turn on fixed update timestep when consistent physic simulation is important
});

game.screen.events.on("resize", () => calculateExPixelConversion(game.screen));

game
  .start("start", {
    // name of the start scene 'start'
    loader, // Optional loader (but needed for loading images/sounds)
  })
  .then(() => {
    calculateExPixelConversion(game.screen);
  });

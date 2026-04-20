import { Color, ImageSource, Loader, Sound, vec } from "excalibur";

// It is convenient to put your resources in one place
export const Resources = {
  Ship: new ImageSource("./images/ship.png"), // Vite public/ directory serves the root images
  Asteroid: new ImageSource("./images/asteroid.png"),
  ReplayBtnBackground: new ImageSource("./images/replay-btn-bg.png"),
  AsteroidDestroyedSound: new Sound("./sound/asteroid_destroyed.ogg"),
  LazerSound: new Sound("./sound/lazer.ogg"),
  MusicBg: new Sound("./sound/music.wav"),
  PlayerDeath: new Sound("./sound/player_death.ogg"),
  PlayerHit: new Sound("./sound/player_hit.ogg"),
} as const; // the 'as const' is a neat typescript trick to get strong typing on your resources.
// So when you type Resources.Sword -> ImageSource

// We build a loader and add all of our resources to the boot loader
// You can build your own loader by extending DefaultLoader
export const loader = new Loader();
loader.logo = "./images/logo.png";
loader.backgroundColor = "#fff";
loader.suppressPlayButton = true;
loader.logoPosition = vec(475, 200);
loader.loadingBarPosition = vec(350, 400);
loader.loadingBarColor = Color.DarkGray;

for (const res of Object.values(Resources)) {
  loader.addResource(res);
}

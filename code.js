onEvent("Homescreen", "click", function( ) {
  setScreen("Drawscreen");
  penDown();
});
onEvent("Moveforward", "click", function( ) {
  moveForward(25);
});
onEvent("Movebackward", "click", function( ) {
  moveBackward(25);
});
onEvent("right", "click", function( ) {
  turnRight(30);
});
onEvent("Turnleft", "click", function( ) {
  turnLeft(30);
});

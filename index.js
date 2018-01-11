
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  if (string.toUpperCase() === string) {
    console.log(string);
  }
  else {
    console.log("Expected CAPS");
  }
}

function logWhisper(string) {
  if (string.toLowerCase() === string) {
    console.log(string);
  }
}

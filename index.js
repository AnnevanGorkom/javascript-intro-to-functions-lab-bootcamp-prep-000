
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
}

function logWhisper(string) {
  if (string.toLowerCase() === string) {
    console.log(string);
  }
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else {
    return "YES INDEED"
  }
}
// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function(window){
var byeSpeaker= {};
// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "GoodBye";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
byeSpeaker.speak= function(name) {
  console.log(speakWord + " " +name);
}
window.byeSpeaker=byeSpeaker;
})(window);

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;

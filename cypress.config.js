const { defineConfig } = require("cypress");


module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
  },
});

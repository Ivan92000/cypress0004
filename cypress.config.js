const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  projectId: '65q5sq',
  e2e: {
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
    },
  },
});


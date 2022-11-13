const { defineConfig } = require('cypress');
const cypressReplay = require('@replayio/cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			cypressReplay.default(on, config);
			return config;
		},
	},
});

// External module imports
const Path = require("path");

// Module exports
module.exports = {
	entry: { app: "./public/res/js/app.js" },
	output: {
		path: Path.resolve(__dirname, "dist"),
		clean: true,
		filename: "./res/js/app.js",
	}, module: {
		rules: [{
				test: /\.(?:js|mjs|cjs|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
				}
		}]
	}
};

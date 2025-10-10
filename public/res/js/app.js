//#region External module imports
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//#endregion

//#region Code body
/**
 * Represents the complete React application.
 * @returns The JSX used for the entire app.
 */
function App() {
	return (<main className="modal container">
		<h1 className="title">AsuraDX - Coming soon!</h1>
		<p>
		Thanks for checking out my site; <a href="https://SweetBoy13735.Me.UK" target="_blank">SweetBoy's</a> currently working on it as we speak, so he'll need some time to get everything up and running.
			<br />
			In the meantime, check out my <a href="https://www.Instagram.com/WhatAsuraDoes" target="_blank">Instagram</a> and <a href="https://twitter.com/AsuraDX" target="_blank">Twitter</a> accounts. I'll be announcing the site's release on these platforms so please have a look.
		</p>
	</main>);
}

// Renders the React app on the element with the ID of "app-root".
document.body.id = "app-root";

createRoot(document.getElementById("app-root")).render(<StrictMode>
	<App />
</StrictMode>);
//#endregion

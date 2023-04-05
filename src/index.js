import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ServiceWorker from "./pages/service-worker";
import JobPoster from "./pages/job-poster";
import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/service-worker",
		element: <ServiceWorker />,
	},
	{
		path: "/job-poster",
		element: <JobPoster />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

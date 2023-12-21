import { createBrowserRouter } from "react-router-dom";
import privetRouter from "./Privet";
import publicRouter from "./Public";

const router = createBrowserRouter([...privetRouter, ...publicRouter]);

export default router;

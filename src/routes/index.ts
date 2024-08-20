import { Router } from "express";
import showRoutes from "./show.route";

const router: Router = Router();

router.use("/shows", showRoutes);

export default router;

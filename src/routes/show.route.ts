import { Router } from "express";
import {
  fetchAndStoreShows,
  getPaginatedShows,
} from "../controllers/show.controller";

const router: Router = Router();

router.get("/", getPaginatedShows);
router.get("/fetch-and-store", fetchAndStoreShows);

export default router;

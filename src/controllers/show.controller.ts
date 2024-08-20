import { Request, Response } from "express";
import { Show } from "../models/show.mode";
import { getCastForShow, getShows } from "../services/tvMaze.service";

const fetchAndStoreShows = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shows = await getShows();
    for (const show of shows) {
      // Check if the show already exists
      const existingShow = await Show.findOne({ id: show.id });
      // Add non-existing show
      if (!existingShow) {
        const cast = await getCastForShow(show.id);
        await Show.create({ id: show.id, name: show.name, cast });
      } else {
        console.log(`Show with ID ${show.id} already exists, skipping...`);
      }
    }
    res.status(200).send("Shows and cast data saved.");
  } catch (err) {
    const errObj = err as Error;
    res.status(500).json({ message: errObj.message });
  }
};

const getPaginatedShows = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const shows = await Show.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort("name")
      .select("-_id id name cast")
      .exec();

    shows.forEach((show) => {
      show.cast.sort(
        (a, b) =>
          new Date(b.birthday!).getTime() - new Date(a.birthday!).getTime()
      );
    });

    res.json(shows);
  } catch (err) {
    const errObj = err as Error;
    res.status(500).json({ message: errObj.message });
  }
};

export { fetchAndStoreShows, getPaginatedShows };

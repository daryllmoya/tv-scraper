import mongoose, { Schema } from "mongoose";

import { CastSchema, ICast } from "./cast.model";

const ShowSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  cast: { type: [CastSchema], required: true },
});

interface IShow extends Document {
  id: number;
  name: string;
  cast: ICast[];
}

const Show = mongoose.model<IShow>("Show", ShowSchema);

export { Show }
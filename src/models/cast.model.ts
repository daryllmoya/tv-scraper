import { Document, Schema } from "mongoose";

const CastSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  birthday: { type: Date, required: false },
});

interface ICast extends Document {
  id: number;
  name: string;
  birthday: Date | null;
}

export { CastSchema, ICast };

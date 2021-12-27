import { Schema, model, connect } from 'mongoose';

export interface Iproblem {
  description: string;
  difficulty: string;
  level: string;
  name: string;
  displayname: string;
  examples?: string[];
  acceptance?: number;
}

const problemSchema = new Schema<Iproblem>({
  // _id
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  level: { type: String, required: true },
  name: { type: String, required: true },
  displayname: { type: String, required: true },
  examples: { type: [String] },
  acceptance: {type: Number}
});

export const Problem = model<Iproblem>('algorithm_problems', problemSchema);

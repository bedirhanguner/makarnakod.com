import { Schema, model, connect } from 'mongoose';

export interface Iproblem {
  description: string;
  difficulty: string;
  level: string;
  name: string;
  examples?: string[];
}

const problemSchema = new Schema<Iproblem>({
  // _id
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  level: { type: String, required: true },
  name: { type: String, required: true },
  examples: { type: [String] },
});

export const Problem = model<Iproblem>('algorithm_problems', problemSchema);

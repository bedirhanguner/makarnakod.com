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

export const AlgorithmProblems = model<Iproblem>('algorithm_problems', problemSchema);
export const DataStructureProblems = model<Iproblem>('data_structure_problems', problemSchema);
export const FunctionalProgrammingProblems = model<Iproblem>('functional_programming_problems', problemSchema);
export const DatabaseProblems = model<Iproblem>('database_problems', problemSchema);

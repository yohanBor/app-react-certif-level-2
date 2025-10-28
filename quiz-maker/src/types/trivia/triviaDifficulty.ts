export const DIFFICULTY = ['easy' , 'medium' ,'hard'] as const;

export type TriviaDifficulty = typeof DIFFICULTY[number];
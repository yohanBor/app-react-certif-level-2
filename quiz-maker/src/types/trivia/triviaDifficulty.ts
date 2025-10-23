export const DIFFICULTY = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard',
} as const;

export type TriviaDifficulty = typeof DIFFICULTY[keyof typeof DIFFICULTY];
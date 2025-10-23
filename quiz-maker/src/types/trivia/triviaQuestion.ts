import type { TriviaDifficulty } from "./triviaDifficulty"


export type TriviaQuestion = {
    type: "multiple" | "boolean",
    difficulty: TriviaDifficulty,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export type GetTriviaQuestionResponse = {
    response_code: number,
    results: TriviaQuestion[]
}
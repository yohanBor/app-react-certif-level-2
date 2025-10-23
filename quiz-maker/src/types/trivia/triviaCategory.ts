export type TriviaCategory = {
    id: number,
    name: string
}

export type GetTriviaCategoryResponse = {
    trivia_categories: TriviaCategory[]
}
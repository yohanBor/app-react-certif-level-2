import type { GetTriviaQuestionResponse } from "@/types/trivia/triviaQuestion";
import { axiosInstance } from "../lib/axios"
import type { GetTriviaCategoryResponse } from "../types/trivia/triviaCategory";

export const TriviaService = {
    getCategories: async () => {
        const { data } = await axiosInstance.get<GetTriviaCategoryResponse>("api_category.php");
        return data.trivia_categories;
    },
    getQuestions: async (categoryId: number, difficulty: string, amount: number) => {
        const { data } = await axiosInstance.get<GetTriviaQuestionResponse>(`api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`);
        return data.results;
    }
}
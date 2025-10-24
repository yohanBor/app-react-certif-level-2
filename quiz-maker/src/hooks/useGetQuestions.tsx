import { TriviaService } from "@/services/triviaServices"
import { useQuery } from "@tanstack/react-query"

const useGetQuestions = (categoryId: number, difficulty: string, amount: number) => useQuery({
    queryFn: () => TriviaService.getQuestions(categoryId, difficulty, amount),
    enabled: false,
    cacheTime: 0, // disable cache to always fetch new questions
})

export default useGetQuestions;


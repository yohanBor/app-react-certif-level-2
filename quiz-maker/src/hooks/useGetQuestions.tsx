import { TriviaService } from "@/services/triviaServices"
import { useQuery } from "@tanstack/react-query"

const useGetQuestions = (categoryId: number, difficulty: string, amount: number) => useQuery({
    queryKey: ['triviaQuestions', categoryId, difficulty, amount],
    queryFn: () => TriviaService.getQuestions(categoryId, difficulty, amount),
    enabled: false,
})

export default useGetQuestions;


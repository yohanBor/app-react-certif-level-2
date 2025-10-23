import { useQuery } from "@tanstack/react-query";
import { TriviaService } from "../services/triviaServices";

const useGetCategories = () =>  useQuery({
        queryKey: ['triviaCategories'],
        queryFn: TriviaService.getCategories,
    });

export default useGetCategories;
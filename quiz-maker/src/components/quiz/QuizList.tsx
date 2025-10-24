import QuizItem from "./QuizItem";
import { useQuizContext } from "@/hooks/useQuizContext";

// Component to display a list of quiz items
const QuizList = () => {
    const { triviaQuestions } = useQuizContext();
    return (
        <div className="flex flex-col gap-4">
            {triviaQuestions?.map((trivia) => <QuizItem key={trivia.question} triviaQuestion={trivia} />)}
        </div>
    )
};

export default QuizList;
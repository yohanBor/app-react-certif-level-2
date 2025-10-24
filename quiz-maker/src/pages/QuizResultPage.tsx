import PlayAgainBtn from "@/components/quiz/PlayAgainBtn";
import QuizList from "@/components/quiz/QuizList";
import ScoreResult from "@/components/quiz/ScoreResult";
import { useQuizContext } from "@/hooks/useQuizContext";

const QuizResultPage = () => {
    const { submited } = useQuizContext();

    return !submited ? <div>No result to display.</div> : 
        <div>
            < QuizList />
            <div className="mt-8 flex flex-col gap-4 w-xs">
                <ScoreResult />
                <PlayAgainBtn />
            </div>
        </div>
}

export default QuizResultPage;
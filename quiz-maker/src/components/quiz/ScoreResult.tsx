import { NB_QUESTIONS_IN_QUIZ } from "@/constants/quizConstant";
import { useQuizContext } from "@/hooks/useQuizContext";

const ScoreResult = () => {
    const { selectedAnswers, triviaQuestions } = useQuizContext();

    const score = triviaQuestions.reduce((acc, question) => {
        const userAnswer = selectedAnswers[question.question];
        if (userAnswer === question.correct_answer) {
            return acc + 1;
        }
        return acc;
    }, 0);

    return (
        <div className={`text-lg p-2 ${score < 2 ? "bg-red-500" : score < 4 ? "bg-yellow-500" : "bg-green-500"} rounded-xs`}>
            You scored {score} out of {NB_QUESTIONS_IN_QUIZ}
        </div>
    )
}

export default ScoreResult;
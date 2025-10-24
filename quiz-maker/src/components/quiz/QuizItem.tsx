import type { TriviaQuestion } from "@/types/trivia/triviaQuestion";
import { useMemo } from "react";
import { useQuizContext } from "@/hooks/useQuizContext";
import AnswerItemBtn from "./AnswerItemBtn";

interface QuizItemProps {
    triviaQuestion: TriviaQuestion
}

// Component to display a single quiz item. Composed of question and possible answers.
const QuizItem = ({ triviaQuestion }: QuizItemProps) => {
    const { setSelectedAnswers, selectedAnswers, submited } = useQuizContext();

    const expectedAnswers = useMemo(() => {
        const answers: Record<string, string> = {};
        answers[triviaQuestion.question] = triviaQuestion.correct_answer;
        return answers;
    }, [triviaQuestion]);

    const onSelectAnswer = (answer: string) => {
        !submited && setSelectedAnswers(prev => ({
            ...prev,
            [triviaQuestion.question]: answer
        }));
    }

    return (
        <div>
            <p>{triviaQuestion.question}</p>
            <div className="flex gap-2 pt-2">
                {triviaQuestion.possibleAnswers.map((answer) => {
                    const selectedAnswer = selectedAnswers[triviaQuestion.question];
                    return <AnswerItemBtn
                        key={answer}
                        answerText={answer}
                        isSelected={selectedAnswer === answer}
                        isCorrect={submited && expectedAnswers[triviaQuestion.question] === answer ? answer === selectedAnswers[triviaQuestion.question] : undefined}
                        onSelect={() => onSelectAnswer(answer)}
                        disabled={submited}
                    />
                }

                )}
            </div>
        </div>
    )
}

export default QuizItem;
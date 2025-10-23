import type { TriviaQuestion } from "@/types/trivia/triviaQuestion";
import { Button } from "../../ui/button";
import { useMemo } from "react";
import { useQuizContext } from "@/hooks/useQuizContext";

interface QuestionItemProps {
    question: TriviaQuestion
}

const QuestionItem = ({ question }: QuestionItemProps) => {
    const {setSelectedAnswers, selectedAnswers} = useQuizContext();

    const questionAnswers = useMemo (() => [
        ...question.incorrect_answers,
        question.correct_answer
    ].sort(() => Math.random() - 0.5), [question]);

    const onSelectAnswer = (answer: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [question.question]: answer
        }));
    }

    return (
        <div>
            <p>{question.question}</p>
            <div className="flex gap-2 pt-2">
                {questionAnswers.map((answer) =>
                    <Button key={answer} onClick={() => onSelectAnswer(answer)} className={`hover:bg-green-700 hover:text-white ${selectedAnswers[question.question] == answer ? "bg-green-700 text-white" : "bg-neutral-50 text-green-700 border border-green-700"}`}>{answer}</Button>
                )}
            </div>
        </div>
    )
}

export default QuestionItem;
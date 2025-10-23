import type { TriviaQuestion } from "@/types/trivia/triviaQuestion";
import { Button } from "./ui/button";

interface QuestionItemProps {
    question: TriviaQuestion
}

const QuestionItem = ({ question }: QuestionItemProps) => {
    const questionsAnswers = [
        ...question.incorrect_answers,
        question.correct_answer
    ].sort(() => Math.random() - 0.5);

    return (
        <div>
            <p>{question.question}</p>
            <div className="flex gap-2 pt-2">
                {questionsAnswers.map((answer) => <Button key={answer}>{answer}</Button>)}
            </div>
        </div>
    )
}

export default QuestionItem;
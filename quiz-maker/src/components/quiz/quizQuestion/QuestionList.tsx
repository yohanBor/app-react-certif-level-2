import type { TriviaQuestion } from "@/types/trivia/triviaQuestion";
import QuestionItem from "./QuestionItem";

interface QuestionListProps {
    questions: TriviaQuestion[] | undefined
}

const QuestionList = ({ questions }: QuestionListProps) => <div className="flex flex-col gap-4">{questions?.map((question) => <QuestionItem key={question.question} question={question} />)}</div>

export default QuestionList;
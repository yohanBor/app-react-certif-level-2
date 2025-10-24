import type { Answer } from '@/types/quiz/answer';
import type { TriviaQuestion } from '@/types/trivia/triviaQuestion';
import { createContext, useContext, useState, type ReactElement } from 'react';

export const QuizContext = createContext<{
    selectedAnswers: Answer,
    setSelectedAnswers: React.Dispatch<React.SetStateAction<Answer>>,
    triviaQuestions: TriviaQuestion[],
    setTriviaQuestions: React.Dispatch<React.SetStateAction<TriviaQuestion[]>>,
    submited: boolean,
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    resetQuiz: () => void
}>({
    selectedAnswers: {},
    setSelectedAnswers: () => { },
    triviaQuestions: [],
    setTriviaQuestions: () => { },
    setSubmitted: () => { },
    submited: false,
    resetQuiz: () => { }
});

export const QuizProvider = ({ children }: { children: ReactElement }) => {
    const [selectedAnswers, setSelectedAnswers] = useState<Answer>({});
    const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion[]>([]);
    const [submited, setSubmitted] = useState<boolean>(false);

    const resetQuiz = () => {
        setSelectedAnswers({});
        setTriviaQuestions([]);
        setSubmitted(false);
    }

    return (
        <QuizContext.Provider value={{ selectedAnswers, setSelectedAnswers, triviaQuestions, setTriviaQuestions, submited, setSubmitted, resetQuiz }}>
            {children}
        </QuizContext.Provider>
    )
}


export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error("useQuizContext must be used within a QuizProvider");
    }
    return context;
}
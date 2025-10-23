import type { Answer } from '@/types/quiz/answer';
import { createContext, useContext, useState, type ReactElement } from 'react';

export const QuizContext = createContext<{
    selectedAnswers: Answer,
    setSelectedAnswers: React.Dispatch<React.SetStateAction<Answer>>,
    expectedAnswers: Answer,
    setExpectedAnswers: React.Dispatch<React.SetStateAction<Answer>>
}>({
    selectedAnswers: {},
    setSelectedAnswers: () => {},
    expectedAnswers: {},
    setExpectedAnswers: () => {}
});

export const QuizProvider = ({children}: {children: ReactElement}) => {
    const [selectedAnswers, setSelectedAnswers] = useState<Answer>({});
    const [expectedAnswers, setExpectedAnswers] = useState<Answer>({});

    return (
        <QuizContext.Provider value={{selectedAnswers, setSelectedAnswers, expectedAnswers, setExpectedAnswers}}>
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
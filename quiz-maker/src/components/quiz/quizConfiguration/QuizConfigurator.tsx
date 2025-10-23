import SelectCategories from '@/components/quiz/quizConfiguration/SelectCategory'
import SelectDifficulty from '@/components/quiz/quizConfiguration/SelectDifficulty';
import CreateQuizBtn from '@/components/quiz/quizConfiguration/CreateQuizBtn';
import type { TriviaCategory } from '@/types/trivia/triviaCategory';
import type { TriviaDifficulty } from '@/types/trivia/triviaDifficulty';
import { useEffect, useState } from 'react';
import useGetQuestions from '@/hooks/useGetQuestions';
import type { TriviaQuestion } from '@/types/trivia/triviaQuestion';
import { NB_QUESTIONS_IN_QUIZ } from '@/constants/quizConstant';
import { useQuizContext } from '@/hooks/useQuizContext';

interface QuizConfiguratorProps {
    setQuestions: React.Dispatch<React.SetStateAction<TriviaQuestion[] | undefined>>
}

const QuizConfigurator = ({ setQuestions }: QuizConfiguratorProps) => {
    const [selectedCategory, setSelectedCategory] = useState<TriviaCategory>();
    const [selectedDifficulty, setSelectedDifficulty] = useState<TriviaDifficulty>();
    const { data: questions, refetch: onCreateQuiz } = useGetQuestions(selectedCategory?.id ?? 0, selectedDifficulty ?? "", NB_QUESTIONS_IN_QUIZ);
    const {setExpectedAnswers} = useQuizContext();

    useEffect(() => {
        const expectedAnswers: Record<string, string> = {};
        questions?.forEach((question) => {
            expectedAnswers[question.question] = question.correct_answer;
        });
        setExpectedAnswers(expectedAnswers);
        setQuestions(questions);
    }, [questions, setQuestions]);

    return <div className='flex gap-2'>
        <SelectCategories setSelectedCategory={setSelectedCategory} />
        <SelectDifficulty setSelectedDifficulty={setSelectedDifficulty} />
        <CreateQuizBtn onClick={onCreateQuiz} />
    </div>
}


export default QuizConfigurator;
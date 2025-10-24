import SelectCategories from '@/components/quiz/quizConfiguration/SelectCategory'
import SelectDifficulty from '@/components/quiz/quizConfiguration/SelectDifficulty';
import CreateQuizBtn from '@/components/quiz/quizConfiguration/CreateQuizBtn';
import type { TriviaCategory } from '@/types/trivia/triviaCategory';
import type { TriviaDifficulty } from '@/types/trivia/triviaDifficulty';
import { useEffect, useState } from 'react';
import useGetQuestions from '@/hooks/useGetQuestions';
import { NB_QUESTIONS_IN_QUIZ } from '@/constants/quizConstant';
import { useQuizContext } from '@/hooks/useQuizContext';


const QuizConfigurator = () => {
    const [selectedCategory, setSelectedCategory] = useState<TriviaCategory>();
    const [selectedDifficulty, setSelectedDifficulty] = useState<TriviaDifficulty>();
    const { data: triviaQuestions, refetch: onCreateQuiz } = useGetQuestions(selectedCategory?.id ?? 0, selectedDifficulty ?? "", NB_QUESTIONS_IN_QUIZ);
    const { setTriviaQuestions } = useQuizContext();

    // Set trivia questions for the game once fetched
    useEffect(() => {
        if (triviaQuestions) {
            setTriviaQuestions(triviaQuestions.map((triviaQuestion) => ({
                ...triviaQuestion,
                possibleAnswers: [
                    ...triviaQuestion.incorrect_answers,
                    triviaQuestion.correct_answer
                ].sort(() => Math.random() - 0.5)
            })));
        }
    }, [triviaQuestions]);

    return <div className='flex gap-2'>
        <SelectCategories setSelectedCategory={setSelectedCategory} />
        <SelectDifficulty setSelectedDifficulty={setSelectedDifficulty} />
        <CreateQuizBtn onClick={onCreateQuiz} />
    </div>
}


export default QuizConfigurator;
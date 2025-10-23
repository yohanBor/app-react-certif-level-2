import SelectCategories from '@/components/quiz/quizConfiguration/SelectCategory'
import SelectDifficulty from '@/components/quiz/quizConfiguration/SelectDifficulty';
import CreateQuizBtn from '@/components/quiz/quizConfiguration/CreateQuizBtn';
import type { TriviaCategory } from '@/types/trivia/triviaCategory';
import type { TriviaDifficulty } from '@/types/trivia/triviaDifficulty';

interface QuizConfiguratorProps {
    setSelectedCategory: React.Dispatch<React.SetStateAction<TriviaCategory | undefined>>;
    setSelectedDifficulty: React.Dispatch<React.SetStateAction<TriviaDifficulty | undefined>>;
    onCreateQuiz: VoidFunction;
}

const QuizConfigurator = ({setSelectedCategory, setSelectedDifficulty, onCreateQuiz}:QuizConfiguratorProps ) => (<div className='flex gap-2'>
        <SelectCategories setSelectedCategory={setSelectedCategory} />
        <SelectDifficulty setSelectedDifficulty={setSelectedDifficulty} />
        <CreateQuizBtn onClick={onCreateQuiz} />
    </div>)


export default QuizConfigurator;
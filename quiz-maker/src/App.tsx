import { useState } from 'react';
import './App.css'
import type { TriviaCategory } from '@/types/trivia/triviaCategory';
import SelectCategories from '@/components/SelectCategory'
import SelectDifficulty from './components/SelectDifficulty';
import Title from './components/Title';
import CreateQuizBtn from './components/CreateQuizBtn';
import type { TriviaDifficulty } from './types/trivia/triviaDifficulty';
import useGetQuestions from './hooks/useGetQuestions';
import QuestionList from './components/QuestionList';
function App() {
  const [selectedCategory, setSelectedCategory] = useState<TriviaCategory>();
  const [selectedDifficulty, setSelectedDifficulty] = useState<TriviaDifficulty>();
  const { data: questions, refetch } = useGetQuestions(selectedCategory?.id ?? 0, selectedDifficulty ?? "", 5);

  return (
    <div>
      <Title />
      <div className='flex gap-2'>
        <SelectCategories setSelectedCategory={setSelectedCategory} />
        <SelectDifficulty setSelectedDifficulty={setSelectedDifficulty} />
        <CreateQuizBtn onClick={refetch} />
      </div>
      <QuestionList questions={questions} />
    </div>
  )
}

export default App

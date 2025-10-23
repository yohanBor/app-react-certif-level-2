import { useState } from 'react';
import './App.css'
import type { TriviaCategory } from '@/types/trivia/triviaCategory';
import SelectCategories from '@/components/SelectCategory'
import SelectDifficulty from './components/SelectDifficulty';
import Title from './components/Title';
import CreateQuizBtn from './components/CreateQuizBtn';
import type { TriviaDifficulty } from './types/trivia/triviaDifficulty';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<TriviaCategory>();
  const [selectedDifficulty, setSelectedDifficulty] = useState<TriviaDifficulty>();

  return (
    <div>
      <Title />
      <div className='flex gap-2'>
        <SelectCategories setSelectedCategory={setSelectedCategory} />
        <SelectDifficulty setSelectedDifficulty={setSelectedDifficulty} />
        <CreateQuizBtn />
      </div>
    </div>
  )
}

export default App

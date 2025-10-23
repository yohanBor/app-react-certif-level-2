import { useState } from 'react';
import './App.css'
import type { TriviaCategory } from '@/types/trivia/triviaCategory';

import Title from './components/Title';
import type { TriviaDifficulty } from './types/trivia/triviaDifficulty';
import useGetQuestions from './hooks/useGetQuestions';
import QuestionList from './components/quiz/quizQuestion/QuestionList';
import QuizConfigurator from './components/quiz/quizConfiguration/QuizConfigurator';
function App() {
  const [selectedCategory, setSelectedCategory] = useState<TriviaCategory>();
  const [selectedDifficulty, setSelectedDifficulty] = useState<TriviaDifficulty>();
  const { data: questions, refetch: onCreateQuiz } = useGetQuestions(selectedCategory?.id ?? 0, selectedDifficulty ?? "", 5);

  return (
    <div>
      <Title title='QUIZ MAKER' />
      <QuizConfigurator setSelectedCategory={setSelectedCategory} setSelectedDifficulty={setSelectedDifficulty} onCreateQuiz={onCreateQuiz}/>
      <QuestionList questions={questions} />
    </div>
  )
}

export default App

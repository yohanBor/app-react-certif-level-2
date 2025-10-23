import './App.css'

import Title from './components/Title';
import QuestionList from './components/quiz/quizQuestion/QuestionList';
import QuizConfigurator from './components/quiz/quizConfiguration/QuizConfigurator';
import { useState } from 'react';
import type { TriviaQuestion } from './types/trivia/triviaQuestion';
import { useQuizContext } from './hooks/useQuizContext';
import { NB_QUESTIONS_IN_QUIZ } from './constants/quizConstant';
import { Button } from './components/ui/button';
function App() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>();
  const {selectedAnswers} = useQuizContext();

  const onSubmitQuiz = () => {
  }
  
  return (
    <div>
      <Title title='QUIZ MAKER' />
      <QuizConfigurator setQuestions={setQuestions}/>
      <QuestionList questions={questions} />
      {Object.keys(selectedAnswers).length === NB_QUESTIONS_IN_QUIZ && <div className='mt-4'><Button onClick={onSubmitQuiz}>Submit</Button></div>}
    </div>
  )
}

export default App

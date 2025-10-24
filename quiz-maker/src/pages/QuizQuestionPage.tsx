import QuizList from '@/components/quiz/QuizList';
import QuizConfigurator from '@/components/quiz/quizConfiguration/QuizConfigurator';
import { useQuizContext } from '@/hooks/useQuizContext';
import { NB_QUESTIONS_IN_QUIZ } from '@/constants/quizConstant';
import { Link } from 'react-router';

const QuizQuestionPage = () => {
  const { selectedAnswers, setSubmitted } = useQuizContext();

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <QuizConfigurator />
      <QuizList />
      {Object.keys(selectedAnswers).length === NB_QUESTIONS_IN_QUIZ &&
        <div className='mt-4'>
          <Link onClick={onSubmit} className='border border-neutral-300 p-2 rounded-xs hover:bg-neutral-300' to="/result">Submit</Link>
        </div>
      }
    </div>
  )
}

export default QuizQuestionPage

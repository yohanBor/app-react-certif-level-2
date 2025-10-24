import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Layout.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { QuizProvider } from './hooks/useQuizContext.tsx'
import { queryClient } from './lib/react-query.ts'
import QuizQuestionPage from './pages/QuizQuestionPage.tsx'
import QuizResultPage from './pages/QuizResultPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<QuizQuestionPage />} />
              <Route path='/result' element={<QuizResultPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </QueryClientProvider>
  </StrictMode>,
)

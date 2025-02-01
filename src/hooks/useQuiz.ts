import { useState, useEffect } from 'react';
import { Question, QuizState, QuizResponse } from '../types/quiz';
import axios from 'axios';

export function useQuiz() {
  const [quizData, setQuizData] = useState<QuizResponse | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isComplete: false,
    correctAnswers: 0,
    totalQuestions: 0
  });

  const fetchQuizData = async () => {
    setLoading(true); // Ensure loading starts before API call
    try {
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://api.jsonserve.com/Uw5CrX`);
      const data = response.data;
      console.log("data",data)
      setQuizData(data);
      setQuestions(data.questions);
      setQuizState(prev => ({ ...prev, totalQuestions: data.questions.length }));
      setLoading(false);
    } catch (err) {
      console.log("err",err)
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  const submitAnswer = (answerIndex: number) => {
    if (!quizData || !questions.length) return;

    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = currentQuestion.options[answerIndex].is_correct;
    const correctAnswerMarks = parseFloat(quizData.correct_answer_marks) || 4;
    const negativeMarks = parseFloat(quizData.negative_marks) || 1;
    
    setQuizState(prev => ({
      ...prev,
      score: prev.score + (isCorrect ? correctAnswerMarks : -negativeMarks),
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      answers: [...prev.answers, answerIndex],
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      isComplete: prev.currentQuestionIndex === questions.length - 1,
    }));
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isComplete: false,
      correctAnswers: 0,
      totalQuestions: questions.length
    });
  };

  return {
    quizData,
    questions,
    loading,
    error,
    quizState,
    submitAnswer,
    restartQuiz,
  };
}

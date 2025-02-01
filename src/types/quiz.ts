export interface Question {
  id: number;
  description: string;
  detailed_solution: string;
  options: Option[];
  topic: string;
  difficulty_level: string | null;
}

export interface Option {
  id: number;
  description: string;
  is_correct: boolean;
  question_id: number;
  unanswered: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  isComplete: boolean;
  correctAnswers: number;
  totalQuestions: number;
}

export interface QuizResponse {
  id: number;
  title: string;
  description: string;
  duration: number;
  questions: Question[];
  correct_answer_marks: string;
  negative_marks: string;
}
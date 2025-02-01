import { Trophy, Award, RotateCcw } from 'lucide-react';
import { QuizState } from '../types/quiz';

interface QuizSummaryProps {
  quizState: QuizState;
  onRestart: () => void;
}

export function QuizSummary({ quizState, onRestart }: QuizSummaryProps) {
  const percentage = (quizState.correctAnswers / quizState.totalQuestions) * 100;
  
  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg text-center">
      <div className="mb-8">
        {percentage >= 80 ? (
          <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
        ) : (
          <Award className="w-16 h-16 mx-auto text-blue-500" />
        )}
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
      
      <div className="space-y-4 mb-8">
        <p className="text-4xl font-bold text-blue-600">{quizState.score} points</p>
        <div className="space-y-2">
          <p className="text-gray-600">
            Correct Answers: {quizState.correctAnswers} out of {quizState.totalQuestions}
          </p>
          <p className="text-gray-600">
            Accuracy: {percentage.toFixed(1)}%
          </p>
        </div>
      </div>
      
      <button
        onClick={onRestart}
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        <RotateCcw className="w-5 h-5 mr-2" />
        Try Again
      </button>
    </div>
  );
}
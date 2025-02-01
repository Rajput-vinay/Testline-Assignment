
import { Question } from '../types/quiz';
import { Trophy } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (index: number) => void;
  questionNumber: number;
  totalQuestions: number;
}


export function QuizQuestion({ question, onAnswer, questionNumber, totalQuestions }: QuizQuestionProps) {
    
    return (
    <div className="w-full max-w-2xl mx-auto p-3 bg-white rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-500">
          Question {questionNumber} of {totalQuestions}
        </span>
        <Trophy className="w-6 h-6 text-yellow-500" />
      </div>
      
      <h2 className="text-xl font-mono font-semibold text-gray-800 mb-6">{question.description}</h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onAnswer(index)}
            className="w-full p-2 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors duration-200 border border-gray-200 hover:border-blue-200"
          >
            <span className="font-mono text-gray-700">{option.description}</span>
          </button>
        ))}
      </div>

      {question.topic && (
        <div className="mt-6 text-sm text-gray-500">
          Topic: {question.topic}
        </div>
      )}
    </div>
  );
}
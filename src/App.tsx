
import { useQuiz } from './hooks/useQuiz';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizSummary } from './components/QuizSummary';
import { LoadingSpinner } from './components/LoadingSpinner';
import { BrainCircuit } from 'lucide-react';

function App() {
  const { quizData, questions, loading, error, quizState, submitAnswer, restartQuiz } = useQuiz();

  if (loading) return <LoadingSpinner />;
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!quizData) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BrainCircuit className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">{quizData.title}</h1>
          </div>
          {!quizState.isComplete && (
            <div className="flex flex-col items-center gap-2">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full inline-block">
                Score: {quizState.score}
              </div>
              <div className="text-sm text-gray-600">
                Time: {quizData.duration} minutes | Correct: +{quizData.correct_answer_marks} | Incorrect: -{quizData.negative_marks}
              </div>
            </div>
          )}
        </div>

        {quizState.isComplete ? (
          <QuizSummary quizState={quizState} onRestart={restartQuiz} />
        ) : (
          <QuizQuestion
            question={questions[quizState.currentQuestionIndex]}
            onAnswer={submitAnswer}
            questionNumber={quizState.currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        )}
      </div>
    </div>
  );
}

export default App;
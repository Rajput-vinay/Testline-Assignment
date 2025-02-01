# Quiz Application

A modern, interactive quiz application built with React, TypeScript, and Tailwind CSS. The application features a clean UI, real-time scoring, and gamification elements to create an engaging learning experience.

![Quiz App Screenshot](https://github.com/Rajput-vinay/image/blob/main/ss1.jpg)

## Features

- 🎯 Dynamic quiz questions loaded from API
- 💯 Real-time scoring with positive and negative marking
- 🎨 Clean, responsive UI with Tailwind CSS
- 🏆 Gamification elements with progress tracking
- 📊 Detailed quiz summary with accuracy statistics
- 🔄 Option to restart quiz
- ⚡ Fast and smooth user experience

## Technology Stack

- **Frontend Framework**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── LoadingSpinner.tsx
│   ├── QuizQuestion.tsx
│   └── QuizSummary.tsx
├── hooks/
│   └── useQuiz.ts
├── types/
│   └── quiz.ts
├── App.tsx
└── main.tsx
```

## Component Overview

### App.tsx
The main application component that orchestrates the quiz flow and renders different states (loading, error, quiz, summary).

### Components

- **LoadingSpinner**: Displays a loading animation while fetching quiz data
- **QuizQuestion**: Renders individual quiz questions with options
- **QuizSummary**: Shows final quiz results with statistics

### Hooks

- **useQuiz**: Custom hook managing quiz state and logic, including:
  - Data fetching
  - Score calculation
  - Answer submission
  - Quiz progress tracking

## Features in Detail

### Scoring System
- Positive marks for correct answers
- Negative marking for incorrect answers
- Real-time score updates
- Final accuracy calculation

### User Interface
- Progress indicator showing current question number
- Topic display for each question
- Clear option selection
- Responsive design for all screen sizes

### Quiz Summary
- Total score display
- Correct answers count
- Accuracy percentage
- Option to restart the quiz

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Rajput-vinay/Testline-Assignment.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

import { create } from 'zustand'
import { generateQuiz } from './services/questions';

export const useColorStore = create((set) => ({

    quiz: [],
    currentQuestion: null,
    questionIndex: 0,
    isComplete: false,

  startQuiz: () => set((state) => {
    const quiz = generateQuiz();
    return {
      ...state,
      quiz,
      currentQuestion: quiz[0],
      questionIndex: 0,
      isComplete: false
    }
  }),
  submitChoice: (choice) => set((state) => {
    const {currentQuestion} = state;
    if (currentQuestion.result !== undefined) {
      return state;
    }
    currentQuestion.result = choice === currentQuestion.answer;
    state.currentQuestion = {...currentQuestion};
    return {...state};
  }),
  goToNextQuestion: () => set((state) => {
    state.questionIndex++;
    state.currentQuestion = state.quiz[state.questionIndex];
    state.isComplete = !state.currentQuestion;
    return {...state};
  })
}))


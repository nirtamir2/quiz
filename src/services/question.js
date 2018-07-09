const questions = [
  {
    question: 'what is?',
    options: ['option 1', 'option 2', 'option 3', 'option 4'],
    rightAnswerIndex: 1
  },
  {
    question: 'what 2?',
    options: ['option 1 2', 'option 2 2', 'option 3 2', 'option 4 2'],
    rightAnswerIndex: 1
  },
  {
    question: 'what 3?',
    options: ['aaa', 'aasadasd 2', 'option 3', 'option 4'],
    rightAnswerIndex: 1
  },
  {
    question: 'what 4?',
    options: ['option 1 2', 'option 2 2', 'option 3 2', 'option 4 2'],
    rightAnswerIndex: 1
  }
]

export function getQuestion(index) {
  return questions[index - 1]
}

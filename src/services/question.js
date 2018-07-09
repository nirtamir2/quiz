const questions = [
  {
    question: 'what is?',
    body: 'body1?',
    options: ['option 1', 'option 2', 'option 3', 'option 4'],
    rightAnswerIndex: 1
  },
  {
    question: 'what 2?',
    body: 'body12?',
    options: ['option 1 2', 'option 2 2', 'option 3 2', 'option 4 2'],
    rightAnswerIndex: 1
  },
  {
    question: 'what 3?',
    body: 'body3?',
    options: ['aaa', 'aasadasd 2', 'option 3', 'option 4'],
    rightAnswerIndex: 1
  },
  {
    question: 'what 4?',
    body: 'body4?',
    options: ['option 1 2', 'option 2 2', 'option 3 2', 'option 4 2'],
    rightAnswerIndex: 1
  }
]

export function getQuestionCount() {
  return questions.length
}

export function getQuestion(index) {
  return questions[index]
}


export const QuestionCard = ({question, text}) => {
  return (
    <details className="bg-white p-4 rounded-md shadow-lg shadow-gray-400 border-2 border-l-green-500  ">
    <summary className="cursor-pointer font-bold outline-none">
      {question}
    </summary>
    <p className="mt-2 text-gray-700">
      {text}
    </p>
  </details>
  )
}

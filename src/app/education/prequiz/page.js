"use client";

const questions = [
    {
        question: "question 1",
        answers: [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ]
    },
    {
        question: "question 2",
        answers: [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ]
    },
    {
        question: "question 3",
        answers: [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ]
    },
    {
        question: "question 4",
        answers: [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ]
    },

]

export default function PreQuiz() {
    return(
        <div className="bg-[#00274C] font-montserrat flex flex-col items-center h-full overflow-y-scroll gap-10">
            <h1 className="text-white text-8xl">Pre-Quiz</h1>
            <h2 className="text-[#FFCB05] text-4xl"> Test your knowledge on solar energy! </h2>
            {/* questions */}
            <div className="bg-white h-fit w-200 flex items-center flex-col rounded-4xl gap-5 p-10">
                {questions.map((q) => (
                    <div key={q.question} className="flex flex-col gap-5">
                        <span className="text-[#000080] text-4xl font-bold border-5 px-30 py-5 border-solid border-[#FFCB05] rounded-4xl">{q.question}</span>
                        <div>
                            {q.answers.map((a, index) => (
                                <div key={index} className="text-lg">
                                <input 
                                    type="radio" 
                                    id={a} 
                                    name={q.question}   // group by question so only one answer can be selected
                                    value={a} 
                                />
                                <label htmlFor={a} className="ml-2">{a}</label>
                                </div>
                            ))}
                            </div>
                    </div>
                ))}
            <button className="bg-[#00274C] text-white py-4 px-5 rounded-4xl"> Submit </button>
            </div>
        </div>
    );
}
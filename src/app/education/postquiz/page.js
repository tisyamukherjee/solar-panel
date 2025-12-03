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
        <div className="font-montserrat flex flex-col h-full overflow-y-scroll gap-10">
            <h1 className="text-[#00274C] text-7xl text-center font-medium mt-5">Post-Quiz</h1>
            <h2 className="text-black text-4xl text-center"> Test your knowledge on solar energy! </h2>
            {/* questions */}
            <div className="bg-white h-fit w-full flex flex-col rounded-4xl gap-10 mb-15">
                {questions.map((q) => (
                    <div key={q.question} className="flex flex-col gap-5">
                        <span className="text-[#000080] text-2xl font-bold border-5 px-10 py-5 border-solid border-[#FFCB05] rounded-4xl">{q.question}</span>
                        <div>
                            {q.answers.map((a, index) => (
                                <div key={index} className="text-xl m-3">
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
            <button className="bg-[#00274C] text-white text-xl py-4 px-5 rounded-4xl hover:text-yellow-400 cursor-pointer"> Submit </button>
            </div>
        </div>
    );
}
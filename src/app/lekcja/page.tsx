"use client";
import { Status } from "@/components/lekcja/status";
import { TreesAndDucks } from "@/components/lekcja/treesAndDuck";
import { Check, X } from "lucide-react";
import { title } from "process";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
const data = {
  info: {
    title: "Sezamie, otwórz się! Bezpieczeństwo zaczyna się od Ciebie!",
    description: `W opowieści o Ali Babie hasło „Sezamie, otwórz się!” otworzyło skarbiec pełen skarbów. \n Dziś hasła są kluczami do naszych cyfrowych skarbów: e-maili, kont bankowych i systemów AA.\n\n Ale wyobraź sobie, że Twoim „kluczem” byłoby coś tak prostego jak „password123”. Komputer hakera mógłby zgadnąć to w milisekundy! Silne hasła to Twoja najlepsza linia obrony — upewnij się,\n że Twoje nie jest najsłabszym ogniwem.`,
  },

  questions: [
    {
      questionId: 3137821,
      title: "Dlaczego ważne jest używanie silnego hasła?",
      type: "multianswer",
      answers: [
        {
          id: 0,
          question: "Silne hasła utrudniają cyberprzestępcom ich odgadnięcie.",
          isCorrect: true,
        },
        {
          id: 0,
          question:
            "Silne hasła są bardziej złożone i trudniejsze do złamania.",
          isCorrect: true,
        },
        {
          id: 0,
          question:
            "Silne hasła są bardziej unikalne, co czyni Twoje konta bezpieczniejszymi.",
          isCorrect: true,
        },
        {
          id: 0,
          question: "Silne hasła są łatwiejsze do zapamiętania.",
          isCorrect: false,
        },
      ],
      explanation:
        "Silne hasło chroni Twoje konta, ponieważ jest trudniejsze \n do odgadnięcia i złamania. Unikalność dodaje dodatkową warstwę \n ochrony — jeśli jedno konto zostanie przejęte, pozostałe nadal \n są bezpieczne. Pamiętaj, że hasło to Twoja pierwsza linia obrony.",
    },
    {
      questionId: 321123111,
      title: "Co to jest phishing i jak się przed nim bronić?",
      type: "multianswer",
      answers: [
        {
          id: 0,
          question:
            "Phishing to metoda oszustwa, polegająca na podszywaniu się pod zaufaną instytucję w celu wyłudzenia danych.",
          isCorrect: true,
        },
        {
          id: 1,
          question:
            "Phishing polega na instalowaniu wirusów na komputerze ofiary.",
          isCorrect: false,
        },
        {
          id: 2,
          question:
            "Aby się przed nim bronić, należy uważać na podejrzane e-maile i nigdy nie podawać swoich danych osobowych.",
          isCorrect: true,
        },
        {
          id: 3,
          question: "Wszystkie e-maile pochodzące z banków to phishing.",
          isCorrect: false,
        },
      ],
      explanation:
        "Phishing to technika oszustwa, której celem jest wyłudzenie Twoich danych osobowych lub finansowych. Najlepszą obroną przed phishingiem jest ostrożność i unikanie klikania w podejrzane linki lub otwieranie nieznanych załączników.",
    },
    {
      questionId: 111111111,
      title: "Jakie są zalety korzystania z dwuskładnikowego uwierzytelniania?",
      type: "multianswer",
      answers: [
        {
          id: 0,
          question:
            "Dwuskładnikowe uwierzytelnianie zwiększa bezpieczeństwo konta, wymagając dodatkowego kroku oprócz hasła.",
          isCorrect: true,
        },
        {
          id: 1,
          question:
            "Dwuskładnikowe uwierzytelnianie sprawia, że zapominasz swoje hasło.",
          isCorrect: false,
        },
        {
          id: 2,
          question:
            "Dwuskładnikowe uwierzytelnianie chroni konta nawet w przypadku, gdy hasło zostanie skradzione.",
          isCorrect: true,
        },
        {
          id: 3,
          question:
            "Jest to skomplikowane i nie jest wartom stosowania w codziennym życiu.",
          isCorrect: false,
        },
      ],
      explanation:
        "Dwuskładnikowe uwierzytelnianie zapewnia dodatkową warstwę ochrony, ponieważ nawet jeśli Twoje hasło zostanie skradzione, atakujący nadal będzie musiał uzyskać dostęp do drugiego składnika, takiego jak kod z telefonu, aby się zalogować.",
    },
  ],
};

export default function Page() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <div className="flex-1  w-full bg-[#A5C7BF] h-full ">
      <div className="flex-1 mx-6 flex-col relative flex  h-full items-center">
        <Status current={currentStep} size={5} />

        <div className=" w-[900px] h-fit justify-center flex flex-col items-center mt-8 ">
          {currentStep == 1 && (
            <Intro info={data.info} setCurrentStep={setCurrentStep} />
          )}
          {currentStep != 1 && data.questions[currentStep - 2] && (
            <Question
              question={data.questions[currentStep - 2]}
              goNext={async () => setCurrentStep(currentStep + 1)}
            />
          )}
        </div>

        <TreesAndDucks duck={currentStep == 1} />
      </div>
    </div>
  );
}

const Intro = ({
  info,
  setCurrentStep,
}: {
  info: { title: string; description: string };
  setCurrentStep: Dispatch<SetStateAction<number>>;
}) => (
  <>
    <h2 className="text-3xl font-semibold text-center mb-8">{info.title}</h2>

    <p className="text-xl  text-center opacity-70 whitespace-pre-line">
      {info.description}
    </p>

    <div
      onClick={() => setCurrentStep(2)}
      className="rounded-full w-64 h-10 bg-[#024840] flex justify-center items-center mt-10  hover:scale-105 transition cursor-pointer"
    >
      <p className="text-sm text-white  text-center">zaczynajmy</p>
    </div>
  </>
);
type Answer = {
  id: number;
  question: string;
  isCorrect: boolean;
};

type Question = {
  questionId: number;
  title: string;
  type: string;
  answers: Answer[];
  explanation: string;
};

const Question = ({
  question,
  goNext,
}: {
  question: Question;
  goNext: () => void;
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // Toggle selection of answers
  const toggleAnswer = (index: number) => {
    if (showResult) return; // Prevent selecting after answers are checked
    setSelectedAnswers((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  // Check answers and store mistaken questions in session storage
  const checkAnswers = () => {
    const incorrectAnswers = question.answers
      .map((answer, index) => ({
        isIncorrect: !answer.isCorrect && selectedAnswers.includes(index),
        index,
      }))
      .filter((item) => item.isIncorrect);

    // Store mistaken question in session storage if the user made a mistake
    if (incorrectAnswers.length > 0) {
      let mistakenQuestions = JSON.parse(
        sessionStorage.getItem("mistakenQuestions") || "[]",
      );
      if (!mistakenQuestions.includes(question.questionId)) {
        mistakenQuestions.push(question.questionId);
        sessionStorage.setItem(
          "mistakenQuestions",
          JSON.stringify(mistakenQuestions),
        );
      }
    }

    const correctSelections = question.answers.filter(
      (answer, index) => answer.isCorrect && selectedAnswers.includes(index),
    );
    setScore(correctSelections.length);
    setShowResult(true);
  };

  // Clear answers and proceed to next question
  const clearAnswersAndNext = () => {
    setSelectedAnswers([]); // Clear selected answers
    setShowResult(false); // Reset result view
    setScore(0); // Reset score
    goNext(); // Proceed to next question
  };

  const getAnswerClass = (index: number) => {
    const allCorrect =
      selectedAnswers.length ===
        question.answers.filter((a) => a.isCorrect).length &&
      question.answers.every(
        (a, i) => a.isCorrect === selectedAnswers.includes(i),
      );

    if (!showResult) {
      return selectedAnswers.includes(index)
        ? "bg-[#D2F9EA] text-[#56C9AB] opacity-100"
        : "bg-neutral-300 opacity-70";
    }

    if (allCorrect) {
      return selectedAnswers.includes(index)
        ? "bg-[#D2F9EA] text-[#56C9AB] opacity-100"
        : "bg-neutral-300 opacity-70";
    }

    return question.answers[index].isCorrect
      ? "bg-[#D2F9EA] text-[#56C9AB]"
      : "bg-[#F8D3D3] text-[#E2615E]";
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-12">
        {question.title}
      </h2>
      <ul className="grid grid-cols-2 gap-5 items-stretch">
        {question.answers.map((answer, index) => (
          <div
            key={index}
            onClick={() => toggleAnswer(index)}
            className={`flex gap-4 w-full h-full transition p-5 rounded-xl cursor-pointer drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${getAnswerClass(index)}`}
          >
            <div className="w-6 h-6 flex items-center justify-center aspect-square rounded-sm bg-white text-black font-bold text-sm select-none">
              {selectedAnswers.includes(index) && !showResult && (
                <Check stroke="#56C9AB" size={16} />
              )}

              {showResult &&
                (question.answers.every(
                  (answer, idx) =>
                    (answer.isCorrect && selectedAnswers.includes(idx)) ||
                    (!answer.isCorrect && !selectedAnswers.includes(idx)),
                ) ? (
                  // If everything is correct, just show the original selected icons
                  selectedAnswers.includes(index) && (
                    <Check stroke="#56C9AB" size={16} />
                  )
                ) : // If the answers are wrong, show the Check or X
                question.answers[index].isCorrect ? (
                  <Check stroke="#56C9AB" size={16} />
                ) : (
                  <X stroke="#E2615E" size={16} />
                ))}
            </div>
            <label className="cursor-pointer font-semibold">
              {answer.question}
            </label>
          </div>
        ))}
      </ul>

      {!showResult && (
        <div
          onClick={checkAnswers}
          className="rounded-full w-64 h-10 border border-[#024840] flex justify-center items-center mt-10 hover:scale-105 transition cursor-pointer"
        >
          <p className="text-sm text-[#024840] text-center">sprawdź</p>
        </div>
      )}

      {showResult && (
        <>
          <div className="relative flex-1 flex w-full px-20 ">
            <Image
              src="/arrow_2.png"
              alt="Trees"
              height={130}
              width={130}
              className=" absolute top-2 right-60"
              draggable={false}
            />
            <div className="mt-28 space-y-2">
              {question.answers.every(
                (answer, idx) =>
                  (answer.isCorrect && selectedAnswers.includes(idx)) ||
                  (!answer.isCorrect && !selectedAnswers.includes(idx)),
              ) && <p className="text-3xl text-center mb-6 ">Perfekcyjnie!</p>}

              {question.explanation && (
                <p className=" whitespace-pre-line w-xl text-xl">
                  {question.explanation}
                </p>
              )}
            </div>
          </div>

          <div
            onClick={clearAnswersAndNext}
            className="absolute bottom-8 rounded-full w-64 h-10 bg-[#024840] flex justify-center items-center mt-10 hover:scale-105 transition cursor-pointer"
          >
            <p className="text-sm text-white text-center">kontynuuj</p>
          </div>
        </>
      )}
    </>
  );
};

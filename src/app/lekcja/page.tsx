"use client";
import { Status } from "@/components/lekcja/status";
import { TreesAndDucks } from "@/components/lekcja/treesAndDuck";
import { Check, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
const data = {
  info: {
    title: "Sezamie, otwórz się! Bezpieczeństwo zaczyna się od Ciebie!",
    description: `W opowieści o Ali Babie hasło "Sezamie, otwórz się!" otworzyło skarbiec pełen skarbów. \n Dziś hasła są kluczami do naszych cyfrowych skarbów: e-maili, kont bankowych i systemów AA.\n\n Ale wyobraź sobie, że Twoim "kluczem" byłoby coś tak prostego jak "password123". Komputer hakera mógłby zgadnąć to w milisekundy! Silne hasła to Twoja najlepsza linia obrony — upewnij się,\n że Twoje nie jest najsłabszym ogniwem.`,
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
    {
      questionId: 444444444,
      title: "Jakie są najlepsze praktyki tworzenia silnych haseł?",
      type: "multianswer",
      answers: [
        {
          id: 0,
          question:
            "Używanie kombinacji wielkich i małych liter, cyfr oraz znaków specjalnych.",
          isCorrect: true,
        },
        {
          id: 1,
          question:
            "Używanie tego samego hasła do wszystkich kont dla łatwiejszego zapamiętania.",
          isCorrect: false,
        },
        {
          id: 2,
          question: "Tworzenie haseł o długości minimum 12 znaków.",
          isCorrect: true,
        },
        {
          id: 3,
          question:
            "Używanie menedżera haseł do przechowywania i generowania silnych haseł.",
          isCorrect: true,
        },
      ],
      explanation:
        "Silne hasła są kluczowym elementem cyberbezpieczeństwa. Używanie różnorodnych znaków i odpowiedniej długości znacząco utrudnia złamanie hasła. Menedżer haseł pomaga w zarządzaniu wieloma różnymi, silnymi hasłami.",
    },
    {
      questionId: 555555555,
      title: "Jak rozpoznać próbę wyłudzenia danych (phishing)?",
      type: "multianswer",
      answers: [
        {
          id: 0,
          question: "Wiadomość zawiera błędy językowe lub literówki.",
          isCorrect: true,
        },
        {
          id: 1,
          question: "Nadawca używa oficjalnego logo firmy.",
          isCorrect: false,
        },
        {
          id: 2,
          question:
            "Wiadomość wywiera presję czasową lub grozi konsekwencjami.",
          isCorrect: true,
        },
        {
          id: 3,
          question:
            "Adres e-mail nadawcy różni się od oficjalnej domeny firmy.",
          isCorrect: true,
        },
      ],
      explanation:
        "Phishing często charakteryzuje się próbą wywołania poczucia pilności lub strachu. Zwracaj uwagę na detale takie jak adres nadawcy i jakość tekstu. Profesjonalne firmy nie żądają poufnych danych przez e-mail.",
    },
    {
      questionId: 666666666,
      title:
        "Jakie są bezpieczne praktyki korzystania z publicznych sieci Wi-Fi?",
      type: "multianswer",
      answers: [
        {
          id: 0,
          question:
            "Korzystanie z VPN podczas łączenia się z publiczną siecią.",
          isCorrect: true,
        },
        {
          id: 1,
          question:
            "Wykonywanie transakcji bankowych na publicznej sieci Wi-Fi.",
          isCorrect: false,
        },
        {
          id: 2,
          question: "Wyłączenie automatycznego łączenia się z sieciami Wi-Fi.",
          isCorrect: true,
        },
        {
          id: 3,
          question: "Upewnienie się, że strony używają protokołu HTTPS.",
          isCorrect: true,
        },
      ],
      explanation:
        "Publiczne sieci Wi-Fi mogą być niebezpieczne. VPN szyfruje Twój ruch internetowy, a HTTPS zapewnia bezpieczne połączenie ze stronami. Unikaj wykonywania wrażliwych operacji na publicznych sieciach.",
    },
    {
      questionId: 777777777,
      title: "Jak chronić swoje dane w mediach społecznościowych?",
      type: "multianswer",
      answers: [
        {
          id: 0,
          question:
            "Regularnie przeglądać i aktualizować ustawienia prywatności.",
          isCorrect: true,
        },
        {
          id: 1,
          question:
            "Akceptować wszystkie prośby o znajomość dla większej popularności.",
          isCorrect: false,
        },
        {
          id: 2,
          question:
            "Unikać udostępniania dokładnej lokalizacji i planów podróży.",
          isCorrect: true,
        },
        {
          id: 3,
          question: "Być ostrożnym przy udostępnianiu osobistych informacji.",
          isCorrect: true,
        },
      ],
      explanation:
        "Media społecznościowe mogą być źródłem zagrożeń dla prywatności. Regularna kontrola ustawień prywatności i świadome zarządzanie udostępnianymi informacjami pomoże chronić Twoje dane osobowe.",
    },
  ],
};

export default function Page() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [questionAttempts, setQuestionAttempts] = useState<
    Record<number, number>
  >({});
  const addPoints = (questionId: number, isFirstAttempt: boolean) => {
    const points = isFirstAttempt ? 100 : 40;
    setTotalPoints((prev) => prev + points);
  };

  return (
    <div className="flex-1  w-full bg-[#A5C7BF] h-full ">
      <Toaster />
      <div className="flex-1 mx-6 flex-col relative flex  h-full items-center">
        <Status current={currentStep} size={data.questions.length + 2} />

        <div className=" w-[900px] h-fit justify-center flex flex-col items-center mt-8 ">
          {currentStep == 1 && (
            <Intro info={data.info} setCurrentStep={setCurrentStep} />
          )}
          {currentStep != 1 &&
            currentStep <= data.questions.length + 1 &&
            data.questions[currentStep - 2] && (
              <Question
                question={data.questions[currentStep - 2]}
                goNext={async () => setCurrentStep(currentStep + 1)}
                onCorrectAnswer={(isFirstAttempt) =>
                  addPoints(
                    data.questions[currentStep - 2].questionId,
                    isFirstAttempt,
                  )
                }
                attempts={
                  questionAttempts[
                    data.questions[currentStep - 2].questionId
                  ] || 0
                }
                onAttempt={(attempts) =>
                  setQuestionAttempts((prev) => ({
                    ...prev,
                    [data.questions[currentStep - 2].questionId]: attempts,
                  }))
                }
              />
            )}
          {currentStep > data.questions.length + 1 && (
            <CompletionScreen totalPoints={totalPoints} />
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
  onCorrectAnswer,
  attempts,
  onAttempt,
}: {
  question: Question;
  goNext: () => void;
  onCorrectAnswer: (isFirstAttempt: boolean) => void;
  attempts: number;
  onAttempt: (attempts: number) => void;
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  console.log(score);
  const [isCorrect, setIsCorrect] = useState(false);

  // Toggle selection of answers
  const toggleAnswer = (index: number) => {
    if (showResult) return; // Prevent selecting after answers are checked
    setSelectedAnswers((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  // Check answers and store mistaken questions in session storage
  const checkAnswers = () => {
    // Prevent checking if no answer is selected
    if (selectedAnswers.length === 0) {
      toast.error("Wybierz przynajmniej jedną odpowiedź!");
      return;
    }

    const allCorrect = question.answers.every(
      (answer, index) =>
        (answer.isCorrect && selectedAnswers.includes(index)) ||
        (!answer.isCorrect && !selectedAnswers.includes(index)),
    );

    setIsCorrect(allCorrect);

    if (allCorrect) {
      onCorrectAnswer(attempts === 0);
      setShowResult(true);
    } else {
      const newAttempts = attempts + 1;
      onAttempt(newAttempts);

      if (newAttempts === 2) {
        setShowResult(true);
      } else {
        toast.error("Spróbuj jeszcze raz!");
        setSelectedAnswers([]);
      }
    }

    // Store mistaken question in session storage if the user made a mistake
    if (!allCorrect) {
      const mistakenQuestions = JSON.parse(
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
  };

  // Clear answers and proceed to next question
  const clearAnswersAndNext = () => {
    setSelectedAnswers([]); // Clear selected answers
    setShowResult(false); // Reset result view
    setScore(0); // Reset score
    goNext(); // Proceed to next question
  };

  const getAnswerClass = (index: number) => {
    if (!showResult) {
      return selectedAnswers.includes(index)
        ? "bg-[#D2F9EA] text-[#56C9AB] opacity-100"
        : "bg-neutral-300 opacity-70";
    }

    return question.answers[index].isCorrect
      ? "bg-[#D2F9EA] text-[#56C9AB]"
      : selectedAnswers.includes(index)
        ? "bg-[#F8D3D3] text-[#E2615E]"
        : "bg-neutral-300 opacity-70";
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
                (question.answers[index].isCorrect ? (
                  <Check stroke="#56C9AB" size={16} />
                ) : (
                  selectedAnswers.includes(index) && (
                    <X stroke="#E2615E" size={16} />
                  )
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
              {isCorrect ? (
                <p className="text-3xl text-center mb-6">
                  {attempts === 0 ? " Perfekcyjnie! " : "Super!"}
                </p>
              ) : (
                <p className="text-3xl text-center mb-6 text-[#E2615E]">
                  Niestety, nie udało się...
                </p>
              )}

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

const CompletionScreen = ({ totalPoints }: { totalPoints: number }) => {
  const getForestGrowth = (points: number) => {
    const maxPossiblePoints = data.questions.length * 100;
    const percentage = (points / maxPossiblePoints) * 100;

    if (percentage >= 90) return 500;
    if (percentage >= 80) return 400;
    if (percentage >= 70) return 300;
    if (percentage >= 50) return 200;
    return 60;
  };

  const forestGrowth = getForestGrowth(totalPoints);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Ukończyłeś\aś tygodniowe wyzwanie!
      </h2>
      <p className="text-xl text-center mb-12">Twój las się rozrastał!</p>
      <div className="text-6xl mt-8 font-bold  relative">
        250 524
        <span className="absolute -right-10 bottom-14 rotate-12 bg-[#378075] text-white text-xl px-5 py-3 rounded-lg">
          +{forestGrowth}
        </span>
      </div>
      <p className="text-xl text-center mb-4 opacity-70 mb-8">haktarów</p>

      <div
        onClick={() => (window.location.href = "/")}
        className="rounded-full w-64 h-10 bg-transparent border border-[#024840] flex justify-center items-center mt-4 hover:scale-105 transition cursor-pointer"
      >
        <p className="text-sm text-[#024840] text-center">
          kończymy na dzisiaj
        </p>
      </div>
    </div>
  );
};

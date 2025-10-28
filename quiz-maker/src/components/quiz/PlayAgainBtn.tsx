import { useQuizContext } from "@/hooks/useQuizContext";
import { Link } from "react-router";

const PlayAgainBtn = () => {
    const { resetQuiz } = useQuizContext();

    return <Link to={"/"} className="border border-neutral-300 p-2 rounded-xs hover:bg-neutral-300" onClick={resetQuiz}>Create a new quiz</Link>
};

export default PlayAgainBtn;
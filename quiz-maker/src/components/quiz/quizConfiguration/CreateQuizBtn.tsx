import { Button } from "@/components/ui/button"
import { useQuizContext } from "@/hooks/useQuizContext";

interface CreateQuizBtnProps {
    onClick: VoidFunction
}

const CreateQuizBtn = ({ onClick }: CreateQuizBtnProps) => {
    const { setSelectedAnswers } = useQuizContext();

    return <Button size="sm" variant="outline" onClick={() => { setSelectedAnswers({}); onClick() }} id="createBtn">Create</Button>
}

export default CreateQuizBtn;
import { Button } from "@/components/ui/button"

interface CreateQuizBtnProps {
    onClick: VoidFunction
}

const CreateQuizBtn = ({ onClick }: CreateQuizBtnProps) => {
    return <Button size="sm" variant="outline" onClick={onClick} id="createBtn">Create</Button>
}

export default CreateQuizBtn;
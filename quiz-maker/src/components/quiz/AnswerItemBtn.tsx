import { Button } from "@/components/ui/button";

interface AnswerItemProps {
    answerText: string;
    isSelected: boolean;
    isCorrect?: boolean;
    onSelect?: () => void;
    disabled?: boolean;
}

const unselectedClass = "hover:bg-green-700 hover:text-white bg-neutral-50 text-green-700 border border-green-700";
const selectedClass = "bg-green-700 text-white";
const wrongAnswerClass = "bg-red-700 text-white border border-red-700";

const AnswerItemBtn = ({ answerText, isSelected, isCorrect, onSelect,disabled}: AnswerItemProps) => {
    const getClassName = () => {
        if (isCorrect === false){
            return wrongAnswerClass;
        } else if (isSelected || isCorrect) {
            return selectedClass;
        }
        return unselectedClass;
    }
    return <Button disabled={disabled} key={answerText} onClick={onSelect} className={getClassName()}>{answerText}</Button>
}

export default AnswerItemBtn;
import { DIFFICULTY, type TriviaDifficulty } from "@/types/trivia/triviaDifficulty";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface SelectDifficultyProps {
    setSelectedDifficulty: React.Dispatch<React.SetStateAction<TriviaDifficulty | undefined>>
}

const SelectDifficulty = ({setSelectedDifficulty}: SelectDifficultyProps) => {
    return <Select>
        <SelectTrigger id="difficultySelect" className="w-[280px]">
            <SelectValue placeholder="Select a difficulty" />
        </SelectTrigger>
        <SelectContent>
            {Object.values(DIFFICULTY).map((difficulty) => (
                <SelectItem key={difficulty} value={difficulty} onClick={() => setSelectedDifficulty(difficulty)}>
                    {difficulty}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>;
};
export default SelectDifficulty;
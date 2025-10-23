import useGetCategories from "../../../hooks/useGetCategories";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "../../ui/select";
import type { TriviaCategory } from "@/types/trivia/triviaCategory";

interface SelectCategoryProps {
    setSelectedCategory: React.Dispatch<React.SetStateAction<TriviaCategory | undefined>>;
}

/**
 * Select the category of the quiz
 * @param param0 
 * @returns 
 */
const SelectCategory = ({ setSelectedCategory }: SelectCategoryProps) => {
    const { data: categories } = useGetCategories();

    return <Select>
        <SelectTrigger id="categorySelect" className="w-[280px]">
            <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
            {categories?.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()} onClick={() => setSelectedCategory(category)}>
                    {category.name}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>;



}

export default SelectCategory;
import { difficultyType } from "./PuyoTypes";

export const difficultyToNumericDifficulty =  (difficulty:difficultyType) => {
    return (difficulty === "Easy"
    ? 1.0
    : difficulty === "Medium"
    ? 2.0
    : difficulty === "Hard"
    ? 4.0
    : difficulty === "Puyo Must Die!"
    ? 8.0
    : 0);
}
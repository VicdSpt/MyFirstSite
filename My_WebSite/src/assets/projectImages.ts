// Import your project screenshots here
import wowSearch from "../images/img-projects/WowSearchCharac.png";
import darkMode from "../images/img-projects/Dark-Light-Mode.png"
import todoList from "../images/img-projects/TodoList.png"
import ageCalculator from  "../images/img-projects/AgeCalculator.png"
import guessNumber from "../images/img-projects/GuessNumber.png"
import memoryGame from "../images/img-projects/MemoryGame.png"
import snakeGame from "../images/img-projects/SnakeGame.png"

// Map project names to their preview images
export const projectImages: Record<string, string> = {
  // Add your projects like this:
  "wow-characters-search": wowSearch,
  "dark-light-mode": darkMode,
  "todo-list": todoList,
  "age-calculator": ageCalculator,
  "guess-number-game": guessNumber,
  "memory-game": memoryGame,
  "snake-game": snakeGame
};

// Fallback: generates a screenshot URL using thum.io if no custom image is set
export function getProjectImage(projectName: string): string {
  if (projectImages[projectName]) {
    return projectImages[projectName];
  }
  // Auto-generate screenshot from thum.io
  return `https://image.thum.io/get/https://${projectName}.vercel.app`;
}



 import {genID} from "./genID"
 import Password from "../assets/GameImg/Password.jpeg"
 import Color from "../assets/GameImg/Color.jpeg"
 import TrafficLight from "../assets/GameImg/TrafficLight.jpeg"
 import MatchingBoxes from "../assets/GameImg/MatchingBoxes.jpeg"
 import MinFinder from "../assets/GameImg/MinFinder.jpeg"
 import MemoryGrid from "../assets/GameImg/MemoryGrid.jpeg"
 import AlphaReflex from "../assets/GameImg/AlphaReflex.jpeg"
 import Sudoku from "../assets/GameImg/Sudoku.jpeg"
 import TicTac from "../assets/GameImg/TicTac.jpeg"
 import Memorise from "../assets/GameImg/memorise.jpeg"


 export const Games = [
    {
        id  : genID(),
        name: "Password",
        category: "logical thinking",
        howToPlay: "Guess 4 digit password.Every digit is different.Yellow code means you found one or more digit but its not in right place.Green code means yo have found one or more digit and its placement.",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
        img: Password
    },
    {
        id  : genID(),
        name: "Color",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
        category: "attention",
        howToPlay: "Compare the color of name and the color of circle.Select whether they match.If you give wrong answer 5 times,you'll lose.",
        img: Color
    },
     {
         id  : genID(),
         name: "Alpha Reflex",
         about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
         category: "speed",
         howToPlay: "Memorize cell positions.When cells disappears tap the hidden cells.İf you give wrong answer 4 times,you'll lose.",
         img: AlphaReflex
     },
    {
        id  : genID(),
        name: "Memory Grid",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
        category: "memory",
        howToPlay: "Memorize cell positions.When cells disappears tap the hidden cells.İf you give wrong answer 4 times,you'll lose.",
        img: MemoryGrid
    },
     {
         id  : genID(),
         name: "Traffic Light",
         about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
         category: "attention",
         howToPlay: "Remember the color position on the traffic light.Does the new position of the color match thee previous one?If you give wrong answer 5 times,you'll lose.",
         img: TrafficLight
     },
     {
         id  : genID(),
         name: "TicTac",
         about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
         category: "logical thinking",
         howToPlay: "Memorize cell positions.When cells disappears tap the hidden cells.İf you give wrong answer 4 times,you'll lose.",
         img: TicTac
     },
     {
         id  : genID(),
         name: "Matching Boxes",
         about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
         category: "logical thinking",
         howToPlay: "Memorize cell positions.When cells disappears tap the hidden cells.İf you give wrong answer 4 times,you'll lose.",
         img: MatchingBoxes
     },
     {
         id  : genID(),
         name: "Min Finder",
         about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
         category: "speed",
         howToPlay: "Memorize cell positions.When cells disappears tap the hidden cells.İf you give wrong answer 4 times,you'll lose.",
         img: MinFinder
     },
     {
         id  : genID(),
         name: "Sudoku",
         about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
         category: "logical thinking",
         howToPlay: "Memorize cell positions.When cells disappears tap the hidden cells.İf you give wrong answer 4 times,you'll lose.",
         img: Sudoku
     },
     {
         id  : genID(),
         name: "Memoriser",
         about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cumque delectus dignissimos dolores dolorum inventore iure magnam maxime minima .",
         category: "memory",
         howToPlay: "Memorize cell positions.When cells disappears tap the hidden cells.İf you give wrong answer 4 times,you'll lose.",
         img: Memorise
     },
];
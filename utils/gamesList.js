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
       name: "Guess the password",
       category: "logical thinking",
       howToPlay: "The object of the game is to guess the hidden four digit number. There are no repeated digits in the number. This number combination will be guessed by you via multiple attempts. Once you have guessed, a code will be shown that indicates how successful your guess was. It will tell you how many digits have you guessed on the same position, and how many digits have you guessed on a different position. Yellow code means you have found one or more digits but in the wrong place. Green code means you have found one or more digits and in the right place.",
       about: "This game will help you to look at the tasks more attentively and solve them more effectively. It will teach you to analyze information and improve short-term memory. In addition, the game aims at developing cognitive speed, abstract thinking, and verbal-logical thinking. Practicing this game will help to work better in multitasking, organize workflow and make decisions.",
       img: Password
   },
   {
       id  : genID(),
       name: "Color crash",
       about: "Color crash game helps to develop visual thinking and attention and challenge our ability to focus and concentrate on critical information. This game will contribute you a lot as attention and focus are critical skills which help us to absorb, process and memorize information. Besides, the game will enhance abstract thinking and improve logical memory. ",
       category: "attention",
       howToPlay: "In this game you need to compare the given name of the color and the color of the circle. You should make a decision whether they match or not. If you give a wrong answer for five times, you will lose. It may sounds a bit confusing but definitely you will enjoy it. Give a try now!",
       img: Color
   },
    {
        id  : genID(),
        name: "Alpha Reflex",
        about: 'This original game is for developing fast thinking techniques, instant perception and reflexes. Playing this game trains people to make the right decisions faster. Due to the deliberate and conscious transfer of attention from one view to another, there is a speed-up in switching attention and an increase in the speed of reaction. A player must "see the bigger picture" to solve this task.',
        category: "speed",
        howToPlay: "The game is about choosing 15 letters in alphabetical order in 30 seconds and every time you choose one letter position of all letters changes for making task more challenging. Can you choose the letters in a right order? Sounds easy? You've got 30 seconds!",
        img: AlphaReflex
    },
   {
       id  : genID(),
       name: "Memory Grid",
       about: "It's a great game to train and boost your memory in a playful way. Playing memory games can improve other brain functions, such as attention, concentration, and focus. This game give space to critical thinking and that helps players nurture their attention to detail. Moreover, Every time you start a new game, a random positioning of the colored squares on the grid ensures a different game, so you can replay endlessly!",
       category: "memory",
       howToPlay: "In this memory game, colored squares are displayed on a grid for a limited time during which the player try to memorize the location of each square. When the chronometer stops, the squares automatically disappear from the grid and are displayed below the empty grid. The player must then find the right locations of each square on the grid by clicking them. If you give wrong answer 4 times,you will lose.",
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
        name: "Tic Tac Toe",
        about: "Our version of this game is evolved a bit since the original version in ancient Egypt. This classic game contributes to developmental growth in various ways including understanding of probability, problem solving, spatial reasoning, hand-eye coordination, turn taking and strategizing. It prepares brain for more complex games because it helps you think of multiple things at once.",
        category: "logical thinking",
        howToPlay: "In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row. As the game is for two players, you need to think fast.",
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
        about: "Min Finder game promotes active attention, concentration, switching of attention and visual perception. The game increases the ability to concentrate, develops speed reading skills, and improves memory. Practicing this game at least one time in a day will help you analyze a large amount of information and quickly navigate in problematic situations.",
        category: "speed",
        howToPlay: "The instruction for the game is pretty simple. You need to find the lowest number among the given options in a limited time.",
        img: MinFinder
    },
    {
        id  : genID(),
        name: "Sudoku",
        about: "Sudoku is a logic-based, combinatorial number-placement puzzle. Solving Sudoku puzzles is a great way to preserve mental abilities and logical thinking skills. Playing this game boosts logical thinking, develops quick-thinking skills, and reduces overthinking and anxiety. Moreover, it improves concentration, and slows Alzheimer’s.",
        category: "logical thinking",
        howToPlay: "The goal of Sudoku is simple. Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square.",
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
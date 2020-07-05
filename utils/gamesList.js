 import {genID} from "./genID"
 export const Games = [
    {
        id  : genID(),
        name: "Password",
        about: "",
        category: "logical thinking",
        howToPlay: "Guess 4 digit password.Every digit is different.Yellow code means you found one or more digit but its not in right place.Green code means yo have found one or more digit and its placement.",
        img: ""
    },
    {
        id  : genID(),
        name: "Color",
        about: "",
        category: "attention",
        howToPlay: "Compare the color of name and the color of circle.Select whether they match.If you give wrong answer 5 times,you'll lose.",
        img: ""
    },
    {
        id  : genID(),
        name: "Traffic light",
        about: "",
        category: "attention",
        howToPlay: "Remember the color position on the traffic light.Does the new position of the color match thee previous one?If you give wrong answer 5 times,you'll lose.",
        img: ""
    },
    {
        id  : 2,
        name: "Memory Grid",
        about: "",
        category: "memory",
        howToPlay: "Memorize cell positions.When cells disappears tap the hidden cells.İf you give wrong answer 4 times,you'll lose.",
        img: ""
    },
]
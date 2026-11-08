export type Project = {
  title: string;
  description: string;
  category: string;     // type of project, for filtering
  tags: string[];       // tech stack used, for filtering
  repo?: string;
  demo?: string;
  image?: string;       // path inside /public, e.g. "/projects/project-one.png"
  featured?: boolean;   // true/false, to display on landing page
};

export const projects: Project[] = [
  {
    title: "Obliq",
    description: "A 4-month action game made with the Unity Game Engine. We hope to engage the player with interactive enemies, levels and mechanics with our game design experience. Implementation of state machines and AI pathing to create enemies that are intelligent. Using Unity to showcase particle effects for various elements in the game as well as component architecture for game objects. This top down shoot-em-up will keep the adrenaline flowing with fast-paced action designed to keep the player on their toes. Levels that players can progress through have a distinct neon aesthetic to them. Controlling a nimble and powerful square, run circles around enemies with different geometric shapes that each have their own unique behaviors, while discovering the true nature of Obliq. Are you ready? Square up.",
    category: "Game",
    tags: ["C#", "Unity"],
    image: "/projects/Obliq/obliq2_orig.jpg",
    featured: true,
  },
  {
    title: "One Final Chance",
    description: "A 2/3-week bullet-hell game made with GameMaker Studio 1.4. Made to showcase rapid prototyping skills using a game engine.",
    category: "Game",
    tags: ["GameMaker Studio", "Rapid Prototyping"],
    image: "/projects/One Final Chance/onefinalchanceboss_orig.png",
    featured: true,
  },
  {
    title: "Powercore",
    description: " A 2/3-week puzzle game made with C++ (DirectX). Made to showcase the implementation of physics in C++ (via the bouncing of the powercore). This game was even prepared for playtesting and showcasing during the Open House 2019!",
    category: "Game",
    tags: ["C++", "DirectX", "Physics"],
    image: "/projects/Powercore/powercoregameplay_orig.png",
    featured: false,
  },
  {
    title: "Shifter",
    description: " A 2/3-week bullet-hell game made with C++ (DirectX). Made to showcase the implementation of mathematics concepts in C++ (via the attack patterns of the boss).",
    category: "Game",
    tags: ["C++", "DirectX", "Mathematics"],
    image: "/projects/Shifter/shifterbossphase1_orig.png",
    featured: false,
  },
];
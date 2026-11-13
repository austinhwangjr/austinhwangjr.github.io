export type ProjectImage = {
  src: string;
  alt: string;
}

export type Project = {
  title: string;
  description: string;
  category: string;     // type of project, for filtering
  tags: string[];       // tags for each project
  repo?: string;
  demo?: string;
  images?: ProjectImage[];       // path inside /public, e.g. "/projects/project-one.png"
  featured?: boolean;   // true/false, to display on landing page
};

export const projects: Project[] = [
  {
    title: "Snookerina",
    description: "",
    category: "Game",
    tags: ["C++", "Custom Engine", "CSD3401", "CSD3451"],
    images: [
      { src: "/projects/Snookerina/snookerina_gameplay.png", alt: "Snookerina (Gameplay)" },
      { src: "/projects/Snookerina/snookerina_boss.png", alt: "Snookerina (Boss)" }
    ],
    featured: false,
  },
  {
    title: "Where's Your Ticket?",
    description: "",
    category: "Game",
    tags: ["C#", "Unity"],
    images: [
      { src: "/projects/Where's Your Ticket/wheres-your-ticket_ticket-page.png", alt: "Where's Your Ticket? (Ticket Page)" },
      { src: "/projects/Where's Your Ticket/wheres-your-ticket_remote-desktop.png", alt: "Where's Your Ticket? (Remote Desktop Mode)" },
    ],
    featured: false,
  },
  {
    title: "Head Hunter",
    description: "",
    category: "Game",
    tags: ["C++", "Custom Engine", "CSD2401", "CSD2451"],
    images: [
      { src: "/projects/Head Hunter/headhunter_editor_screenshot.png", alt: "Head Hunter (Editor)" },
      { src: "/projects/Head Hunter/headhunter_editor_screenshot-2.png", alt: "Head Hunter (Editor 2)" },
      { src: "/projects/Head Hunter/headhunter_gameplay_screenshot.png", alt: "Head Hunter (Gameplay)" },
      { src: "/projects/Head Hunter/headhunter_gameplay_screenshot-2.png", alt: "Head Hunter (Gameplay 2)" },
    ],
    featured: true,
  },
  {
    title: "Spatial Breach",
    description: "",
    category: "Game",
    tags: ["C", "Custom Engine", "CSD1401"],
    images: [
      { src: "/projects/Spatial Breach/spatial-breach_short-gameplay.jpg", alt: "Snookerina (Gameplay)" },
      { src: "/projects/Spatial Breach/spatial-breach_level-example.jpg", alt: "Snookerina (Example Level)" },
      { src: "/projects/Spatial Breach/spatial-breach_level-example-2.jpg", alt: "Snookerina (Example Level 2)" },
      { src: "/projects/Spatial Breach/spatial-breach_level-example-3.jpg", alt: "Snookerina (Example Level 3)" },
    ],
    featured: true,
  },
  {
    title: "Orbital",
    description: "",
    category: "Game",
    tags: ["C++", "Custom Engine", "CSD1451"],
    images: [
      { src: "/projects/Orbital/orbital_short-gameplay.jpg", alt: "Orbital (Gameplay)" },
      { src: "/projects/Orbital/orbital_debris-collection.jpg", alt: "Orbital (Debris Collection)" },
      { src: "/projects/Orbital/orbital_example-screenshot.jpg", alt: "Orbital (Screenshot)" },
    ],
    featured: false,
  },
  {
    title: "Obliq",
    description: "A 4-month action game made with the Unity Game Engine. We hope to engage the player with interactive enemies, levels and mechanics with our game design experience. Implementation of state machines and AI pathing to create enemies that are intelligent. Using Unity to showcase particle effects for various elements in the game as well as component architecture for game objects. This top down shoot-em-up will keep the adrenaline flowing with fast-paced action designed to keep the player on their toes. Levels that players can progress through have a distinct neon aesthetic to them. Controlling a nimble and powerful square, run circles around enemies with different geometric shapes that each have their own unique behaviors, while discovering the true nature of Obliq. Are you ready? Square up.",
    category: "Game",
    tags: ["C#", "Unity"],
    images: [
      { src: "/projects/Obliq/obliq-title_orig.png", alt: "Orbital (Title)" },
      { src: "/projects/Obliq/obliq2_orig.jpg", alt: "Orbital (Charger Enemy)" },
      { src: "/projects/Obliq/obliq3_orig.jpg", alt: "Orbital (Indicators)" },
      { src: "/projects/Obliq/obliq4_orig.jpg", alt: "Orbital (Portal)" },
      { src: "/projects/Obliq/obliq5_orig.jpg", alt: "Orbital (Dash)" },
    ],
    featured: false,
  },
  {
    title: "One Final Chance",
    description: "A 2/3-week bullet-hell game made with GameMaker Studio 1.4. Made to showcase rapid prototyping skills using a game engine.",
    category: "Game",
    tags: ["GameMaker Studio", "Rapid Prototyping"],
    images: [
      { src: "/projects/One Final Chance/onefinalchancetitle_orig.png", alt: "One Final Chance (Title)" },
      { src: "/projects/One Final Chance/onefinalchanceintro_orig.png", alt: "One Final Chance (Intro)" },
      { src: "/projects/One Final Chance/onefinalchancemine_orig.png", alt: "One Final Chance (Mine)" },
      { src: "/projects/One Final Chance/onefinalchancemineshot_orig.png", alt: "One Final Chance (Shooting the Mine)" },
      { src: "/projects/One Final Chance/onefinalchanceboss_orig.png", alt: "One Final Chance (Boss)" },
    ],
    featured: false,
  },
  {
    title: "Powercore",
    description: " A 2/3-week puzzle game made with C++ (DirectX). Made to showcase the implementation of physics in C++ (via the bouncing of the powercore). This game was even prepared for playtesting and showcasing during the Open House 2019!",
    category: "Game",
    tags: ["C++", "DirectX", "Physics"],
    images: [
      { src: "/projects/Powercore/powercoretitle_orig.png", alt: "Powercore (Title)" },
      { src: "/projects/Powercore/powercoretutorial_orig.png", alt: "Powercore (Tutorial)" },
      { src: "/projects/Powercore/powercoregameplay_orig.png", alt: "Powercore (Gameplay)" },
    ],
    featured: false,
  },
  {
    title: "Shifter",
    description: " A 2/3-week bullet-hell game made with C++ (DirectX). Made to showcase the implementation of mathematics concepts in C++ (via the attack patterns of the boss).",
    category: "Game",
    tags: ["C++", "DirectX", "Mathematics"],
    images: [
      { src: "/projects/Shifter/shiftertitle_orig.png", alt: "Shifter (Title)" },
      { src: "/projects/Shifter/shiftertutorial_orig.png", alt: "Shifter (Tutorial)" },
      { src: "/projects/Shifter/shifterbossphase1_orig.png", alt: "Shifter (Boss Phase 1)" },
    ],
    featured: false,
  },
];
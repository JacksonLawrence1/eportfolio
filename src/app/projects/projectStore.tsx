export const projects = [
  {
    title: "Warcraft Portfolio",
    id: "wp",
    date: "Jul. 2023 -> Sep. 2023",
    image: "/images/warcraft-portfolio.png",
    description:
      "Warcraft Portfolio aims to display useful character achievements for individuals in the game, World of Warcraft. This includes things such as their progress across different raids and their performance ranked against others. By using the Blizzard and WarcraftLogs API, Warcraft Portfolio pulls and displays data directly from the World of Warcraft database.",
    skills: ["Svelte", "SvelteKit", "JavaScript", "TailwindCSS", "APIs"],
    buttons: [
      {
        name: "Website",
        link: "https://warcraft-portfolio.vercel.app",
      },
      {
        name: "Source Code",
        link: "https://github.com/JacksonLawrence1/warcraft-portfolio",
      },
    ],
  },
  {
    title: "Sensitivity Converter",
    date: "Jul. 2023",
    id: "sc",
    image: "/images/sensitivity-converter.png",
    description:
      "A very simple tool designed to help players easily convert their mouse sensitivity values between games. This small project was mainly created to help me learn the basics of React and Tailwind, but I still use it when swapping sensitivity between games.",
    skills: ["JavaScript", "React", "NextJS", "TailwindCSS"],
    buttons: [
      {
        name: "Website",
        link: "https://jacksonlawrence1.github.io/sensitivity-converter/",
      },
      {
        name: "Source Code",
        link: "https://github.com/JacksonLawrence1/sensitivity-converter",
      },
    ],
  },
  {
    title: "Morbent Manor",
    id: "mm",
    date: "Jan. 2023 -> May. 2023",
    image: "/images/morbent-manor.png",
    description:
      "Developed as part of my final year thesis at university. Morbent Manor is a 2D roguelike where the player must traverse through a series of levels, gaining intriguing powerups modelled around MOBA style gameplay. I achieved a high first (80%) for this project, involving over 10,000+ lines of C# code, 224 unit tests and 35+ custom made 2D sprite sheets drawn and animated using Aseprite. Please contact me if you would like to see the source code or the dissertation itself as I am planning on releasing it publicly on Steam.",
    skills: ["C#", "Unity", "OOP", "Animation", "State Machines"],
    buttons: [
      {
        name: "View Demo",
        link: "https://jacksonl22.itch.io/morbent-manor",
      },
      {
        name: "Contact",
        link: "./contact",
      },
    ],
  },
  {
    title: "Kitchen Feud",
    id: "kf",
    date: "Jan. 2022 -> May. 2022",
    image: "/images/kf.jpg",
    description:
      "Working alongside 5 other students, we created a 2D multiplayer game in Unity as part of the degree's Year 3 games project. Kitchen Feud is a chaotic 3D cooking game where two teams compete to run the best resturant. I was mainly responsible for working on the online interaction in the game, through RPC calls using the Photon plugin. This included interactions such as rejoining after having disconnected, and syncing the game state across all players.",
    skills: ["C#", "Unity", "OOP", "Multiplayer", "RPCs"],
    buttons: [
      {
        name: "Play Here",
        link: "https://lokhei.github.io/kitchen_feud/",
      },
      {
        name: "Source Code",
        link: "https://github.com/KaliKaloo/Kitchen-Feud/tree/main",
      },
      {
        name: "Report",
        link: "https://github.com/KaliKaloo/Kitchen-Feud/blob/main/docs/KitchenFeudReport.pdf",
      },
    ],
  },
  {
    title: "C++ Rendering Engine",
    id: "re",
    date: "Oct. 2021 -> Dec. 2021",
    image: "/images/i18.bmp",
    description:
      "As part of coursework for the 3rd year Computer Science module, 'Computer Graphics', we were individually tasked with creating a rendering engine in C++ essentially from scratch. Using the SDL2 library, I created a rendering engine which could load in 3D models and textures, and render them to the screen. This incorporated techniques such as rasterization, ray tracing, Phong shading and texture mapping.",
    skills: ["C++", "SDL2"],
    buttons: [
      {
        name: "Source Code",
        link: "https://github.com/JacksonLawrence1/CG2021",
      },
    ],
  },
  {
    title: "Ale Trail",
    id: "at",
    date: "Oct. 2020 -> May. 2021",
    image: "/images/pilgrim.jpg",
    description:
      "Alongside 4 other students, we created a proof-of-concept Android App called Ale Trail which allowed users to track their drinking progress as they went on a pub crawl, potentially making them eligible to win prizes for their performance. I was responsible for working on backend functionality, including the database run on AWS, using MySQL. The app itself used SQL queries to fetch relevant data from the database. Since the product was bespokely designed, please contact me if you would like to see/hear further details.",
    skills: ["Kotlin", "AWS", "SQL", "MySQL", "Android"],
    buttons: [
      {
        name: "Contact",
        link: "./contact",
      },
    ],
  },
  {
    title: "Graph Calculator",
    id: "gc",
    date: "Sep. 2018 -> Mar. 2019",
    image: "/images/graph-calculator.png",
    description:
      "A primitive graph project I worked on during my A-Level studies for Computer Science. The tool was designed essentially as a limited clone of 'Desmos', allowing users to input a variety of different mathematical functions, and have it visualised as graphs on the screen. If you would like to see my full A-Level report, please contact me.",
    skills: ["Python", "Pygame", "OOP"],
    buttons: [
      {
        name: "Source Code",
        link: "https://github.com/JacksonLawrence1/GraphCalculatorProject",
      },
      {
        name: "Contact",
        link: "./contact",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(ResumeText);
}

const ResumeText = {
  da: {
    meta: {
      title: "Mathias Oxholm CV",
      description: "Mit personlige CV website",
    },
    experience: "Erfaring",
    education: "Uddanelse",
    projects: "Private projekter",
    hero: {
      title: `frontend udvikler med 3+ års erfaring i special${"\u00AD"}udvikling af websites, shops og apps.`,
      phone: "Telefon",
      age: "Alder",
      date: "31 / 05 / 1995",
      address: "Adresse",
      about: "Kort fortalt",
    },
    menu: {
      experience: "Erfaring",
      education: "Uddannelse",
      projects: "Projekter",
      skills: "Færdigheder",
    },
    jobs: {
      superego: {
        title: "Frontend",
        title2: "Developer",
        location: "Superego - Horsens",
        description:
          "Hos Superego er jeg lead developer på alle custom løsninger bygget i WordPress. PHP, HTML, SCSS, JS / jQuery, gsap, Github mm. er nogle af de teknologier jeg benytter mig af til dagligt.",
        timeFrame: "Apr 2021 - Nu",
        cases: ["leinvest.dk", "kommpas.dk", "zurface.dk"],
      },
      StepUp: {
        title: "Grafisk Ansvarlig",
        title2: "& Webudvikler",
        description: "",
        timeFrame: "",
        cases: ["circusgin.com", "rhetor.dk"],
      },
      StepUpIntern: {
        title: "Webudvikler",
        title2: "- Praktikant",
        description:
          "3 måneders virksomhedspraktik via Webudvikler uddannelsen. Oplæring i WordPress, PHP, LESS, jQuery mm.",
        timeFrame: "",
      },
      SecPro: {
        title: "Webudvikler",
        title2: "- Studiearbejde",
        description:
          "Projektbaseret studiejob under Multimediedesigneren. WordPress + WooCommerce shop management.",
        timeFrame: "",
      },
      GejstGruppen: {
        title: "Webudvikler",
        title2: "- Praktikant",
        description:
          "3 måneders virksomhedspraktik via Multimediedesigner uddannelsen. Udarbejdelse af skræddersyet spørgeskema i PHP.",
        timeFrame: "",
      },
    },
    educations: {
      Webdeveloper: {
        title: "International Webudvikling",
        title2: "- Formidling og design",
      },
      MultimedieDesigner: {
        title: `Multimedie${"\u00AD"}designer`,
        title2: "m. speciale i videoproduktion",
      },
      STX: {
        title: `STX Studenter${"\u00AD"}eksamen`,
      },
    },
    Readr: {
      text: "PWA / TWA bygget med React og Firebase. Læs mere om projektet på",
      text2: "eller gå direkte til webappen på",
      text3: "Login med Google eller Facebook er påkrævet.",
      button: "Åben i Google Play",
    },
    privateProjects: {
      weather: {
        title: "Vejr app",
        body: "Bygget i Next.js",
        href: "https://github.com/MathiasOxholm/weather-app",
      },
      tree: {
        title: "Linktree",
        body: "Bygget i Next.js",
        href: "https://github.com/MathiasOxholm/linktree",
      },
      calculator: {
        title: "Lommeregner",
        body: "Bygget i Next.js",
        href: "https://github.com/MathiasOxholm/calculator",
      },
      thisOrThat: {
        title: "This or that",
        body: "Bygget i React Native",
      },
    },
    skills: {
      title: "Færdigheder",
      languages: ["HTML5", "CSS3 / SCSS / LESS", "PHP", "JS / jQuery"],
      development: [
        "WordPress / ACF",
        "React / Next.js",
        "ReactNative / Expo",
        "NPM / Yarn",
        "Bootstrap 5",
        "GSAP",
      ],
      design: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
      personally: [
        "Ydmyg og nede på jorden",
        "Tech, gaming og Web3 nørd",
        "Altid frisk på en bajer",
        "Guitarist og musiknørd",
      ],
    },
  },
  en: {
    meta: {
      title: "Mathias Oxholm resume",
      description: "My personal resume website",
    },
    experience: "Experience",
    education: "Education",
    projects: "Private projects",
    hero: {
      title:
        "Frontend developer with 3+ years of experience in creating websites, shops and apps.",
      phone: "Phone",
      age: "Age",
      date: "05 / 31 / 1995",
      address: "Address",
      about: "About me",
    },
    menu: {
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
    },
    jobs: {
      superego: {
        title: "Frontend",
        title2: "Developer",
        location: "Superego - Horsens",
        description:
          "At Superego, I am the lead developer on all custom solutions built in WordPress. PHP, HTML, SCSS, JS / jQuery, gsap, Github and more are some of the technologies I use on a daily basis.",
        timeFrame: "Apr 2021 - Now",
        cases: ["leinvest.dk", "kommpas.dk", "zurface.dk"],
      },
      StepUp: {
        title: "Graphic designer ",
        title2: "& Web Developer",
        description: "",
        timeFrame: "",
        cases: ["circusgin.com", "rhetor.dk"],
      },
      StepUpIntern: {
        title: "Web Developer",
        title2: "- Internship",
        description:
          "3 months company internship via the Web Developer education.",
        timeFrame: "",
      },
      SecPro: {
        title: "Web Developer",
        title2: "- Student job",
        description:
          "Project-based study job under the Multimedia Designer. WordPress + WooCommerce shop management.",
        timeFrame: "",
      },
      GejstGruppen: {
        title: "Web Developer",
        title2: "- Internship",
        description:
          "3 months company internship via the Multimedia Designer education. Development of custom questionnaire in PHP.",
        timeFrame: "",
      },
    },
    educations: {
      Webdeveloper: {
        title: "International Web Development",
        title2: "- Communication and design",
      },
      MultimedieDesigner: {
        title: "Multimedia designer",
        title2: "Majoring in video production",
      },
      STX: {
        title: "STX Student Exam",
      },
    },
    Readr: {
      text: "PWA / TWA built with React and Firebase. Read more about the project at",
      text2: "or go directly to the web app at",
      text3: "Login with Google or Facebook is required.",
      button: "Open in Google Play",
    },
    privateProjects: {
      weather: {
        title: "Weather app",
        body: "Built in Next.js",
        href: "https://github.com/MathiasOxholm/weather-app",
      },
      tree: {
        title: "Linktree",
        body: "Built in Next.js",
        href: "https://github.com/MathiasOxholm/linktree",
      },
      calculator: {
        title: "Calculator",
        body: "Built in Next.js",
        href: "https://github.com/MathiasOxholm/calculator",
      },
      thisOrThat: {
        title: "This or that",
        body: "Built in React Native",
      },
    },
    skills: {
      title: "Skills",
      languages: ["HTML5", "CSS3 / SCSS / LESS", "PHP", "JS / jQuery"],
      development: [
        "WordPress / ACF",
        "React / Next.js",
        "ReactNative / Expo",
        "NPM / Yarn",
        "Bootstrap 5",
        "GSAP",
      ],
      design: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
      personally: [
        "Humble and down to earth",
        "Tech, gaming and Web3 nerd",
        "Always down for a beer",
        "Guitarist and music nerd",
      ],
    },
  },
};

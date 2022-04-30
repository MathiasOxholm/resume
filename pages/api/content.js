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
    skillHeading: "Færdigheder",
    hero: {
      title: `frontend udvikler med 3+ års erfaring i special${"\u00AD"}udvikling af websites, shops og apps.`,
      phone: "Telefon",
      age: "Alder",
      date: "31 / 05 / 1995",
      address: "Adresse",
      location: "6000 Kolding",
      about: "Kort fortalt",
      description:
        "Uddannet webudvikler med speciale i Wordpress og UI / UX. Jeg arbejder pt som Frontend udvikler hos Superego i Horsens, hvor jeg både sidder med specialudvikling af hjemmesider samt kundekontakt og fungerer som sparringspartner ift. designprocesser.",
      description2:
        "Jeg bevæger mig altid fremad, og søger derfor nye udfordringer, da jeg personligt er midt i en overgangsperiode fra PHP til JS. Mere specifikt udforsker jeg React / Next.js, og selvom jeg ikke har opgivet mine spidskompetencer, finder jeg det lige nu betydeligt sjovere end hverdagens opgaver inden for PHP og jQuery. Jeg glæder mig til at finde en arbejdsplads, hvor jeg kan udvikle mig yderligere og sparre med mine kollegaer om fede projekter. Jeg er bosat i Kolding men har bil og er desuden villig til at flytte for det rette job.",
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
        location: "StepUp Media ApS - Kolding",
        description:
          "Udover min praktik, var jeg fuldtidsansat i ca. 2 år og siden fastansættelsen fik jeg lavet over 70 unikke website og webshop designs i Adobe XD. Derudover har jeg selv kodet 24 af siderne op i WordPress.",
        timeFrame: "Feb 2019 - Mar 2021",
        cases: ["circusgin.com", "rhetor.dk"],
      },
      StepUpIntern: {
        title: "Webudvikler",
        title2: "- Praktikant",
        location: "StepUp Media ApS - Kolding",
        description:
          "3 måneders virksomhedspraktik via Webudvikler uddannelsen. Oplæring i WordPress, PHP, LESS, jQuery mm.",
        timeFrame: "Aug 2018 - Okt 2018",
      },
      SecPro: {
        title: "Webudvikler",
        title2: "- Studiearbejde",
        location: "SecPro Sikring A/S - Kolding",
        description:
          "Projektbaseret studiejob under Multimediedesigneren. WordPress + WooCommerce shop management.",
        timeFrame: "Aug 2017 - Nov 2017",
      },
      GejstGruppen: {
        title: "Webudvikler",
        title2: "- Praktikant",
        location: "GejstGruppen ApS - Kolding",
        description:
          "3 måneders virksomhedspraktik via Multimediedesigner uddannelsen. Udarbejdelse af skræddersyet spørgeskema i PHP.",
        timeFrame: "Jan 2017 - Apr 2017",
      },
    },
    educations: {
      Webdeveloper: {
        title: "International Webudvikling",
        title2: "- Formidling og design",
        location: "IBA Erhvervsakademi Kolding",
        timeFrame: "Aug 2017 - Okt 2019",
      },
      MultimedieDesigner: {
        title: `Multimedie${"\u00AD"}designer`,
        title2: "m. speciale i videoproduktion",
        location: "IBA Erhvervsakademi Kolding",
        timeFrame: "Aug 2015 - Nov 2017",
      },
      STX: {
        title: `STX Studenter${"\u00AD"}eksamen`,
        location: "Munkensdam gymnasium - Kolding",
        timeFrame: "Aug 2011 - Jun 2014",
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
      languages: {
        title: "Sprog",
        content: ["HTML5", "CSS3 / SCSS / LESS", "PHP", "JS / jQuery"],
      },
      development: {
        title: "Udvikling",
        content: [
          "WordPress / ACF",
          "React / Next.js",
          "React Native / Expo",
          "NPM / Yarn",
          "Bootstrap 5",
          "GSAP",
          "Firebase",
          "GitHub",
        ],
      },
      design: {
        title: "Design",
        content: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
      },
      personally: {
        title: "Personligt",
        content: [
          "Ydmyg og nede på jorden",
          "Tech, gaming og Web3 nørd",
          "Altid frisk på en bajer",
          "Guitarist og musiknørd",
        ],
      },
    },
    footer: {
      link: "Se koden på Github",
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
    skillHeading: "Skills",
    hero: {
      title:
        "Frontend developer with 3+ years of experience in creating websites, shops and apps.",
      phone: "Phone",
      age: "Age",
      date: "05 / 31 / 1995",
      address: "Address",
      location: "Kolding, Denmark",
      about: "About me",
      description:
        "Uddannet webudvikler med speciale i Wordpress og UI / UX. Jeg arbejder pt som Frontend udvikler hos Superego i Horsens, hvor jeg både sidder med specialudvikling af hjemmesider samt kundekontakt og fungerer som sparringspartner ift. designprocesser.",
      description2:
        "Jeg bevæger mig altid fremad, og søger derfor nye udfordringer, da jeg personligt er midt i en overgangsperiode fra PHP til JS. Mere specifikt udforsker jeg React / Next.js, og selvom jeg ikke har opgivet mine spidskompetencer, finder jeg det lige nu betydeligt sjovere end hverdagens opgaver inden for PHP og jQuery. Jeg glæder mig til at finde en arbejdsplads, hvor jeg kan udvikle mig yderligere og sparre med mine kollegaer om fede projekter. Jeg er bosat i Kolding men har bil og er desuden villig til at flytte for det rette job.",
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
        location: "Superego - Horsens, Denmark",
        description:
          "At Superego, I am the lead developer on all custom solutions built in WordPress. PHP, HTML, SCSS, JS / jQuery, gsap, Github and more are some of the technologies I use on a daily basis.",
        timeFrame: "Apr 2021 - Now",
        cases: ["leinvest.dk", "kommpas.dk", "zurface.dk"],
      },
      StepUp: {
        title: "Graphic designer ",
        title2: "& Web Developer",
        location: "StepUp Media ApS - Kolding, Denmark",
        description:
          "Udover min praktik, var jeg fuldtidsansat i ca. 2 år og siden fastansættelsen fik jeg lavet over 70 unikke website og webshop designs i Adobe XD. Derudover har jeg selv kodet 24 af siderne op i WordPress.",
        timeFrame: "Feb 2019 - Mar 2021",
        cases: ["circusgin.com", "rhetor.dk"],
      },
      StepUpIntern: {
        title: "Web Developer",
        title2: "- Internship",
        location: "StepUp Media ApS - Kolding, Denmark",
        description:
          "3 months company internship via the Web Developer education.",
        timeFrame: "Aug 2018 - Oct 2018",
      },
      SecPro: {
        title: "Web Developer",
        title2: "- Student job",
        location: "SecPro Sikring A/S - Kolding, Denmark",
        description:
          "Project-based study job under the Multimedia Designer. WordPress + WooCommerce shop management.",
        timeFrame: "Aug 2017 - Nov 2017",
      },
      GejstGruppen: {
        title: "Web Developer",
        title2: "- Internship",
        location: "GejstGruppen ApS - Kolding, Denmark",
        description:
          "3 months company internship via the Multimedia Designer education. Development of custom questionnaire in PHP.",
        timeFrame: "Jan 2017 - Apr 2017",
      },
    },
    educations: {
      Webdeveloper: {
        title: "International Web Development",
        title2: "- Communication and design",
        location: "International Business Academy - Kolding, Denmark",
        timeFrame: "Aug 2017 - Oct 2019",
      },
      MultimedieDesigner: {
        title: "Multimedia designer",
        title2: "Majoring in video production",
        location: "International Business Academy - Kolding, Denmark",
        timeFrame: "Aug 2015 - Nov 2017",
      },
      STX: {
        title: "STX Student Exam",
        location: "Munkensdam gymnasium - Kolding, Denmark",
        timeFrame: "Aug 2011 - Jun 2014",
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
      languages: {
        title: "Languages",
        content: ["HTML5", "CSS3 / SCSS / LESS", "PHP", "JS / jQuery"],
      },
      development: {
        title: "Development",
        content: [
          "WordPress / ACF",
          "React / Next.js",
          "React Native / Expo",
          "NPM / Yarn",
          "Bootstrap 5",
          "GSAP",
          "Firebase",
          "GitHub",
        ],
      },
      design: {
        title: "Design",
        content: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
      },
      personally: {
        title: "Personally",
        content: [
          "Humble and down to earth",
          "Tech, gaming and Web3 nerd",
          "Always down for a beer",
          "Guitarist and music nerd",
        ],
      },
    },
    footer: {
      link: "Get the code from Github",
    },
  },
};

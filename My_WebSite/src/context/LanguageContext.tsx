import { createContext, useContext, useState, type ReactNode } from "react";

const translations = {
  en: {
    header: {
      downloadCV: "Download my CV",
      nav: { home: "Home", portfolio: "Portfolio", resume: "Resume", contact: "Contact" },
    },
    hero: {
      subtitle: "Fullstack Engineer in Brussels",
      typingTexts: [
        "I like Solving Problems",
        "If it's Easy, it's not Fun",
        "Debugging is Part of the Fun",
        "Work is a Pleasure",
        "Building Fun Stuff for People",
        "Learning Every Day",
      ],
      bioPre: "Currently training as a Full Stack Developer at",
      bioMid: ", I am driven by a strong passion for",
      bioBold1: "problem solving",
      bioAnd: " and",
      bioBold2: " debugging",
      bioPost1: " complex challenges to build reliable, high-quality web applications.",
      bioP2: "I enjoy transforming ideas into efficient, user-focused solutions while working with modern technologies and continuously learning to improve my knowledge and technical skills. I also value teamwork and collaboration, enjoying the opportunity to build applications and projects with others while exchanging knowledge and staying up to date with the latest technology trends.",
      bioP3: "Highly motivated and eager to grow, I continuously explore new tools and frameworks to strengthen my skills and expand my technical expertise.",
      discoverProjects: "Discover my projects",
    },
    about: {
      title: "About Me",
      bioPre: "After working almost 6 years as a customer support specialist, in different sectors and companies, I decided to change my career path to become a Full Stack Developer. To build a robust technical foundation, I completed two intensive training programs at",
      bioMid: "and more recently at",
      moreAboutMe: "More About Me",
    },
    skills: {
      title: "Skills",
      hardSkills: "HARD SKILLS",
      softSkills: "SOFT SKILLS",
      languages: "LANGUAGES",
      softSkillsList: [
        "Problem Solver", "Dynamic", "Communication", "Team Work",
        "Open Minded", "Organized & Structured", "Time Management",
        "Autonomy", "Fast learner", "Stress Resistant",
      ],
      languagesList: ["French - Native", "English - Fluent"],
    },
    contactSection: {
      title: "Want to work together?",
      subtitle: "Let's build something great and fun!",
      button: "Contact Me",
    },
    portfolio: {
      title: "My Portfolio",
      descriptionPre: "Discover some of my projects, if you wish to see all of them",
      descriptionLinkText: "please visit my",
      loading: "Loading projects...",
      noProjects: "No projects found.",
    },
    resume: {
      title: "My Professional Journey",
      swipeHint: "👆 Swipe or drag to explore",
      today: "Today",
      currentlyAt: "Currently at Wild Code School",
      education: "Education",
      workExperience: "Work Experience",
      downloadCV: "Download My CV",
      to: "to",
      locale: "en-US",
    },
    moreAboutMe: {
      title: "More About Me",
      subtitle: "Stuff I do and like when I'm not coding",
      hobbies: [
        { title: "Coding", description: "I love building new projects or apps and trying new technologies to apply to them" },
        { title: "Gaming", description: "Passionate about video games since forever, my favorite genres are action RPGs" },
        { title: "Walking my Dog", description: "Probably my favorite thing to do, spending quality time with my dog" },
        { title: "Reading", description: "I love books. I love reading about everything and nothing. The latest book I've started is: The Witcher series" },
        { title: "Motorcycling", description: "I have been a biker for the last 5 years, traveling around Europe with my Royal Enfield Himalayan" },
        { title: "Boxing", description: "I discovered boxing during COVID, and now I practice twice a week" },
        { title: "Skiing", description: "My all-time favorite sport" },
        { title: "Horse Riding", description: "Grew up in the countryside, surrounded by horses and nature" },
      ],
    },
    contactPage: {
      title: "Get in touch",
      description: "If you would like to connect or discuss potential opportunities, feel free to get in touch. I would be happy to chat and explore how I can add value to your team.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone number",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    footer: { role: "Full Stack Developer" },
  },
  fr: {
    header: {
      downloadCV: "Télécharger mon CV",
      nav: { home: "Accueil", portfolio: "Portfolio", resume: "Parcours", contact: "Contact" },
    },
    hero: {
      subtitle: "Ingénieur Fullstack à Bruxelles",
      typingTexts: [
        "J'aime résoudre des problèmes",
        "Si c'est facile, c'est moins fun",
        "Le débogage fait partie du fun",
        "Le travail est un plaisir",
        "Créer des choses pour les gens",
        "Apprendre chaque jour",
      ],
      bioPre: "Actuellement en formation Développeur Full Stack à la",
      bioMid: ", je suis animé par une forte passion pour la",
      bioBold1: "résolution de problèmes",
      bioAnd: " et le",
      bioBold2: " débogage",
      bioPost1: " de défis complexes afin de créer des applications web fiables et de haute qualité.",
      bioP2: "J'aime transformer des idées en solutions efficaces et centrées sur l'utilisateur, en travaillant avec des technologies modernes et en apprenant continuellement pour améliorer mes connaissances et compétences techniques. Je valorise également le travail d'équipe et la collaboration, en appréciant l'opportunité de construire des applications et des projets avec d'autres tout en échangeant des connaissances et en restant à jour avec les dernières tendances technologiques.",
      bioP3: "Très motivé et désireux de progresser, j'explore en permanence de nouveaux outils et frameworks pour renforcer mes compétences et élargir mon expertise technique.",
      discoverProjects: "Découvrir mes projets",
    },
    about: {
      title: "À propos de moi",
      bioPre: "Après avoir travaillé près de 6 ans en tant que spécialiste du support client, dans différents secteurs et entreprises, j'ai décidé de changer de carrière pour devenir Développeur Full Stack. Pour construire une solide base technique, j'ai suivi deux formations intensives chez",
      bioMid: "et plus récemment à la",
      moreAboutMe: "En savoir plus",
    },
    skills: {
      title: "Compétences",
      hardSkills: "COMPÉTENCES TECHNIQUES",
      softSkills: "COMPÉTENCES HUMAINES",
      languages: "LANGUES",
      softSkillsList: [
        "Résolution de problèmes", "Dynamique", "Communication", "Travail d'équipe",
        "Ouvert d'esprit", "Organisé & Structuré", "Gestion du temps",
        "Autonomie", "Apprentissage rapide", "Résistant au stress",
      ],
      languagesList: ["Français - Natif", "Anglais - Courant"],
    },
    contactSection: {
      title: "Envie de travailler ensemble ?",
      subtitle: "Construisons quelque chose de fun !",
      button: "Me contacter",
    },
    portfolio: {
      title: "Mon Portfolio",
      descriptionPre: "Découvrez quelques-uns de mes projets, si vous souhaitez les voir tous",
      descriptionLinkText: "visitez mon",
      loading: "Chargement des projets...",
      noProjects: "Aucun projet trouvé.",
    },
    resume: {
      title: "Mon parcours professionnel",
      swipeHint: "👆 Glissez ou faites défiler pour explorer",
      today: "Aujourd'hui",
      currentlyAt: "Actuellement à la Wild Code School",
      education: "Formation",
      workExperience: "Expérience professionnelle",
      downloadCV: "Télécharger mon CV",
      to: "au",
      locale: "fr-FR",
    },
    moreAboutMe: {
      title: "En savoir plus sur moi",
      subtitle: "Ce que j'aime faire quand je ne code pas",
      hobbies: [
        { title: "Coding", description: "J'adore créer de nouveaux projets ou applications et tester de nouvelles technologies" },
        { title: "Gaming", description: "Passionné de jeux vidéo depuis toujours, mes genres préférés sont les RPG d'action" },
        { title: "Promener mon chien", description: "Probablement ma chose préférée à faire, passer du temps de qualité avec mon chien" },
        { title: "Lecture", description: "J'adore les livres. J'aime lire sur tout et sur rien. Le dernier livre que j'ai commencé est : La saga du Sorceleur" },
        { title: "Moto", description: "Je suis motard depuis 5 ans, voyageant à travers l'Europe avec ma Royal Enfield Himalayan" },
        { title: "Boxe", description: "J'ai découvert la boxe pendant le COVID, et maintenant je pratique deux fois par semaine" },
        { title: "Ski", description: "Mon sport préféré de tous les temps" },
        { title: "Équitation", description: "J'ai grandi à la campagne, entouré de chevaux et de nature" },
      ],
    },
    contactPage: {
      title: "Me contacter",
      description: "Si vous souhaitez vous connecter ou discuter d'opportunités potentielles, n'hésitez pas à me contacter. Je serais heureux de discuter et d'explorer comment je peux apporter de la valeur à votre équipe.",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "Numéro de téléphone",
      message: "Message",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Échec de l'envoi. Veuillez réessayer.",
    },
    footer: { role: "Développeur Full Stack" },
  },
};

type Lang = "en" | "fr";
type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "fr" ? "fr" : "en";
  });

  const toggleLanguage = () => {
    const next: Lang = lang === "en" ? "fr" : "en";
    localStorage.setItem("lang", next);
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] as Translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

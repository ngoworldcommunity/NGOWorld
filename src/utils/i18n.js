import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "connect_ngo": "We connect NGOs",
      "charities_and_you": "Associations caritatives et vous.",
      "we_connect_ngo": " We connect NGOs, charities and you.",
      'welcome_to_ngo_world': "Welcome to NgoWorld, a platform to connect and support NGOs, charities and you to build a better tomorrow.",
      'platform_for_ngos': "A platform for NGOs, charities, clubs and you to collaborate, grow and build a better tomorrow.",
      'explore_our_clubs': "Explore our clubs",
      'sign_up_today': "Sign up Today !",
      "trusted_by_users": "Trusted by {{count}}+ users.",
      "type_to_begin_search": "Type to begin search, or use the filters",
      "filters": "Filters",
      "your_dashboard": "Your Dashboard",
      "followers": "Followers",
      "hosted_events": "Hosted Events",
      "edit_profile": "Edit Profile",
      "real_time_analytics": "Real time Analytics",
      "coming_soon": "Coming Soon",
      "create_event": "Create An Event",
      "the_food_marathon": "The Food Marathon 2025 is a dynamic NGO event uniting communities to fight hunger and promote food security. Participants will engage in exciting activities while contributing to sustainable food distribution efforts. Together, we can bridge the gap between surplus and need, creating a hunger-free future.",
      "participated": "Participated",
      "godlike_club": "GodLike Club",
      "food_marathon": "Food Marathon, {{year}}",
      "featured": "Featured",
      "launching_soon": "Launching Soon !",
      "we_will_let_you_know": "We will let you know as soon as we launch our",
      "sign_to_get_notified": "Sign up to get notified",
      "events": "Events",
      "quick_starts": "QUICK STARTS",
      "resources": "RESOURCES",
      "policies": "POLICIES",
      "loading": "Loading...",
      // footer
      "trending_events": "Trending Events",
      "ngos_near_you": "NGOs near you",
      "login_signup": "Login / Signup",
      "setup_frontend": "Setup Frontend",
      "setup_backend": "Setup Backend",
      "docker_resources": "Docker Resources",
      "terms_of_use": "Terms of Use",
      "privacy_policy": "Privacy Policy",
      "cookies_policy": "Cookies Policy",
      // navbar
      "home": "Home",
      "clubs": "Clubs",
      "trending": "Trending",
      "shops": "Shops",
      "profile": "profile",
      "sign_up": "Sign Up",
      "logout": "Logout",
      "settings": "Settings",
      "your_events": "Your Events",
      "support": "Support",
      // sign in
      "login": "Login",
      "welcome_to_the_club": "Welcome to the Club's login page. Provide all the needed credentials and join us",
      "password": "Password",
      "continue_with_google": "Continue with Google",
      "sign_up_to_ngo_world": "Sign Up to NgoWorld",
      "forgot_password": "Forgot Password",
      // sign up
      "welcome_to_the_club_sign_up": "Welcome to the Club's registration page. Provide all the needed credentials and join us.",
      "account_type": "Account Type",
      "full_name": "Full Name",
      "organization_name": "Organization Name",
      "or": "or",
      "already_have_an_account": "Already have an account? Login",
      "organization": "Organization",
      "individual": "Individual",
      "register_now": "Register Now",
      "sponsor": "Sponsor",
      "subscribe": "Subscribe",
    }
  },
  fr: {
    translation: {
      "connect_ngo": "Nous connectons les ONG",
      "charities_and_you": "Associations caritatives et vous.",
      "we_connect_ngo": "Nous connectons les ONG, les associations caritatives et vous.",
      "welcome_to_ngo_world": "Bienvenue sur NgoWorld, une plateforme pour connecter et soutenir les ONG, les associations caritatives et vous afin de construire un avenir meilleur.",
      "platform_for_ngos": "Une plateforme pour les ONG, les associations caritatives, les clubs et vous, afin de collaborer, grandir et construire un avenir meilleur.",
      "explore_our_clubs": "Découvrez nos clubs",
      "sign_up_today": "Inscrivez-vous dès aujourd'hui !",
      "trusted_by_users": "Fait confiance par {{count}}+ utilisateurs.",
      "type_to_begin_search": "Tapez pour commencer votre recherche ou utilisez les filtres",
      "filters": "Filtres",
      "your_dashboard": "Votre tableau de bord",
      "followers": "Abonnés",
      "hosted_events": "Événements organisés",
      "edit_profile": "Modifier le profil",
      "real_time_analytics": "Analyse en temps réel",
      "coming_soon": "Bientôt disponible",
      "create_event": "Créer un événement",
      "the_food_marathon": "Le Food Marathon 2025 est un événement dynamique réunissant des communautés pour lutter contre la faim et promouvoir la sécurité alimentaire. Les participants prendront part à des activités passionnantes tout en contribuant à des efforts durables de distribution alimentaire. Ensemble, nous pouvons combler l'écart entre surplus et besoin, créant ainsi un avenir sans faim.",
      "participated": "participé",
      "godlike_club": "Club GodLike",
      "food_marathon": "Marathon gastronomique, {{year}}",
      "featured": "la une",
      "launching_soon": "Lancement imminent !",
      "we_will_let_you_know": "Nous vous informerons dès que nous lancerons notre",
      "sign_to_get_notified": "Inscrivez-vous pour être informé",
      "events": "Evénements",
      "quick_starts": "DÉMARRAGES RAPIDES",
      "resources": "RESSOURCES",
      "policies": "POLITIQUES",
      // footer
      "trending_events": "Événements tendance",
      "ngos_near_you": "ONG près de chez vous",
      "login_signup": "Connexion / Inscription",
      "setup_frontend": "Configuration du Frontend",
      "setup_backend": "Configuration du Backend",
      "docker_resources": "Ressources Docker",
      "terms_of_use": "Conditions d'utilisation",
      "privacy_policy": "Politique de confidentialité",
      "cookies_policy": "Politique des cookies",
      // navbar
      "home": "Accueil",
      "clubs": "Clubs",
      "trending": "Tendance",
      "shops": "Magasins",
      "profile": "profil",
      "sign_up": "S'inscrire",
      "logout": "Se déconnecter",
      "settings": "Paramètres",
      "your_events": "Vos événements",
      "support": "Support",
      // sign in
      "login": "Connexion",
      "welcome_to_the_club": "Bienvenue sur la page de connexion du Club. Fournissez toutes les informations nécessaires et rejoignez-nous",
      "password": "Mot de passe",
      "continue_with_google": "Continuer avec Google",
      "sign_up_to_ngo_world": "Inscrivez-vous sur NgoWorld",
      "forgot_password": "Mot de passe oublié",
      // sign up
      "welcome_to_the_club_sign_up": "Bienvenue sur la page d'inscription du Club. Fournissez toutes les informations nécessaires et rejoignez-nous.",
      "account_type": "Type de compte",
      "full_name": "Nom complet",
      "organization_name": "Nom de l'organisation",
      "or": "ou",
      "already_have_an_account": "Vous avez déjà un compte ? Connexion",
      "organization": "Organisation",
      "individual": "Individu",
      "register_now": "S'inscrire maintenant",
      "sponsor": "Parrainer",
      "subscribe": "S'abonner",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
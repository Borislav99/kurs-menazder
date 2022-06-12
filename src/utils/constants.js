import {
  brush,
  speed,
  student,
  signIn,
  userIcon,
  powerPoint,
  youtube,
  project,
  hammer,
  home,
  chat,
} from "./fontawesome";
const data = [
  { value: "prezentacije", path: "/student/presentations" },
  { value: "projekti", path: "/student/projects" },
  { value: "vjezbe", path: "/student/exercises" },
  { value: "izrada", path: "/student/tasks" },
  { value: "tutorijali", path: "/student/tutorials" },
  { value: "snimljena predavanja", path: "/student/lectures" },
];
export const links = [
  {
    text: "pocetna",
    url: "#",
  },
  {
    text: "informacije",
    url: "#information-section",
  },
  {
    text: "funkcije",
    url: "#functions-section",
  },
  {
    text: "primjeri",
    url: "#examples-section",
  },
  {
    text: "kontakt",
    url: "#contact-section",
  },
];
export const plans = [
  {
    icon: brush,
    title: "dizajn",
    text: "Kvalitet softvera mozemo mjeriti i po tome koliko je njegov dizajn jednostavan. Platforma je veoma minimalna na osnovu cega je koristenje iste maciji kasalj.",
  },
  {
    icon: speed,
    title: "brzina",
    text: "Prednost Javascript tehnologija jeste brzina. Projekti izgradjeni na React-u daju osjecaj nativne aplikacije. Asinhronizovano ponasanje Node.js-a je velika prednost.",
  },
  {
    icon: student,
    title: "polaznici",
    text: "Kljuc uspjeha svakog biznisa jeste korisnik. Vasi korisnici su vasi polaznici. Preko ove platforme, oni se fokusiraju na ucenje, ostali problemi su rjeseni.",
  },
];
export const business = [
  {
    icon: signIn,
    text: "Registracija za platformu je veoma jednostavna. Ispunite upitnik u kontakt polju i nas administrator ce vas kontaktirati za dalje informacije.",
  },
  {
    icon: userIcon,
    text: "Kada pritisnete link za prijavu otvorice vam se prozorcic za prijavu ili instruktora ili studenta. Izaberite vasu opciju, prijavite se i uzivajte.",
  },
  {
    icon: powerPoint,
    text: "Sve prezentacije, vjezbe i zadacu saljete preko platforme. ne zamarajte sebe ni vase polaznike sa viberom, sa kurs-menadzerom, ti problemi su rjeseni.",
  },
  {
    icon: youtube,
    text: "Gledanje snimljenih predavanja nikad lakse. Ucenik se prijavi na svoj profil, pritisne na ime predavanja koje hoce da pogleda i posao je zavrsen. Brzo i jednostavno.",
  },
];
export const featuredLeft = [
  {
    title: "prezentacije",
    icon: powerPoint,
    text: "Prezentacije saljite preko platforme.",
  },
  {
    title: "projekti",
    icon: project,
    text: "Hostujte projekte na platformi.",
  },
  {
    title: "vjezbe",
    icon: hammer,
    text: "Polaznici ne moraju znati Github, olaksajte im rad.",
  },
];
export const featuredRight = [
  {
    title: "zadaca",
    icon: home,
    text: "Vasi polaznici zadacu salju na server. ",
  },
  {
    title: "predavanja",
    icon: youtube,
    text: "Snimljena predavanja su postavljena na platformi. ",
  },
  {
    title: "live-chat",
    icon: chat,
    text: "Live-chat sa vasim polaznicima. ",
  },
];

export { data };

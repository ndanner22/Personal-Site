export interface Project {
  project_id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const projects: Project[] = [
  {
    project_id: "1",
    title: "StayFresh",
    description:
      "StayFresh is a mobile app that lets the user take a photo of their shopping receipt to automatically add items to their digital cupboard. Keeping track of your grocery expirery dates has never been simplier.",
    image: "../../public/images/stay-fresh.png",
    alt: "picture of cell phone app containing a grocery list",
  },
  {
    project_id: "2",
    title: "NC-News Frontend",
    description:
      "The frontend for a news website built using React and JavaScript, and hosted on render.com.",
    image: "../../public/images/place-holder.jpeg",
    alt: "picture of homepage of a news website",
  },
  {
    project_id: "3",
    title: "NC-News Backend",
    description:
      "The backend for a news website developed by creating a REST API using JavaScript and PostgreSQL, hosted on elephantsql.com.",
    image: "../../public/images/portrait.png",
    alt: "picture of JavaScript code",
  },
];

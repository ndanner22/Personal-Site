export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "StayFresh",
    description: "Mobile grocery app",
    image: "../../public/images/portrait.png",
  },
  {
    id: "2",
    title: "NC-News Frontend",
    description: "News frontend",
    image: "../../public/images/place-holder.jpeg",
  },
  {
    id: "3",
    title: "NC-News Backend",
    description: "News backend.",
    image: "../../public/images/portrait.png",
  },
];

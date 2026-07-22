export const projectImages = import.meta.glob<{ default: string }>(
  "@/assets/project-*.{jpg,jpeg,png}",
  {
    eager: true,
  },
);

export interface Project {
  id: string;
  number: string;
  title: string;
  imagePath: string;
  alt: string;
  description: string;
  colSpan: string;
  extraClass?: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "Maqueta 40 Proyectos",
    number: "01/",
    title: "Maqueta 40 Proyectos",
    imagePath: "/src/assets/project-01.png",
    alt: "Casa brutalista en el bosque",
    description:
      "Rediseño de identidad digital para un hito de la arquitectura moderna. Enfoque en la preservación visual y la interactividad técnica.",
    colSpan: "md:col-span-6",
    link: "https://maqueta40proyectos.lovable.app/",
  },
  {
    id: "Arquitectura en Papel",
    number: "02/",
    title: "Arquitectura en Papel",
    imagePath: "/src/assets/project-02.png",
    alt: "Interior de estudio de arquitectura",
    description:
      "Portafolio interactivo para firma boutique. Navegación basada en planos técnicos y capas constructivas.",
    colSpan: "md:col-span-6",
    link: "https://arquitecturaenpapel.cl/",
    extraClass: "md:pt-48",
  },
];

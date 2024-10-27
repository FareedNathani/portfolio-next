// componentsTypes.ts
export interface MenuLink {
    path: string;
    title: string;
  }
  
  export interface MenuOverlayProps {
    links: MenuLink[];
  }

  export interface NavLinkProps {
    href: string;
    title: string;
    isFooter?: boolean; // Optional property example
  }

  
export interface ProjectCardProps {
    title: string;
    description: string;
    image: string; // Image URL
    url: string;   // Change this to url
  }

  export interface SkillBarProps {
    name: string;  // Skill name
    level: string; // Skill level as a percentage string
  }

export interface Programme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  imageUrl: string;
  services: string[];
  philosophy?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

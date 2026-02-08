
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  features?: string[];
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

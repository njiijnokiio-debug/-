// Common types
export interface Teacher {
  id: string;
  name: string;
  specialization: string;
  bio: string;
  experience: number;
  image: string;
  achievements: string[];
}

export interface Program {
  id: string;
  name: string;
  ageGroup: string;
  description: string;
  duration: string;
  price: number;
  benefits: string[];
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  childName: string;
  childAge: number;
  text: string;
  rating: number;
  image: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EnrollmentForm {
  childName: string;
  parentName: string;
  email: string;
  phone: string;
  age: number;
  interests: string[];
}
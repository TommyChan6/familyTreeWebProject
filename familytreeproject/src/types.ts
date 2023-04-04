export interface Person {
    name: string;
    children?: Person[];
    mother?: Person | null;
    father?: Person | null;
  }
  
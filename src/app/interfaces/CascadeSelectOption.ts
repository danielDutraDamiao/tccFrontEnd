
export interface CascadeSelectOption {
    name: string;
    code: number;
    states: {
      name: string;
      cities: {
        cname: string;
        code: number;
      }[];
    }[];
  }
  
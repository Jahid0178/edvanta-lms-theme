export interface BaseOption {
  title: string;
  value: string;
}

export interface CategoryFilter extends BaseOption {
  id: number;
}

export interface LearningLevel extends BaseOption {
  id: number;
}

export interface PopularityLevel extends BaseOption {
  id: number;
}

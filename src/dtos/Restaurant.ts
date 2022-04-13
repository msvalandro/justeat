interface Cuisine {
  Name: string;
  SeoName: string;
}

export interface Restaurant {
  Id: number;
  Name: string;
  IsOpenNow: boolean;
  Cuisines: Cuisine[];
  RatingStars: number;
  LogoUrl: string;
}

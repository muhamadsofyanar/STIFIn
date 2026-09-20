import generated from './network.generated.json';

export interface NetworkLocation {
  slug: string;
  city: string;
  province: string;
  promoters: number;
  branches: number;
}

export const networkGeneratedAt = generated.generatedAt as string | null;
export const networkLocations = generated.locations as NetworkLocation[];

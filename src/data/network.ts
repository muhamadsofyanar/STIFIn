import generated from './network.generated.json';

export interface NetworkLocation {
  slug: string;
  city: string;
  province: string;
  promoters: number;
  branches: number;
}

export interface NetworkSummary {
  requestedBranches: number;
  successfulBranches: number;
  failedBranches: number;
  locations: number;
  promoters: number;
}

export const networkGeneratedAt = generated.generatedAt as string | null;
export const networkSummary = generated.summary as NetworkSummary;
export const networkLocations = generated.locations as NetworkLocation[];

import generated from './network.generated.json';

export interface NetworkLocation {
  slug: string;
  city: string;
  province: string;
  country?: string;
  administrativeType?: 'Kota' | 'Kabupaten' | 'Area';
  promoters: number;
  branches: number;
  promoterList?: Array<{ code: string; name: string; branch: string; branchCode: string }>;
}

export interface NetworkSummary {
  requestedBranches: number;
  successfulBranches: number;
  failedBranches: number;
  emptyBranches?: number;
  locations: number;
  promoters: number;
  locationsWithoutProvince?: number;
}

export const networkGeneratedAt = generated.generatedAt as string | null;
export const networkSummary = generated.summary as NetworkSummary;
export const networkLocations = generated.locations as NetworkLocation[];

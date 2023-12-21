export interface UseGetDataOptions {
    params: Record<string, string | number>;
    minFetchLengthLimit: number;
    fetchLimiterText: string;
}

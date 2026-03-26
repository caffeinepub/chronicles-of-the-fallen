import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PlayerProgress {
    currentCampaign: string;
    reachedEndings: Array<string>;
    choices: Array<string>;
    currentChapter: string;
}
export interface Campaign {
    id: string;
    title: string;
    endings: Array<string>;
    chapters: Array<string>;
}
export interface backendInterface {
    getAllCampaigns(): Promise<Array<Campaign>>;
    getAllPlayerProgress(): Promise<Array<PlayerProgress>>;
    getCampaign(campaignId: string): Promise<Campaign>;
    getProgress(): Promise<PlayerProgress>;
    getReachedEndings(): Promise<Array<string>>;
    isProgressSaved(): Promise<boolean>;
    saveProgress(progress: PlayerProgress): Promise<void>;
    updateProgress(progress: PlayerProgress): Promise<void>;
}

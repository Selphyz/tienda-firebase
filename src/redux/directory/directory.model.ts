export type StateSection = {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string | undefined;
}
export interface DirectoryStateModel {
    sections?: (StateSection)[] | undefined;
}
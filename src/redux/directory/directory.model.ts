export type section = {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
}
export interface DirectoryModel {
    sections?: section[]
}
export type currentUser = {
    id: string,
    displayName: string,
    createdAt: created,
    email: string
}
interface created {
    seconds: number,
    nanoseconds: number
}
export interface UserStateModel {
    currentUser: currentUser | null;
}
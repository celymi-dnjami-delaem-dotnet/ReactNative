export interface IBaseAction {
    type: string;
}

export interface IUserProfile {
    email: string;
    userName: string;
    dateOfBirth?: Date;
    avatarLink: string;
}

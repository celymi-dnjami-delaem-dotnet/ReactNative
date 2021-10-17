import { ICardRowProps } from '../components/common/card-row/CardRow';

export interface IBaseAction {
    type: string;
}

export interface IUserProfile {
    email: string;
    userName: string;
    dateOfBirth?: Date;
    avatarLink: string;
}

export interface IBaseRouteParams {
    pageName?: string;
    title?: string;
}

export interface ICardRowListProps {
    title: string;
    data: ICardRowProps[];
}

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

interface IBaseCardRowProps {
    data: ICardRowProps[];
}

export interface ICardRowListProps extends IBaseCardRowProps {
    title: string;
}

export interface ISavingsCardRowProps extends IBaseCardRowProps {
    title: {
        date: string;
        price: number;
    };
}

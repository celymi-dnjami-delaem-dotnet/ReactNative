export interface AppState {
    auth: AuthState;
}

export interface AuthState {
    email: string;
    userName: string;
    jwt: string;
    isLoading: boolean;
}

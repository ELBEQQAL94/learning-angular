// keep it simple for now, user model includes only required features
export interface User {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    avatar_url: string;
    created_at: string;
    updated_at: string;
}
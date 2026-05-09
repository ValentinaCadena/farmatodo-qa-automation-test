export type UserInfo = {
    USERNAME: string;
    PASSWORD: string;
};

export const LOGIN_USERS: UserInfo[] = [
    { USERNAME: 'standard_user', PASSWORD: 'secret_sauce' },
    { USERNAME: 'locked_out_user', PASSWORD: 'secret_sauce' },
    { USERNAME: 'problem_user', PASSWORD: 'secret_sauce' },
    { USERNAME: 'performance_glitch_user', PASSWORD: 'secret_sauce' },
    { USERNAME: 'error_user', PASSWORD: 'secret_sauce' },
    { USERNAME: 'visual_user', PASSWORD: 'secret_sauce' }
];

export function getRandomUser(): UserInfo {
    const index = Math.floor(Math.random() * LOGIN_USERS.length);
    return LOGIN_USERS[index];
}
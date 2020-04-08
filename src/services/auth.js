
export function checkAuth(users, userInfo) {
    const user = users.find(user => user.email.toLowerCase() === userInfo.email.toLowerCase());
    if (user) {
        if (user.password === userInfo.password) {
            return true;
        }
    } else {
        return false;
    }
}

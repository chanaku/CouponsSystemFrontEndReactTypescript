class AuthService{
    public isLoggenedIn =false;
    public token: string | undefined;

}
const authService = new AuthService();
export default authService;
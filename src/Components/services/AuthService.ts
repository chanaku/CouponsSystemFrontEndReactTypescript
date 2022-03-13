class AuthService{
    private isLoggenedIn =false;
    private token: string | undefined;
    private type? : string;

    public getToken() {
        return this.token;
    }
    public getIsLoggenedIn() {
        return this.isLoggenedIn;
    }
    public setToken(token: string) {
        this.token = token;
    }
    public setIsLoggenedIn(isLoggenedIn: boolean) {
        this.isLoggenedIn = isLoggenedIn;
    }
    public getType() {
        return this.type;
    }
    public setType(type : string) {
         this.type = type;
    }
}
const authService = new AuthService();

export default authService;
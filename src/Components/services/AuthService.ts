class AuthService{
    private isLoggenedIn :boolean = false;
    private token: string | undefined;
    private type : string | undefined;
    private userId? : number;

    public getToken() {
        return localStorage.getItem('token');
    }
    public getIsLoggenedIn() {
        return this.isLoggenedIn;
    }
    public setToken(token: string) {
        localStorage.setItem('token',token);
    }
    public setIsLoggenedIn(isLoggenedIn1: boolean) {
      this.isLoggenedIn = isLoggenedIn1;

    }
    public getType() {
        if (this.type===""){
            console.log("from type " +this.type)
            localStorage.setItem("type","guest");
          }
        return localStorage.getItem('type');
    }
    public setType(type : string) {
        localStorage.setItem('type',type);

    }
}
const authService = new AuthService();

export default authService;
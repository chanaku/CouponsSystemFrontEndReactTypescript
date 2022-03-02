class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        coupons: "http://localhost:8080/api/cats/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/admin/company/",
        login:"http://localhost:8080/admin/login"

    }
}

class ProductionGlobals extends Globals{
    public urls = {
        coupons: "http://localhost:8080/admin/coupons",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/admin/company",
        login:"http://localhost:8080/admin/login"
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;
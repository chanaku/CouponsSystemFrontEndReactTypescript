class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        coupons: "http://localhost:8080/guest/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/guest/company/",
        login:"http://localhost:8080/company/login",
        customerPurchase:"http://localhost:8080//customer/"

    }
}

class ProductionGlobals extends Globals{
    public urls = {
        coupons: "http://localhost:8080/guest/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/guest/company",
        login:"http://localhost:8080/company/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;
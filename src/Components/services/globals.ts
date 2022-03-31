class Globals{
}

class DevelopmentGlobals extends Globals{
    public urlsMain = {        
        coupons: "http://localhost:8080/{administrator}/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/{administrator}/company/",
        login:"http://localhost:8080/{company}/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
    public urlsAdmin = {        
        coupons: "http://localhost:8080/administrator/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/administrator/company/",
        login:"http://localhost:8080/administrator/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
    public urlsCompany = {        
        coupons: "http://localhost:8080/company/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/company/company/",
        login:"http://localhost:8080/company/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
    public urlsCustomer = {        
        coupons: "http://localhost:8080/customer/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/customer/company/",
        login:"http://localhost:8080/customer/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
}

class ProductionGlobals extends Globals{
    public urlsMain = {        
        coupons: "http://localhost:8080/{administrator}/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/{administrator}/company/",
        login:"http://localhost:8080/{company}/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
    public urlsAdmin = {        
        coupons: "http://localhost:8080/administrator/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/administrator/company/",
        login:"http://localhost:8080/company/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
    public urlsCompany = {        
        coupons: "http://localhost:8080/company/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/company/company/",
        login:"http://localhost:8080/company/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
    public urlsCustomer = {        
        coupons: "http://localhost:8080/customer/coupons/",
        images: "http://localhost:8080/api/cats/images/",
        companies:"http://localhost:8080/customer/company/",
        login:"http://localhost:8080/customer/login",
        customerPurchase:"http://localhost:8080/customer/"
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;
const CATEGORIES=[
    {
        id:100,
        name:"null",
        categoryId:0,
        url:"http://localhost:8080/company/coupon/null "
    },
    {
        id:101,
        name: "Food",
        categoryId:1,
        url:"http://localhost:8080/company/coupon/food "
    },
    {
        id:102,
        name: "Electricity",
        categoryId:2,
        url:"http://localhost:8080/company/coupon/electricity "
    },
    {
        id:103,
        name: "Restaurant",
        categoryId:3,
        url:"http://localhost:8080/company/coupon/restaurant "
    },
    {
        id:104,
        name: "Vacation",
        categoryId:4,
        url:"http://localhost:8080/company/coupon/vacation "
    },
    
];
export function getCategories(categoryId: any) {
    return CATEGORIES;
}
export function getCategory(id: number) {
    return CATEGORIES.find((category) => (category.id == id));
}
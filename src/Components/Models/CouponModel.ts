export class CouponModel{
    public constructor(
        public id?: string,
        public company?: string,
        public title?: string,
        public description?: string,
        public startDate?: Date,
        public endDate?: Date,
        public amount?: number,
        public price?: number,
        public image?: string
    ){
        
    }
}
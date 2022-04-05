import { ComModel } from "./ComModel";

export class CouponPayloadModel{
    public constructor(
        public id?: number,
        public category?: string,
        public company?: ComModel,
        public title?: string,
        public description?: string,
        public startDate?: Date,
        public endDate?: Date,
        public amount?: number,
        public price?: number,
        public image?: FileList){}
    
        
    
}
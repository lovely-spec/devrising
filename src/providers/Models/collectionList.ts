export interface CollectionListModel{
    [x : string] : any;
    [index : number] : {
        transaction_date : string;
        payment_mode : string;
        amount : string;
        transaction_type : string;
        message : string;
        transaction_status : string;
        account_type : string;
        account_number:string;
        name:string;
        fname:string;
        mobile:string;
        total_balance:string;
        collectedBy:string;
        tranx_id : string;
    }
}

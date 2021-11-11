export interface SavingResponse{
    [x : string] : any;
    [index : number] : {
        transaction_type : string;
        payment_method : string;
        transaction_date : string;
        transaction_amt : string;
        account : string;
        updated : string;
    }
}
export interface TransactionResponse{
    [x : string] : any;
    [index : number] : {
        transaction_acc : string;
        transaction_amt : string;
        transaction_type : string;
        payment_method : string;
    }
}
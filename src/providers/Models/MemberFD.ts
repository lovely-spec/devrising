export interface FdResponse{
    [x : string] : any;
    [index : number] : {
        member_name : string;
        interest_rate : string;
        total_amt : string;
        maturity_amt : string;
        maturity_date : string;
        account_no : string;
    }
}
export interface UserResponse{
    [x : string] : any;
    [index : number] : {
        modules : any;
        username : string;
        todays_interest : string;
        total_balance : string;
        account_no : string;
        interest_rate : string;
        //DD Details
        dd_interest_rate : string;
        dd_total_amt : string;
        dd_maturity_amt : string;
        dd_maturity_date : string;
        dd_account_no : string;
        //RD Details
        rd_interest_rate : string;
        rd_total_amt : string;
        rd_maturity_amt : string;
        rd_maturity_date : string;
        rd_account_no : string;
        //FD Details
        fd_interest_rate : string;
        fd_total_amt : string;
        fd_maturity_amt : string;
        fd_maturity_date : string;
        fd_account_no : string;
        //OL Details
        ol_interest_rate : string;
        ol_total_amt : string;
        ol_maturity_amt : string;
        ol_maturity_date : string;
        ol_account_no : string;
    }
}
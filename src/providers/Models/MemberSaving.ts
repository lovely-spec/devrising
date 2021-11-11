export interface MemberSavingResponse{
    [x : string] : any;
    [index : number] : {
        details : any;
        status : string;
        transactions : any;
    }
}
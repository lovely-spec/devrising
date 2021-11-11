export interface loginresponse{
    [x : string] : any;
    [index : number] : {
        status : string;
        user_id : string;
        type : string;
        token : string;
    }
}
export interface ProfileResponse{
    [x : string] : any;
    [index : number] : {
        name : string;
        phone : string;
        email : string;
        address : string;
        distt : string;
        pin_code : string;
    }
}
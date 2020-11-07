

export interface IauthOptions{

    //?  update : delete and update methods
    //?  see : find methods
    //?  change : delete update and create methods

    canUpdatePartipicants?: boolean; 
    canSeePartipicants?: boolean; 
    
    canChangeAdmins?: boolean;
    canSeeAdmins?: boolean;
    
    canChangeEvents?: boolean;
    canSeeEvents?: boolean;

}

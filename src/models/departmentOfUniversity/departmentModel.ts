export class DepartmentModel{
    public departmentName:string
    public universityId:string

    constructor(departmentName:string,universityId:string) {
        this.departmentName = departmentName;
        this.universityId = universityId;
    }
}
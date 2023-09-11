class Employee {
    constructor(id,name){
        this.id = id,
        this.name = name
    }

    static fromApiResponse(data){
        return new Employee(data.id,data.name)
    }
}

export default Employee;
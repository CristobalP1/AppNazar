class Employee {
    constructor(camionero_id,nombre){
        this.camionero_id = camionero_id,
        this.nombre = nombre
    }

    static fromApiResponse(data){
        return new Employee(data.camionero_id,data.nombre)
    }
}

export default Employee;
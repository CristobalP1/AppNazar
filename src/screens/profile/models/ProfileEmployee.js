class ProfileEmployee {
    constructor(id,name){
        this.id = id,
        this.name = name
    }

    static fromApiResponse(data){
        return new ProfileEmployee(data.id,data.name)
    }

}

export default ProfileEmployee;
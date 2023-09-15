class FormDataModel {
  constructor(tempRes, photoName, userParams) {
    this.tempRes = tempRes;
    this.photoName = photoName;
    this.userParams = userParams;
  }

  createFormData() {
    const data = new FormData();

    data.append("nombre_archivo", {
      uri: this.tempRes.uri,
      type: "image/jpeg",
      name: this.photoName + ".jpg",
    });

    data.append("camionero_id", this.userParams.id);
    data.append("nombre_foto", this.photoName);

    return data;
  }
}

export default FormDataModel;
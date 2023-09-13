class ProfileEmployee {
  constructor(foto_id, camionero_id, nombre_foto, nombre_archivo) {
    (this.foto_id = foto_id),
      (this.camionero_id = camionero_id),
      (this.nombre_foto = nombre_foto),
      (this.nombre_archivo = nombre_archivo);
  }

  static fromApiResponsePhoto(data) {
    return data.map(
      (item) =>
        new ProfileEmployee(
          item.foto_id,
          item.camionero_id,
          item.nombre_foto,
          item.nombre_archivo
        )
    );
  }
}

export default ProfileEmployee;

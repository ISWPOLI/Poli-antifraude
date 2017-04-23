package com.poliantifraude.Model;

/**
 * Created by alejo on 4/23/2017.
 */
public abstract  class  Usuario {
    private String contraseña;
    private String nombreDeUsuario;


  public  abstract void traerInformacion();


    public String getContraseña() {
        return contraseña;
    }

    protected void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public String getNombreDeUsuario() {
        return nombreDeUsuario;
    }

    protected void setNombreDeUsuario(String nombreDeUsuario) {
        this.nombreDeUsuario = nombreDeUsuario;
    }
}

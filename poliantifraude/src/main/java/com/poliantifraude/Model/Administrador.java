package com.poliantifraude.Model;

import java.util.ArrayList;

/**
 * Created by alejo on 4/23/2017.
 */
public class Administrador extends Usuario {

    private String codigoAdministrador;
    private ArrayList<String> informacion;

    @Override

    public void traerInformacion() {

    }

    public void administrarFraude(){

    }

    public void administrarUsuarios(){

    }
    public void administrarMateria(){

    }
    public void generarReportes(){

    }

    public String getCodigoAdministrador() {
        return codigoAdministrador;
    }

    protected void setCodigoAdministrador(String codigoAdministrador) {
        this.codigoAdministrador = codigoAdministrador;
    }

    public ArrayList<String> getInformacion() {
        return informacion;
    }

    protected void setInformacion(ArrayList<String> informacion) {
        this.informacion = informacion;
    }

    //Se crea constructor de la clase Administrador.


    public Administrador(String codigoAdministrador, ArrayList<String> informacion) {
        this.codigoAdministrador = codigoAdministrador;
        this.informacion = informacion;
    }
}

package com.poliantifraude.Model;

import java.util.ArrayList;

/**
 * Created by alejo on 4/23/2017.
 */
public class Profesor extends Usuario{
    private String codigoProfesor;
    private Materia materia;
    private ArrayList<String> informacion;

    @Override
    public void traerInformacion() {

    }

    public void asginarExamen(Examen examen, Estudiante estudiante, String id_materia){

    }
    public void solicitarCambioEstadoFraude(Estudiante estudiante, Fraude fraude){

    }


    public String getCodigoProfesor() {
        return codigoProfesor;
    }

    protected void setCodigoProfesor(String codigoProfesor) {
        this.codigoProfesor = codigoProfesor;
    }

    public Materia getMateria() {
        return materia;
    }

    protected void setMateria(Materia materia) {
        this.materia = materia;
    }

    public ArrayList<String> getInformacion() {
        return informacion;
    }

    protected void setInformacion(ArrayList<String> informacion) {
        this.informacion = informacion;
    }
}

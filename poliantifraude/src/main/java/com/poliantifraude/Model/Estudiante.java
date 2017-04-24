package com.poliantifraude.Model;

import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
public class Estudiante extends Usuario{
    private String codigoEstudiante;
    private ArrayList<String> informacion;
    private Hashtable<Integer, Pregunta> preguntas;
    private Hashtable<Integer, Foto> fotos;

    @Override
    public void traerInformacion() {

    }

    public void obtenerFoto_Identificacion(Hashtable fotos){

    }
    public void cambiarFoto_Identifiacion(Foto foto, Hashtable fotos , int id_foto){

    }

    public void obtener_una_Pregunta(Hashtable preguntas, int id_pregunta){

    }


    public String getCodigoEstudiante() {
        return codigoEstudiante;
    }

    public void setCodigoEstudiante(String codigoEstudiante) {
        this.codigoEstudiante = codigoEstudiante;
    }

    public ArrayList<String> getInformacion() {
        return informacion;
    }

    public void setInformacion(ArrayList<String> informacion) {
        this.informacion = informacion;
    }

    public Hashtable<Integer, Pregunta> getPreguntas() {
        return preguntas;
    }

    public void setPreguntas(Hashtable<Integer, Pregunta> preguntas) {
        this.preguntas = preguntas;
    }

    public Hashtable<Integer, Foto> getFotos() {
        return fotos;
    }

    public void setFotos(Hashtable<Integer, Foto> fotos) {
        this.fotos = fotos;
    }
}

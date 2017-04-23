package com.poliantifraude.Model;

import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
public class Estudiante extends Usuario{
    private String codigoEstudiante;
    private ArrayList<String> informacion;
    private Hashtable<int, Pregunta> preguntas;
    private Hashtable<int, Fotos> fotos;


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

    public Hashtable<int, Pregunta> getPreguntas() {
        return preguntas;
    }

    public void setPreguntas(Hashtable<int, Pregunta> preguntas) {
        this.preguntas = preguntas;
    }

    public Hashtable<int, Fotos> getFotos() {
        return fotos;
    }

    public void setFotos(Hashtable<int, Fotos> fotos) {
        this.fotos = fotos;
    }
}

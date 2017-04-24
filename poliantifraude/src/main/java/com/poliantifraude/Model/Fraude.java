package com.poliantifraude.Model;

import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
public class Fraude {
    private Estudiante estudiante;
    private boolean estado;
    private Examen examen;
    private Hashtable<String, Pregunta> preguntasSeguridad;
    private ArrayList<Foto> fotosFraude;


    public void generarPreguntasSeguridad(Estudiante estudiante, Hashtable<Integer, Pregunta> preguntas){

    }

    public void generarFotos(Estudiante estudiante, Hashtable<Integer, Foto> fotos){

    }

    public void compararFotos (Foto ... fotos){

    }
    public void verificarPreguntas (Pregunta ... preguntas){

    }

    public Estudiante getEstudiante() {
        return estudiante;
    }

    public void setEstudiante(Estudiante estudiante) {
        this.estudiante = estudiante;
    }

    public boolean isEstado() {
        return estado;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public Examen getExamen() {
        return examen;
    }

    public void setExamen(Examen examen) {
        this.examen = examen;
    }

    public Hashtable<String, Pregunta> getPreguntasSeguridad() {
        return preguntasSeguridad;
    }

    public void setPreguntasSeguridad(Hashtable<String, Pregunta> preguntasSeguridad) {
        this.preguntasSeguridad = preguntasSeguridad;
    }

    public ArrayList<Foto> getFotosFraude() {
        return fotosFraude;
    }

    public void setFotosFraude(ArrayList<Foto> fotosFraude) {
        this.fotosFraude = fotosFraude;
    }
}

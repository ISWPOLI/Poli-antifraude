package com.poliantifraude.Model;

import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
public class Materia {
    private String id_materia;
    private Profesor profesor;
    private Hashtable <Integer, Examen> examenes;
    private Hashtable <String, Estudiante> estudiantes;


    public void enlazarExamen_fraude(Examen examen, Fraude fraude){

    }


    public String getId_materia() {
        return id_materia;
    }

    protected void setId_materia(String id_materia) {
        this.id_materia = id_materia;
    }

    public Profesor getProfesor() {
        return profesor;
    }

    protected void setProfesor(Profesor profesor) {
        this.profesor = profesor;
    }

    public Hashtable<Integer, Examen> getExamenes() {
        return examenes;
    }

    protected void setExamenes(Hashtable<Integer, Examen> examenes) {
        this.examenes = examenes;
    }

    public Hashtable<String, Estudiante> getEstudiantes() {
        return estudiantes;
    }

    protected void setEstudiantes(Hashtable<String, Estudiante> estudiantes) {
        this.estudiantes = estudiantes;
    }

    //Se genera Contructor de la clase Materia
    public Materia(String id_materia, Profesor profesor, Hashtable<Integer, Examen> examenes, Hashtable<String, Estudiante> estudiantes) {
        this.id_materia = id_materia;
        this.profesor = profesor;
        this.examenes = examenes;
        this.estudiantes = estudiantes;
    }
}

package com.poliantifraude.Model;

import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
public class Materia {
    private String id_materia;
    private Hashtable<Integer, Examen> examenes;
    private Hashtable<String, Estudiante> estudiantes;


    public void enlazarExamen_fraude(Examen examen, Fraude fraude) {

    }


    public String getId_materia() {
        return id_materia;
    }

    protected void setId_materia(String id_materia) {
        this.id_materia = id_materia;
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

}

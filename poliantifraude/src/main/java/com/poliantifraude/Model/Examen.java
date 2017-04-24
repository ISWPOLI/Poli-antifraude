package com.poliantifraude.Model;

import java.util.Date;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
public class Examen {
    private Hashtable<String, Estudiante> estudiantes;
    private Fraude fraude;
    private Date fecha_Asignacion;
    private Date fecha_Presentacion;
    private long tiempo_realizacion;
    private String id_examen;
    private Materia materia;
    private Profesor profesor;

    public Hashtable<String, Estudiante> getEstudiantes() {
        return estudiantes;
    }

    protected void setEstudiantes(Hashtable<String, Estudiante> estudiantes) {
        this.estudiantes = estudiantes;
    }

    public Fraude getFraude() {
        return fraude;
    }

    protected void setFraude(Fraude fraude) {
        this.fraude = fraude;
    }

    public Date getFecha_Asignacion() {
        return fecha_Asignacion;
    }

    protected void setFecha_Asignacion(Date fecha_Asignacion) {
        this.fecha_Asignacion = fecha_Asignacion;
    }

    public Date getFecha_Presentacion() {
        return fecha_Presentacion;
    }

    protected void setFecha_Presentacion(Date fecha_Presentacion) {
        this.fecha_Presentacion = fecha_Presentacion;
    }

    public long getTiempo_realizacion() {
        return tiempo_realizacion;
    }

    protected void setTiempo_realizacion(long tiempo_realizacion) {
        this.tiempo_realizacion = tiempo_realizacion;
    }

    public String getId_examen() {
        return id_examen;
    }

    protected void setId_examen(String id_examen) {
        this.id_examen = id_examen;
    }

    public Materia getMateria() {
        return materia;
    }

    protected void setMateria(Materia materia) {
        this.materia = materia;
    }

    public Profesor getProfesor() {
        return profesor;
    }

    protected void setProfesor(Profesor profesor) {
        this.profesor = profesor;
    }
}

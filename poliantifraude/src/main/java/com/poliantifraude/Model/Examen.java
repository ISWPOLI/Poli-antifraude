package com.poliantifraude.Model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
public class Examen {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_examen;
    @Column(name = "estudiante")
    private Hashtable<String, Estudiante> estudiantes;
    @Column(name = "fraude")
    private Fraude fraude;
    @Column(name = "fechaasignacion")
    private Date fecha_Asignacion;
    @Column(name = "fechapresentacion")
    private Date fecha_Presentacion;
    @Column(name = "tiemporealizacion")
    private long tiempo_realizacion;
    @Column(name = "materia")
    private Materia materia;
    @Column(name = "profesor")
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

    public int getId_examen() {
        return id_examen;
    }

    protected void setId_examen(int id_examen) {
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


    // se genera Constructor para la clase Examen
    public Examen(Hashtable<String, Estudiante> estudiantes, Fraude fraude, Date fecha_Asignacion, Date fecha_Presentacion, long tiempo_realizacion, Materia materia, Profesor profesor) {
        this.estudiantes = estudiantes;
        this.fraude = fraude;
        this.fecha_Asignacion = fecha_Asignacion;
        this.fecha_Presentacion = fecha_Presentacion;
        this.tiempo_realizacion = tiempo_realizacion;
        this.materia = materia;
        this.profesor = profesor;
    }
}

package com.poliantifraude.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
@Entity
@Table(name = "estudiante")
public class Estudiante extends Usuario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_estudiante;
    @Column(name = "codigoEstudiante")
    private String codigoEstudiante;

    @Column(name = "nombre")
    private String nombreEstudiante;

    private ArrayList<String> informacion;
    private Hashtable<Integer, Pregunta> preguntas;
    private Hashtable<Integer, Foto> fotos;

 protected  Estudiante (){
     super();
 }
    public Estudiante(String codigoEstudiante, String nombreEstudiante) {
        this.codigoEstudiante = codigoEstudiante;
        this.nombreEstudiante = nombreEstudiante;
    }


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

    @Override
    public String toString() {
        return ("id internno" + id_estudiante + "codigo Estudiante" + codigoEstudiante  + "nombre" + nombreEstudiante);
    }
}

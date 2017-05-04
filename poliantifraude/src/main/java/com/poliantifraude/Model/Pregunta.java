package com.poliantifraude.Model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by alejo on 4/23/2017.
 */
@Entity
@Table(name = "pregunta")
public class Pregunta implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_pregunta;
    @Column(name = "pregunta")
    private String pregunta;
    @Column(name = "respuesta")
    private String respuesta;


 public void cambiarPregunta(){

 }

    public Pregunta(String pregunta, String respuesta) {
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }

    public long getId_pregunta() {
        return id_pregunta;
    }

    public void setId_pregunta(long id_pregunta) {
        this.id_pregunta = id_pregunta;
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public String getRespuesta() {
        return respuesta;
    }

    public void setRespuesta(String respuesta) {
        this.respuesta = respuesta;
    }
}


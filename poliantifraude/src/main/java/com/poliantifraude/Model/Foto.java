package com.poliantifraude.Model;

import java.awt.image.BufferedImage;
import java.util.Hashtable;

/**
 * Created by alejo on 4/23/2017.
 */
public class Foto {
    private String id_foto;
    private BufferedImage imagen;
    private Hashtable<String, String> propiedades;


    public void obtenerPropiedades(BufferedImage imagen){

    }

    public String getId_foto() {
        return id_foto;
    }

    public void setId_foto(String id_foto) {
        this.id_foto = id_foto;
    }

    public BufferedImage getImagen() {
        return imagen;
    }

    public void setImagen(BufferedImage imagen) {
        this.imagen = imagen;
    }

    public Hashtable<String, String> getPropiedades() {
        return propiedades;
    }

    public void setPropiedades(Hashtable<String, String> propiedades) {
        this.propiedades = propiedades;
    }
}

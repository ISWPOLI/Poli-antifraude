package com.poliantifraude.Model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by alejo on 4/24/2017.
 */
@Entity
@Table(name = "informacion")
public class Informacion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id_informacion;
    @Column(name = "modalidad")
    private String modalidad; //P/V
    @Column(name = "sede")
    private String sede; //"Ubicacion"
    @Column(name = "codigo")
    private String codigo; // "idPoli"
    @Column(name = "cedula")
    private String cedula;
    @Column(name = "libretaMilitar")
    private String libretaMilitar;
    @Column(name = "estadoCivil")
    private String estadoCivil;
    @Column(name = "sexo")
    private String sexo;
    @Column(name = "fecha_nacimiento")
    private String fecha_nacimiento;
    @Column(name = "nombres")
    private String nombres;
    @Column(name = "apellido1")
    private String apellido1;
    @Column(name = "apellido2")
    private String apellido2;
    @Column(name = "direccion")
    private String direccion;
    @Column(name = "ciudad")
    private String ciudad;
    @Column(name = "telefono")
    private String telefono;
    @Column(name = "usuarioPoli")
    private String usuarioPoli;


    private Estudiante estudiante;

    public Informacion(String modalidad, String sede, String codigo, String cedula, String libretaMilitar, String estadoCivil, String sexo,
                       String fecha_nacimiento, String nombres, String apellido1, String apellido2, String direccion, String ciudad, String telefono,
                      String usuarioPoli ){
        this.modalidad = modalidad;
        this.sede = sede;
        this.codigo = codigo;
        this.cedula = cedula;
        this.libretaMilitar = libretaMilitar;
        this.estadoCivil = estadoCivil;
        this.sexo = sexo;
        this.fecha_nacimiento = fecha_nacimiento;
        this.nombres = nombres;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
    }

    public long getId_informacion() {
        return Id_informacion;
    }

    protected void setId_informacion(long id_informacion) {
        Id_informacion = id_informacion;
    }

    public String getModalidad() {
        return modalidad;
    }

    protected void setModalidad(String modalidad) {
        this.modalidad = modalidad;
    }

    public String getSede() {
        return sede;
    }

    protected void setSede(String sede) {
        this.sede = sede;
    }

    public String getCodigo() {
        return codigo;
    }

    protected void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getCedula() {
        return cedula;
    }

    protected void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getLibretaMilitar() {
        return libretaMilitar;
    }

    protected void setLibretaMilitar(String libretaMilitar) {
        this.libretaMilitar = libretaMilitar;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    protected void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public String getSexo() {
        return sexo;
    }

    protected void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(String fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String toString(){
        return ("modalidad:" +modalidad +"sede"+ sede + "codigo" + codigo + "cedula" + cedula + "librertaMilitar" + libretaMilitar + "estadoCivil"  +estadoCivil + "sexo"+ sexo+
                "fecha"+fecha_nacimiento+"nombres"+nombres+ "apellido1"+apellido1 +"apellido2"+apellido2+ "direccion"+direccion+ "ciudad" +ciudad + "telefono" +telefono+
                "usuario" +usuarioPoli);
    }
}

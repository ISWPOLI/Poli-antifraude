package com.poliantifraude.Model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.util.Set;


/**
 * Created by alejo on 4/23/2017.
 */
@Entity
@Table(name = "estudiante")
public class Estudiante  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;


    @Column(name = "Modalidad")
    private String modalidad;

    @Column(name = "Sede")
    private String sede;

    @Column(name = "Codigo")
    private int codigo;

    @Column(name = "Cedula")
    private int cedula;

    @Column(name = "IdEstaCivi")
    private int idEstaCivi;

    @Column(name = "Sexo")
    private String sexo;

    @Column(name = "FechNaci")
    private String fechNaci;

    @Column(name = "Nombres")
    private String nombres;

    @Column(name = "Apellido1")
    private String apellido1;

    @Column(name = "Apellido2")
    private String apellido2;

    @Column(name = "Direccion")
    private String direccion;

    @Column(name = "Ciudad")
    private String ciudad;

    @Column(name = "Telefono")
    private int telefono;

    @Column(name = "Celular")
    private int celular;

    @Column(name = "UsuarioPoli")
    @NotEmpty(message = "*Porfavor ingresa tu usuario del poli")
    private String usuarioPoli;

    @Column(name = "Password")
    @NotEmpty(message = "*Porfavor ingresa la contraseña del poli")
    private String password;

    @Column(name = "IdPrograma")
    private int idPrograma;

    @Column(name = "Programa")
    private int programa;

    @Column(name = "Facultad")
    private int facultad;

    @Column(name = "Jornada")
    private int jornada;

    @Column(name = "active")
    private int active;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getModalidad() {
        return modalidad;
    }

    public void setModalidad(String modalidad) {
        this.modalidad = modalidad;
    }

    public String getSede() {
        return sede;
    }

    public void setSede(String sede) {
        this.sede = sede;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public int getCedula() {
        return cedula;
    }

    public void setCedula(int cedula) {
        this.cedula = cedula;
    }

    public int getIdEstaCivi() {
        return idEstaCivi;
    }

    public void setIdEstaCivi(int idEstaCivi) {
        this.idEstaCivi = idEstaCivi;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getFechNaci() {
        return fechNaci;
    }

    public void setFechNaci(String fechNaci) {
        this.fechNaci = fechNaci;
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

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public int getCelular() {
        return celular;
    }

    public void setCelular(int celular) {
        this.celular = celular;
    }

    public String getUsuarioPoli() {
        return usuarioPoli;
    }

    public void setUsuarioPoli(String usuarioPoli) {
        this.usuarioPoli = usuarioPoli;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getIdPrograma() {
        return idPrograma;
    }

    public void setIdPrograma(int idPrograma) {
        this.idPrograma = idPrograma;
    }

    public int getPrograma() {
        return programa;
    }

    public void setPrograma(int programa) {
        this.programa = programa;
    }

    public int getFacultad() {
        return facultad;
    }

    public void setFacultad(int facultad) {
        this.facultad = facultad;
    }

    public int getJornada() {
        return jornada;
    }

    public void setJornada(int jornada) {
        this.jornada = jornada;
    }

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }
}

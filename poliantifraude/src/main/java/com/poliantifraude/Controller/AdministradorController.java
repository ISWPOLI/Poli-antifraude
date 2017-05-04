package com.poliantifraude.Controller;

import com.poliantifraude.Model.Administrador;
import com.poliantifraude.Model.Estudiante;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by alejo on 4/26/2017.
 */

@RestController
public class AdministradorController {

    @RequestMapping("/guardarAdministrador")
    public String generarInformacion (){

        /*Administrador AdministradorPrincipal;
        AdministradorPrincipal(new Administrador("098273",<"","">);

        repository.save(new Estudiante("1020011670","Alejandro Daza Truque"));
        repository.save(new Estudiante("1110013086","Sebastian Canasto"));*/


        return "Se crearon los estudiantes";

    }






}

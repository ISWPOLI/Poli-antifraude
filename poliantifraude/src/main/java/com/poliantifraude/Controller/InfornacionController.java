package com.poliantifraude.Controller;

import com.poliantifraude.Model.Estudiante;
import com.poliantifraude.Model.Informacion;
import com.poliantifraude.Repo.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * Created by alejo on 4/24/2017.
 */
@RestController
public class InfornacionController {
    @Autowired
    InformationRepository repository;

    @RequestMapping("/guardarInformacion")
    public String generarInformacion (){
        repository.save(new Informacion("v", "poli Bogota", "1020011670", "1015424062", "1015424062",
                "Soltero", "Masculino", "29/06/1991", "Alejandro", "Daza", "Truque",
                "Diagonal 182 # 20 - 72", "Bogota", "3108011284", "aldazatr"));


        return "Se crearon los estudiantes";

    }

    @RequestMapping("/findInformacion")
    public String findAll(){
        String result = "<html>";

        for(Informacion informacion: repository.findAll()){
            result += "<div>" + informacion.toString() + "</div>";
        }

        return result + "</html>";
    }

}

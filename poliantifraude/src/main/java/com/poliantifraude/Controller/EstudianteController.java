package com.poliantifraude.Controller;

import com.poliantifraude.Model.Customer;
import com.poliantifraude.Model.Estudiante;
import com.poliantifraude.Repo.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by alejo on 4/23/2017.
 */

@Controller
public class EstudianteController {
    @Autowired
    EstudianteRepository repository;

    @RequestMapping("/guardarEstudiantes")
    public String generarInformacion (){

        repository.save(new Estudiante("1020011670","Alejandro Daza Truque"));
        repository.save(new Estudiante("1110013086","Sebastian Canasto"));


        return "Se crearon los estudiantes";

    }

    @RequestMapping("/findEstudiantes")
    public String findAll(){
        String result = "<html>";

        for(Estudiante estudiante : repository.findAll()){
            result += "<div>" + estudiante.toString() + "</div>";
        }

        return result + "</html>";
    }




}

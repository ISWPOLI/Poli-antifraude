package com.poliantifraude.Controller;

import com.poliantifraude.Model.*;
import com.poliantifraude.Repo.EstudianteRepository;
import com.poliantifraude.Repo.ExamanRepositorio;
import com.poliantifraude.Repo.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Hashtable;
import java.util.List;

/**
 * Created by Jerr on 4/25/2017.
 */

@RestController
public class ExamenController {
    @Autowired
    ExamanRepositorio Examen1;

    EstudianteRepository estudiante;

   //El requestMapping que esta jalando
    @RequestMapping("/guardarExamen")

    //alejo Cree dos estuadiantes para crear el examen lo unico es cambiar los datos queme los nobres de las variables con el constructor que cree.
    public String generarExamen (){

        //traer el estudiante del repository de estudiante con su codigo estudiante
        // Estudiante a = new Es
        // EstudianteController -> findby
       ;

        Hashtable<String, Estudiante> hashtableEstudiantes = new Hashtable<String, Estudiante>();
        hashtableEstudiantes.put("1020011670", (Estudiante) estudiante.findByCodigoEstudiante("1020011670"));
        hashtableEstudiantes.put("1020011670", (Estudiante) estudiante.findByCodigoEstudiante("1020011670"));

        // como instancio la lista de estudiantes alejo me ayuda para segui porfavor
        Examen1.save(new Examen(hashtableEstudiantes, new Fraude(), new Date(10000), new Date(10000), 1000000, "id_examen", new Materia("id_maetira", new Profesor(), new Hashtable<Integer, Examen>(),hashtableEstudiantes), new Profesor()));
        return "Se Crea el Examen";
    }



    @RequestMapping("/findEstudiantes")
    public String findAll(){
        String result = "<html>";

        for(Estudiante estudiante : estudiante.findAll()){
            result += "<div>" + estudiante.toString() + "</div>";
        }

        return result + "</html>";
    }





}






package com.poliantifraude.Controller;

import com.poliantifraude.Model.Estudiante;
import com.poliantifraude.Model.Examen;
import com.poliantifraude.Model.Fraude;
import com.poliantifraude.Model.Pregunta;
import com.poliantifraude.Repo.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by alejo on 4/25/2017.
 */
@RestController
public class PreguntaController {
    @Autowired
    PreguntaRepository repository;

    @RequestMapping("/crearPregunta")
    public String crearPregunta(){
        repository.save(new Pregunta("modalidad","Cual es la modalidad "));

    return "se creo pregunta";
    }
}

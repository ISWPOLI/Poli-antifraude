package com.poliantifraude.Controller;

import com.poliantifraude.Model.*;
import com.poliantifraude.Repo.PreguntaRepository;
import com.poliantifraude.Service.UserService;
import javafx.application.Application;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by alejo on 4/25/2017.
 */
@RestController
public class PreguntaController {
    @Autowired
    PreguntaRepository repository1;


    @Autowired
    private UserService userService;


    @RequestMapping("/obtenerPreguntas")
    public String crearPregunta(@ModelAttribute Usuario user){

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getName());
        user =  userService.findByNombreDeUsuario(auth.getName());

        

        return "Preguntas";
    }
}

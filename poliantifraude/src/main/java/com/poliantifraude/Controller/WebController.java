package com.poliantifraude.Controller;

/**
 * Created by alejo on 3/14/2017.
 */
import com.poliantifraude.Model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class WebController {


    @RequestMapping(value={"/","home"})
    public String home(){
        return "home";
    }

    @RequestMapping(value={"/welcome"})
    public String welcome(){
        return "welcome";
    }

    @RequestMapping(value="/admin")
    public String admin(){
        return "admin";
    }

    @RequestMapping(value={"/login"})
    public String login(){
        return "login";
    }


    @RequestMapping(value="/403")
    public String Error403(){
        return "403";
    }

    @RequestMapping(value="/preguntas")
    public String Preguntas(){
        return "Preguntas";
    }
}
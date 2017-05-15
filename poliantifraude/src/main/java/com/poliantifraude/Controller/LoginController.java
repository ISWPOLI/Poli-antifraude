package com.poliantifraude.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by alejo on 5/11/2017.
 */

@Controller
public class LoginController {


    @RequestMapping("/login.html")
    public String login(){
        return "login.html";
    }

    @RequestMapping("/login-error.html")
    public String  loginError(Model model){
        model.addAttribute("loginError", true);
        return "login.html";
    }

}

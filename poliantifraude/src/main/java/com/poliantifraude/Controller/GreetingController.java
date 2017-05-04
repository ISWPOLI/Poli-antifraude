package com.poliantifraude.Controller;

/**
 * Created by alejo on 5/4/2017.
 */
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GreetingController {

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    @RequestMapping("/camera")
    public String camera() {
        return "camera";
    }


}

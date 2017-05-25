package com.poliantifraude.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by alejo on 4/24/2017.
 */

@Controller
public class FotoController {



    @RequestMapping("/tomarFotos")
    public String someOtherPage(HttpServletRequest request, HttpServletResponse response) {
        return "forward:/static/tracking.js-master/examples/face_tag_friends.html";
    }

    @RequestMapping("/camera")
    public String camera() {
        return "camera";
    }





    @RequestMapping("/camera2")
    public String camera2() {
        return "Capturas";
    }




}


package com.poliantifraude.Controller;

import com.poliantifraude.Repo.FotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by alejo on 4/24/2017.
 */

@Controller
@RequestMapping("/path")
public class FotoController {



    @RequestMapping("/tomarFotos")
    public String someOtherPage(HttpServletRequest request, HttpServletResponse response) {
        return "forward:/static/tracking.js-master/examples/face_tag_friends.html";
    }




    }


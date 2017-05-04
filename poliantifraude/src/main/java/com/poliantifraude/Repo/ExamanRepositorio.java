package com.poliantifraude.Repo;

import com.poliantifraude.Model.Estudiante;
import com.poliantifraude.Model.Examen;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by alejo on 4/27/2017.
 */
public interface ExamanRepositorio  extends CrudRepository<Examen, Long> {
    List<Examen> findid_examen(String codigoEstudiante);


}

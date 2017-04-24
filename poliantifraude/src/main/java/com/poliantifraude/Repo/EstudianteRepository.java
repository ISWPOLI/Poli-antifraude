package com.poliantifraude.Repo;

import com.poliantifraude.Model.Customer;
import com.poliantifraude.Model.Estudiante;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by alejo on 4/23/2017.
 */
public interface EstudianteRepository  extends CrudRepository<Estudiante, Long> {
    List<Estudiante> findByCodigoEstudiante(String codigoEstudiante);
}

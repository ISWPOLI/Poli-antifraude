package com.poliantifraude.Repo;

import com.poliantifraude.Model.Informacion;
import com.poliantifraude.Model.Pregunta;
import org.springframework.data.repository.CrudRepository;

import java.util.Hashtable;
import java.util.List;

/**
 * Created by alejo on 4/25/2017.
 */
public interface PreguntaRepository extends CrudRepository<Pregunta, Long> {
    List<Pregunta> findBypregunta(String pregunta);
}

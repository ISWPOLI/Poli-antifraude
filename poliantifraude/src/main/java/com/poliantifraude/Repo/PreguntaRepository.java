package com.poliantifraude.Repo;

import com.poliantifraude.Model.Informacion;
import com.poliantifraude.Model.Pregunta;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Hashtable;
import java.util.List;

/**
 * Created by alejo on 4/25/2017.
 */
@Repository("preguntaRepository")
public interface PreguntaRepository extends CrudRepository<Pregunta, Long> {
    List<Pregunta> findBypregunta(String pregunta);
}

package com.poliantifraude.Repo;

import com.poliantifraude.Model.Customer;
import com.poliantifraude.Model.Estudiante;
import com.poliantifraude.Model.Informacion;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by alejo on 4/24/2017.
 */
public interface InformationRepository extends CrudRepository<Informacion, Long> {
    List<Informacion> findBycodigo(String codigo);
}

package com.poliantifraude.Repo;

import com.poliantifraude.Model.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by alejo on 5/14/2017.
 */

@Repository("estudianteRepository")
public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {
    Estudiante findByUsuarioPoli(String email);
        }
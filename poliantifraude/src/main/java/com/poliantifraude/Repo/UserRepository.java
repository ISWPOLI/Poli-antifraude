package com.poliantifraude.Repo;

import com.poliantifraude.Model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by alejo on 5/25/2017.
 */

@Repository("userRepository")
public interface UserRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByNombreDeUsuario(String nombreDeUsuario);
}

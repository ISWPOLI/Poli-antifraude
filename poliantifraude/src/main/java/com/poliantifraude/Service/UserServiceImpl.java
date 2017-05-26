package com.poliantifraude.Service;

import com.poliantifraude.Model.Role;
import com.poliantifraude.Model.Usuario;
import com.poliantifraude.Repo.RoleRepository;
import com.poliantifraude.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;

/**
 * Created by alejo on 5/25/2017.
 */
@Service("userService")
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;


    @Override
    public Usuario findByNombreDeUsuario(String nombreDeUsuario) {
        return userRepository.findByNombreDeUsuario(nombreDeUsuario);
    }

    @Override
    public void saveUser(Usuario user) {
        user.setContraseña((user.getContraseña()));
        user.setActive(1);
        Role userRole = roleRepository.findByRole("ADMIN");
        userRepository.save(user);
    }

}

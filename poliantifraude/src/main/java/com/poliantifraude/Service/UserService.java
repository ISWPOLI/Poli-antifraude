package com.poliantifraude.Service;

import com.poliantifraude.Model.Usuario;

/**
 * Created by alejo on 5/25/2017.
 */
public interface UserService {
    public Usuario findByNombreDeUsuario(String usuario);
    public void saveUser(Usuario user);
}

package com.poliantifraude.Model;

import javax.persistence.*;

/**
 * Created by alejo on 5/25/2017.
 */
@Entity
@Table(name = "user_roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name="user_role_id")
    private int id;
    @Column(name="username")
    private String username;

    @Column(name="role")
    private String role;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

package com.incident.backend.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
@Table(name = "utilisateur", uniqueConstraints = {
        @UniqueConstraint(columnNames = "Id")})
public class User {
    @Id
    private Long Id;
    @Column(unique=true)
    private String username;

    private String fullname;

    private String password;
    
    @ManyToOne
    private Role role;
    
    private String Organisme;
    private String Email;
    private String Telephone;
    @ManyToOne
    private Secteur secteur;
    @OneToMany(mappedBy = "user")
    private List<Incident> incident;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Secteur getSecteur() {
        return secteur;
    }

    public void setSecteur(Secteur secteur) {
        this.secteur = secteur;
    }

    public User(Long id, String username, String fullname, String password, Role role, String organisme, String email, String telephone, Secteur secteur) {
        Id = id;
        this.username = username;
        this.fullname = fullname;
        this.password = password;
        this.role = role;
        Organisme = organisme;
        Email = email;
        Telephone = telephone;
        this.secteur = secteur;
    }

    @JsonIgnore
    public List<Incident> getIncident() {
        return incident;
    }

    public void setIncident(List<Incident> incident) {
        this.incident = incident;
    }

    public String getOrganisme() {
        return Organisme;
    }

    public void setOrganisme(String organisme) {
        Organisme = organisme;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getTelephone() {
        return Telephone;
    }

    public void setTelephone(String telephone) {
        Telephone = telephone;
    }

    public User() {

    }


    public Secteur getSecteurUser() {
        return secteur;
    }
     @JsonSetter
    public void setSecteurUser(Secteur secteurUser) {
        this.secteur = secteurUser;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getpassword() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }
    
    @JsonSetter
    public void setRole(Role role) {
        this.role = role;
    }
}

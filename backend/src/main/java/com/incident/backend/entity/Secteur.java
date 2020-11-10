package com.incident.backend.entity;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
public class Secteur  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String secteur;

    @OneToMany(mappedBy = "secteur")
    private List<com.incident.backend.entity.Incident> Incident;
    @OneToMany(mappedBy = "secteur",cascade = {CascadeType.ALL})
    private List<User> user;

    @OneToMany(mappedBy = "secteur",cascade = CascadeType.ALL)
    @Fetch(FetchMode.JOIN)
    private Collection<Type> Type;
    @JsonIgnore
    public List<User> getUser() {
        return user;
    }

    public void setUser(List<User> user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public String getSecteur() {
        return secteur;
    }

    public void setId(long id) {
        this.id = id;
    }
    @JsonIgnore
    public List<com.incident.backend.entity.Incident> getIncident() {
        return Incident;
    }
    @JsonSetter
    public void setIncident(List<com.incident.backend.entity.Incident> incident) {
        Incident = incident;
    }
    @JsonIgnore
    public Collection<com.incident.backend.entity.Type> getType() {
        return Type;
    }
    @JsonSetter
    public void setType(Collection<com.incident.backend.entity.Type> type) {
        Type = type;
    }

    public void setSecteur(String secteur) {
        this.secteur = secteur;
    }

    public Secteur() {
    }

    public Secteur(long id, String secteur, List<User> user, Collection<com.incident.backend.entity.Type> type) {
        this.id = id;
        this.secteur = secteur;
        this.user = user;
        Type = type;
    }
}
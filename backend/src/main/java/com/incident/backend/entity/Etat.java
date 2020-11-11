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
public class Etat  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String statut;

    @OneToMany(mappedBy = "statut")
    private List<com.incident.backend.entity.Incident> Incident;
   
    public long getId() {
        return id;
    }

    public String getEtat() {
        return statut;
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
   

    public void setSecteur(String statut) {
        this.statut = statut;
    }

    public Etat() {
    }

    public Etat(long id, String statut) {
        this.id = id;
        this.statut = statut;
    }
}
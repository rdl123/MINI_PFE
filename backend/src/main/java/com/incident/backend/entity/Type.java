package com.incident.backend.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String type;
    @OneToMany(mappedBy = "type")
    private List<Incident> Incident;
    @ManyToOne
    private Secteur secteur;

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }


    public Type() {
    }

    public Type(String type, List<com.incident.backend.entity.Incident> incident, Secteur secteur) {
        this.type = type;
        Incident = incident;
        this.secteur = secteur;
    }

    @JsonIgnore
    public List<com.incident.backend.entity.Incident> getIncident() {
        return Incident;
    }
    @JsonSetter
    public void setIncident(List<com.incident.backend.entity.Incident> incident) {
        Incident = incident;
    }

    public Secteur getSecteur() {
        return secteur;
    }
    @JsonSetter
    public void setSecteur(Secteur secteur) {
        this.secteur = secteur;
    }

    public Type(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
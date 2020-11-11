package com.incident.backend.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
@Table(name = "Incident", uniqueConstraints = {
        @UniqueConstraint(columnNames = "Id")})
public class Incident<geometry> implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private Date date;
    private String description;
    private String ime;
    private float latitude;
    private float longitude;
    
    private String photo;
    private String motif;
    private String geom;
    @ManyToOne
    private Secteur secteur;
    
    @ManyToOne
    private Etat statut;
    
    @ManyToOne
    private User user;

    @ManyToOne
    private Type type;
    @ManyToOne
    private Province province;

    public Incident() {
    }

    public User getUser() {
        return user;
    }
    @JsonSetter
    public void setUser(User user) {
        this.user = user;
    }

    public Incident(long id,Etat statut, Date date, String description, String ime, float latitude, float longitude, String photo, String motif, String geom, Secteur secteur, User user, Type type, Province province) {
        Id = id;
        this.date = date;
        this.description = description;
        this.ime = ime;
        this.latitude = latitude;
        this.longitude = longitude;
        this.statut = statut;
        this.photo = photo;
        this.motif = motif;
        this.geom = geom;
        this.secteur = secteur;
        this.user = user;
        this.type = type;
        this.province = province;
    }

    public String getMotif() {
        return motif;
    }

    public void setMotif(String motif) {
        this.motif = motif;
    }

    public String getGeom() {
        return geom;
    }

    public void setGeom(String geom) {
        this.geom = geom;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public Etat getStatut() {
        return statut;
    }
    @JsonSetter
    public Secteur getSecteur() {
        return secteur;
    }

    public void setSecteur(Secteur secteur) {
        this.secteur = secteur;
    }

    public Type getType() {
        return type;
    }
    @JsonSetter
    public void setType(Type type) {
        this.type = type;
    }

    public Province getProvince() {
        return province;
    }
    @JsonSetter
    public void setProvince(Province province) {
        this.province = province;
    }
    @JsonSetter
    public void setStatut(Etat statut) {
        this.statut = statut;
    }


}

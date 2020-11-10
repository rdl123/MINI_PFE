package com.incident.backend.service.helpers;

import com.incident.backend.entity.Secteur;
import com.incident.backend.entity.Type;

public class SecteurType {
    private Secteur secteur;
    private Type type;

    public SecteurType(Secteur secteur, Type type) {
        this.secteur = secteur;
        this.type = type;
    }

    public SecteurType() {
    }

    public Secteur getSecteur() {
        return secteur;
    }

    public void setSecteur(Secteur secteur) {
        this.secteur = secteur;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}

package com.incident.backend.service.helpers;

import com.incident.backend.entity.Secteur;
import com.incident.backend.entity.Type;

public class StatutSecteurType {
    private Secteur secteur;
    private String statut;
    private Type type;

    public StatutSecteurType() {
    }

    public Secteur getSecteur() {
        return secteur;
    }

    public void setSecteur(Secteur secteur) {
        this.secteur = secteur;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public StatutSecteurType(Secteur secteur, String statut, Type type) {
        this.secteur = secteur;
        this.statut = statut;
        this.type = type;
    }
}

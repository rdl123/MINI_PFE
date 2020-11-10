package com.incident.backend.service.helpers;

import com.incident.backend.entity.Secteur;

public class StatutSecteur {
    private String statut;
    private Secteur secteur;

    public StatutSecteur() {
    }

    public StatutSecteur(String statut, Secteur secteur) {
        this.statut = statut;
        this.secteur = secteur;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public Secteur getSecteur() {
        return secteur;
    }

    public void setSecteur(Secteur secteur) {
        this.secteur = secteur;
    }
}

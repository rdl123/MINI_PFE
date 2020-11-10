package com.incident.backend.service.helpers;

import com.incident.backend.entity.Province;
import com.incident.backend.entity.Secteur;

public class SecteurProvince {
    private Secteur secteur;
    private Province province;

    public SecteurProvince(Secteur secteur, Province province) {
        this.secteur = secteur;
        this.province = province;
    }

    public SecteurProvince() {
    }

    public Secteur getSecteur() {
        return secteur;
    }

    public void setSecteur(Secteur secteur) {
        this.secteur = secteur;
    }

    public Province getProvince() {
        return province;
    }

    public void setProvince(Province province) {
        this.province = province;
    }
}

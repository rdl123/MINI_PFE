package com.incident.backend.service.helpers;

import com.incident.backend.entity.Province;
import com.incident.backend.entity.Secteur;
import com.incident.backend.entity.Type;

public class IncidentInfos {
    private Secteur secteur;
    private Province province;
    private Type type;

    public IncidentInfos() {
    }

    public IncidentInfos(Secteur secteur, Province province, Type type) {
        this.secteur = secteur;
        this.province = province;
        this.type = type;
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

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}

package com.incident.backend.service.helpers;

import com.incident.backend.entity.Province;

public class StatutProvince {

    private String statut;
    private Province province;

    public StatutProvince() {
    }

    public StatutProvince(String statut, Province province) {
        this.statut = statut;
        this.province = province;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public Province getProvince() {
        return province;
    }

    public void setProvince(Province province) {
        this.province = province;
    }
}

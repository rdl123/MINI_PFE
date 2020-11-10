package com.incident.backend.service.helpers;

import com.incident.backend.entity.Type;

public class StatutType {
    private String statut;
    private Type type;

    public StatutType() {
    }

    public StatutType(String statut, Type type) {
        this.statut = statut;
        this.type = type;
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
}

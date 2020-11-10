package com.incident.backend.service;

import java.util.List;

import com.incident.backend.entity.Secteur;


public interface SecteurService  {
    public void save(Secteur secteur );
    public void deleteByID(long id );
    public List<Secteur> findAll() ;
    public  Secteur findByID(long id );
}


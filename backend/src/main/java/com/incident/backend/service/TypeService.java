package com.incident.backend.service;

import java.util.List;

import com.incident.backend.entity.Secteur;
import com.incident.backend.entity.Type;


public interface TypeService {
    public void save(Type type);
    public void deleteByID(long id );
    public List<Type> findAll() ;
    public  Type findByID(long id );
    public List <Type> findBySecteur( Secteur secteur);
}

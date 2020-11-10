package com.incident.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incident.backend.entity.Secteur;
import com.incident.backend.entity.Type;



public interface TypeRepository extends JpaRepository<Type,Long> {
    public Type findById(long id);
    public List<Type> findBySecteur(Secteur secteur);
}

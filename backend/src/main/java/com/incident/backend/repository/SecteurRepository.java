package com.incident.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incident.backend.entity.Secteur;


public interface SecteurRepository extends JpaRepository<Secteur,Long> {
    public Secteur findById(long id);
}

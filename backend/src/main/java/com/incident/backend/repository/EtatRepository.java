package com.incident.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incident.backend.entity.Etat;



public interface EtatRepository extends JpaRepository<Etat,Long> {
    public Etat findById(long id);
}
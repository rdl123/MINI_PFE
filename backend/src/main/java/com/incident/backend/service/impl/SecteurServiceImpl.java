package com.incident.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.incident.backend.entity.Secteur;
import com.incident.backend.repository.SecteurRepository;
import com.incident.backend.service.SecteurService;


@Service
public class SecteurServiceImpl implements SecteurService {

    @Autowired
    private SecteurRepository secteurRepository;
    @Override
    public Secteur findByID(long id) {
        return  secteurRepository.findById(id);
    }

    @Override
    public List<Secteur> findAll() {
        return secteurRepository.findAll();
    }

    @Override
    public void save(Secteur secteur) {
        secteurRepository.save(secteur);

    }

    @Override
    public void deleteByID(long Id) {
        secteurRepository.deleteById(Id);
    }
}


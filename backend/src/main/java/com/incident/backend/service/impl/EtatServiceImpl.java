package com.incident.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.incident.backend.entity.Etat;
import com.incident.backend.repository.EtatRepository;
import com.incident.backend.service.EtatService;


@Service
public class EtatServiceImpl implements EtatService {

    @Autowired
    private EtatRepository roleRepository;
    @Override
    public Etat findByID(long id) {
        return  roleRepository.findById(id);
    }

    @Override
    public List<Etat> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public void save(Etat role) {
        roleRepository.save(role);

    }

    @Override
    public void deleteByID(long Id) {
        roleRepository.deleteById(Id);
    }
}

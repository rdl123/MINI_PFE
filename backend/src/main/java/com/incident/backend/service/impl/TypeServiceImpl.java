package com.incident.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.incident.backend.entity.Secteur;
import com.incident.backend.entity.Type;
import com.incident.backend.repository.TypeRepository;
import com.incident.backend.service.TypeService;



@Service
public class TypeServiceImpl implements TypeService {

    @Autowired
    private TypeRepository typeRepository;
    @Override
    public Type findByID(long id) {
        return typeRepository.findById(id);
    }

    @Override
    public List<Type> findBySecteur(Secteur secteur) {
        return typeRepository.findBySecteur(secteur);
    }

    @Override
    public List<Type> findAll() {
        return typeRepository.findAll();
    }

    @Override
    public void save(Type type) {
        typeRepository.save(type);

    }

    @Override
    public void deleteByID(long Id) {
        typeRepository.deleteById(Id);
    }
}

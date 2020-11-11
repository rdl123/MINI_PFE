package com.incident.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.incident.backend.entity.Role;
import com.incident.backend.entity.Secteur;
import com.incident.backend.repository.RoleRepository;
import com.incident.backend.repository.SecteurRepository;
import com.incident.backend.service.RoleService;
import com.incident.backend.service.SecteurService;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;
    @Override
    public Role findByID(long id) {
        return  roleRepository.findById(id);
    }

    @Override
    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public void save(Role role) {
        roleRepository.save(role);

    }

    @Override
    public void deleteByID(long Id) {
        roleRepository.deleteById(Id);
    }
}

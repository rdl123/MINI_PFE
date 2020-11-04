package com.incident.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.incident.backend.entity.Province;
import com.incident.backend.repository.ProvinceRepository;
import com.incident.backend.service.ProvinceService;



@Service
public class ProvinceServiceImpl implements ProvinceService {
    @Autowired
    private ProvinceRepository provinceRepository;
    @Override
    public Province findByID(long id) {
        return  provinceRepository.findById(id);
    }

    @Override
    public List<Province> findAll() {
        return provinceRepository.findAll();
    }

    @Override
    public void save(Province province) {
        provinceRepository.save(province);

    }

    @Override
    public void deleteByID(long Id) {
        provinceRepository.deleteById(Id);
    }
}

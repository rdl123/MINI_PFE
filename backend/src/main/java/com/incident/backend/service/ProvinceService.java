package com.incident.backend.service;

import java.util.List;

import com.incident.backend.entity.Province;


public interface ProvinceService {
    public void save(Province province);
    public void deleteByID(long id );
    public List<Province> findAll() ;
    public  Province findByID(long id );
}


package com.incident.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incident.backend.entity.Province;
import com.incident.backend.service.ProvinceService;

@RequestMapping(value = "Province")
@CrossOrigin("*")
@RestController
public class ProvinceController {

    @Autowired
    ProvinceService provinceService;
    @GetMapping(value = "/find/all")
    public List<Province> findAll(){
        return provinceService.findAll();
    }
    @GetMapping(value = "/find/{id}")
    public Province findByID(@PathVariable long id ){
        return provinceService.findByID(id);
    }



}

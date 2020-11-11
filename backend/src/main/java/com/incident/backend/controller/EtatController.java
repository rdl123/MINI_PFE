package com.incident.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incident.backend.entity.Etat;
import com.incident.backend.service.EtatService;

@RequestMapping(value = "Etat")
@CrossOrigin("*")
@RestController
public class EtatController {
	@Autowired
    EtatService etatService;
    @GetMapping(value = "/find/all")
    public List<Etat> findAll(){
        return etatService.findAll();
    }
    @GetMapping(value = "/find/{id}")
    public Etat findByID(@PathVariable long id ){
        return etatService.findByID(id);
    }
}
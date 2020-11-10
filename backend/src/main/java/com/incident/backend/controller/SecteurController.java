package com.incident.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incident.backend.entity.Secteur;
import com.incident.backend.service.SecteurService;



@RequestMapping(value = "Secteur")
@CrossOrigin("*")
@RestController
public class SecteurController {

    @Autowired
    SecteurService secteurService;
    @GetMapping(value = "/find/all")
    public List<Secteur> findAll(){
        return secteurService.findAll();
    }
    @GetMapping(value = "/find/{id}")
    public Secteur findByID(@PathVariable long id ){
        return secteurService.findByID(id);
    }
}

package com.incident.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incident.backend.entity.Secteur;
import com.incident.backend.entity.Type;
import com.incident.backend.service.SecteurService;
import com.incident.backend.service.TypeService;

@RequestMapping(value = "Type")
@CrossOrigin("*")
@RestController
public class TypeController {

    @Autowired
    TypeService typeService;
    @Autowired
    SecteurService secteurService;
    @GetMapping(value = "/find/all")
    public List<Type> findAll(){
        return typeService.findAll();
    }
    @GetMapping(value = "/find/{id}")
    public Type findByID(@PathVariable long id ){
        return typeService.findByID(id);
    }
    @GetMapping(value = "/find/secteur/{id}")
    public List<Type> findSecteur(@PathVariable long id) {
        Secteur secteur= secteurService.findByID(id);

        return typeService.findBySecteur(secteur);
    }
}

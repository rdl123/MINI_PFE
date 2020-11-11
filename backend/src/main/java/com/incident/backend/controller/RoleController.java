package com.incident.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incident.backend.entity.Role;
import com.incident.backend.service.RoleService;

@RequestMapping(value = "Role")
@CrossOrigin("*")
@RestController
public class RoleController {
	@Autowired
    RoleService roleService;
    @GetMapping(value = "/find/all")
    public List<Role> findAll(){
        return roleService.findAll();
    }
    @GetMapping(value = "/find/{id}")
    public Role findByID(@PathVariable long id ){
        return roleService.findByID(id);
    }
}

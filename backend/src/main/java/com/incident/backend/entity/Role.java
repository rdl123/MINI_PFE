package com.incident.backend.entity;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
public class Role  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String role;

    @OneToMany(mappedBy = "role")
    private List<com.incident.backend.entity.User> User;
   
    public long getId() {
        return id;
    }

    public String getRole() {
        return role;
    }
    public void setRole(String role) {
    	this.role=role;
    }

    public void setId(long id) {
        this.id = id;
    }
    @JsonIgnore
    public List<com.incident.backend.entity.User> getUser() {
        return User;
    }
    @JsonSetter
    public void setIncident(List<com.incident.backend.entity.User> user) {
        User = user;
    }
   

 

    public Role() {
    }

    public Role(long id, String role) {
        this.id = id;
        this.role = role;
    }
}
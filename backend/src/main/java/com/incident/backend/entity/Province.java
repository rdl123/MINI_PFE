package com.incident.backend.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
@Table(name = "province", uniqueConstraints = {
        @UniqueConstraint(columnNames = "id")})
public class Province {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true,nullable = false)
    private Long  id;
    @Column(name = "name", unique = true,nullable = false)
    private String province;
  //  @OneToMany(mappedBy = "province")
    
   // private List<com.incident.backend.entity.Incident> Incident;

    private String geometry;

    public Province(String province) {
        this.province = province;
    }

    public Long getId() {
        return id;
    }
 /*   @JsonIgnore
    public List<com.example.demo.persistance.entities.Incident> getIncident() {
        return Incident;
    }
      @JsonSetter
    public void setIncident(List<com.example.demo.persistance.entities.Incident> incident) {
        Incident = incident;
    }*/

    public void setId(Long id) {
        this.id = id;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }
    public String getGeometry() {
        return geometry;
    }

    public void setGeometry(String geometry) {
        this.geometry = geometry;
    }

    public Province() {
    }
}


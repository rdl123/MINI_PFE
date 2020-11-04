package com.incident.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incident.backend.entity.Province;


public interface ProvinceRepository extends JpaRepository<Province,Long> {
public Province findById(long id);
}

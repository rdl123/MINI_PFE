package com.incident.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incident.backend.entity.Role;

public interface RoleRepository extends JpaRepository<Role,Long> {
    public Role findById(long id);
}
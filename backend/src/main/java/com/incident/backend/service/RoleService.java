package com.incident.backend.service;

import java.util.List;

import com.incident.backend.entity.Role;

public interface RoleService {
	public void save(Role role );
    public void deleteByID(long id );
    public List<Role> findAll() ;
    public  Role findByID(long id );
}

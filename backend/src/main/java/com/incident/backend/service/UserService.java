package com.incident.backend.service;

import java.util.List;

import com.incident.backend.entity.User;


public interface UserService {
    public void save(User user);
    public void deleteByID(long id );
    public List<User> findAll() ;
    User findUserByUsernameAndPassword(String username, String password);
    List  findProfBySect();
    public User findById(long Id);

}

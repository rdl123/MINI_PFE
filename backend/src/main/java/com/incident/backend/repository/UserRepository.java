package com.incident.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.incident.backend.entity.User;


public interface UserRepository extends JpaRepository<User,Long> {
    List<User> findByUsernameAndPassword(String username, String password);
    public User findById(long Id);
    @Query("select s.secteur,u.id,u.fullname from User u join  Secteur s on  u.secteur.id = s.id ")
    List  findProfBySect();
    @Query("select r.role,u.id,u.fullname from User u join  Role r on  u.role.id = r.id ")
    List  findProfBySectRole();
}
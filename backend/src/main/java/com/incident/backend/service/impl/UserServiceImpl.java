package com.incident.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.incident.backend.entity.User;
import com.incident.backend.repository.UserRepository;
import com.incident.backend.service.UserService;



@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public void deleteByID(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findUserByUsernameAndPassword(String username, String password) {
        List<User> users = userRepository.findByUsernameAndPassword(username, password);
        if (users.size() != 0) {
            return users.get(0);
        }
        return null;
    }

    @Override
    public List findProfBySect() {
        return userRepository.findProfBySect();
    }

    @Override
    public User findById(long Id) {
        return userRepository.findById(Id);
    }


}

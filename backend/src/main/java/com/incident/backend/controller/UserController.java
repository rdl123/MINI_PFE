package com.incident.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.incident.backend.entity.User;
import com.incident.backend.service.UserService;
import com.incident.backend.service.helpers.UserInfos;



@RequestMapping(value = "user")
@CrossOrigin("*")
@RestController
public class UserController {

    @Autowired
    private UserService userServices;

    @PostMapping("/login")
    public User login(@RequestBody UserInfos userInfos) {
        return userServices.findUserByUsernameAndPassword(userInfos.getUsername(), userInfos.getPassword());
    }
    @PostMapping(value = "/add")
    public void save(@RequestBody User user){
        userServices.save(user);
    }
    @GetMapping(value = "/delete/{ID}")
    public String deleteByID (@PathVariable long ID) {

        userServices.deleteByID(ID);
        return  "deleted success" ;}

    @PostMapping("/update")//replace an existing Resource entirely  // @PatchMapping partial update
    public String update(@RequestBody  User user) {

        userServices.save(user);
        return "updated  success";
    }
    @GetMapping(value = "/find")
    public List<User> findAll(){
        return userServices.findAll();
    }

    @GetMapping(value = "/findProfSect")
    public List findProfBySect(){
        return userServices.findProfBySect();
    }
    @GetMapping(value = "/find/{id}")
    public User findByID (@PathVariable long id ){

        return userServices.findById(id);
    }





}

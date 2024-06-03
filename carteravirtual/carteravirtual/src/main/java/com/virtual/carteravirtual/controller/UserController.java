package com.virtual.carteravirtual.controller;

import com.virtual.carteravirtual.entity.User;
import com.virtual.carteravirtual.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/User")
public class UserController {
 @Autowired
 private UserService userService;

    @PostMapping("/guardausuarios")
    public User createUser(@RequestBody User user) {
     return userService.createUser(user);
    }
}

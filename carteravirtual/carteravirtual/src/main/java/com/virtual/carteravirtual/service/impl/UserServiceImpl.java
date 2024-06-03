package com.virtual.carteravirtual.service.impl;

import com.virtual.carteravirtual.entity.User;
import com.virtual.carteravirtual.repository.UserRepository;
import com.virtual.carteravirtual.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }
}

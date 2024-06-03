package com.virtual.carteravirtual.repository;

import com.virtual.carteravirtual.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}

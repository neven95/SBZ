package com.sbnz.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.doctor.model.User;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface UserRepository extends JpaRepository<User, Long> {

	public User getUserByUserUsername(String username);

}

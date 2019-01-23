/**
 * 
 */
package com.sbnz.doctor.interfaces.services;

import com.sbnz.doctor.dto.UserDTO;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface UserServiceInterface extends ServiceInterface<UserDTO> {

	public UserDTO getUserByUsername(String username);
}

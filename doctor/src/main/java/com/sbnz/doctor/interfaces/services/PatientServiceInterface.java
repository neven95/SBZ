/**
 * 
 */
package com.sbnz.doctor.interfaces.services;

import com.sbnz.doctor.dto.PatientDTO;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface PatientServiceInterface extends ServiceInterface<PatientDTO> {

	public PatientDTO getAny();
}

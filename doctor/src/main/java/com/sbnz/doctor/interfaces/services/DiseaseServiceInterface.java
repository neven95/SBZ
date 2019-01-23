package com.sbnz.doctor.interfaces.services;

import com.sbnz.doctor.dto.DiseaseDTO;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface DiseaseServiceInterface extends ServiceInterface<DiseaseDTO> {

	public DiseaseDTO getByCode(String code);

}

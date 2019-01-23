package com.sbnz.doctor.interfaces.services;

import java.util.List;

import com.sbnz.doctor.dto.IngredientDTO;
import com.sbnz.doctor.dto.MedicineDTO;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface MedicineServiceInterface extends ServiceInterface<MedicineDTO> {

	public List<IngredientDTO> getIngrediens(MedicineDTO m);
}

package com.sbnz.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.doctor.model.Disease;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface DiseaseRepository extends JpaRepository<Disease, Long> {

	public Disease getDiseaseByDiseaseCode(String code);
}

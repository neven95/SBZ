package com.sbnz.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.doctor.model.Symptom;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface SymptomRepository extends JpaRepository<Symptom, Long> {

	public Symptom getSymptomBySymCode(String code);
}

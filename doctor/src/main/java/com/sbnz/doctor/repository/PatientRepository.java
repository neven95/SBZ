package com.sbnz.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.doctor.model.Patient;

/**
 * 
 * @author Neven Jovic ra18-2014
 *
 */
public interface PatientRepository extends JpaRepository<Patient, Long> {

}

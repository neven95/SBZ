package com.sbnz.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.doctor.model.Medicine;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

}

/**
 * 
 */
package com.sbnz.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.doctor.model.Ingredient;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

}

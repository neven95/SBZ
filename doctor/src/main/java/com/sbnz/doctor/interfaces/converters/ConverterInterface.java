/**
 * 
 */
package com.sbnz.doctor.interfaces.converters;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public interface ConverterInterface<D, E> {

	public D entityToDto(E entity);

	public E DtoToEntity(D dto);

}

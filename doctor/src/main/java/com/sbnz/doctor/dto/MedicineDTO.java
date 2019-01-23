package com.sbnz.doctor.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author Neven Jovic ra18-2014
 *
 */
public class MedicineDTO {

	private long medicineId;
	@NotNull
	@Size(max = 150)
	private String medicineName;
	@NotNull
	private char medicineType;

	public MedicineDTO() {
	}

	public MedicineDTO(long medicineId, String medicineName, char medicineType) {
		this.medicineId = medicineId;
		this.medicineName = medicineName;
		this.medicineType = medicineType;
	}

	public long getMedicineId() {
		return medicineId;
	}

	public void setMedicineId(long medicineId) {
		this.medicineId = medicineId;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public char getMedicineType() {
		return medicineType;
	}

	public void setMedicineType(char medicineType) {
		this.medicineType = medicineType;
	}
}

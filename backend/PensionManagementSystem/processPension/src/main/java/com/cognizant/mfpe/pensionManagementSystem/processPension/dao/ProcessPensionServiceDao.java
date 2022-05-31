package com.cognizant.mfpe.pensionManagementSystem.processPension.dao;

import java.util.Date;

//import java.util.Date;

import com.cognizant.mfpe.pensionManagementSystem.processPension.model.Pensioner;

public interface ProcessPensionServiceDao {
	public boolean validatePensionerDetails(String token, long aadhaarNumber);

	public Pensioner calculatePension(String token, long aadhaarNumber);

	public boolean updatePensioner(String token, Pensioner pensioner);

	public Boolean isSessionValid(String token);

	/**
	 * This method validates pensioner details
	 * 
	 * @param String token, name, dob, pan, aadhaar number, pension type
	 * @return Boolean
	 */
	boolean validatePensionerDetails(String token, String name, Date dob, String pan, long aadhaarNumber,
			String pensionType);

}

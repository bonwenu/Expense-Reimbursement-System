package com.revature.services;

import java.util.List;

import com.revature.models.Request;

public interface RequestService {

	List<Request> getAllRequests();
	public List<Request> getRequestsById(int id);
	public List<Request> getAllPending();
	public List<Request> getAllNonPending();
	public List<Request> getPendingById(int id) ;
	public List<Request> getNonPendingById(int id); 
	public void createRequest(Request r);
	public void updateRequest(Request r);
	public void deleteRequest(int id);
}

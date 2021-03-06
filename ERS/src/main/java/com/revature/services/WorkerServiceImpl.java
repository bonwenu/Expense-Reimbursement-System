package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.daos.WorkerDAO;
import com.revature.models.Worker;

@Service
public class WorkerServiceImpl implements WorkerService {
	
	@Autowired
	private WorkerDAO wd;

	@Override
	@Transactional
	public List<Worker> getAllWorkers() {
		
		return wd.getAllWorkers();
	}
	
	@Override
	@Transactional
	public Worker getWorkerById(int id) {
		
		return wd.getWorkerById(id);
	}

	@Override
	@Transactional
	public Worker createWorker(Worker w) {
		
		return wd.createWorker(w);	
	}
	
	@Override
	@Transactional
	public Worker updateWorkerInfo(Worker w) {

		return wd.updateWorkerInfo(w);
	}

}

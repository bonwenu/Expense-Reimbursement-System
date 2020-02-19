package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.daos.WorkerDAO;
import com.revature.daos.WorkerDAOImpl;
import com.revature.models.Worker;
import com.revature.services.WorkerService;
import com.revature.services.WorkerServiceImpl;

@RestController
@RequestMapping("/api/workers")
public class WorkerController {
	
	@Autowired
	private WorkerService ws;
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Worker> placeHolder() {

		return ws.getAllWorkers();
	}
	
	@GetMapping("/home")
	public String returnHomePage() {
		return "Home";
	}
	
	@GetMapping("/home2")
	public List<Worker> pp() {
		
		WorkerDAO wd = new WorkerDAOImpl();

		return wd.getAllWorkers();
	}
}

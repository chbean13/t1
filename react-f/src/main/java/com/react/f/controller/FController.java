package com.react.f.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class FController {

	@PostMapping("/ip")
	public ResponseEntity<String> ip(HttpServletRequest request) {
		//테스트용 
		return ResponseEntity.ok(request.getRemoteAddr());
	}

}

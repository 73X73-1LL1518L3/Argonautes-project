package com.crew.Argonautes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/argonautes")
public class ArgonauteController {

    private final ArgonauteService argonauteService;

    @Autowired
    public ArgonauteController(ArgonauteService argonauteService) {
        this.argonauteService = argonauteService;
    }

    //GET - READ
    @GetMapping("/all")
    public List<Argonaute> getArgonautes() {
        return argonauteService.findAllArgonautes();
    }

    //POST - CREATE
    @PostMapping("/add")
    public Argonaute addArgonauteController(@RequestBody Argonaute argonaute) {
        return argonauteService.addArgonauteService(argonaute);
    }

    //PUT
    @PutMapping("/update/{id}")
    public Argonaute updateArgonauteController (
            @PathVariable ("id") Long id,
            @RequestBody Argonaute argonaute) {
        return argonauteService.updateArgonauteService(id, argonaute);
    }

    //DELETE
    @DeleteMapping("/delete/{id}")
    public void deleteArgonauteController(@PathVariable ("id") Long id) {
        argonauteService.deleteArgonauteService(id);
    }
}

package com.crew.Argonautes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArgonauteService {

    private final ArgonauteRepository argonauteRepository;

    @Autowired
    public ArgonauteService(ArgonauteRepository argonauteRepository) {
        this.argonauteRepository = argonauteRepository;
    }

    //GET - READ
    public List<Argonaute> findAllArgonautes() {
        return argonauteRepository.findAll();
    }

    //POST - CREATE
    public Argonaute addArgonauteService(Argonaute argonaute) {
        return argonauteRepository.save(argonaute);
    }

    //PUT - UPDATE
    public Argonaute updateArgonauteService(Long id, Argonaute argonaute) {
        Argonaute argonauteFoundToUpdate = argonauteRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("id " + id + " not found"));
        argonauteFoundToUpdate.setFirstname(argonaute.getFirstname());

        return argonauteRepository.save(argonauteFoundToUpdate);
    }

    //DEL - DELETE
    public void deleteArgonauteService(Long id) {
        argonauteRepository.deleteById(id);
    }
}

package com.nuridamteo.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nuridamteo.backend.entities.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
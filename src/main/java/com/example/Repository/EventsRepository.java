package com.example.Repository;


import com.example.Entity.Events;
import com.example.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;


@Repository
public interface EventsRepository extends JpaRepository<Events, Long> {

    List<Events> findByEventcity(String eventcity);
    List<Events> findByEventnameAndActiveTrue(String eventname);
    List<Events> findByEventdate(LocalDate eventdate);
    List<Events> findByEventcityAndEventdateIn(String city, LocalDate date);
    List<Events> findByEventcityAndEventdateAndDeletedFalse(String city, LocalDate date);
    long countByActiveTrueOrActiveFalse();
    long countByActiveTrue();
    List<Events> findAllByOrganizerid(Users users);




}

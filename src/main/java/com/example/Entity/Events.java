package com.example.Entity;


import org.hibernate.annotations.ColumnDefault;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table (name = "Events")
public class Events {


    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long eventid;

    @Size(min = 2,max = 15)
    private  String eventname;
    @DateTimeFormat
    private LocalDate eventdate;
    @Max(300)
    private long eventcapacity;
    private boolean active;
    private boolean deleted ;
    @Size(min = 2,max = 15)
    private String eventcity;
    private String eventtime;
    private long ecount = 0;

    private long count = 0;

    // User [ Organizer ] Object.

    @ManyToOne //(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER)
    //@JoinColumn (name = "User_Id")//(name = "Organizer_Id", referencedColumnName = "User_Id")
    private Users organizerid;

    @OneToMany//(mappedBy = "commentid")
    private List<Comment> comments;


    // Getters and Setters for organizer.


    public Events() { }

    public long getEventid() {
        return eventid;
    }

    public void setEventid(long eventid) {
        this.eventid = eventid;
    }

    public String getEventname() {
        return eventname;
    }

    public void setEventname(String eventname) {
        this.eventname = eventname;
    }

    public LocalDate getEventdate() {
        return eventdate;
    }

    public void setEventdate(LocalDate eventdate) {
        this.eventdate = eventdate;
    }

    public long getEventcapacity() {
        return eventcapacity;
    }

    public void setEventcapacity(long eventcapacity) {
        this.eventcapacity = eventcapacity;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public String getEventcity() {
        return eventcity;
    }

    public void setEventcity(String eventcity) {
        this.eventcity = eventcity;
    }

    public Users getOrganizerid() {
        return organizerid;
    }

    public void setOrganizerid(Users organizerid) {
        this.organizerid = organizerid;
    }

    public String getEventtime() {
        return eventtime;
    }

    public void setEventtime(String eventtime) {
        this.eventtime = eventtime;
    }

    public long getEcount() {
        return ecount;
    }

    public void setEcount(long ecount) {
        this.ecount = ecount;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }
}

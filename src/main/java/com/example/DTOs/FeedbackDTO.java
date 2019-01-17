package com.example.DTOs;

import com.example.Entity.Ticket;

import javax.validation.constraints.Max;
import javax.validation.constraints.Size;

public class FeedbackDTO {

    @Max(5)
    private int feedbackrate;
    @Size(min = 1,max = 255)
    private String feedbackcomment;
    private TicketDTO ticketid;

    private String eventname;
    private String username;

    public int getFeedbackrate() {
        return feedbackrate;
    }

    public void setFeedbackrate(int feedbackrate) {
        this.feedbackrate = feedbackrate;
    }

    public String getFeedbackcomment() {
        return feedbackcomment;
    }

    public void setFeedbackcomment(String feedbackcomment) {
        this.feedbackcomment = feedbackcomment;
    }

    public TicketDTO getTicketid() {
        return ticketid;
    }

    public void setTicketid(TicketDTO ticketid) {
        this.ticketid = ticketid;
    }

    public String getEventname() {
        return eventname;
    }

    public void setEventname(String eventname) {
        this.eventname = eventname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

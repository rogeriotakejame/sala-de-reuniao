package com.digital.crud.saladereuniao.saladereuniao.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "meetingroom")
@NoArgsConstructor
@AllArgsConstructor
public class Room { 

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Getter
    @Setter
    @Column(name = "name", nullable = false)
    private String name;
    
    @Getter
    @Setter
    @Column(name = "date", nullable = false)
    private String date;
    
    @Getter
    @Setter
    @Column(name = "startHour", nullable = false)
    private String startHour;
    
    @Getter
    @Setter
    @Column(name = "endHour", nullable = false)
    private String endHour;

    public String toString(){
        return "Room [id="+id+
            ",name="+name+
            ",startHour="+startHour+
            ",endHour="+endHour+
            "]";
    } 
}

package com.example.Repository;

import com.example.Entity.Roles;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RolesRepository extends CrudRepository<Roles, String> {
//    Roles findByRolename(String rolename);


}

package com.example.WebService;

import com.example.Configs.MyUserDetails;
import com.example.DTOs.LoginBody;
import com.example.DTOs.UsersDTO;
import com.example.Servicee.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping
public class userLoginController {
    //    @Autowired
//    private MyUserDetails myUserDetails;
    @Autowired
    private UserService userService;


//    @GetMapping ("/userLogin")
//    public ResponseEntity login(Principal principal){
//        UserDetails userDetails = myUserDetails.loadUserByUsername(principal.getName());

//        Map<String,Object> map = new HashMap<>();
//        map.put("Role", userService.findByUser(principal.getName()).getRolename());
//        map.put("userId",userService.findByUserName(principal.getName()).getUserid());
//        return ResponseEntity.ok(userService.findByUser(principal.getName()));
//        return ResponseEntity.ok(map);
//    }

    @PostMapping("/userLogin")
    public ResponseEntity login(@RequestBody LoginBody loginBody) {
        UsersDTO usersDTO = userService.findByUserName(loginBody.getUsername());
        if (userService.isUserDeleted(usersDTO.getUserid()) && new BCryptPasswordEncoder().matches(loginBody.getPassword(), usersDTO.getPassword())) {

            Map<String, Object> map = new HashMap<>();
            map.put("Role", usersDTO.getRolename());
            map.put("userId", usersDTO.getUserid());
            return ResponseEntity.ok(map);

        }
        throw new RuntimeException("login error");
    }
}

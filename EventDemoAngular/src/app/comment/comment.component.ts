import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authintication/authentication.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Comment } from 'src/app/comment/comment.model';
import { ActivatedRoute } from '@angular/router';
import { commentService } from 'src/app/comment/commentService';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private authService : AuthenticationService, private route : ActivatedRoute, private commentService : commentService) { }

  id : number;
  sub : Subscription;
  comment$:Comment[];
  allComment:Comment[];

  ngOnInit() {
    
    // this.sub = this.route.params.subscribe((v : any)=>{
    //   this.id = v.commentid;
    //   console.log(v.id);
    // });
  
   
  
    this.getComments();
  this.getAllComments();
  }


  getComments(){
    this.commentService.getUserComment(this.authService.getId()).subscribe(
      commentData => {
        this.comment$ = commentData;
      },
      err => console.log(err),
      () => console.log('Loading user comments complete...')
    );
  }
  getAllComments(){
    this.commentService.getComments().subscribe(
      commentData => {
        this.allComment= commentData;
      },
      err => console.log(err),
      () => console.log('Loading comments complete...')
    );
  }

  
  
  isOrgAndUser(){
    if(this.authService.getrole() === 'ROLE_ORG' && this.authService.getrole() === 'ROLE_USER'){
      // console.log(this.authService.getrole());
    return true;
    }
  }
    isAdmin() {
      if(this.authService.getrole() === 'ROLE_ADMIN'){
        // console.log(this.authService.getrole());
      return true;
      }
    }
      isUser(){
        if(this.authService.getrole() === 'ROLE_USER'){
        return true;
        }
      }
      
  
  
  }

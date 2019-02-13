import {User} from '../user/user.model';


export interface Comment {
    commentid: number,
    ccomment: string,
    // cdate:Date;
    eventrate: number,
    eventname: string,
    count: number,
   userid:User
}

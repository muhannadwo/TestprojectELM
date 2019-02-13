import {User} from '../user/user.model';
import {Events} from '../event/event.model';

export interface Feedback {
  feedbackrate: number,
  feedbackcomment: string,
  username : string,
  eventname : string,
  orgname: Events
}

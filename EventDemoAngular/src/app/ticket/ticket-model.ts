import {User} from '../user/user.model';
import {Events} from '../event/event.model';

export interface Ticket {

  ticketid: number
  eventname: string;
  eventdate: string;
  count: number,
  attenderid: User,
  eventsid: Events,
  attended: boolean;
}

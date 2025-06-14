import { Inngest } from 'inngest';

export const inngest = new Inngest({
  id: 'Elastic Habits',
  eventKey: process.env.INNGEST_EVENT_KEY,
});

// Later, functions can be defined here or imported and added to the serve handler in route.ts

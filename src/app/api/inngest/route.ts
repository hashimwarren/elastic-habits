import { Inngest } from 'inngest';
import { serve } from 'inngest/next';

// Create a client to send and receive events
export const inngest = new Inngest({ id: 'Elastic Habits' });

// Create an API that serves zero functions
export default serve({
  client: inngest,
  functions: [
    /* your functions will be imported here later */
  ],
});

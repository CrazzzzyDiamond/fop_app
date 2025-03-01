import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

import Paper from '@/components/Paper';

export default function Handler(props: unknown) {
  return (
    <Paper>
      <StackHandler 
        fullPage={false} 
        app={stackServerApp} 
        routeProps={props} 
      />
    </Paper>
  );
}

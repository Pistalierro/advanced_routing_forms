import {CanDeactivateFn} from '@angular/router';
import {CanComponentDeactivate} from './canComponentDeactivate';

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate, currentRoute, currentState, nextState) => {

  return component.canDeactivate ? component.canDeactivate() : true;
};

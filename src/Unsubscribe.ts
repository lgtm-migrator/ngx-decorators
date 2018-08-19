import {mkPropertyKeyDecorator} from './lib/mkPropertyKeyDecorator';
import {_unsubscribe} from './lib/symbols';

/**
 * Automatically unsubscribe from the subscription(s) present at this property.
 * The property can be either a single subscription or an array of subscriptions.
 */
export function Unsubscribe(): PropertyDecorator {
  return mkPropertyKeyDecorator(_unsubscribe);
}

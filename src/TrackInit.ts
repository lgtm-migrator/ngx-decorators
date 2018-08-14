import {defineImmutable} from './lib/defineImmutable';
import {_init} from './lib/symbols';

/** Set the given property to true when the component is initialised */
export function TrackInit(): PropertyDecorator {
  return (target: any, value: PropertyKey): void => {
    defineImmutable(target, _init, value);
  };
}
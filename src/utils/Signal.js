/* eslint-disable no-param-reassign */
// USE THIS FILE UNTIL WE HAVE THE SDK SET UP
import { signal } from '@preact/signals-react';

const updateSignal = (signalToUpdate, newVal) => {
  signalToUpdate.previousValue = signalToUpdate.value;
  if (!signalToUpdate) {
    throw new Error('Signal is not defined');
  }

  if (Array.isArray(signalToUpdate.value)) {
    signalToUpdate.value = [...newVal];
  } else if (typeof signalToUpdate.value === 'object') {
    signalToUpdate.value = {
      ...signalToUpdate.value,
      ...newVal,
    };
  } else {
    signalToUpdate.value = newVal;
  }

  return signal;
};

export const Signal = (initState) => {
  const rawSignal = signal(initState);
  rawSignal.previousState = null;
  rawSignal.update = (payload) => updateSignal(rawSignal, payload);
  rawSignal.reset = () => {
    rawSignal.value = initState;
  };
  rawSignal.loadingStart = () => {
    updateSignal(rawSignal, { isLoading: true });
  };
  rawSignal.loadingEnd = () => {
    updateSignal(rawSignal, { isLoading: false });
  };

  return rawSignal;
};

export default Signal;

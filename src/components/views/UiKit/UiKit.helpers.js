import Signal from '@src/utils/Signal';

export const $formSignal = Signal({
  name: '',
  number: 0,
  password: '',
  select: null,
  date: new Date(),
});

export const $modalSignal = Signal({
  id: '',
});

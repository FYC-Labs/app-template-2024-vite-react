import Signal from '@src/utils/Signal';

export const $viewUiKit = Signal({
  activeModal: '',
  activeTab: '',
});

export const $formUiKit = Signal({
  name: '',
  number: 0,
  password: '',
  select: null,
  date: new Date(),
});

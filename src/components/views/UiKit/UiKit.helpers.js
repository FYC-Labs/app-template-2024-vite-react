import { Signal } from 'tools-fyc-react/signals';

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

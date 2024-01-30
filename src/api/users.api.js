import sleep from 'tools-fyc-react/utils/sleep';

async function getUsers() {
  await sleep(300);
  return {
    firstName: 'Justin',
    lastName: 'Fortier',
  };
}

export default {
  get: getUsers,
};

import api from './index';

const path = {
  authorize: 'authorize',
};

const authorize = (clientId, scope) => api.get(path.authorize, {
  params: {
    client_id: clientId,
    scope,
  },
});

export default {
  authorize,
};

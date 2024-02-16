import { EQueries } from '@/shared/models';

const API_URL = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users';

export const getPathWithQuery = (query: EQueries) => `${API_URL}?${query}`;

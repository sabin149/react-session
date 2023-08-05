import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const mockServer = setupServer();

export function addMockApiRouteHandler(type, path, cb) {
  mockServer.use(rest[type](new URL(path, 'http://localhost:3000').href, cb));
}

import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ProjectRolesService } from '../../../src/services/projectRoles/ProjectRoles';

describe('test ProjectRolesService object', () => {
  it('should be an object', () => {
    expect(typeof ProjectRolesService).toBe('function');
  });
});

describe('test ProjectRoles', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/roles')
        .reply(200, { data: {} });
      return sdk.projectRoles.list().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/roles')
        .reply(200, { data: {} });
      return sdk.projectRoles.create().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/roles/role/modi')
        .reply(200, { data: {} });
      return sdk.projectRoles.get('modi').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/roles/role/molestiae')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectRoles.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/roles/role/necessitatibus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectRoles.get('necessitatibus')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/roles/role/tempore')
        .reply(200, { data: {} });
      return sdk.projectRoles.delete('tempore').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/roles/role/tenetur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectRoles.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/roles/role/quibusdam')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectRoles.delete('quibusdam')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/roles/role/corrupti')
        .reply(200, { data: {} });
      return sdk.projectRoles.update('corrupti').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/roles/role/exercitationem')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectRoles.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/roles/role/reiciendis')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectRoles.update('reiciendis')).rejects.toThrow();
    });
  });

  describe('test listPermissions', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/permissions')
        .reply(200, { data: {} });
      return sdk.projectRoles.listPermissions().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

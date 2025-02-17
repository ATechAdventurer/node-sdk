import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ServiceAccountsService } from '../../../src/services/serviceAccounts/ServiceAccounts';

describe('test ServiceAccountsService object', () => {
  it('should be an object', () => {
    expect(typeof ServiceAccountsService).toBe('function');
  });
});

describe('test ServiceAccounts', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts?page=7&per_page=3')
        .reply(200, { data: {} });
      return sdk.serviceAccounts
        .list({ page: 7, perPage: 3 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/eveniet')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.get('eveniet').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/doloribus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/ad')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get('ad')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/ducimus')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.delete('ducimus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/ratione')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/placeat')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete('placeat')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/beatae')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.update({}, 'beatae').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/voluptas')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/error')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update({}, 'error')).rejects.toThrow();
    });
  });
});

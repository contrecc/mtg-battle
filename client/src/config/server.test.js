import server from './server';

describe('server', () => {
  it('equals `http://localhost:3000` if in `development`', () => {
    if (process.env.NODE_ENV === 'development') {
      expect(server).toEqual('http://localhost:3000');
    }
  });

  it('equals `https://cccmtgbattle.herokuapp.com` if in `production`', () => {
    if (process.env.NODE_ENV === 'production') {
      expect(server).toEqual('https://cccmtgbattle.herokuapp.com');
    }
  });

  describe('development', () => {
    it('should be `true` if in development', () => {
      if (process.env.NODE_ENV === 'development') {
        expect(development).toBe(true);
      }
    });

    it('should be `false` if in production', () => {
      if (process.env.NODE_ENV === 'production') {
        expect(development).toBe(false);
      }
    });
  });
});

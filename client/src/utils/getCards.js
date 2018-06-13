import server from '../config/server';

export default async () => {
  const response = await fetch(`${server}/cards`);

  if (response.status >= 400) {
    throw new Error('Error fetching cards');
  } else {
    return await response.json();
  }
};
import redisClient from '../utils/redis';

function getStatus(req, res) {
  const redis = redisClient.isAlive();
  const db = dbClient.isAlive();
  res.json({ redis, db });
}

async function getStats(req, res) {
  const users = await dbClient.nbUsers();
  const files = await dbClient.nbFiles();
  res.json({ users, files });
}

export { getStatus, getStats };

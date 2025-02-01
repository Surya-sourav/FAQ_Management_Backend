const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });


(async () => {
  await client.connect();
})();

// Cache middleware
const cacheMiddleware = (duration) => async (req, res, next) => {
  const lang = req.query.lang || 'en';
  const cacheKey = `faqs:${lang}`;

  try {
    const cachedData = await client.get(cacheKey);
    
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }
    
    // Override response method
    const originalSend = res.send;
    res.send = (body) => {
      client.setEx(cacheKey, duration, body);
      originalSend.call(res, body);
    };
    
    next();
    
  } catch (error) {
    console.error('Cache error:', error);
    next();
  }
};

module.exports = cacheMiddleware;  // Add this export
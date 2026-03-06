import { Hono } from 'hono';
import { context, redis, reddit } from '@devvit/web/server';
import fetch from 'node-fetch';
import type {
  DecrementResponse,
  IncrementResponse,
  InitResponse,
} from '../../shared/api';

type ErrorResponse = {
  status: 'error';
  message: string;
};

export const api = new Hono();

api.get('/init', async (c) => {
  const { postId } = context;

  if (!postId) {
    console.error('API Init Error: postId not found in devvit context');
    return c.json<ErrorResponse>(
      {
        status: 'error',
        message: 'postId is required but missing from context',
      },
      400
    );
  }

  try {
    const [count, username] = await Promise.all([
      redis.get('count'),
      reddit.getCurrentUsername(),
    ]);

    return c.json<InitResponse>({
      type: 'init',
      postId: postId,
      count: count ? parseInt(count) : 0,
      username: username ?? 'anonymous',
    });
  } catch (error) {
    console.error(`API Init Error for post ${postId}:`, error);
    let errorMessage = 'Unknown error during initialization';
    if (error instanceof Error) {
      errorMessage = `Initialization failed: ${error.message}`;
    }
    return c.json<ErrorResponse>(
      { status: 'error', message: errorMessage },
      400
    );
  }
});

api.post('/increment', async (c) => {
  const { postId } = context;
  if (!postId) {
    return c.json<ErrorResponse>(
      {
        status: 'error',
        message: 'postId is required',
      },
      400
    );
  }

  const count = await redis.incrBy('count', 1);
  return c.json<IncrementResponse>({
    count,
    postId,
    type: 'increment',
  });
});

api.post('/decrement', async (c) => {
  const { postId } = context;
  if (!postId) {
    return c.json<ErrorResponse>(
      {
        status: 'error',
        message: 'postId is required',
      },
      400
    );
  }

  const count = await redis.incrBy('count', -1);
  return c.json<DecrementResponse>({
    count,
    postId,
    type: 'decrement',
  });
});

// PLZ (German postal code) to city lookup endpoint
api.get('/plz/:plz', async (c) => {
  const plz = c.req.param('plz');

  // Validate PLZ format (5 digits)
  if (!/^\d{5}$/.test(plz)) {
    return c.json(
      {
        city: null,
        state: null,
        error: 'Invalid PLZ format. Must be 5 digits.',
      },
      400
    );
  }

  try {
    // Fetch from Nominatim API (backend can make external requests)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?postalcode=${plz}&country=Germany&format=json&limit=1`,
      {
        headers: {
          'User-Agent': 'Umzugsrechner/1.0',
        },
      }
    );

    if (!response.ok) {
      return c.json({
        city: null,
        state: null,
        error: 'Failed to fetch from Nominatim API',
      });
    }

    const data = await response.json();

    if (data && data.length > 0) {
      const result = data[0];
      const city =
        result.address?.city ||
        result.address?.town ||
        result.address?.village ||
        result.display_name.split(',')[0];
      const state = result.address?.state || null;

      return c.json({
        city: city || null,
        state: state || null,
      });
    }

    return c.json({
      city: null,
      state: null,
    });
  } catch (error) {
    console.error('PLZ lookup error:', error);
    return c.json(
      {
        city: null,
        state: null,
        error: 'Internal server error',
      },
      500
    );
  }
});

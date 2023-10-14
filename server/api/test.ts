import { db } from '../db';

export default defineEventHandler(async () => {
  return await db.query.users.findMany({
    with: {
      posts: true			
    }
  });
})
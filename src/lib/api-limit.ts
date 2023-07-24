import { auth } from "@clerk/nextjs";
import { MAX_FREE_COUNTS } from "./constants";
import { db } from "./prisma";

export async function increateApiLimit() {
  const { userId } = auth();
  if (!userId) {
    return;
  }

  const userApiLimit = await db.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    await db.userApiLimit.update({
      where: {
        userId,
      },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  } else {
    await db.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
}

export async function checkApiLimit() {
  const { userId } = auth();
  if (!userId) {
    return false;
  }

  const userApiLimit = await db.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
}

export async function getApiLimitCount() {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await db.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
}

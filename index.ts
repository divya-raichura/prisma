import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   const allUsers = await prisma.user.findMany();
  //   console.log(allUsers);
  const user = await prisma.user.findMany();

  console.log(user);
}

main()
  .catch((e) => {
    console.log("gadbad!!!", e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

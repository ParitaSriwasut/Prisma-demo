const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const run = async () => {
  try {
    //CREATE
    //create values by object. create only one
    //prisma need await to run
    // const result = await prisma.user.create({
    //   data: {
    //     username: "Rita",
    //     password: "123456",
    //   },
    // });

    //CREATE MANY
    //create many = output is number of count get values by array[]
    //inside category get value by array[]
    // const result = await prisma.category.createMany({
    //   data: [{ name: "Food" }, { name: "Transport" }],
    // });

    //Put data
    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "7-11",
    //     amount: 400,
    //     date: new Date("2023-09-02"),
    //     userId: 1,
    //     categoryId: 1,
    //   },
    // });

    //Create values in user & category & transaction in the same time
    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "Tesco",
    //     amount: 440,
    //     date: new Date("2023-09-02"),
    //     user: {
    //       create: {
    //         username: "Jack",
    //         password: "123456",
    //       },
    //     },
    //     category: {
    //       create: {
    //         name: "Grocery",
    //       },
    //     },
    //   },
    // });

    //include = will return objects
    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "Safari World",
    //     amount: 650,
    //     date: new Date("2023-09-04"),
    //     user: {
    //       create: {
    //         username: "Rosie",
    //         password: "654321",
    //       },
    //     },
    //     category: {
    //       create: {
    //         name: "Travel",
    //       },
    //     },
    //   },
    //   include: {
    //     user: true,
    //     category: true,
    //   },
    // });

    //Create many transactions
    // const result = await prisma.user.create({
    //   data: {
    //     username: "max",
    //     password: "123",
    //     transactions: {
    //       create: [
    //         {
    //           payee: "7-11",
    //           amount: 68,
    //           date: new Date("2030-09-04"),
    //           categoryId: 3,
    //         },
    //         {
    //           payee: "CJ",
    //           amount: 123,
    //           date: new Date("2030-09-04"),
    //           categoryId: 2,
    //         },
    //       ],
    //     },
    //   },
    //   include: {
    //     transactions: true,
    //   },
    // });

    //Include = unsupported database features / checking that columns and table is relative or not and join the column and calling another columns.
    // const result = await prisma.user.create({
    //   data: {
    //     username: "manuel",
    //     password: "123456",
    //     transactions: {
    //       create: {
    //         payee: "7-11",
    //         amount: 99,
    //         date: new Date("2023-09-14"),
    //         category: {
    //           create: {
    //             name: "Beverage",
    //           },
    //         },
    //       },
    //     },
    //   },
    //   include: {
    //     transactions: true,
    //   },
    // });

    //UPDATE : by one / tell where we want to update by using (WHERE)
    //UPDATE : can use Nested
    // const result = await prisma.user.update({
    //   data: {
    //     password: "7654321",
    //   },
    //   where: {
    //     id: 1,
    //   },
    // });

    //UPDATE MANY = update multiple values
    //CREATE MANY cannot use (Nested)
    // const result = await prisma.user.updateMany({
    //   data: {
    //     password: "111111111",
    //   },
    //   where: {
    //     username: {
    //       startsWith: "R",
    //     },
    //   },
    // });

    //UPSERT : get parameter by object
    //UPSERT : will check the key inside database if has a key will update / if not will create a new one
    //WHERE method is must for tell orm to find
    // const result = await prisma.user.upsert({
    //   create: {
    //     username: "Ann",
    //     password: "122343",
    //   },
    //   update: {
    //     password: "55555555",
    //   },
    //   where: {
    //     username: "Ann",
    //   },
    // });

    //DELETE by one
    // const result = await prisma.user.delete({
    //   where: {
    //     username: "Ann",
    //   },
    // });

    //DELETE MANY : when we want to delete many record.
    const result = await prisma.transaction.deleteMany({
      where: {
        payee: "7-11",
      },
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
run();

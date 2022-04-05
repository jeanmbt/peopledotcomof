import { PrismaClient, Prisma } from "@prisma/client";
import faker from "@faker-js/faker";

const prisma = new PrismaClient();

const specialtiesCreate: Prisma.SpecialtyCreateInput[] = [
  { name: "Talking" },
  { name: "Walking" },
  { name: "Eating" },
  { name: "Partying" },
  { name: "Dancing" },
  { name: "Moving" },
  { name: "Yelling" },
  { name: "Disturbing" },
  { name: "Entertaining" },
];
const randomId = (): number =>
  Math.floor(Math.random() * specialtiesCreate.length) + 1;
const specialties =
  (): Prisma.SpecialtyCreateNestedManyWithoutPersonsInput => ({
    connect: [{ id: randomId() }, { id: randomId() }],
  });

const peopleData: Prisma.PersonCreateInput[] = Array.from(new Array(500)).map(
  () => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    streetNumber: faker.address.streetSuffix(),
    specialties: specialties(),
  })
);

export async function main() {
  try {
    console.log(`Start seeding ...`);

    for (const data of specialtiesCreate) {
      const specialty = await prisma.specialty.create({ data });
      console.log(`Created specialty: ${specialty.name} (${specialty.id})`);
    }

    for (const data of peopleData) {
      const person = await prisma.person.create({
        data,
      });
      console.log(`Created person ${person.name} with id: ${person.id}`);
    }
    console.log(`Seeding finished.`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
// prisma/seed.js
import { PrismaClient } from "@prisma/client";
import { featuredCars } from "../lib/data.js";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding cars...");

  for (const car of featuredCars) {
    // Upsert: create if not exists, otherwise update
    await prisma.car.upsert({
      where: { id: car.id.toString() },
      update: {
        make: car.make,
        model: car.model,
        year: car.year,
        price: car.price,
        mileage: car.mileage,
        color: car.color,
        fuelType: car.fuelType,
        transmission: car.transmission,
        bodyType: car.bodyType,
        featured: true,
        images: car.images,
      },
      create: {
        id: car.id.toString(),
        make: car.make,
        model: car.model,
        year: car.year,
        price: car.price,
        mileage: car.mileage,
        color: car.color,
        fuelType: car.fuelType,
        transmission: car.transmission,
        bodyType: car.bodyType,
        description: "",        // you can fill in default or leave blank
        status: "AVAILABLE",
        featured: true,
        images: car.images,
      },
    });
    console.log(`Upserted: ${car.make} ${car.model}`);
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

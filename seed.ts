import { PrismaClient, GalleryCategory, OrderStatus, ReservationStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.menuCategory.createMany({
    data: [
      { name: "Starters", order: 1 },
      { name: "Main Courses", order: 2 },
      { name: "Desserts", order: 3 },
      { name: "Drinks", order: 4 }
    ],
    skipDuplicates: true
  });

  // Simple example items; in a real project you'd expand this
  const starters = await prisma.menuCategory.findFirst({
    where: { name: "Starters" }
  });
  const mains = await prisma.menuCategory.findFirst({
    where: { name: "Main Courses" }
  });

  if (starters && mains) {
    await prisma.menuItem.createMany({
      data: [
        {
          name: "Burrata with Heirloom Tomatoes",
          description: "Creamy burrata, basil oil, aged balsamic.",
          price: 14.0,
          categoryId: starters.id
        },
        {
          name: "Seared Sea Bass",
          description: "Lemon beurre blanc, fennel, charred lemon.",
          price: 28.0,
          categoryId: mains.id
        }
      ],
      skipDuplicates: true
    });
  }

  await prisma.service.createMany({
    data: [
      {
        title: "Fine Dining",
        description: "Elegant dining room with seasonal tasting menus.",
        order: 1
      },
      {
        title: "Private Events",
        description: "Tailored menus for intimate celebrations and corporate gatherings.",
        order: 2
      },
      {
        title: "Catering",
        description: "Restaurant-quality cuisine at your venue.",
        order: 3
      }
    ],
    skipDuplicates: true
  });

  await prisma.galleryImage.createMany({
    data: [
      {
        title: "Signature Dish",
        imageUrl: "/images/gallery/signature-dish.jpg",
        category: GalleryCategory.FOOD,
        order: 1
      },
      {
        title: "Dining Room",
        imageUrl: "/images/gallery/dining-room.jpg",
        category: GalleryCategory.INTERIOR,
        order: 2
      }
    ],
    skipDuplicates: true
  });

  await prisma.siteContent.createMany({
    data: [
      {
        key: "hero_title",
        value: "Modern Gastronomy in the Heart of the City"
      },
      {
        key: "hero_subtitle",
        value: "Seasonal tasting menus, fine wines, and a warm atmosphere."
      },
      {
        key: "contact_phone",
        value: "+1 (555) 123-4567"
      },
      {
        key: "contact_email",
        value: "hello@gastronomia.example"
      },
      {
        key: "contact_address",
        value: "123 Culinary Street, Gourmet City"
      }
    ],
    skipDuplicates: true
  });

  await prisma.adminUser.upsert({
    where: { email: "admin@gastronomia.example" },
    update: {},
    create: {
      email: "admin@gastronomia.example",
      passwordHash:
        "$2b$10$9uQwQH1hPZ5cCw5qYV5S1u9gF6b9Jf5lWqFQ6uV5lWqFQ6uV5lWqG", // placeholder, replace with real hash
      name: "Admin"
    }
  });

  console.log("Database seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


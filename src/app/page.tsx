import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Tropical Sunrise Board",
      price: "$899",
      image: "/generated/surfboards-collection.jpg",
      type: "Longboard",
      description: "Perfect for beginners and soul surfers"
    },
    {
      id: 2,
      name: "Ocean Wave Shortboard",
      price: "$749",
      image: "/generated/surfboards-collection.jpg",
      type: "Shortboard",
      description: "High-performance board for experienced surfers"
    },
    {
      id: 3,
      name: "Paradise Funboard",
      price: "$649",
      image: "/generated/surfboards-collection.jpg",
      type: "Funboard",
      description: "Versatile board for all skill levels"
    },
    {
      id: 4,
      name: "Wetsuit Pro Series",
      price: "$199",
      image: "/generated/surfboards-collection.jpg",
      type: "Wetsuit",
      description: "Premium neoprene for Costa Rica waters"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-playa-hermosa.jpg"
            alt="Playa Hermosa sunset with surfers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            RIDE THE<br />
            <span className="text-light-blue">PERFECT WAVE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-body">
            Experience Costa Rica's premier surf destination with top-quality boards,
            gear, and expert instruction at Playa Hermosa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-ocean-blue hover:bg-light-blue text-white px-8 py-3 text-lg font-heading"
              asChild
            >
              <Link href="/lessons">BOOK LESSONS</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ocean-blue px-8 py-3 text-lg font-heading"
              asChild
            >
              <Link href="/shop">SHOP BOARDS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Featured Gear
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our hand-picked selection of premium surf equipment,
              perfect for Costa Rica's legendary waves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 tropical-card">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-ocean-blue">
                      {product.type}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl font-bold text-ocean-blue">
                        {product.price}
                      </span>
                      <Button size="sm" className="bg-tropical-green hover:bg-tropical-green/90">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white px-8"
              asChild
            >
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Surf Lessons Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                SURF LESSONS
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Learn from Costa Rica's most experienced surf instructors.
                Whether you're a complete beginner or looking to improve your technique,
                we offer personalized lessons for all skill levels.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-tropical-green rounded-full mr-3"></div>
                  <span>Beginner to Advanced Instruction</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-tropical-green rounded-full mr-3"></div>
                  <span>All Equipment Provided</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-tropical-green rounded-full mr-3"></div>
                  <span>Small Group & Private Sessions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-tropical-green rounded-full mr-3"></div>
                  <span>Certified Local Instructors</span>
                </li>
              </ul>
              <Button
                size="lg"
                className="bg-sunset-orange hover:bg-sunset-orange/90 text-white px-8"
                asChild
              >
                <Link href="/lessons">Book Your Lesson</Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/generated/hero-playa-hermosa.jpg"
                alt="Surf lesson on Playa Hermosa beach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
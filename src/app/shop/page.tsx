"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  type: string;
  description: string;
  rating: number;
  inStock: boolean;
}

const allProducts: Product[] = [
  // Surfboards
  {
    id: 1,
    name: "Tropical Sunrise Board",
    price: "$899",
    image: "/generated/surfboards-collection.jpg",
    category: "Surfboards",
    type: "Longboard",
    description: "Perfect for beginners and soul surfers",
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Ocean Wave Shortboard",
    price: "$749",
    image: "/generated/surfboards-collection.jpg",
    category: "Surfboards",
    type: "Shortboard",
    description: "High-performance board for experienced surfers",
    rating: 4.9,
    inStock: true
  },
  {
    id: 3,
    name: "Paradise Funboard",
    price: "$649",
    image: "/generated/surfboards-collection.jpg",
    category: "Surfboards",
    type: "Funboard",
    description: "Versatile board for all skill levels",
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: "Costa Rica Fish Board",
    price: "$679",
    image: "/generated/surfboards-collection.jpg",
    category: "Surfboards",
    type: "Fish",
    description: "Great for smaller waves and fun sessions",
    rating: 4.6,
    inStock: false
  },
  {
    id: 5,
    name: "Pipeline Performance Board",
    price: "$829",
    image: "/generated/surfboards-collection.jpg",
    category: "Surfboards",
    type: "Gun",
    description: "For big wave surfing and advanced riders",
    rating: 4.9,
    inStock: true
  },

  // Gear & Accessories
  {
    id: 6,
    name: "Wetsuit Pro Series",
    price: "$199",
    image: "/generated/surf-accessories.jpg",
    category: "Wetsuits",
    type: "3/2mm",
    description: "Premium neoprene for Costa Rica waters",
    rating: 4.5,
    inStock: true
  },
  {
    id: 7,
    name: "Tropical Rash Guard",
    price: "$59",
    image: "/generated/surf-accessories.jpg",
    category: "Apparel",
    type: "Rash Guard",
    description: "UV protection with tropical print",
    rating: 4.4,
    inStock: true
  },
  {
    id: 8,
    name: "Premium Surf Leash",
    price: "$39",
    image: "/generated/surf-accessories.jpg",
    category: "Accessories",
    type: "Leash",
    description: "6ft coiled leash for all conditions",
    rating: 4.6,
    inStock: true
  },
  {
    id: 9,
    name: "Eco Surf Wax Set",
    price: "$24",
    image: "/generated/surf-accessories.jpg",
    category: "Accessories",
    type: "Wax",
    description: "Biodegradable wax for tropical waters",
    rating: 4.3,
    inStock: true
  },
  {
    id: 10,
    name: "Carbon Fin Set",
    price: "$149",
    image: "/generated/surf-accessories.jpg",
    category: "Accessories",
    type: "Fins",
    description: "High-performance carbon fiber fins",
    rating: 4.8,
    inStock: true
  },
  {
    id: 11,
    name: "Surf Watch Pro",
    price: "$299",
    image: "/generated/surf-accessories.jpg",
    category: "Accessories",
    type: "Watch",
    description: "Tide tracking and surf forecasting",
    rating: 4.7,
    inStock: false
  },
  {
    id: 12,
    name: "Reef Boots",
    price: "$79",
    image: "/generated/surf-accessories.jpg",
    category: "Footwear",
    type: "Boots",
    description: "Protection from rocks and reefs",
    rating: 4.4,
    inStock: true
  }
];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("name");

  const categories = ["All", "Surfboards", "Wetsuits", "Apparel", "Accessories", "Footwear"];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterAndSortProducts(category, searchQuery, sortBy);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterAndSortProducts(selectedCategory, query, sortBy);
  };

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
    filterAndSortProducts(selectedCategory, searchQuery, sortOption);
  };

  const filterAndSortProducts = (category: string, query: string, sort: string) => {
    let filtered = allProducts;

    // Filter by category
    if (category !== "All") {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sort) {
        case "price-low":
          return parseInt(a.price.replace("$", "")) - parseInt(b.price.replace("$", ""));
        case "price-high":
          return parseInt(b.price.replace("$", "")) - parseInt(a.price.replace("$", ""));
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setProducts(filtered);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Shop Header */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold mb-6">Surf Shop</h1>
            <p className="text-xl text-muted-foreground">
              Discover premium surf equipment and gear for Costa Rica's world-class waves.
              From beginner-friendly boards to professional-grade accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                  className={selectedCategory === category ? "bg-ocean-blue hover:bg-light-blue" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              <Select value={sortBy} onValueChange={handleSort}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setProducts(allProducts);
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-semibold">
                  {products.length} {products.length === 1 ? "Product" : "Products"} Found
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
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
                        {!product.inStock && (
                          <Badge variant="secondary" className="absolute top-3 right-3 bg-red-500">
                            Out of Stock
                          </Badge>
                        )}
                        <div className="absolute top-3 right-3 left-3 flex justify-between">
                          <Badge className="bg-ocean-blue">{product.type}</Badge>
                          <div className="flex items-center bg-black/70 rounded px-2 py-1">
                            <span className="text-white text-sm">★ {product.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-heading font-semibold text-lg line-clamp-2">
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-2xl font-bold text-ocean-blue">
                            {product.price}
                          </span>
                          <Button
                            size="sm"
                            className={`${
                              product.inStock
                                ? "bg-tropical-green hover:bg-tropical-green/90"
                                : "bg-muted cursor-not-allowed"
                            }`}
                            disabled={!product.inStock}
                          >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
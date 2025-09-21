"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Clock, Users, Award, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

interface Instructor {
  id: number;
  name: string;
  image: string;
  experience: string;
  specialties: string[];
  languages: string[];
  rating: number;
  bio: string;
  certifications: string[];
  available: boolean;
}

interface LessonPackage {
  id: number;
  name: string;
  duration: string;
  groupSize: string;
  price: string;
  description: string;
  includes: string[];
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Carlos Mendez",
    image: "/generated/surf-instructors.jpg",
    experience: "15 years",
    specialties: ["Beginner Instruction", "Longboarding", "Wave Reading"],
    languages: ["Spanish", "English"],
    rating: 4.9,
    bio: "Born and raised in Costa Rica, Carlos has been surfing the waves of Playa Hermosa since childhood. He's passionate about sharing the joy of surfing while ensuring safety and proper technique.",
    certifications: ["ISA Certified", "Water Safety Instructor", "First Aid CPR"],
    available: true
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    image: "/generated/surf-instructors.jpg",
    experience: "12 years",
    specialties: ["Women's Surf Coaching", "Shortboard Performance", "Competitive Surfing"],
    languages: ["Spanish", "English", "Portuguese"],
    rating: 4.8,
    bio: "Former professional surfer and current national team coach. Sofia brings technical expertise and competitive insights to help students reach their full potential.",
    certifications: ["ISA Level 2", "Lifeguard Certified", "Yoga Instructor"],
    available: true
  },
  {
    id: 3,
    name: "Miguel Santos",
    image: "/generated/surf-instructors.jpg",
    experience: "20 years",
    specialties: ["Advanced Techniques", "Big Wave Prep", "Video Analysis"],
    languages: ["Spanish", "English"],
    rating: 4.9,
    bio: "Veteran instructor with two decades of experience. Miguel has taught everyone from complete beginners to professional surfers, specializing in advanced technique refinement.",
    certifications: ["ISA Level 3", "Rescue Diver", "Surf Coach Certification"],
    available: false
  },
  {
    id: 4,
    name: "Ana Gutierrez",
    image: "/generated/surf-instructors.jpg",
    experience: "8 years",
    specialties: ["Kids Programs", "Family Lessons", "Adaptive Surfing"],
    languages: ["Spanish", "English", "French"],
    rating: 4.7,
    bio: "Specializes in teaching children and families. Ana creates a fun, safe environment where everyone can learn to love the ocean and surfing.",
    certifications: ["Youth Surf Instructor", "Special Needs Certification", "First Aid"],
    available: true
  }
];

const lessonPackages: LessonPackage[] = [
  {
    id: 1,
    name: "Beginner Group Lesson",
    duration: "2 hours",
    groupSize: "4-6 people",
    price: "$65",
    level: "Beginner",
    description: "Perfect introduction to surfing with basic techniques and safety.",
    includes: ["Surfboard rental", "Wetsuit", "Professional instruction", "Beach safety briefing"]
  },
  {
    id: 2,
    name: "Private Surf Lesson",
    duration: "1.5 hours",
    groupSize: "1-on-1",
    price: "$120",
    level: "All Levels",
    description: "Personalized instruction tailored to your specific needs and goals.",
    includes: ["Surfboard rental", "Wetsuit", "Individual coaching", "Video analysis", "Progress report"]
  },
  {
    id: 3,
    name: "Intermediate Package",
    duration: "3 hours",
    groupSize: "2-4 people",
    price: "$95",
    level: "Intermediate",
    description: "Advance your skills with technique refinement and wave selection.",
    includes: ["High-performance boards", "Wetsuit", "Advanced coaching", "Wave forecasting"]
  },
  {
    id: 4,
    name: "Surf & Stay Package",
    duration: "5 days",
    groupSize: "4-8 people",
    price: "$450",
    level: "All Levels",
    description: "Complete surf experience with multiple lessons and cultural activities.",
    includes: ["10 hours instruction", "All equipment", "Accommodation", "Meals", "Cultural tours"]
  },
  {
    id: 5,
    name: "Kids Surf Camp",
    duration: "4 hours",
    groupSize: "6-10 kids",
    price: "$80",
    level: "Beginner",
    description: "Fun and safe surf program designed specifically for children 8-16.",
    includes: ["Kids boards", "Safety equipment", "Snacks", "Beach games", "Certificate"]
  },
  {
    id: 6,
    name: "Women's Only Session",
    duration: "2.5 hours",
    groupSize: "4-6 women",
    price: "$75",
    level: "All Levels",
    description: "Supportive environment for women to learn and improve their surfing.",
    includes: ["Female instructor", "All equipment", "Technique coaching", "Confidence building"]
  }
];

export default function LessonsPage() {
  const [selectedPackage, setSelectedPackage] = useState<LessonPackage | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const availableInstructors = instructors.filter(instructor => instructor.available);
  const availableTimes = ["08:00 AM", "10:30 AM", "01:00 PM", "03:30 PM"];

  const handleBookLesson = (lessonPackage: LessonPackage) => {
    setSelectedPackage(lessonPackage);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Lessons Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-playa-hermosa.jpg"
            alt="Surf lessons at Playa Hermosa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            SURF LESSONS
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body">
            Learn from Costa Rica's most experienced instructors in the perfect waves of Playa Hermosa
          </p>
        </div>
      </section>

      {/* Lesson Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">Choose Your Adventure</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From beginner-friendly group lessons to advanced private coaching,
              we have the perfect program for every surfer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessonPackages.map((lessonPackage) => (
              <Card key={lessonPackage.id} className="group hover:shadow-xl transition-all duration-300 tropical-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="font-heading text-xl">{lessonPackage.name}</CardTitle>
                    <Badge className="bg-ocean-blue">{lessonPackage.level}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {lessonPackage.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {lessonPackage.groupSize}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    {lessonPackage.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-heading font-semibold mb-2">Includes:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {lessonPackage.includes.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-tropical-green rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-heading text-3xl font-bold text-ocean-blue">
                        {lessonPackage.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {lessonPackage.name.includes("Package") || lessonPackage.name.includes("Camp") ? "" : " /person"}
                      </span>
                    </div>
                    <Button
                      className="bg-sunset-orange hover:bg-sunset-orange/90 text-white"
                      onClick={() => handleBookLesson(lessonPackage)}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">Meet Our Expert Instructors</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our team of certified professionals brings years of experience and passion for surfing to every lesson
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="group hover:shadow-xl transition-all duration-300 tropical-card">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-heading text-xl font-semibold">{instructor.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Award className="w-4 h-4" />
                            {instructor.experience} experience
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="ml-1 text-sm font-medium">{instructor.rating}</span>
                          {!instructor.available && (
                            <Badge variant="secondary" className="ml-2 bg-red-100 text-red-800">
                              Unavailable
                            </Badge>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3">{instructor.bio}</p>

                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium">Specialties: </span>
                          <span className="text-sm text-muted-foreground">
                            {instructor.specialties.join(", ")}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Languages: </span>
                          <span className="text-sm text-muted-foreground">
                            {instructor.languages.join(", ")}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Certifications: </span>
                          <span className="text-sm text-muted-foreground">
                            {instructor.certifications.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">
              Book Your {selectedPackage?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedPackage && (
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-heading font-semibold mb-1">{selectedPackage.name}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{selectedPackage.duration}</span>
                  <span>{selectedPackage.groupSize}</span>
                  <span className="font-semibold text-ocean-blue">{selectedPackage.price}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTimes.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="instructor">Preferred Instructor (Optional)</Label>
                <Select value={selectedInstructor} onValueChange={setSelectedInstructor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any available instructor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any available instructor</SelectItem>
                    {availableInstructors.map((instructor) => (
                      <SelectItem key={instructor.id} value={instructor.name}>
                        {instructor.name} (★ {instructor.rating})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+506 XXXX-XXXX" />
              </div>

              <div>
                <Label htmlFor="experience">Surfing Experience</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never surfed before</SelectItem>
                    <SelectItem value="beginner">Beginner (1-10 sessions)</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes">Special Requests or Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any dietary restrictions, medical conditions, or special requests..."
                  rows={3}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsBookingOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-ocean-blue hover:bg-light-blue"
                  onClick={() => {
                    alert("Booking request sent! We'll contact you within 24 hours to confirm.");
                    setIsBookingOpen(false);
                  }}
                >
                  Book Lesson
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
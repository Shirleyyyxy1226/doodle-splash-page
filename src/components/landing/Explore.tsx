import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Heart, Sparkles, Calendar } from "lucide-react";

import safariAdventure from "@/assets/safari-adventure.jpg";
import mountainHiking from "@/assets/mountain-hiking.jpg";
import beachParadise from "@/assets/beach-paradise.jpg";
import themePark from "@/assets/theme-park.jpg";
import museumVisit from "@/assets/museum-visit.jpg";
import forestCamping from "@/assets/forest-camping.jpg";
import paintingWorkshop from "@/assets/painting-workshop.jpg";
import familyConcert from "@/assets/family-concert.jpg";
import puppetShow from "@/assets/puppet-show.jpg";
import cookingClass from "@/assets/cooking-class.jpg";
import storytellingFestival from "@/assets/storytelling-festival.jpg";
import treasureHunt from "@/assets/treasure-hunt.jpg";

interface Place {
  id: string;
  title: string;
  location: string;
  rating: number;
  image: string;
  ageRange: string;
}

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  ageRange: string;
}

const places: Place[] = [
  { id: "1", title: "Safari Adventure", location: "Kenya", rating: 4.8, image: safariAdventure, ageRange: "3+" },
  { id: "2", title: "Andes Mountain", location: "Orlando, USA", rating: 4.5, image: mountainHiking, ageRange: "5+" },
  { id: "3", title: "Beach Paradise", location: "Maldives", rating: 4.9, image: beachParadise, ageRange: "All" },
  { id: "4", title: "Wonderland Park", location: "Sydney", rating: 4.7, image: themePark, ageRange: "3+" },
  { id: "5", title: "History Museum", location: "London, UK", rating: 4.6, image: museumVisit, ageRange: "4+" },
  { id: "6", title: "Forest Camping", location: "Canada", rating: 4.4, image: forestCamping, ageRange: "6+" },
];

const events: Event[] = [
  { id: "e1", title: "Painting Workshop", location: "Tokyo, Japan", date: "Mar 15", image: paintingWorkshop, ageRange: "4-10" },
  { id: "e2", title: "Family Concert", location: "London, UK", date: "Mar 22", image: familyConcert, ageRange: "All" },
  { id: "e3", title: "Puppet Festival", location: "Prague", date: "Apr 5", image: puppetShow, ageRange: "2-8" },
  { id: "e4", title: "Kids Cooking Class", location: "Florence, Italy", date: "Apr 12", image: cookingClass, ageRange: "5-12" },
  { id: "e5", title: "Storytelling Festival", location: "Copenhagen", date: "Apr 20", image: storytellingFestival, ageRange: "3-9" },
  { id: "e6", title: "Garden Treasure Hunt", location: "Edinburgh, UK", date: "May 1", image: treasureHunt, ageRange: "4-10" },
];

const PlaceCard = ({ place }: { place: Place }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="group relative w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all cursor-pointer"
  >
    <img
      src={place.image}
      alt={place.title}
      className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
    <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/50 backdrop-blur-md hover:bg-card/70 transition-all">
      <Heart size={14} className="text-primary-foreground" />
    </button>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-3 pt-16">
      <h3 className="text-sm font-display font-bold text-primary-foreground">{place.title}</h3>
      <div className="mt-1 flex items-center justify-between text-xs text-primary-foreground/80">
        <span className="flex items-center gap-1">
          <MapPin size={11} />
          {place.location}
        </span>
        <span className="flex items-center gap-1 bg-secondary/30 backdrop-blur-sm rounded-full px-1.5 py-0.5">
          <Star size={10} className="fill-secondary text-secondary" />
          {place.rating}
        </span>
      </div>
      <span className="mt-1 inline-block rounded-full bg-card/20 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-primary-foreground/90">
        Ages {place.ageRange}
      </span>
    </div>
  </motion.div>
);

const EventCard = ({ event }: { event: Event }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="group relative w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all cursor-pointer"
  >
    <img
      src={event.image}
      alt={event.title}
      className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
    <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/50 backdrop-blur-md hover:bg-card/70 transition-all">
      <Heart size={14} className="text-primary-foreground" />
    </button>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-3 pt-16">
      <h3 className="text-sm font-display font-bold text-primary-foreground">{event.title}</h3>
      <div className="mt-1 flex items-center justify-between text-xs text-primary-foreground/80">
        <span className="flex items-center gap-1">
          <MapPin size={11} />
          {event.location}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={10} />
          {event.date}
        </span>
      </div>
      <span className="mt-1 inline-block rounded-full bg-card/20 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-primary-foreground/90">
        Ages {event.ageRange}
      </span>
    </div>
  </motion.div>
);

const FilterChip = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
      active
        ? "bg-gradient-to-r from-primary to-coral shadow-sm text-primary-foreground"
        : "bg-muted text-muted-foreground hover:bg-muted/80"
    }`}
  >
    {label}
  </button>
);

export const Explore = () => {
  const [placeFilter, setPlaceFilter] = useState("Most Viewed");
  const [eventFilter, setEventFilter] = useState("Latest");

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl rounded-3xl bg-gradient-to-br from-coral via-sunny to-mint px-6 py-12 text-center shadow-lifted md:px-12 md:py-16"
        >
          <h2 className="font-handwriting text-3xl text-card md:text-4xl">
            Not just kid-friendly places,
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 font-handwriting text-3xl text-card md:text-4xl"
          >
            <span className="relative">
              but kid-friendly timing.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 100 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-card/50" />
              </svg>
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-4 max-w-lg text-card/90"
          >
            Explore places filtered by age, walking ease, and parent ratings.
          </motion.p>
        </motion.div>

        {/* Popular Places */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2 md:text-3xl">
              <Sparkles size={20} className="text-secondary" />
              Popular Places
            </h2>
            
          </div>
          <div className="flex gap-2 mb-5">
            {["Most Viewed", "Nearby", "Kid-Friendly"].map((f) => (
              <FilterChip key={f} label={f} active={placeFilter === f} onClick={() => setPlaceFilter(f)} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 [&>*:nth-child(n+5)]:hidden md:[&>*:nth-child(n+5)]:!block">
            {places.map((place, i) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <PlaceCard place={place} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Popular Events
            </h2>
          </div>
          <div className="flex gap-2 mb-5">
            {["Latest", "Nearby", "This Weekend"].map((f) => (
              <FilterChip key={f} label={f} active={eventFilter === f} onClick={() => setEventFilter(f)} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 [&>*:nth-child(n+5)]:hidden md:[&>*:nth-child(n+5)]:!block">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

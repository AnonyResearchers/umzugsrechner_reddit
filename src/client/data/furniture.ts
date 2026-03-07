// Auto-generated from SQL database
// DO NOT EDIT MANUALLY - regenerate using: node scripts/generate-furniture-data.js

export interface FurnitureItem {
  id: number;
  name: string;
  slug: string;
  volumeLiters: number;
  canAssemble: boolean;
  canMount: boolean;
  canConnect: boolean;
  assemblyTimeMinutes: number | null;
  mountingTimeMinutes: number | null;
  connectionTimeMinutes: number | null;
  description: string;
  imageUrl: string;
  imageFilename?: string;
}

export interface FurnitureRoomMapping {
  furnitureId: number;
  roomId: number;
}

// All 182 furniture items from database
export const FURNITURE_ITEMS: FurnitureItem[] = [
  {
    "id": 1,
    "name": "Aktenschrank hoch (Breite: 0-1m)",
    "slug": "aktenschrank-hoch-breite-0-1m",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 1-2m",
    "imageFilename": "aktenschrank-hoch-breite-0-1m-2724.webp",
    "imageUrl": "/assets/furniture/aktenschrank-hoch-breite-0-1m-2724.webp"
  },
  {
    "id": 2,
    "name": "Aktenschrank hoch (Breite: 1-2m)",
    "slug": "aktenschrank-hoch-breite-1-2m",
    "volumeLiters": 1200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 1-2m",
    "imageFilename": "aktenschrank-hoch-breite-1-2m-2847.webp",
    "imageUrl": "/assets/furniture/aktenschrank-hoch-breite-1-2m-2847.webp"
  },
  {
    "id": 3,
    "name": "Aktenschrank niedrig (Breite: 0-1m)",
    "slug": "aktenschrank-niedrig-breite-0-1m",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "aktenschrank-niedrig-breite-0-1m-2860.webp",
    "imageUrl": "/assets/furniture/aktenschrank-niedrig-breite-0-1m-2860.webp"
  },
  {
    "id": 4,
    "name": "Aktenschrank niedrig (Breite: 1-2m)",
    "slug": "aktenschrank-niedrig-breite-1-2m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "aktenschrank-niedrig-breite-1-2m-2863.webp",
    "imageUrl": "/assets/furniture/aktenschrank-niedrig-breite-1-2m-2863.webp"
  },
  {
    "id": 5,
    "name": "Aquarium (Breite bis 2m)",
    "slug": "aquarium-breite-bis-2m",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "aquarium-breite-bis-2m-2866.webp",
    "imageUrl": "/assets/furniture/aquarium-breite-bis-2m-2866.webp"
  },
  {
    "id": 6,
    "name": "Autoreifen (Pro Reifen)",
    "slug": "autoreifen-pro-reifen",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-40cm",
    "imageFilename": "autoreifen-pro-reifen-3167.webp",
    "imageUrl": "/assets/furniture/autoreifen-pro-reifen-3167.webp"
  },
  {
    "id": 7,
    "name": "Babybett/Kinderwiege",
    "slug": "babybettkinderwiege",
    "volumeLiters": 500,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "babybettkinderwiege-3173.webp",
    "imageUrl": "/assets/furniture/babybettkinderwiege-3173.webp"
  },
  {
    "id": 8,
    "name": "Bank (2-Sitzer)",
    "slug": "bank-2-sitzer",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "bank-2-sitzer-3183.webp",
    "imageUrl": "/assets/furniture/bank-2-sitzer-3183.webp"
  },
  {
    "id": 9,
    "name": "Bank (3-Sitzer)",
    "slug": "bank-3-sitzer",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Bank/Eckbank",
    "imageFilename": "bank-3-sitzer-3190.webp",
    "imageUrl": "/assets/furniture/bank-3-sitzer-3190.webp"
  },
  {
    "id": 10,
    "name": "Bank (4-Sitzer)",
    "slug": "bank-4-sitzer",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Bank/Eckbank",
    "imageFilename": "bank-4-sitzer-3212.webp",
    "imageUrl": "/assets/furniture/bank-4-sitzer-3212.webp"
  },
  {
    "id": 11,
    "name": "Barhocker",
    "slug": "barhocker",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "barhocker-3215.webp",
    "imageUrl": "/assets/furniture/barhocker-3215.webp"
  },
  {
    "id": 12,
    "name": "Bartisch (Länge: 0-1m)",
    "slug": "bartisch-lange-0-1m",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "bartisch-lange-0-1m-3218.webp",
    "imageUrl": "/assets/furniture/bartisch-lange-0-1m-3218.webp"
  },
  {
    "id": 13,
    "name": "Bartisch (Länge: 1-2m)",
    "slug": "bartisch-lange-1-2m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "bartisch-lange-1-2m-3221.webp",
    "imageUrl": "/assets/furniture/bartisch-lange-1-2m-3221.webp"
  },
  {
    "id": 14,
    "name": "Bartisch rund",
    "slug": "bartisch-rund",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "bartisch-rund-3224.webp",
    "imageUrl": "/assets/furniture/bartisch-rund-3224.webp"
  },
  {
    "id": 15,
    "name": "Basketballkorb",
    "slug": "basketballkorb",
    "volumeLiters": 100,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "basketballkorb-3228.webp",
    "imageUrl": "/assets/furniture/basketballkorb-3228.webp"
  },
  {
    "id": 16,
    "name": "Beistelltisch",
    "slug": "beistelltisch",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "beistelltisch-3231.webp",
    "imageUrl": "/assets/furniture/beistelltisch-3231.webp"
  },
  {
    "id": 17,
    "name": "Bild L",
    "slug": "bild-l",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": true,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Längste Seite über 1m",
    "imageFilename": "bild-l-3234.webp",
    "imageUrl": "/assets/furniture/bild-l-3234.webp"
  },
  {
    "id": 18,
    "name": "Bild S",
    "slug": "bild-s",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": true,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Längste Seite unter 1m",
    "imageFilename": "bild-s-3237.webp",
    "imageUrl": "/assets/furniture/bild-s-3237.webp"
  },
  {
    "id": 19,
    "name": "Blumenkasten",
    "slug": "blumenkasten",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "blumenkasten-3240.webp",
    "imageUrl": "/assets/furniture/blumenkasten-3240.webp"
  },
  {
    "id": 20,
    "name": "Boxsack",
    "slug": "boxsack",
    "volumeLiters": 300,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "boxsack-3243.webp",
    "imageUrl": "/assets/furniture/boxsack-3243.webp"
  },
  {
    "id": 21,
    "name": "Buffet (Breite: 0-1m)",
    "slug": "buffet-breite-0-1m",
    "volumeLiters": 1400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "buffet-breite-0-1m-3246.webp",
    "imageUrl": "/assets/furniture/buffet-breite-0-1m-3246.webp"
  },
  {
    "id": 22,
    "name": "Buffet (Breite: 1-2m)",
    "slug": "buffet-breite-1-2m",
    "volumeLiters": 1800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "buffet-breite-1-2m-3249.webp",
    "imageUrl": "/assets/furniture/buffet-breite-1-2m-3249.webp"
  },
  {
    "id": 23,
    "name": "Bügelbrett",
    "slug": "bugelbrett",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "bugelbrett-3252.webp",
    "imageUrl": "/assets/furniture/bugelbrett-3252.webp"
  },
  {
    "id": 24,
    "name": "CD-Regal",
    "slug": "cd-regal",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "cd-regal-3255.webp",
    "imageUrl": "/assets/furniture/cd-regal-3255.webp"
  },
  {
    "id": 25,
    "name": "Couch/Sofa (2 Sitzer)",
    "slug": "couchsofa-2-sitzer",
    "volumeLiters": 800,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Sofa/ Schlafsofa",
    "imageFilename": "couchsofa-2-sitzer-3258.webp",
    "imageUrl": "/assets/furniture/couchsofa-2-sitzer-3258.webp"
  },
  {
    "id": 26,
    "name": "Couch/Sofa (3 Sitzer)",
    "slug": "couchsofa-3-sitzer",
    "volumeLiters": 1200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Sofa/Ecksofa/Schlafsofa",
    "imageFilename": "couchsofa-3-sitzer-3261.webp",
    "imageUrl": "/assets/furniture/couchsofa-3-sitzer-3261.webp"
  },
  {
    "id": 27,
    "name": "Couch/Sofa (4 Sitzer)",
    "slug": "couchsofa-4-sitzer",
    "volumeLiters": 1600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Sofa/Ecksofa/Schlafsofa",
    "imageFilename": "couchsofa-4-sitzer-3264.webp",
    "imageUrl": "/assets/furniture/couchsofa-4-sitzer-3264.webp"
  },
  {
    "id": 28,
    "name": "Couch/Sofa (5 Sitzer)",
    "slug": "couchsofa-5-sitzer",
    "volumeLiters": 2000,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Sofa/Ecksofa/Schlafsofa",
    "imageFilename": "couchsofa-5-sitzer-3267.webp",
    "imageUrl": "/assets/furniture/couchsofa-5-sitzer-3267.webp"
  },
  {
    "id": 29,
    "name": "Couchtisch",
    "slug": "couchtisch",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "couchtisch-3270.webp",
    "imageUrl": "/assets/furniture/couchtisch-3270.webp"
  },
  {
    "id": 30,
    "name": "Couchtisch für draußen",
    "slug": "couchtisch-fur-draussen",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "couchtisch-fur-draussen-3273.webp",
    "imageUrl": "/assets/furniture/couchtisch-fur-draussen-3273.webp"
  },
  {
    "id": 31,
    "name": "Decken-/ Hängelampe",
    "slug": "decken-hangelampe",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": true,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "decken-hangelampe-3276.webp",
    "imageUrl": "/assets/furniture/decken-hangelampe-3276.webp"
  },
  {
    "id": 32,
    "name": "Doppelbett (Breite: über 90cm)",
    "slug": "doppelbett-breite-uber-90cm",
    "volumeLiters": 1000,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Bett/Boxspringbett/Bett mit Unterkasten",
    "imageFilename": "doppelbett-breite-uber-90cm-3279.webp",
    "imageUrl": "/assets/furniture/doppelbett-breite-uber-90cm-3279.webp"
  },
  {
    "id": 33,
    "name": "Doppelmatratze (Breite: über 90cm)",
    "slug": "doppelmatratze-breite-uber-90cm",
    "volumeLiters": 1000,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "doppelmatratze-breite-uber-90cm-3282.webp",
    "imageUrl": "/assets/furniture/doppelmatratze-breite-uber-90cm-3282.webp"
  },
  {
    "id": 34,
    "name": "Dreirad/Laufrad",
    "slug": "dreiradlaufrad",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "dreiradlaufrad-3285.webp",
    "imageUrl": "/assets/furniture/dreiradlaufrad-3285.webp"
  },
  {
    "id": 35,
    "name": "Drucker groß",
    "slug": "drucker-gross",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "drucker-gross-3289.webp",
    "imageUrl": "/assets/furniture/drucker-gross-3289.webp"
  },
  {
    "id": 36,
    "name": "Drucker klein/ Fax",
    "slug": "drucker-klein-fax",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "drucker-klein-fax-3292.webp",
    "imageUrl": "/assets/furniture/drucker-klein-fax-3292.webp"
  },
  {
    "id": 37,
    "name": "Dunstabzugshaube",
    "slug": "dunstabzugshaube",
    "volumeLiters": 700,
    "canAssemble": true,
    "canMount": true,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "dunstabzugshaube-3295.webp",
    "imageUrl": "/assets/furniture/dunstabzugshaube-3295.webp"
  },
  {
    "id": 38,
    "name": "Einzelbett (Breite: bis 90cm)",
    "slug": "einzelbett-breite-bis-90cm",
    "volumeLiters": 500,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Bett/Boxspringbett/Bett mit Unterkasten",
    "imageFilename": "einzelbett-breite-bis-90cm-3298.webp",
    "imageUrl": "/assets/furniture/einzelbett-breite-bis-90cm-3298.webp"
  },
  {
    "id": 39,
    "name": "Einzelmatratze (Breite: bis 90cm)",
    "slug": "einzelmatratze-breite-bis-90cm",
    "volumeLiters": 500,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "einzelmatratze-breite-bis-90cm-3301.webp",
    "imageUrl": "/assets/furniture/einzelmatratze-breite-bis-90cm-3301.webp"
  },
  {
    "id": 40,
    "name": "Esstisch (Länge: 0-1m)",
    "slug": "esstisch-lange-0-1m",
    "volumeLiters": 500,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "esstisch-lange-0-1m-3304.webp",
    "imageUrl": "/assets/furniture/esstisch-lange-0-1m-3304.webp"
  },
  {
    "id": 41,
    "name": "Esstisch (Länge: 1-3m)",
    "slug": "esstisch-lange-1-3m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "esstisch-lange-1-3m-3307.webp",
    "imageUrl": "/assets/furniture/esstisch-lange-1-3m-3307.webp"
  },
  {
    "id": 42,
    "name": "Esstisch (Länge: 3-5m)",
    "slug": "esstisch-lange-3-5m",
    "volumeLiters": 1200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "esstisch-lange-3-5m-3310.webp",
    "imageUrl": "/assets/furniture/esstisch-lange-3-5m-3310.webp"
  },
  {
    "id": 43,
    "name": "Fahrrad",
    "slug": "fahrrad",
    "volumeLiters": 500,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "fahrrad-3313.webp",
    "imageUrl": "/assets/furniture/fahrrad-3313.webp"
  },
  {
    "id": 44,
    "name": "Fernseher",
    "slug": "fernseher",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": true,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "fernseher-3316.webp",
    "imageUrl": "/assets/furniture/fernseher-3316.webp"
  },
  {
    "id": 45,
    "name": "Fernsehstuhl",
    "slug": "fernsehstuhl",
    "volumeLiters": 800,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "fernsehstuhl-3319.webp",
    "imageUrl": "/assets/furniture/fernsehstuhl-3319.webp"
  },
  {
    "id": 46,
    "name": "Fernsehtisch/Lowboard (Breite: 0-1m)",
    "slug": "fernsehtischlowboard-breite-0-1m",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "fernsehtischlowboard-breite-0-1m-3322.webp",
    "imageUrl": "/assets/furniture/fernsehtischlowboard-breite-0-1m-3322.webp"
  },
  {
    "id": 47,
    "name": "Fernsehtisch/Lowboard (Breite: 1-2m)",
    "slug": "fernsehtischlowboard-breite-1-2m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "fernsehtischlowboard-breite-1-2m-3324.webp",
    "imageUrl": "/assets/furniture/fernsehtischlowboard-breite-1-2m-3324.webp"
  },
  {
    "id": 48,
    "name": "Fernsehtisch/Lowboard (Breite: 2-3m)",
    "slug": "fernsehtischlowboard-breite-2-3m",
    "volumeLiters": 1200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "fernsehtischlowboard-breite-2-3m-3329.webp",
    "imageUrl": "/assets/furniture/fernsehtischlowboard-breite-2-3m-3329.webp"
  },
  {
    "id": 49,
    "name": "Flipchart",
    "slug": "flipchart",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "flipchart-3332.webp",
    "imageUrl": "/assets/furniture/flipchart-3332.webp"
  },
  {
    "id": 50,
    "name": "Garderoben-Set (Breite: 0-2m)",
    "slug": "garderoben-set-breite-0-2m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "garderoben-set-breite-0-2m-3335.webp",
    "imageUrl": "/assets/furniture/garderoben-set-breite-0-2m-3335.webp"
  },
  {
    "id": 51,
    "name": "Gasgrill",
    "slug": "gasgrill",
    "volumeLiters": 600,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "gasgrill-3338.webp",
    "imageUrl": "/assets/furniture/gasgrill-3338.webp"
  },
  {
    "id": 52,
    "name": "Gitarre",
    "slug": "gitarre",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "gitarre-3341.webp",
    "imageUrl": "/assets/furniture/gitarre-3341.webp"
  },
  {
    "id": 53,
    "name": "Golfbag",
    "slug": "golfbag",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "golfbag-3345.webp",
    "imageUrl": "/assets/furniture/golfbag-3345.webp"
  },
  {
    "id": 54,
    "name": "Grill",
    "slug": "grill",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "grill-3348.webp",
    "imageUrl": "/assets/furniture/grill-3348.webp"
  },
  {
    "id": 55,
    "name": "Heizpilz",
    "slug": "heizpilz",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "heizpilz-3351.webp",
    "imageUrl": "/assets/furniture/heizpilz-3351.webp"
  },
  {
    "id": 56,
    "name": "Herd",
    "slug": "herd",
    "volumeLiters": 1000,
    "canAssemble": false,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "herd-3354.webp",
    "imageUrl": "/assets/furniture/herd-3354.webp"
  },
  {
    "id": 57,
    "name": "Hochbett",
    "slug": "hochbett",
    "volumeLiters": 1600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "hochbett-3357.webp",
    "imageUrl": "/assets/furniture/hochbett-3357.webp"
  },
  {
    "id": 58,
    "name": "Hochdruckreiniger",
    "slug": "hochdruckreiniger",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "hochdruckreiniger-3360.webp",
    "imageUrl": "/assets/furniture/hochdruckreiniger-3360.webp"
  },
  {
    "id": 59,
    "name": "Hochschrank (Breite: 0-1m)",
    "slug": "hochschrank-breite-0-1m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 1-3m",
    "imageFilename": "hochschrank-breite-0-1m-3363.webp",
    "imageUrl": "/assets/furniture/hochschrank-breite-0-1m-3363.webp"
  },
  {
    "id": 60,
    "name": "Hocker",
    "slug": "hocker",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "hocker-3366.webp",
    "imageUrl": "/assets/furniture/hocker-3366.webp"
  },
  {
    "id": 61,
    "name": "Hollywoodschaukel",
    "slug": "hollywoodschaukel",
    "volumeLiters": 1000,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "hollywoodschaukel-3371.webp",
    "imageUrl": "/assets/furniture/hollywoodschaukel-3371.webp"
  },
  {
    "id": 62,
    "name": "Hundebett",
    "slug": "hundebett",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "hundebett-3374.webp",
    "imageUrl": "/assets/furniture/hundebett-3374.webp"
  },
  {
    "id": 63,
    "name": "Hundehütte",
    "slug": "hundehutte",
    "volumeLiters": 500,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "hundehutte-3377.webp",
    "imageUrl": "/assets/furniture/hundehutte-3377.webp"
  },
  {
    "id": 64,
    "name": "Kaffeemaschine",
    "slug": "kaffeemaschine",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kaffeemaschine-3381.webp",
    "imageUrl": "/assets/furniture/kaffeemaschine-3381.webp"
  },
  {
    "id": 65,
    "name": "Katzenklo",
    "slug": "katzenklo",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "katzenklo-3384.webp",
    "imageUrl": "/assets/furniture/katzenklo-3384.webp"
  },
  {
    "id": 66,
    "name": "Katzenkratzbaum",
    "slug": "katzenkratzbaum",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "katzenkratzbaum-3387.webp",
    "imageUrl": "/assets/furniture/katzenkratzbaum-3387.webp"
  },
  {
    "id": 67,
    "name": "Kinder-/ Spielküche",
    "slug": "kinder-spielkuche",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kinder-spielkuche-3391.webp",
    "imageUrl": "/assets/furniture/kinder-spielkuche-3391.webp"
  },
  {
    "id": 68,
    "name": "Kinderbett (Breite: bis 70cm)",
    "slug": "kinderbett-breite-bis-70cm",
    "volumeLiters": 500,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kinderbett-breite-bis-70cm-3394.webp",
    "imageUrl": "/assets/furniture/kinderbett-breite-bis-70cm-3394.webp"
  },
  {
    "id": 69,
    "name": "Kindermatratze (Breite: bis 70cm)",
    "slug": "kindermatratze-breite-bis-70cm",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kindermatratze-breite-bis-70cm-3403.webp",
    "imageUrl": "/assets/furniture/kindermatratze-breite-bis-70cm-3403.webp"
  },
  {
    "id": 70,
    "name": "Kinderschrank",
    "slug": "kinderschrank",
    "volumeLiters": 500,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kinderschrank-3397.webp",
    "imageUrl": "/assets/furniture/kinderschrank-3397.webp"
  },
  {
    "id": 71,
    "name": "Kinderstuhl",
    "slug": "kinderstuhl",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kinderstuhl-3400.webp",
    "imageUrl": "/assets/furniture/kinderstuhl-3400.webp"
  },
  {
    "id": 72,
    "name": "Kindertisch",
    "slug": "kindertisch",
    "volumeLiters": 300,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kindertisch-3406.webp",
    "imageUrl": "/assets/furniture/kindertisch-3406.webp"
  },
  {
    "id": 73,
    "name": "Klappstuhl",
    "slug": "klappstuhl",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "klappstuhl-3410.webp",
    "imageUrl": "/assets/furniture/klappstuhl-3410.webp"
  },
  {
    "id": 74,
    "name": "Klapptisch",
    "slug": "klapptisch",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "klapptisch-3413.webp",
    "imageUrl": "/assets/furniture/klapptisch-3413.webp"
  },
  {
    "id": 75,
    "name": "Kleider-/ Garderobenständer",
    "slug": "kleider-garderobenstander",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kleider-garderobenstander-3416.webp",
    "imageUrl": "/assets/furniture/kleider-garderobenstander-3416.webp"
  },
  {
    "id": 76,
    "name": "Kleiderschrank (Breite: 0-1m)",
    "slug": "kleiderschrank-breite-0-1m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kleiderschrank-breite-0-1m-3419.webp",
    "imageUrl": "/assets/furniture/kleiderschrank-breite-0-1m-3419.webp"
  },
  {
    "id": 77,
    "name": "Kleiderschrank (Breite: 1-2m)",
    "slug": "kleiderschrank-breite-1-2m",
    "volumeLiters": 1600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kleiderschrank-breite-1-2m-3422.webp",
    "imageUrl": "/assets/furniture/kleiderschrank-breite-1-2m-3422.webp"
  },
  {
    "id": 78,
    "name": "Kleiderschrank (Breite: 2-3m)",
    "slug": "kleiderschrank-breite-2-3m",
    "volumeLiters": 2400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kleiderschrank-breite-2-3m-3425.jpg",
    "imageUrl": "/assets/furniture/kleiderschrank-breite-2-3m-3425.jpg"
  },
  {
    "id": 79,
    "name": "Kleiderschrank (Breite: 3-4m)",
    "slug": "kleiderschrank-breite-3-4m",
    "volumeLiters": 3200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kleiderschrank-breite-3-4m-3428.webp",
    "imageUrl": "/assets/furniture/kleiderschrank-breite-3-4m-3428.webp"
  },
  {
    "id": 80,
    "name": "Klimaanlage",
    "slug": "klimaanlage",
    "volumeLiters": 700,
    "canAssemble": true,
    "canMount": true,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "klimaanlage-3436.webp",
    "imageUrl": "/assets/furniture/klimaanlage-3436.webp"
  },
  {
    "id": 81,
    "name": "Koffer",
    "slug": "koffer",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "koffer-3439.webp",
    "imageUrl": "/assets/furniture/koffer-3439.webp"
  },
  {
    "id": 82,
    "name": "Koffer (Hand)",
    "slug": "koffer-hand",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "koffer-hand-3443.webp",
    "imageUrl": "/assets/furniture/koffer-hand-3443.webp"
  },
  {
    "id": 83,
    "name": "Kommode/Sideboard hoch (Breite: 0-1m)",
    "slug": "kommodesideboard-hoch-breite-0-1m",
    "volumeLiters": 1200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "",
    "imageFilename": "kommodesideboard-hoch-breite-0-1m-3446.webp",
    "imageUrl": "/assets/furniture/kommodesideboard-hoch-breite-0-1m-3446.webp"
  },
  {
    "id": 84,
    "name": "Kommode/Sideboard hoch (Breite: 1-2m)",
    "slug": "kommodesideboard-hoch-breite-1-2m",
    "volumeLiters": 1600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "",
    "imageFilename": "kommodesideboard-hoch-breite-1-2m-3450.webp",
    "imageUrl": "/assets/furniture/kommodesideboard-hoch-breite-1-2m-3450.webp"
  },
  {
    "id": 85,
    "name": "Kommode/Sideboard niedrig (Breite: 0-1m)",
    "slug": "kommodesideboard-niedrig-breite-0-1m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "kommodesideboard-niedrig-breite-0-1m-3455.webp",
    "imageUrl": "/assets/furniture/kommodesideboard-niedrig-breite-0-1m-3455.webp"
  },
  {
    "id": 86,
    "name": "Kommode/Sideboard niedrig (Breite: 1-2m)",
    "slug": "kommodesideboard-niedrig-breite-1-2m",
    "volumeLiters": 1200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "kommodesideboard-niedrig-breite-1-2m-3458.webp",
    "imageUrl": "/assets/furniture/kommodesideboard-niedrig-breite-1-2m-3458.webp"
  },
  {
    "id": 87,
    "name": "Konsolentisch",
    "slug": "konsolentisch",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "konsolentisch-3461.webp",
    "imageUrl": "/assets/furniture/konsolentisch-3461.webp"
  },
  {
    "id": 88,
    "name": "Kronleuchter",
    "slug": "kronleuchter",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": true,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kronleuchter-3464.webp",
    "imageUrl": "/assets/furniture/kronleuchter-3464.webp"
  },
  {
    "id": 89,
    "name": "Küchen-/Arbeitsplatte (je Meter)",
    "slug": "kuchen-arbeitsplatte-je-meter",
    "volumeLiters": 100,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kuchen-arbeitsplatte-je-meter-3467.webp",
    "imageUrl": "/assets/furniture/kuchen-arbeitsplatte-je-meter-3467.webp"
  },
  {
    "id": 90,
    "name": "Kühlschrank",
    "slug": "kuhlschrank",
    "volumeLiters": 700,
    "canAssemble": false,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kuhlschrank-3470.webp",
    "imageUrl": "/assets/furniture/kuhlschrank-3470.webp"
  },
  {
    "id": 91,
    "name": "Kühlschrank (Gefrierkomb.)",
    "slug": "kuhlschrank-gefrierkomb",
    "volumeLiters": 1400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kuhlschrank-gefrierkomb-3476.webp",
    "imageUrl": "/assets/furniture/kuhlschrank-gefrierkomb-3476.webp"
  },
  {
    "id": 92,
    "name": "Kühlschrank (Side by side)",
    "slug": "kuhlschrank-side-by-side",
    "volumeLiters": 2500,
    "canAssemble": false,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe",
    "imageFilename": "kuhlschrank-side-by-side-3473.webp",
    "imageUrl": "/assets/furniture/kuhlschrank-side-by-side-3473.webp"
  },
  {
    "id": 93,
    "name": "Kühlschrank (Wein)",
    "slug": "kuhlschrank-wein",
    "volumeLiters": 700,
    "canAssemble": false,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kuhlschrank-wein-3479.webp",
    "imageUrl": "/assets/furniture/kuhlschrank-wein-3479.webp"
  },
  {
    "id": 94,
    "name": "Laufgitter",
    "slug": "laufgitter",
    "volumeLiters": 100,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "laufgitter-3485.webp",
    "imageUrl": "/assets/furniture/laufgitter-3485.webp"
  },
  {
    "id": 95,
    "name": "Lautsprecher/Verstärker",
    "slug": "lautsprecherverstarker",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "lautsprecherverstarker-3488.webp",
    "imageUrl": "/assets/furniture/lautsprecherverstarker-3488.webp"
  },
  {
    "id": 96,
    "name": "Leiter",
    "slug": "leiter",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "leiter-3491.webp",
    "imageUrl": "/assets/furniture/leiter-3491.webp"
  },
  {
    "id": 97,
    "name": "Liegestuhl",
    "slug": "liegestuhl",
    "volumeLiters": 500,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "liegestuhl-3494.webp",
    "imageUrl": "/assets/furniture/liegestuhl-3494.webp"
  },
  {
    "id": 98,
    "name": "Loungesessel",
    "slug": "loungesessel",
    "volumeLiters": 600,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "loungesessel-3497.webp",
    "imageUrl": "/assets/furniture/loungesessel-3497.webp"
  },
  {
    "id": 99,
    "name": "Loungesofa (2-Sitzer)",
    "slug": "loungesofa-2-sitzer",
    "volumeLiters": 800,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "loungesofa-2-sitzer-3500.webp",
    "imageUrl": "/assets/furniture/loungesofa-2-sitzer-3500.webp"
  },
  {
    "id": 100,
    "name": "Loungesofa (3-Sitzer)",
    "slug": "loungesofa-3-sitzer",
    "volumeLiters": 1000,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "loungesofa-3-sitzer-3503.webp",
    "imageUrl": "/assets/furniture/loungesofa-3-sitzer-3503.webp"
  },
  {
    "id": 101,
    "name": "Loungesofa (4-Sitzer)",
    "slug": "loungesofa-4-sitzer",
    "volumeLiters": 1200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "loungesofa-4-sitzer-3506.webp",
    "imageUrl": "/assets/furniture/loungesofa-4-sitzer-3506.webp"
  },
  {
    "id": 102,
    "name": "Läufer",
    "slug": "laufer",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "laufer-3482.webp",
    "imageUrl": "/assets/furniture/laufer-3482.webp"
  },
  {
    "id": 103,
    "name": "Massagesessel",
    "slug": "massagesessel",
    "volumeLiters": 1000,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "massagesessel-3509.webp",
    "imageUrl": "/assets/furniture/massagesessel-3509.webp"
  },
  {
    "id": 104,
    "name": "Mikrowelle",
    "slug": "mikrowelle",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "mikrowelle-3512.webp",
    "imageUrl": "/assets/furniture/mikrowelle-3512.webp"
  },
  {
    "id": 105,
    "name": "Motorrad",
    "slug": "motorrad",
    "volumeLiters": 1000,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "motorrad-3515.webp",
    "imageUrl": "/assets/furniture/motorrad-3515.webp"
  },
  {
    "id": 106,
    "name": "Musik-/Stereoanlage",
    "slug": "musik-stereoanlage",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "musik-stereoanlage-3522.webp",
    "imageUrl": "/assets/furniture/musik-stereoanlage-3522.webp"
  },
  {
    "id": 107,
    "name": "Mülleimer",
    "slug": "mulleimer",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "mulleimer-3518.webp",
    "imageUrl": "/assets/furniture/mulleimer-3518.webp"
  },
  {
    "id": 108,
    "name": "Nachtkästchen/-tisch",
    "slug": "nachtkastchen-tisch",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Hlöhe:",
    "imageFilename": "nachtkastchen-tisch-3525.webp",
    "imageUrl": "/assets/furniture/nachtkastchen-tisch-3525.webp"
  },
  {
    "id": 109,
    "name": "Ober-/Hängeschrank (Breite: 0-1m)",
    "slug": "ober-hangeschrank-breite-0-1m",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "ober-hangeschrank-breite-0-1m-3528.webp",
    "imageUrl": "/assets/furniture/ober-hangeschrank-breite-0-1m-3528.webp"
  },
  {
    "id": 110,
    "name": "Ober-/Hängeschrank (Breite: 1-2m)",
    "slug": "ober-hangeschrank-breite-1-2m",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "ober-hangeschrank-breite-1-2m-3531.webp",
    "imageUrl": "/assets/furniture/ober-hangeschrank-breite-1-2m-3531.webp"
  },
  {
    "id": 111,
    "name": "PC-Bildschirm",
    "slug": "pc-bildschirm",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "pc-bildschirm-3534.webp",
    "imageUrl": "/assets/furniture/pc-bildschirm-3534.webp"
  },
  {
    "id": 112,
    "name": "PC/Computer",
    "slug": "pccomputer",
    "volumeLiters": 600,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "pccomputer-3537.webp",
    "imageUrl": "/assets/furniture/pccomputer-3537.webp"
  },
  {
    "id": 113,
    "name": "Rasenmäher",
    "slug": "rasenmaher",
    "volumeLiters": 500,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "rasenmaher-3540.webp",
    "imageUrl": "/assets/furniture/rasenmaher-3540.webp"
  },
  {
    "id": 114,
    "name": "Raumteiler",
    "slug": "raumteiler",
    "volumeLiters": 800,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "raumteiler-3546.webp",
    "imageUrl": "/assets/furniture/raumteiler-3546.webp"
  },
  {
    "id": 115,
    "name": "Regal hoch (Breite: 0-1m)",
    "slug": "regal-hoch-breite-0-1m",
    "volumeLiters": 1000,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Hoch: 1-3m",
    "imageFilename": "regal-hoch-breite-0-1m-3549.webp",
    "imageUrl": "/assets/furniture/regal-hoch-breite-0-1m-3549.webp"
  },
  {
    "id": 116,
    "name": "Regal hoch (Breite: 1-2m)",
    "slug": "regal-hoch-breite-1-2m",
    "volumeLiters": 1400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 1-3m",
    "imageFilename": "regal-hoch-breite-1-2m-3552.webp",
    "imageUrl": "/assets/furniture/regal-hoch-breite-1-2m-3552.webp"
  },
  {
    "id": 117,
    "name": "Regal niedrig (Breite: 0-1m)",
    "slug": "regal-niedrig-breite-0-1m",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "regal-niedrig-breite-0-1m-3555.webp",
    "imageUrl": "/assets/furniture/regal-niedrig-breite-0-1m-3555.webp"
  },
  {
    "id": 118,
    "name": "Regal niedrig (Breite: 1-2m)",
    "slug": "regal-niedrig-breite-1-2m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "regal-niedrig-breite-1-2m-3558.webp",
    "imageUrl": "/assets/furniture/regal-niedrig-breite-1-2m-3558.webp"
  },
  {
    "id": 119,
    "name": "Regalbrett kurz",
    "slug": "regalbrett-kurz",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Breite: 0-2m",
    "imageFilename": "regalbrett-kurz-3561.webp",
    "imageUrl": "/assets/furniture/regalbrett-kurz-3561.webp"
  },
  {
    "id": 120,
    "name": "Regalbrett lang",
    "slug": "regalbrett-lang",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Länge: 2-4m",
    "imageFilename": "regalbrett-lang-3564.webp",
    "imageUrl": "/assets/furniture/regalbrett-lang-3564.webp"
  },
  {
    "id": 121,
    "name": "Rollcontainer",
    "slug": "rollcontainer",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "rollcontainer-3567.webp",
    "imageUrl": "/assets/furniture/rollcontainer-3567.webp"
  },
  {
    "id": 122,
    "name": "Roller/Vespa",
    "slug": "rollervespa",
    "volumeLiters": 1000,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "rollervespa-3570.webp",
    "imageUrl": "/assets/furniture/rollervespa-3570.webp"
  },
  {
    "id": 123,
    "name": "Sackkarre",
    "slug": "sackkarre",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "sackkarre-3573.webp",
    "imageUrl": "/assets/furniture/sackkarre-3573.webp"
  },
  {
    "id": 124,
    "name": "Schaukelstuhl",
    "slug": "schaukelstuhl",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "",
    "imageFilename": "schaukelstuhl-3576.webp",
    "imageUrl": "/assets/furniture/schaukelstuhl-3576.webp"
  },
  {
    "id": 125,
    "name": "Schlagzeug",
    "slug": "schlagzeug",
    "volumeLiters": 2000,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "schlagzeug-3579.webp",
    "imageUrl": "/assets/furniture/schlagzeug-3579.webp"
  },
  {
    "id": 126,
    "name": "Schlitten",
    "slug": "schlitten",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "schlitten-3582.webp",
    "imageUrl": "/assets/furniture/schlitten-3582.webp"
  },
  {
    "id": 127,
    "name": "Schmink-/Spiegeltisch",
    "slug": "schmink-spiegeltisch",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "schmink-spiegeltisch-3585.webp",
    "imageUrl": "/assets/furniture/schmink-spiegeltisch-3585.webp"
  },
  {
    "id": 128,
    "name": "Schreibtisch (Breite: 0-1m)",
    "slug": "schreibtisch-breite-0-1m",
    "volumeLiters": 1700,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "schreibtisch-breite-0-1m-3588.webp",
    "imageUrl": "/assets/furniture/schreibtisch-breite-0-1m-3588.webp"
  },
  {
    "id": 129,
    "name": "Schreibtisch (Breite: 1-2m)",
    "slug": "schreibtisch-breite-1-2m",
    "volumeLiters": 1200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "schreibtisch-breite-1-2m-3591.webp",
    "imageUrl": "/assets/furniture/schreibtisch-breite-1-2m-3591.webp"
  },
  {
    "id": 130,
    "name": "Schreibtischstuhl",
    "slug": "schreibtischstuhl",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "schreibtischstuhl-3593.webp",
    "imageUrl": "/assets/furniture/schreibtischstuhl-3593.webp"
  },
  {
    "id": 131,
    "name": "Schubkarre",
    "slug": "schubkarre",
    "volumeLiters": 400,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "schubkarre-3595.webp",
    "imageUrl": "/assets/furniture/schubkarre-3595.webp"
  },
  {
    "id": 132,
    "name": "Schuhaufbewahrung",
    "slug": "schuhaufbewahrung",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "schuhaufbewahrung-3597.webp",
    "imageUrl": "/assets/furniture/schuhaufbewahrung-3597.webp"
  },
  {
    "id": 133,
    "name": "Schuhschrank hoch (Breite: 0-1m)",
    "slug": "schuhschrank-hoch-breite-0-1m",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 1-2m",
    "imageFilename": "schuhschrank-hoch-breite-0-1m-3599.webp",
    "imageUrl": "/assets/furniture/schuhschrank-hoch-breite-0-1m-3599.webp"
  },
  {
    "id": 134,
    "name": "Schuhschrank hoch (Breite: 1-2m)",
    "slug": "schuhschrank-hoch-breite-1-2m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 1-2m",
    "imageFilename": "schuhschrank-hoch-breite-1-2m-3602.webp",
    "imageUrl": "/assets/furniture/schuhschrank-hoch-breite-1-2m-3602.webp"
  },
  {
    "id": 135,
    "name": "Schuhschrank niedrig (Breite: 0-1m)",
    "slug": "schuhschrank-niedrig-breite-0-1m",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "schuhschrank-niedrig-breite-0-1m-3776.webp",
    "imageUrl": "/assets/furniture/schuhschrank-niedrig-breite-0-1m-3776.webp"
  },
  {
    "id": 136,
    "name": "Schuhschrank niedrig (Breite: 1-2m)",
    "slug": "schuhschrank-niedrig-breite-1-2m",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "schuhschrank-niedrig-breite-1-2m-3608.webp",
    "imageUrl": "/assets/furniture/schuhschrank-niedrig-breite-1-2m-3608.webp"
  },
  {
    "id": 137,
    "name": "Servierwagen",
    "slug": "servierwagen",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "servierwagen-3610.webp",
    "imageUrl": "/assets/furniture/servierwagen-3610.webp"
  },
  {
    "id": 138,
    "name": "Sessel",
    "slug": "sessel",
    "volumeLiters": 600,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "sessel-3612.webp",
    "imageUrl": "/assets/furniture/sessel-3612.webp"
  },
  {
    "id": 139,
    "name": "Sesselhocker",
    "slug": "sesselhocker",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "sesselhocker-3615.webp",
    "imageUrl": "/assets/furniture/sesselhocker-3615.webp"
  },
  {
    "id": 140,
    "name": "Sitzsack",
    "slug": "sitzsack",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "sitzsack-3617.webp",
    "imageUrl": "/assets/furniture/sitzsack-3617.webp"
  },
  {
    "id": 141,
    "name": "Skier",
    "slug": "skier",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "skier-3619.webp",
    "imageUrl": "/assets/furniture/skier-3619.webp"
  },
  {
    "id": 142,
    "name": "Snowboard",
    "slug": "snowboard",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "snowboard-3622.webp",
    "imageUrl": "/assets/furniture/snowboard-3622.webp"
  },
  {
    "id": 143,
    "name": "Sonnenschirm und Fuß",
    "slug": "sonnenschirm-und-fuss",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "sonnenschirm-und-fuss-3624.webp",
    "imageUrl": "/assets/furniture/sonnenschirm-und-fuss-3624.webp"
  },
  {
    "id": 144,
    "name": "Spiegel L",
    "slug": "spiegel-l",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Längste Seite über 1m",
    "imageFilename": "spiegel-l-3627.webp",
    "imageUrl": "/assets/furniture/spiegel-l-3627.webp"
  },
  {
    "id": 145,
    "name": "Spiegel S",
    "slug": "spiegel-s",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Längste Seite unter 1m",
    "imageFilename": "spiegel-s-3629.webp",
    "imageUrl": "/assets/furniture/spiegel-s-3629.webp"
  },
  {
    "id": 146,
    "name": "Spiegelschrank",
    "slug": "spiegelschrank",
    "volumeLiters": 500,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "spiegelschrank-3631.webp",
    "imageUrl": "/assets/furniture/spiegelschrank-3631.webp"
  },
  {
    "id": 147,
    "name": "Spülbecken",
    "slug": "spulbecken",
    "volumeLiters": 500,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "spulbecken-3634.webp",
    "imageUrl": "/assets/furniture/spulbecken-3634.webp"
  },
  {
    "id": 148,
    "name": "Spülmaschine",
    "slug": "spulmaschine",
    "volumeLiters": 1000,
    "canAssemble": false,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "spulmaschine-3636.webp",
    "imageUrl": "/assets/furniture/spulmaschine-3636.webp"
  },
  {
    "id": 149,
    "name": "Standuhr",
    "slug": "standuhr",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "standuhr-3638.webp",
    "imageUrl": "/assets/furniture/standuhr-3638.webp"
  },
  {
    "id": 150,
    "name": "Staubsauger",
    "slug": "staubsauger",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "staubsauger-3640.webp",
    "imageUrl": "/assets/furniture/staubsauger-3640.webp"
  },
  {
    "id": 151,
    "name": "Stehlampe",
    "slug": "stehlampe",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "stehlampe-3642.webp",
    "imageUrl": "/assets/furniture/stehlampe-3642.webp"
  },
  {
    "id": 152,
    "name": "Stepper/Statisches Fahrrad",
    "slug": "stepperstatisches-fahrrad",
    "volumeLiters": 900,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "stepperstatisches-fahrrad-3644.webp",
    "imageUrl": "/assets/furniture/stepperstatisches-fahrrad-3644.webp"
  },
  {
    "id": 153,
    "name": "Stuhl",
    "slug": "stuhl",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "stuhl-3646.webp",
    "imageUrl": "/assets/furniture/stuhl-3646.webp"
  },
  {
    "id": 154,
    "name": "Surfbrett",
    "slug": "surfbrett",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "surfbrett-3648.webp",
    "imageUrl": "/assets/furniture/surfbrett-3648.webp"
  },
  {
    "id": 155,
    "name": "Teppich",
    "slug": "teppich",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "teppich-3650.webp",
    "imageUrl": "/assets/furniture/teppich-3650.webp"
  },
  {
    "id": 156,
    "name": "Tiefkühl-/Gefriertruhe",
    "slug": "tiefkuhl-gefriertruhe",
    "volumeLiters": 500,
    "canAssemble": false,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "tiefkuhl-gefriertruhe-3653.webp",
    "imageUrl": "/assets/furniture/tiefkuhl-gefriertruhe-3653.webp"
  },
  {
    "id": 157,
    "name": "Tisch rund",
    "slug": "tisch-rund",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "tisch-rund-3655.webp",
    "imageUrl": "/assets/furniture/tisch-rund-3655.webp"
  },
  {
    "id": 158,
    "name": "Tischlampe",
    "slug": "tischlampe",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "tischlampe-3657.webp",
    "imageUrl": "/assets/furniture/tischlampe-3657.webp"
  },
  {
    "id": 159,
    "name": "Topfpflanze groß",
    "slug": "topfpflanze-gross",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: über 1,5 m",
    "imageFilename": "topfpflanze-gross-3660.webp",
    "imageUrl": "/assets/furniture/topfpflanze-gross-3660.webp"
  },
  {
    "id": 160,
    "name": "Topfpflanze klein",
    "slug": "topfpflanze-klein",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: bis 1,5 m",
    "imageFilename": "topfpflanze-klein-3663.webp",
    "imageUrl": "/assets/furniture/topfpflanze-klein-3663.webp"
  },
  {
    "id": 161,
    "name": "Trampolin",
    "slug": "trampolin",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "trampolin-3665.webp",
    "imageUrl": "/assets/furniture/trampolin-3665.webp"
  },
  {
    "id": 162,
    "name": "Truhe",
    "slug": "truhe",
    "volumeLiters": 700,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "truhe-3667.webp",
    "imageUrl": "/assets/furniture/truhe-3667.webp"
  },
  {
    "id": 163,
    "name": "Unterschrank (Breite: 0-1m)",
    "slug": "unterschrank-breite-0-1m",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "unterschrank-breite-0-1m-3670.webp",
    "imageUrl": "/assets/furniture/unterschrank-breite-0-1m-3670.webp"
  },
  {
    "id": 164,
    "name": "Unterschrank (Breite: 1-2m)",
    "slug": "unterschrank-breite-1-2m",
    "volumeLiters": 800,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "unterschrank-breite-1-2m-3672.webp",
    "imageUrl": "/assets/furniture/unterschrank-breite-1-2m-3672.webp"
  },
  {
    "id": 165,
    "name": "Ventilator",
    "slug": "ventilator",
    "volumeLiters": 300,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "ventilator-3674.webp",
    "imageUrl": "/assets/furniture/ventilator-3674.webp"
  },
  {
    "id": 166,
    "name": "Vitrine/Glasschrank hoch (Breite: 0-1m)",
    "slug": "vitrineglasschrank-hoch-breite-0-1m",
    "volumeLiters": 1000,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 1-2m",
    "imageFilename": "vitrineglasschrank-hoch-breite-0-1m-3677.webp",
    "imageUrl": "/assets/furniture/vitrineglasschrank-hoch-breite-0-1m-3677.webp"
  },
  {
    "id": 167,
    "name": "Vitrine/Glasschrank hoch (Breite: 1-2m)",
    "slug": "vitrineglasschrank-hoch-breite-1-2m",
    "volumeLiters": 1400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 1-2m",
    "imageFilename": "vitrineglasschrank-hoch-breite-1-2m-3680.webp",
    "imageUrl": "/assets/furniture/vitrineglasschrank-hoch-breite-1-2m-3680.webp"
  },
  {
    "id": 168,
    "name": "Vitrine/Glasschrank niedrig (Breite: 0-1m)",
    "slug": "vitrineglasschrank-niedrig-breite-0-1m",
    "volumeLiters": 600,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "vitrineglasschrank-niedrig-breite-0-1-3682.webp",
    "imageUrl": "/assets/furniture/vitrineglasschrank-niedrig-breite-0-1-3682.webp"
  },
  {
    "id": 169,
    "name": "Vitrine/Glasschrank niedrig (Breite: 1-2m)",
    "slug": "vitrineglasschrank-niedrig-breite-1-2m",
    "volumeLiters": 1000,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe: 0-1m",
    "imageFilename": "vitrineglasschrank-niedrig-breite-1-2-3684.webp",
    "imageUrl": "/assets/furniture/vitrineglasschrank-niedrig-breite-1-2-3684.webp"
  },
  {
    "id": 170,
    "name": "Vogelkäfig",
    "slug": "vogelkafig",
    "volumeLiters": 200,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "vogelkafig-3686.webp",
    "imageUrl": "/assets/furniture/vogelkafig-3686.webp"
  },
  {
    "id": 171,
    "name": "Vorhang-/Gardinenstange",
    "slug": "vorhang-gardinenstange",
    "volumeLiters": 100,
    "canAssemble": true,
    "canMount": true,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "vorhang-gardinenstange-3688.webp",
    "imageUrl": "/assets/furniture/vorhang-gardinenstange-3688.webp"
  },
  {
    "id": 172,
    "name": "Waschbecken",
    "slug": "waschbecken",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "waschbecken-3691.webp",
    "imageUrl": "/assets/furniture/waschbecken-3691.webp"
  },
  {
    "id": 173,
    "name": "Waschbeckenunterschrank",
    "slug": "waschbeckenunterschrank",
    "volumeLiters": 400,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Hängend & stehend",
    "imageFilename": "waschbeckenunterschrank-3693.webp",
    "imageUrl": "/assets/furniture/waschbeckenunterschrank-3693.webp"
  },
  {
    "id": 174,
    "name": "Waschmaschine",
    "slug": "waschmaschine",
    "volumeLiters": 1000,
    "canAssemble": true,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "waschmaschine-3701.webp",
    "imageUrl": "/assets/furniture/waschmaschine-3701.webp"
  },
  {
    "id": 175,
    "name": "Werkzeugschrank",
    "slug": "werkzeugschrank",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "werkzeugschrank-3703.webp",
    "imageUrl": "/assets/furniture/werkzeugschrank-3703.webp"
  },
  {
    "id": 176,
    "name": "Whiteboard",
    "slug": "whiteboard",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "whiteboard-3705.webp",
    "imageUrl": "/assets/furniture/whiteboard-3705.webp"
  },
  {
    "id": 177,
    "name": "Wickelkommode",
    "slug": "wickelkommode",
    "volumeLiters": 1000,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "wickelkommode-3707.webp",
    "imageUrl": "/assets/furniture/wickelkommode-3707.webp"
  },
  {
    "id": 178,
    "name": "Winkelschreibtisch",
    "slug": "winkelschreibtisch",
    "volumeLiters": 1700,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "winkelschreibtisch-3709.webp",
    "imageUrl": "/assets/furniture/winkelschreibtisch-3709.webp"
  },
  {
    "id": 179,
    "name": "Wäschekorb/-tonne",
    "slug": "waschekorb-tonne",
    "volumeLiters": 300,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "waschekorb-tonne-3695.webp",
    "imageUrl": "/assets/furniture/waschekorb-tonne-3695.webp"
  },
  {
    "id": 180,
    "name": "Wäscheständer",
    "slug": "waschestander",
    "volumeLiters": 100,
    "canAssemble": false,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 0,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "waschestander-3697.webp",
    "imageUrl": "/assets/furniture/waschestander-3697.webp"
  },
  {
    "id": 181,
    "name": "Wäschetrockner",
    "slug": "waschetrockner",
    "volumeLiters": 500,
    "canAssemble": false,
    "canMount": false,
    "canConnect": true,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 15,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "waschetrockner-3699.webp",
    "imageUrl": "/assets/furniture/waschetrockner-3699.webp"
  },
  {
    "id": 182,
    "name": "kleiderstange",
    "slug": "kleiderstange",
    "volumeLiters": 200,
    "canAssemble": true,
    "canMount": false,
    "canConnect": false,
    "assemblyTimeMinutes": 30,
    "mountingTimeMinutes": 0,
    "connectionTimeMinutes": 0,
    "description": "Höhe:",
    "imageFilename": "kleiderstange-3432.webp",
    "imageUrl": "/assets/furniture/kleiderstange-3432.webp"
  }
];

// All 526 furniture-to-room mappings
export const FURNITURE_ROOM_MAPPINGS: FurnitureRoomMapping[] = [
  {
    "furnitureId": 1,
    "roomId": 8
  },
  {
    "furnitureId": 2,
    "roomId": 8
  },
  {
    "furnitureId": 3,
    "roomId": 8
  },
  {
    "furnitureId": 4,
    "roomId": 8
  },
  {
    "furnitureId": 7,
    "roomId": 3
  },
  {
    "furnitureId": 7,
    "roomId": 2
  },
  {
    "furnitureId": 8,
    "roomId": 11
  },
  {
    "furnitureId": 8,
    "roomId": 4
  },
  {
    "furnitureId": 8,
    "roomId": 5
  },
  {
    "furnitureId": 9,
    "roomId": 11
  },
  {
    "furnitureId": 9,
    "roomId": 4
  },
  {
    "furnitureId": 9,
    "roomId": 5
  },
  {
    "furnitureId": 10,
    "roomId": 11
  },
  {
    "furnitureId": 10,
    "roomId": 4
  },
  {
    "furnitureId": 10,
    "roomId": 5
  },
  {
    "furnitureId": 11,
    "roomId": 4
  },
  {
    "furnitureId": 12,
    "roomId": 4
  },
  {
    "furnitureId": 12,
    "roomId": 5
  },
  {
    "furnitureId": 13,
    "roomId": 4
  },
  {
    "furnitureId": 13,
    "roomId": 5
  },
  {
    "furnitureId": 14,
    "roomId": 4
  },
  {
    "furnitureId": 14,
    "roomId": 5
  },
  {
    "furnitureId": 16,
    "roomId": 11
  },
  {
    "furnitureId": 16,
    "roomId": 8
  },
  {
    "furnitureId": 16,
    "roomId": 10
  },
  {
    "furnitureId": 16,
    "roomId": 4
  },
  {
    "furnitureId": 16,
    "roomId": 5
  },
  {
    "furnitureId": 17,
    "roomId": 8
  },
  {
    "furnitureId": 17,
    "roomId": 10
  },
  {
    "furnitureId": 17,
    "roomId": 7
  },
  {
    "furnitureId": 17,
    "roomId": 3
  },
  {
    "furnitureId": 17,
    "roomId": 4
  },
  {
    "furnitureId": 17,
    "roomId": 2
  },
  {
    "furnitureId": 17,
    "roomId": 5
  },
  {
    "furnitureId": 18,
    "roomId": 8
  },
  {
    "furnitureId": 18,
    "roomId": 10
  },
  {
    "furnitureId": 18,
    "roomId": 7
  },
  {
    "furnitureId": 18,
    "roomId": 3
  },
  {
    "furnitureId": 18,
    "roomId": 4
  },
  {
    "furnitureId": 18,
    "roomId": 2
  },
  {
    "furnitureId": 18,
    "roomId": 5
  },
  {
    "furnitureId": 19,
    "roomId": 11
  },
  {
    "furnitureId": 21,
    "roomId": 4
  },
  {
    "furnitureId": 21,
    "roomId": 5
  },
  {
    "furnitureId": 22,
    "roomId": 4
  },
  {
    "furnitureId": 22,
    "roomId": 5
  },
  {
    "furnitureId": 24,
    "roomId": 5
  },
  {
    "furnitureId": 25,
    "roomId": 8
  },
  {
    "furnitureId": 25,
    "roomId": 7
  },
  {
    "furnitureId": 25,
    "roomId": 3
  },
  {
    "furnitureId": 25,
    "roomId": 5
  },
  {
    "furnitureId": 26,
    "roomId": 8
  },
  {
    "furnitureId": 26,
    "roomId": 7
  },
  {
    "furnitureId": 26,
    "roomId": 3
  },
  {
    "furnitureId": 26,
    "roomId": 5
  },
  {
    "furnitureId": 27,
    "roomId": 8
  },
  {
    "furnitureId": 27,
    "roomId": 7
  },
  {
    "furnitureId": 27,
    "roomId": 3
  },
  {
    "furnitureId": 27,
    "roomId": 5
  },
  {
    "furnitureId": 28,
    "roomId": 8
  },
  {
    "furnitureId": 28,
    "roomId": 7
  },
  {
    "furnitureId": 28,
    "roomId": 3
  },
  {
    "furnitureId": 28,
    "roomId": 5
  },
  {
    "furnitureId": 29,
    "roomId": 5
  },
  {
    "furnitureId": 30,
    "roomId": 11
  },
  {
    "furnitureId": 31,
    "roomId": 9
  },
  {
    "furnitureId": 31,
    "roomId": 6
  },
  {
    "furnitureId": 31,
    "roomId": 8
  },
  {
    "furnitureId": 31,
    "roomId": 10
  },
  {
    "furnitureId": 31,
    "roomId": 7
  },
  {
    "furnitureId": 31,
    "roomId": 3
  },
  {
    "furnitureId": 31,
    "roomId": 4
  },
  {
    "furnitureId": 31,
    "roomId": 2
  },
  {
    "furnitureId": 31,
    "roomId": 5
  },
  {
    "furnitureId": 32,
    "roomId": 7
  },
  {
    "furnitureId": 32,
    "roomId": 3
  },
  {
    "furnitureId": 32,
    "roomId": 2
  },
  {
    "furnitureId": 33,
    "roomId": 7
  },
  {
    "furnitureId": 33,
    "roomId": 3
  },
  {
    "furnitureId": 33,
    "roomId": 2
  },
  {
    "furnitureId": 35,
    "roomId": 8
  },
  {
    "furnitureId": 36,
    "roomId": 8
  },
  {
    "furnitureId": 37,
    "roomId": 4
  },
  {
    "furnitureId": 38,
    "roomId": 7
  },
  {
    "furnitureId": 38,
    "roomId": 3
  },
  {
    "furnitureId": 38,
    "roomId": 2
  },
  {
    "furnitureId": 39,
    "roomId": 7
  },
  {
    "furnitureId": 39,
    "roomId": 3
  },
  {
    "furnitureId": 39,
    "roomId": 2
  },
  {
    "furnitureId": 40,
    "roomId": 11
  },
  {
    "furnitureId": 40,
    "roomId": 4
  },
  {
    "furnitureId": 40,
    "roomId": 5
  },
  {
    "furnitureId": 41,
    "roomId": 11
  },
  {
    "furnitureId": 41,
    "roomId": 4
  },
  {
    "furnitureId": 41,
    "roomId": 5
  },
  {
    "furnitureId": 42,
    "roomId": 11
  },
  {
    "furnitureId": 42,
    "roomId": 4
  },
  {
    "furnitureId": 42,
    "roomId": 5
  },
  {
    "furnitureId": 44,
    "roomId": 7
  },
  {
    "furnitureId": 44,
    "roomId": 3
  },
  {
    "furnitureId": 44,
    "roomId": 2
  },
  {
    "furnitureId": 44,
    "roomId": 5
  },
  {
    "furnitureId": 45,
    "roomId": 5
  },
  {
    "furnitureId": 46,
    "roomId": 5
  },
  {
    "furnitureId": 47,
    "roomId": 5
  },
  {
    "furnitureId": 48,
    "roomId": 5
  },
  {
    "furnitureId": 49,
    "roomId": 8
  },
  {
    "furnitureId": 50,
    "roomId": 10
  },
  {
    "furnitureId": 51,
    "roomId": 11
  },
  {
    "furnitureId": 54,
    "roomId": 11
  },
  {
    "furnitureId": 55,
    "roomId": 11
  },
  {
    "furnitureId": 56,
    "roomId": 4
  },
  {
    "furnitureId": 57,
    "roomId": 3
  },
  {
    "furnitureId": 59,
    "roomId": 6
  },
  {
    "furnitureId": 60,
    "roomId": 6
  },
  {
    "furnitureId": 60,
    "roomId": 11
  },
  {
    "furnitureId": 60,
    "roomId": 8
  },
  {
    "furnitureId": 60,
    "roomId": 10
  },
  {
    "furnitureId": 60,
    "roomId": 7
  },
  {
    "furnitureId": 60,
    "roomId": 3
  },
  {
    "furnitureId": 60,
    "roomId": 4
  },
  {
    "furnitureId": 60,
    "roomId": 2
  },
  {
    "furnitureId": 60,
    "roomId": 5
  },
  {
    "furnitureId": 61,
    "roomId": 11
  },
  {
    "furnitureId": 64,
    "roomId": 4
  },
  {
    "furnitureId": 67,
    "roomId": 3
  },
  {
    "furnitureId": 68,
    "roomId": 3
  },
  {
    "furnitureId": 69,
    "roomId": 3
  },
  {
    "furnitureId": 70,
    "roomId": 3
  },
  {
    "furnitureId": 71,
    "roomId": 3
  },
  {
    "furnitureId": 72,
    "roomId": 3
  },
  {
    "furnitureId": 73,
    "roomId": 11
  },
  {
    "furnitureId": 74,
    "roomId": 11
  },
  {
    "furnitureId": 75,
    "roomId": 10
  },
  {
    "furnitureId": 76,
    "roomId": 9
  },
  {
    "furnitureId": 76,
    "roomId": 8
  },
  {
    "furnitureId": 76,
    "roomId": 10
  },
  {
    "furnitureId": 76,
    "roomId": 7
  },
  {
    "furnitureId": 76,
    "roomId": 3
  },
  {
    "furnitureId": 76,
    "roomId": 2
  },
  {
    "furnitureId": 76,
    "roomId": 5
  },
  {
    "furnitureId": 77,
    "roomId": 9
  },
  {
    "furnitureId": 77,
    "roomId": 8
  },
  {
    "furnitureId": 77,
    "roomId": 10
  },
  {
    "furnitureId": 77,
    "roomId": 7
  },
  {
    "furnitureId": 77,
    "roomId": 3
  },
  {
    "furnitureId": 77,
    "roomId": 2
  },
  {
    "furnitureId": 77,
    "roomId": 5
  },
  {
    "furnitureId": 78,
    "roomId": 9
  },
  {
    "furnitureId": 78,
    "roomId": 8
  },
  {
    "furnitureId": 78,
    "roomId": 10
  },
  {
    "furnitureId": 78,
    "roomId": 7
  },
  {
    "furnitureId": 78,
    "roomId": 3
  },
  {
    "furnitureId": 78,
    "roomId": 2
  },
  {
    "furnitureId": 78,
    "roomId": 5
  },
  {
    "furnitureId": 79,
    "roomId": 9
  },
  {
    "furnitureId": 79,
    "roomId": 8
  },
  {
    "furnitureId": 79,
    "roomId": 10
  },
  {
    "furnitureId": 79,
    "roomId": 7
  },
  {
    "furnitureId": 79,
    "roomId": 3
  },
  {
    "furnitureId": 79,
    "roomId": 2
  },
  {
    "furnitureId": 79,
    "roomId": 5
  },
  {
    "furnitureId": 83,
    "roomId": 9
  },
  {
    "furnitureId": 83,
    "roomId": 8
  },
  {
    "furnitureId": 83,
    "roomId": 10
  },
  {
    "furnitureId": 83,
    "roomId": 7
  },
  {
    "furnitureId": 83,
    "roomId": 3
  },
  {
    "furnitureId": 83,
    "roomId": 4
  },
  {
    "furnitureId": 83,
    "roomId": 2
  },
  {
    "furnitureId": 83,
    "roomId": 5
  },
  {
    "furnitureId": 84,
    "roomId": 9
  },
  {
    "furnitureId": 84,
    "roomId": 8
  },
  {
    "furnitureId": 84,
    "roomId": 10
  },
  {
    "furnitureId": 84,
    "roomId": 7
  },
  {
    "furnitureId": 84,
    "roomId": 3
  },
  {
    "furnitureId": 84,
    "roomId": 4
  },
  {
    "furnitureId": 84,
    "roomId": 2
  },
  {
    "furnitureId": 84,
    "roomId": 5
  },
  {
    "furnitureId": 85,
    "roomId": 9
  },
  {
    "furnitureId": 85,
    "roomId": 8
  },
  {
    "furnitureId": 85,
    "roomId": 10
  },
  {
    "furnitureId": 85,
    "roomId": 7
  },
  {
    "furnitureId": 85,
    "roomId": 3
  },
  {
    "furnitureId": 85,
    "roomId": 4
  },
  {
    "furnitureId": 85,
    "roomId": 2
  },
  {
    "furnitureId": 85,
    "roomId": 5
  },
  {
    "furnitureId": 86,
    "roomId": 9
  },
  {
    "furnitureId": 86,
    "roomId": 8
  },
  {
    "furnitureId": 86,
    "roomId": 10
  },
  {
    "furnitureId": 86,
    "roomId": 7
  },
  {
    "furnitureId": 86,
    "roomId": 3
  },
  {
    "furnitureId": 86,
    "roomId": 4
  },
  {
    "furnitureId": 86,
    "roomId": 2
  },
  {
    "furnitureId": 86,
    "roomId": 5
  },
  {
    "furnitureId": 87,
    "roomId": 10
  },
  {
    "furnitureId": 88,
    "roomId": 10
  },
  {
    "furnitureId": 88,
    "roomId": 2
  },
  {
    "furnitureId": 88,
    "roomId": 5
  },
  {
    "furnitureId": 89,
    "roomId": 4
  },
  {
    "furnitureId": 90,
    "roomId": 4
  },
  {
    "furnitureId": 91,
    "roomId": 4
  },
  {
    "furnitureId": 93,
    "roomId": 4
  },
  {
    "furnitureId": 94,
    "roomId": 3
  },
  {
    "furnitureId": 95,
    "roomId": 5
  },
  {
    "furnitureId": 97,
    "roomId": 11
  },
  {
    "furnitureId": 98,
    "roomId": 11
  },
  {
    "furnitureId": 99,
    "roomId": 11
  },
  {
    "furnitureId": 100,
    "roomId": 11
  },
  {
    "furnitureId": 101,
    "roomId": 11
  },
  {
    "furnitureId": 102,
    "roomId": 10
  },
  {
    "furnitureId": 103,
    "roomId": 5
  },
  {
    "furnitureId": 104,
    "roomId": 4
  },
  {
    "furnitureId": 106,
    "roomId": 5
  },
  {
    "furnitureId": 107,
    "roomId": 4
  },
  {
    "furnitureId": 108,
    "roomId": 7
  },
  {
    "furnitureId": 108,
    "roomId": 3
  },
  {
    "furnitureId": 108,
    "roomId": 2
  },
  {
    "furnitureId": 109,
    "roomId": 6
  },
  {
    "furnitureId": 109,
    "roomId": 4
  },
  {
    "furnitureId": 109,
    "roomId": 5
  },
  {
    "furnitureId": 110,
    "roomId": 6
  },
  {
    "furnitureId": 110,
    "roomId": 4
  },
  {
    "furnitureId": 110,
    "roomId": 5
  },
  {
    "furnitureId": 111,
    "roomId": 8
  },
  {
    "furnitureId": 112,
    "roomId": 8
  },
  {
    "furnitureId": 115,
    "roomId": 6
  },
  {
    "furnitureId": 115,
    "roomId": 11
  },
  {
    "furnitureId": 115,
    "roomId": 8
  },
  {
    "furnitureId": 115,
    "roomId": 10
  },
  {
    "furnitureId": 115,
    "roomId": 3
  },
  {
    "furnitureId": 115,
    "roomId": 4
  },
  {
    "furnitureId": 115,
    "roomId": 2
  },
  {
    "furnitureId": 115,
    "roomId": 5
  },
  {
    "furnitureId": 116,
    "roomId": 6
  },
  {
    "furnitureId": 116,
    "roomId": 11
  },
  {
    "furnitureId": 116,
    "roomId": 8
  },
  {
    "furnitureId": 116,
    "roomId": 10
  },
  {
    "furnitureId": 116,
    "roomId": 3
  },
  {
    "furnitureId": 116,
    "roomId": 4
  },
  {
    "furnitureId": 116,
    "roomId": 2
  },
  {
    "furnitureId": 116,
    "roomId": 5
  },
  {
    "furnitureId": 117,
    "roomId": 6
  },
  {
    "furnitureId": 117,
    "roomId": 11
  },
  {
    "furnitureId": 117,
    "roomId": 8
  },
  {
    "furnitureId": 117,
    "roomId": 10
  },
  {
    "furnitureId": 117,
    "roomId": 3
  },
  {
    "furnitureId": 117,
    "roomId": 4
  },
  {
    "furnitureId": 117,
    "roomId": 2
  },
  {
    "furnitureId": 117,
    "roomId": 5
  },
  {
    "furnitureId": 118,
    "roomId": 6
  },
  {
    "furnitureId": 118,
    "roomId": 11
  },
  {
    "furnitureId": 118,
    "roomId": 8
  },
  {
    "furnitureId": 118,
    "roomId": 10
  },
  {
    "furnitureId": 118,
    "roomId": 3
  },
  {
    "furnitureId": 118,
    "roomId": 4
  },
  {
    "furnitureId": 118,
    "roomId": 2
  },
  {
    "furnitureId": 118,
    "roomId": 5
  },
  {
    "furnitureId": 119,
    "roomId": 8
  },
  {
    "furnitureId": 119,
    "roomId": 10
  },
  {
    "furnitureId": 119,
    "roomId": 3
  },
  {
    "furnitureId": 119,
    "roomId": 4
  },
  {
    "furnitureId": 119,
    "roomId": 2
  },
  {
    "furnitureId": 119,
    "roomId": 5
  },
  {
    "furnitureId": 120,
    "roomId": 8
  },
  {
    "furnitureId": 120,
    "roomId": 10
  },
  {
    "furnitureId": 120,
    "roomId": 3
  },
  {
    "furnitureId": 120,
    "roomId": 4
  },
  {
    "furnitureId": 120,
    "roomId": 2
  },
  {
    "furnitureId": 120,
    "roomId": 5
  },
  {
    "furnitureId": 121,
    "roomId": 8
  },
  {
    "furnitureId": 124,
    "roomId": 8
  },
  {
    "furnitureId": 124,
    "roomId": 5
  },
  {
    "furnitureId": 127,
    "roomId": 3
  },
  {
    "furnitureId": 127,
    "roomId": 2
  },
  {
    "furnitureId": 128,
    "roomId": 8
  },
  {
    "furnitureId": 128,
    "roomId": 3
  },
  {
    "furnitureId": 129,
    "roomId": 8
  },
  {
    "furnitureId": 129,
    "roomId": 3
  },
  {
    "furnitureId": 130,
    "roomId": 8
  },
  {
    "furnitureId": 130,
    "roomId": 3
  },
  {
    "furnitureId": 132,
    "roomId": 10
  },
  {
    "furnitureId": 133,
    "roomId": 9
  },
  {
    "furnitureId": 133,
    "roomId": 10
  },
  {
    "furnitureId": 134,
    "roomId": 9
  },
  {
    "furnitureId": 134,
    "roomId": 10
  },
  {
    "furnitureId": 135,
    "roomId": 9
  },
  {
    "furnitureId": 135,
    "roomId": 10
  },
  {
    "furnitureId": 136,
    "roomId": 9
  },
  {
    "furnitureId": 136,
    "roomId": 10
  },
  {
    "furnitureId": 137,
    "roomId": 11
  },
  {
    "furnitureId": 137,
    "roomId": 4
  },
  {
    "furnitureId": 137,
    "roomId": 5
  },
  {
    "furnitureId": 138,
    "roomId": 5
  },
  {
    "furnitureId": 139,
    "roomId": 5
  },
  {
    "furnitureId": 143,
    "roomId": 11
  },
  {
    "furnitureId": 144,
    "roomId": 6
  },
  {
    "furnitureId": 144,
    "roomId": 10
  },
  {
    "furnitureId": 145,
    "roomId": 6
  },
  {
    "furnitureId": 145,
    "roomId": 10
  },
  {
    "furnitureId": 146,
    "roomId": 6
  },
  {
    "furnitureId": 147,
    "roomId": 4
  },
  {
    "furnitureId": 148,
    "roomId": 4
  },
  {
    "furnitureId": 149,
    "roomId": 5
  },
  {
    "furnitureId": 151,
    "roomId": 8
  },
  {
    "furnitureId": 151,
    "roomId": 7
  },
  {
    "furnitureId": 151,
    "roomId": 3
  },
  {
    "furnitureId": 151,
    "roomId": 2
  },
  {
    "furnitureId": 151,
    "roomId": 5
  },
  {
    "furnitureId": 153,
    "roomId": 11
  },
  {
    "furnitureId": 153,
    "roomId": 8
  },
  {
    "furnitureId": 153,
    "roomId": 3
  },
  {
    "furnitureId": 153,
    "roomId": 4
  },
  {
    "furnitureId": 153,
    "roomId": 2
  },
  {
    "furnitureId": 153,
    "roomId": 5
  },
  {
    "furnitureId": 155,
    "roomId": 8
  },
  {
    "furnitureId": 155,
    "roomId": 10
  },
  {
    "furnitureId": 155,
    "roomId": 7
  },
  {
    "furnitureId": 155,
    "roomId": 3
  },
  {
    "furnitureId": 155,
    "roomId": 2
  },
  {
    "furnitureId": 155,
    "roomId": 5
  },
  {
    "furnitureId": 156,
    "roomId": 4
  },
  {
    "furnitureId": 157,
    "roomId": 5
  },
  {
    "furnitureId": 158,
    "roomId": 8
  },
  {
    "furnitureId": 158,
    "roomId": 7
  },
  {
    "furnitureId": 158,
    "roomId": 2
  },
  {
    "furnitureId": 158,
    "roomId": 5
  },
  {
    "furnitureId": 159,
    "roomId": 11
  },
  {
    "furnitureId": 159,
    "roomId": 5
  },
  {
    "furnitureId": 160,
    "roomId": 11
  },
  {
    "furnitureId": 160,
    "roomId": 5
  },
  {
    "furnitureId": 163,
    "roomId": 6
  },
  {
    "furnitureId": 163,
    "roomId": 4
  },
  {
    "furnitureId": 163,
    "roomId": 5
  },
  {
    "furnitureId": 164,
    "roomId": 6
  },
  {
    "furnitureId": 164,
    "roomId": 4
  },
  {
    "furnitureId": 164,
    "roomId": 5
  },
  {
    "furnitureId": 166,
    "roomId": 5
  },
  {
    "furnitureId": 167,
    "roomId": 5
  },
  {
    "furnitureId": 168,
    "roomId": 5
  },
  {
    "furnitureId": 169,
    "roomId": 5
  },
  {
    "furnitureId": 171,
    "roomId": 8
  },
  {
    "furnitureId": 171,
    "roomId": 3
  },
  {
    "furnitureId": 171,
    "roomId": 2
  },
  {
    "furnitureId": 171,
    "roomId": 5
  },
  {
    "furnitureId": 172,
    "roomId": 6
  },
  {
    "furnitureId": 173,
    "roomId": 6
  },
  {
    "furnitureId": 174,
    "roomId": 6
  },
  {
    "furnitureId": 174,
    "roomId": 4
  },
  {
    "furnitureId": 176,
    "roomId": 8
  },
  {
    "furnitureId": 177,
    "roomId": 3
  },
  {
    "furnitureId": 177,
    "roomId": 2
  },
  {
    "furnitureId": 178,
    "roomId": 8
  },
  {
    "furnitureId": 179,
    "roomId": 6
  },
  {
    "furnitureId": 180,
    "roomId": 6
  },
  {
    "furnitureId": 181,
    "roomId": 6
  },
  {
    "furnitureId": 181,
    "roomId": 4
  },
  {
    "furnitureId": 5,
    "roomId": 14
  },
  {
    "furnitureId": 6,
    "roomId": 12
  },
  {
    "furnitureId": 6,
    "roomId": 13
  },
  {
    "furnitureId": 8,
    "roomId": 14
  },
  {
    "furnitureId": 9,
    "roomId": 14
  },
  {
    "furnitureId": 10,
    "roomId": 14
  },
  {
    "furnitureId": 11,
    "roomId": 14
  },
  {
    "furnitureId": 12,
    "roomId": 1
  },
  {
    "furnitureId": 13,
    "roomId": 1
  },
  {
    "furnitureId": 14,
    "roomId": 1
  },
  {
    "furnitureId": 15,
    "roomId": 14
  },
  {
    "furnitureId": 16,
    "roomId": 1
  },
  {
    "furnitureId": 17,
    "roomId": 14
  },
  {
    "furnitureId": 18,
    "roomId": 14
  },
  {
    "furnitureId": 19,
    "roomId": 14
  },
  {
    "furnitureId": 20,
    "roomId": 14
  },
  {
    "furnitureId": 21,
    "roomId": 14
  },
  {
    "furnitureId": 22,
    "roomId": 14
  },
  {
    "furnitureId": 23,
    "roomId": 14
  },
  {
    "furnitureId": 24,
    "roomId": 8
  },
  {
    "furnitureId": 25,
    "roomId": 1
  },
  {
    "furnitureId": 26,
    "roomId": 1
  },
  {
    "furnitureId": 27,
    "roomId": 1
  },
  {
    "furnitureId": 28,
    "roomId": 1
  },
  {
    "furnitureId": 29,
    "roomId": 1
  },
  {
    "furnitureId": 30,
    "roomId": 1
  },
  {
    "furnitureId": 30,
    "roomId": 5
  },
  {
    "furnitureId": 31,
    "roomId": 14
  },
  {
    "furnitureId": 34,
    "roomId": 14
  },
  {
    "furnitureId": 37,
    "roomId": 14
  },
  {
    "furnitureId": 43,
    "roomId": 13
  },
  {
    "furnitureId": 44,
    "roomId": 1
  },
  {
    "furnitureId": 45,
    "roomId": 1
  },
  {
    "furnitureId": 45,
    "roomId": 4
  },
  {
    "furnitureId": 46,
    "roomId": 1
  },
  {
    "furnitureId": 47,
    "roomId": 1
  },
  {
    "furnitureId": 48,
    "roomId": 1
  },
  {
    "furnitureId": 49,
    "roomId": 14
  },
  {
    "furnitureId": 50,
    "roomId": 2
  },
  {
    "furnitureId": 50,
    "roomId": 9
  },
  {
    "furnitureId": 50,
    "roomId": 7
  },
  {
    "furnitureId": 51,
    "roomId": 13
  },
  {
    "furnitureId": 52,
    "roomId": 14
  },
  {
    "furnitureId": 53,
    "roomId": 14
  },
  {
    "furnitureId": 54,
    "roomId": 13
  },
  {
    "furnitureId": 55,
    "roomId": 14
  },
  {
    "furnitureId": 57,
    "roomId": 2
  },
  {
    "furnitureId": 57,
    "roomId": 7
  },
  {
    "furnitureId": 58,
    "roomId": 14
  },
  {
    "furnitureId": 59,
    "roomId": 1
  },
  {
    "furnitureId": 59,
    "roomId": 8
  },
  {
    "furnitureId": 59,
    "roomId": 12
  },
  {
    "furnitureId": 60,
    "roomId": 14
  },
  {
    "furnitureId": 61,
    "roomId": 14
  },
  {
    "furnitureId": 62,
    "roomId": 2
  },
  {
    "furnitureId": 62,
    "roomId": 7
  },
  {
    "furnitureId": 63,
    "roomId": 14
  },
  {
    "furnitureId": 64,
    "roomId": 14
  },
  {
    "furnitureId": 65,
    "roomId": 14
  },
  {
    "furnitureId": 66,
    "roomId": 14
  },
  {
    "furnitureId": 71,
    "roomId": 5
  },
  {
    "furnitureId": 71,
    "roomId": 4
  },
  {
    "furnitureId": 73,
    "roomId": 5
  },
  {
    "furnitureId": 73,
    "roomId": 4
  },
  {
    "furnitureId": 74,
    "roomId": 1
  },
  {
    "furnitureId": 74,
    "roomId": 5
  },
  {
    "furnitureId": 75,
    "roomId": 2
  },
  {
    "furnitureId": 75,
    "roomId": 9
  },
  {
    "furnitureId": 75,
    "roomId": 7
  },
  {
    "furnitureId": 80,
    "roomId": 14
  },
  {
    "furnitureId": 81,
    "roomId": 12
  },
  {
    "furnitureId": 82,
    "roomId": 12
  },
  {
    "furnitureId": 83,
    "roomId": 1
  },
  {
    "furnitureId": 84,
    "roomId": 1
  },
  {
    "furnitureId": 85,
    "roomId": 1
  },
  {
    "furnitureId": 86,
    "roomId": 1
  },
  {
    "furnitureId": 87,
    "roomId": 1
  },
  {
    "furnitureId": 87,
    "roomId": 5
  },
  {
    "furnitureId": 88,
    "roomId": 14
  },
  {
    "furnitureId": 92,
    "roomId": 4
  },
  {
    "furnitureId": 94,
    "roomId": 14
  },
  {
    "furnitureId": 95,
    "roomId": 14
  },
  {
    "furnitureId": 96,
    "roomId": 14
  },
  {
    "furnitureId": 97,
    "roomId": 5
  },
  {
    "furnitureId": 97,
    "roomId": 4
  },
  {
    "furnitureId": 98,
    "roomId": 1
  },
  {
    "furnitureId": 98,
    "roomId": 5
  },
  {
    "furnitureId": 99,
    "roomId": 1
  },
  {
    "furnitureId": 99,
    "roomId": 5
  },
  {
    "furnitureId": 100,
    "roomId": 1
  },
  {
    "furnitureId": 100,
    "roomId": 5
  },
  {
    "furnitureId": 101,
    "roomId": 1
  },
  {
    "furnitureId": 101,
    "roomId": 5
  },
  {
    "furnitureId": 102,
    "roomId": 14
  },
  {
    "furnitureId": 103,
    "roomId": 1
  },
  {
    "furnitureId": 105,
    "roomId": 13
  },
  {
    "furnitureId": 106,
    "roomId": 14
  },
  {
    "furnitureId": 107,
    "roomId": 14
  },
  {
    "furnitureId": 108,
    "roomId": 1
  },
  {
    "furnitureId": 108,
    "roomId": 5
  },
  {
    "furnitureId": 109,
    "roomId": 1
  },
  {
    "furnitureId": 109,
    "roomId": 8
  },
  {
    "furnitureId": 109,
    "roomId": 12
  },
  {
    "furnitureId": 110,
    "roomId": 1
  },
  {
    "furnitureId": 110,
    "roomId": 8
  },
  {
    "furnitureId": 110,
    "roomId": 12
  },
  {
    "furnitureId": 111,
    "roomId": 14
  },
  {
    "furnitureId": 113,
    "roomId": 13
  },
  {
    "furnitureId": 114,
    "roomId": 14
  },
  {
    "furnitureId": 121,
    "roomId": 14
  },
  {
    "furnitureId": 122,
    "roomId": 14
  },
  {
    "furnitureId": 123,
    "roomId": 14
  },
  {
    "furnitureId": 124,
    "roomId": 4
  },
  {
    "furnitureId": 125,
    "roomId": 14
  },
  {
    "furnitureId": 126,
    "roomId": 14
  },
  {
    "furnitureId": 127,
    "roomId": 6
  },
  {
    "furnitureId": 127,
    "roomId": 10
  },
  {
    "furnitureId": 130,
    "roomId": 5
  },
  {
    "furnitureId": 130,
    "roomId": 4
  },
  {
    "furnitureId": 131,
    "roomId": 14
  },
  {
    "furnitureId": 137,
    "roomId": 14
  },
  {
    "furnitureId": 138,
    "roomId": 1
  },
  {
    "furnitureId": 139,
    "roomId": 1
  },
  {
    "furnitureId": 140,
    "roomId": 14
  },
  {
    "furnitureId": 141,
    "roomId": 14
  },
  {
    "furnitureId": 142,
    "roomId": 14
  },
  {
    "furnitureId": 146,
    "roomId": 10
  },
  {
    "furnitureId": 147,
    "roomId": 14
  },
  {
    "furnitureId": 148,
    "roomId": 14
  },
  {
    "furnitureId": 149,
    "roomId": 14
  },
  {
    "furnitureId": 150,
    "roomId": 14
  },
  {
    "furnitureId": 151,
    "roomId": 1
  },
  {
    "furnitureId": 152,
    "roomId": 13
  },
  {
    "furnitureId": 154,
    "roomId": 14
  },
  {
    "furnitureId": 155,
    "roomId": 14
  },
  {
    "furnitureId": 157,
    "roomId": 1
  },
  {
    "furnitureId": 158,
    "roomId": 1
  },
  {
    "furnitureId": 159,
    "roomId": 14
  },
  {
    "furnitureId": 160,
    "roomId": 14
  },
  {
    "furnitureId": 161,
    "roomId": 14
  },
  {
    "furnitureId": 162,
    "roomId": 14
  },
  {
    "furnitureId": 163,
    "roomId": 1
  },
  {
    "furnitureId": 163,
    "roomId": 8
  },
  {
    "furnitureId": 163,
    "roomId": 12
  },
  {
    "furnitureId": 164,
    "roomId": 1
  },
  {
    "furnitureId": 164,
    "roomId": 8
  },
  {
    "furnitureId": 164,
    "roomId": 12
  },
  {
    "furnitureId": 165,
    "roomId": 14
  },
  {
    "furnitureId": 166,
    "roomId": 1
  },
  {
    "furnitureId": 166,
    "roomId": 8
  },
  {
    "furnitureId": 166,
    "roomId": 12
  },
  {
    "furnitureId": 167,
    "roomId": 1
  },
  {
    "furnitureId": 167,
    "roomId": 8
  },
  {
    "furnitureId": 167,
    "roomId": 12
  },
  {
    "furnitureId": 168,
    "roomId": 1
  },
  {
    "furnitureId": 168,
    "roomId": 8
  },
  {
    "furnitureId": 168,
    "roomId": 12
  },
  {
    "furnitureId": 169,
    "roomId": 1
  },
  {
    "furnitureId": 169,
    "roomId": 8
  },
  {
    "furnitureId": 169,
    "roomId": 12
  },
  {
    "furnitureId": 170,
    "roomId": 14
  },
  {
    "furnitureId": 171,
    "roomId": 14
  },
  {
    "furnitureId": 175,
    "roomId": 12
  },
  {
    "furnitureId": 176,
    "roomId": 14
  },
  {
    "furnitureId": 177,
    "roomId": 9
  },
  {
    "furnitureId": 177,
    "roomId": 7
  },
  {
    "furnitureId": 179,
    "roomId": 14
  },
  {
    "furnitureId": 180,
    "roomId": 14
  },
  {
    "furnitureId": 181,
    "roomId": 14
  },
  {
    "furnitureId": 182,
    "roomId": 14
  }
];

// Helper function to get room IDs for a furniture item
export function getRoomIdsForFurniture(furnitureId: number): number[] {
  return FURNITURE_ROOM_MAPPINGS
    .filter(m => m.furnitureId === furnitureId)
    .map(m => m.roomId);
}

// Helper function to get furniture items for a room ID
export function getFurnitureForRoom(roomId: number): FurnitureItem[] {
  const furnitureIds = FURNITURE_ROOM_MAPPINGS
    .filter(m => m.roomId === roomId)
    .map(m => m.furnitureId);

  return FURNITURE_ITEMS.filter(item => furnitureIds.includes(item.id));
}

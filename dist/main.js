"use strict";
// /src/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./classes/Car");
const myCar = new Car_1.Car("Toyota", "Corolla", 2022);
myCar.start(); // Should log "Car engine started" to the console

import { toCelsius } from "./toCelsius";
import { describe, it, expect } from "@jest/globals";

/*
Ressources for the exercise : 

see : https://www.google.com/search?q=farentheit+Celsius
°C = (°F − 32) × 5/9

see : https://www.google.com/search?q=kelvin+celsius
°C = °K − 273,15

TDD style, write a function named "toCelsius", which :

- Should return a number when a number is passed as a first arguement. 
We can take 1, 1.8 and 2 as examples.

- Should return null if the first argument can't be converted into a number.
We can take null, undefiend, an object, an array or a string like 'toto' as examples.

- Should return the first argument (interpreted as farenheit by default) converted into Celsius. 
For example, if we follow this notation : 
  input(s) of the function -> expected output of the function
We should have the following mapping : 
  32 -> 0
  50 -> 10
  500 -> 260

- Should accept a string representing a number in first parameter, for example :
  '32' -> 0
  '50' -> 10
  '500' -> 260

- Should have a precision of 2 by default, for example : 
  52 -> 11.11

- Should accept a second parameter to indicate the required precision : 
  52, 1 -> 11.1  
  80, 4 -> 26.6667

- Should accept a third argument to specify a that the value we give is in kelvin and not farenheit : 
  300, 2, 'k' -> 26.85
  273.15, 2, 'k' -> 0
*/

describe("toCelcuis", () => {
  it("should be a function", () => {
    expect(typeof toCelsius).toBe("function");
  });

  it("should return a number when a number is passed as a first arguement", () => {
    expect(typeof toCelsius(1)).toBe("number");
    expect(typeof toCelsius(1.8)).toBe("number");
    expect(typeof toCelsius(2)).toBe("number");
  });

  it(`should return null if the first argument can't be converted into a number`, () => {
    expect(toCelsius(null)).toBe(null);
    expect(toCelsius({})).toBe(null);
    expect(toCelsius([])).toBe(null);
    expect(toCelsius("toto")).toBe(null);
    expect(toCelsius()).toBe(null);
  });

  it("should return the first argument (interpreted as farenheit by default) converted into Celsius", () => {
    expect(toCelsius(32)).toBe(0);
    expect(toCelsius(50)).toBe(10);
    expect(toCelsius(500)).toBe(260);
  });

  it("should accept a string representing a number in first parameter", () => {
    expect(toCelsius("32")).toBe(0);
    expect(toCelsius("50")).toBe(10);
    expect(toCelsius("500")).toBe(260);
  });

  it("should have a precision of 2 by default", () => {
    expect(toCelsius(52)).toBe(11.11);
  });

  it("should accept a second parameter to indicate the required precision", () => {
    expect(toCelsius(52, 1)).toBe(11.1);
    expect(toCelsius(80, 4)).toBe(26.6667);
  });

  it("should accept a third argument to specify a that the value we give is in kelvin and not farenheit", () => {
    expect(toCelsius(300, 2, "k")).toBe(26.85);
  });
});

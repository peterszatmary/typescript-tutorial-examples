# typescript-tutorial-examples #

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ac4fafa459c647e3bab7c7fbbf97eb65)](https://www.codacy.com/app/peterszatmary/typescript-tutorial-examples?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=peterszatmary/typescript-tutorial-examples&amp;utm_campaign=Badge_Grade)

[Typescript](https://www.typescriptlang.org/) first steps.

## Project structure ##

```bash
├── build
├── dev
    └── tsconfig.json
```

-   In *build* directory you can find **js** and **js.map** files (transpilation outputs).
-   In *dev* directory you can **ts** files.
-   typescript tsc configuration file **tsconfig.json**
-   outputs are in **es5** format

## Typescript tutorial examples ##

-    **1. Episode**

    -   function hello world

     Hello, World!

-    **2. Episode**

    -   first class

     elephant object = [object Object]

-    **3. Episode**

    -   bigger class with getters, setters, constructor with params, access keywords

     elephant => name = elephant 2, age = 10, vaccination = true

-    **4. Episode**

    -   trick how you can have  overloaded methods (technicaly still one method) and multiple constructors (technically still one constructor) and lambda example.

     tiger1 => name = Tiger1, age = undefined, vaccination = undefined
     undefined
     24
     undefined
     24
     tiger2 => name = Tiger2, age = 14, vaccination = undefined
     14
     13
     14
     13
     tiger3 => name = Tiger3, age = 10, vaccination = true
     10
     10
     10
     10

-    **5. Episode**

    -   interface
    -   enum

     => name = Audi R8 => speed = 230 => price = 3500 => sport = true
     => name = BMW => speed = 220 => price = 4500 => sport = undefined
     
-    **6. Episode**

    -   inheritance
    -   abstract class
    -   toString
    -   instanceof

     It is Ferrari
     { name: 'My Ferrari', sport: true, toString: [Function] }
     Vehicle = [ name : My Ferrari , sport : true , speed : 250 , price : 5600]
     It is Ford
     { name: 'My Ford', sport: false, toString: [Function] }
     Vehicle = [ name : My Ford , sport : false , speed : 190 , price : 3000]
     
-    **7. Episode**

    -   usage of type keyword
    -   object literals
    -   varargs
    -   Function type
    -   arrays
    -   tuples

     hello world
     one
     two
     one
     8
     2
     20
     first
     second
     third
     11-22-333
     9
     2

     -   **8. Episode**

     -   Generics
     
      string is there.
      string
      Vehicle is there.
      Vehicle
      
## Prerequisites ##

You need to install [Nodejs](https://nodejs.org/en/).

## Settings and tools ##

This examples were created with **[WebStorm](https://www.jetbrains.com/webstorm/specials/webstorm/webstorm.html?&gclid=CjwKEAjw5vu8BRC8rIGNrqbPuSESJADG8RV0Ml3J3e3xU12pKWb4P5xKluRQSY84nEX4TmHnllvBshoC4vHw_wcB&gclsrc=aw.ds.ds&dclid=CL6Mk8T2oM4CFYSNGwodfr4Pkw)** configured

![1](https://github.com/peterszatmary/just-like-that/blob/master/imgs/typescript-tutorial-examples/webstorm-typescript-settings.png)
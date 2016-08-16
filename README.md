# typescript-tutorial-examples
[Typescript](https://www.typescriptlang.org/) first steps.


## Project structure

```shell
├── build
├── dev
    └── tsconfig.json
```

 - In *build* directory you can find **js** and **js.map** files (transpilation outputs).
 - In *dev* directory you can **ts** files.
 - typescript tsc configuration file **tsconfig.json**
 - outputs are in **es5** format


## Typescript tutorial examples


- **1. hello world** (function helo world)

 **output** :
 ```shell
 Hello, World!
  ```

- **2. first class** (simple class)

 **output** :
 ```shell
 elephant object = [object Object]
 ```

- **3. bigger class** : (getters, setters, constructor with params, access keywords, )

**output** :
```shell
elephant => name = elephant 2, age = 10, vaccination = true
```

- **4. more constructors and more methods** : trick how you can have  overloaded methods (technicaly still one method)
 and multiple constructors (technically still one constructor) and lambda example.

 **output** :
 ```shell
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
 ```

- **5. Interface and enum example**.

 **output** :
 ```shell
=> name = Audi R8 => speed = 230 => price = 3500 => sport = true
=> name = BMW => speed = 220 => price = 4500 => sport = undefined
 ```

- **6. Inheritance, abstract class, toString, instanceof example**.

 **output** :
  ```shell
It is Ferrari
{ name: 'My Ferrari', sport: true, toString: [Function] }
Vehicle = [ name : My Ferrari , sport : true , speed : 250 , price : 5600]
It is Ford
{ name: 'My Ford', sport: false, toString: [Function] }
Vehicle = [ name : My Ford , sport : false , speed : 190 , price : 3000]
 ```



## Prerequisites

You need to install [Nodejs](https://nodejs.org/en/).

## Settings and tools

This examples were created with **[WebStorm](https://www.jetbrains.com/webstorm/specials/webstorm/webstorm.html?&gclid=CjwKEAjw5vu8BRC8rIGNrqbPuSESJADG8RV0Ml3J3e3xU12pKWb4P5xKluRQSY84nEX4TmHnllvBshoC4vHw_wcB&gclsrc=aw.ds.ds&dclid=CL6Mk8T2oM4CFYSNGwodfr4Pkw)** configured

![1](https://github.com/peterszatmary/just-like-that/blob/master/imgs/typescript-tutorial-examples/webstorm-typescript-settings.png)






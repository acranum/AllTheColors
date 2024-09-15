# All The Colors

`AllTheColors` is a simple webside, with which you can play all possible combinations of RGB or their hex values. 

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
## Introduction
The webside `All The Colors` uses a simple anlgorythm to go through all of the 16.777.216 (256 * 256 * 256) possible colors. To do this, the `B-value` is increased by one every tick until it reaches 255. Then the `G-value` is increased by one and so on. In this way every possible combination from #000000 to #ffffff is played through. The website can also be used to explain color coding and html/css/js code.

## Usage
### Basic Functions: 

+ Click `Go` to start the color flow
+ Look at the `Hex` or `... of 16.581.375` to check the values
+ the `R` `G` and `B` values are showing the current RGB value

### Terminal:

+ cmd `inter ;<int>` | Change the animation speed to `<int>`. Replace `<int>` with the value to which you want to set the interval
+ cmd `change val <r/b/g> ;<int>` | Change RBG values to `<int>`. Replace `<int>` with the value to which you want to set the value on. Replace <r/b/g> with `r` `b` or `g`

To apply the values just click `Go` again

## Installation

To use `All the Colors` you can easily you can open the reposetory url or clone the reposetory. <br>
open the reposetory url:

```bash
open: https://acranum.github.io/AllTheColors
```
clone the reposetory:
```bash
git clone https://github.com/acranum/AllTheColors.git
cd AllTheColors
index.html
```

## License
This project is licensed under the GPL-3.0 License. See the [LICENSE](https://github.com/acranum/AllTheColors/blob/main/LICENSE) file for details.


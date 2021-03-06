# _Mr. Robogers Neighborhood_

#### By _**Patrick Dolan**_

#### _A program that takes a number and returns Mr. Robogers response._

## Github Pages Link

[Github Pages](https://patrick-dolan.github.io/mr-robogers-neighborhood/)

## Technologies Used

* _HTML & CSS_
* _Javascript & jQuery 3.6.0_
* _Bootstrap 4.5.3_

## Description

_This is a program that will take a number and output Mr. Robogers version of counting up to, or down from, that number based on a radio button choice. If you choose to give Mr. Robogers your name it will add that to his response as well._

## Setup/Installation Requirements

* _Clone the repository into a directory on your computer._
* _Navigate into the directory named mr-robogers-neighborhood and double click index.html to launch the website._

## Known Bugs

* _No known issues_  

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_
_dolanp1992@gmail.com_

## License

_MIT_

Copyright (c) _2021_ _Patrick Dolan_  

## Specs  

**describe greetings()**  
<br>
**Test:** "It should return an array with 0 if the number 0 is inputted"
**Code:**  
greetings(0);
**Expected Output:** 0  
<br>
**Test:** "It should return an array that lists all numbers leading up to the inputted number starting at 0"  
**Code:**  
greetings(5);
**Expected Output:** 0, 1, 2, 3, 4, 5  
<br>
**Test:** "It should check each number in the list made up of the users number for 1's and replace them with "Beep!", 2's and replace them with "Boop!", and 3's and replace them with "Will you be my neighbor?""  
**Code:**  
greetings(10);  
**Expected Output:** "0, Beep!, "Boop!", "Will you be my neighbor?", 4, 5,"  
<br>
**Test:** "It should check if each number in the list includes a 1, 2 or 3 and return replacement words"  
**Code:**  
greetings(14);
*Expected Output:** 0, "Beep!", "Boop!", "Will you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep", "Boop!", "Will you be my neighbor?", "Beep!"  
<br>
**Test:** "It should take in the name of the user and add it to "Will you be my neighbor?" response"  
**Code:**  
greetings(14, Patrick);  
**Expected Output:** "0 Beep! Boop! Will you be my neighbor, Patrick? 4 5 6 7 8 9 Beep! Beep Boop! Will you be my neighbor, Patrick? Beep!  
<br>
<br>
**describe countDown()**  
<br>
**Test:** "It should take a user inputted number and return an array starting from that number counting down to zero"  
**Code:**  
countDown(5);  
**Expected Output:** 5, 4, 3, 2, 1, 0  
<br>
<br>
**describe countUp()**
**Test:** "It should take user inputted number and return an array starting from 0 and counting up to it"  
**Code:**  
countDown(5);  
**Expected Output:** 0, 1, 2, 3, 4, 5

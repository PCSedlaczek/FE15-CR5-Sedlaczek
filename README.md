# FE15-CR5-Sedlaczek
Arara Pet Shop

## Prepare
- [x] Create private GitHub repo (FE15-CR5-Sedlaczek)
- [x] Organize files into subfolders (img, css, scripts)
- [x] Link Bootstrap 5 CSS & JS files from CDN
- [x] Create Task List from project requirements

- [x] Research Pet shop slogans for page title
- [x] Research common/punny/movie pet names
  - [x] Cats
  - [x] Dogs
  - [ ] Bunnies
  - [ ] Hamsters
  - [ ] Guinea pigs
  - [ ] Mice
  - [ ] Ferrets
  - [ ] Birds
  - [ ] Tortoises
  - [ ] Snakes
  - [ ] Spiders
  - [ ] Hedgehogs
  - [ ] Goats
  - [ ] Pigs

## Design
- [x] Research required Bootstrap Icons

- [x] Research images
  - [x] Research template hero image (Unsplash)
  - [x] Research pet images (Unsplash, Pixabay)
  - [x] Research pet shop logos

- [x] Research Google fonts

- [ ] Create page layout

  - [x] Header
    - [x] Navbar
      - [x] Logo
      - [x] Home
      - [x] About Us
      - [x] Services
      - [ ] Age Sort button
      - [x] Search field
      - [x] Search button
    - [x] Hero image
      - [ ] Swiper carousel
  
  - [x] Main
    - [x] Heading (Get to know our friends)

    - [x] Card grid 
      - [x] row-cols-1
      - [x] row-cols-md-2
      - [x] row-cols-lg-3
    
    - [ ] Cards
      - [ ] Card header
        - [ ] Card image (hidden on small)
        - [ ] Card title (centered)
      - [ ] Card body
        - [ ] Parent class properties
        - [ ] Vaxx button
      - [ ] Card Footer
        - [ ] Child class properties
  
  - [x] Footer
    - [x] Social Media Buttons
      - [x] Facebook
      - [x] Twitter
      - [x] Google
      - [x] Instagram
      - [x] Linkedin
      - [x] GitHub
    - [x] Copyright info (ararapetshop.com)

- [ ] Assure page responsiveness
  - [ ] sm: teaser of 1 object per row (without image)
  - [ ] md: 2 teasers per row (with image)
  - [ ] lg: 3 objects per row (with image and info)

## TypeScript
- [x] TypeScript setup
  - [x] Initialize TypeScript configuration
  - [x] Watch TypeScript files for transpilation

- [ ] Parent class Animal
  - [ ] constructor: name, gender, size, age, vaxx, img
    - [ ] public name: string
    - [ ] public gender: string
    - [ ] public size: number
    - [ ] public age: number
    - [ ] public vaxx: boolean
    - [ ] public img: string
  - [ ] display(): method

- [ ] Child class Cat extends Animals
  - [ ] constructor: name, age, gender, size, vaxx, img, breed, furColor, breedInfo
    - [ ] super: name, age, gender, size, vaxx, img
    - [ ] public breed: string
    - [ ] public furColor: string
    - [ ] public breedInfo: string
  - [ ] display(): method (overwrite)

- [ ] Child class Dog extends Animals
  - [ ] constructor: name, age, gender, size, vaxx, img, breed, trainingSkills
    - [ ] super: name, age, gender, size, vaxx, img
    - [ ] public breed: string
    - [ ] public trainingSkills: boolean
  - [ ] display(): method (overwrite)

- [ ] Array to store all objects from parent class
  - [ ] min. 2 objects from Animal class stored in array
  - [ ] min. 2 objects from Cat class stored in array
  - [ ] min. 2 objects from Dog class stored in array
  - [ ] Loop to display objects stored in array on screen

- [ ] Vaxx property color (green: true, red: false)

## JavaScript Libraries
- [ ] Animation with 1 library of choice
  - [ ] Cards on hover
  - [ ] Logo on load
  - [ ] Navbar links
  - [ ] Swiper for Hero image

## Bonus
- [ ] Ascending button in navbar to organize by age

## Extend
- [ ] Ascending/descending toggle button
- [ ] Group animals into different arrays by species
- [ ] Modal to display backstory for each animal

## Finish
- [ ] Check website design against template image guide
- [ ] Test responsiveness on desktop, tablet and mobile
- [ ] Re-read notes from TypeScript Live Codings
- [ ] Test TypeScript functionality
- [ ] Format documents in Visual Studio Code
- [ ] Push files to GitHub repository
- [ ] Send repository link through LMS
- [ ] Invite codefactorygit as collaborator

Work time: 11:00 hrs 
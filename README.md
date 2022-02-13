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
  - [x] Bunnies
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

- [x] Research webfont for heading (Kalam)
- [x] Research font for cards (Comic Sans MS)

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
    
    - [x] Cards
      - [x] Card header
        - [x] Card image (hidden on small)
        - [x] Card title (centered)
      - [x] Card body
        - [x] Parent class properties
        - [x] Vaxx button
      - [x] Card Footer
        - [x] Child class properties
  
  - [x] Footer
    - [x] Social Media Buttons
      - [x] Facebook
      - [x] Twitter
      - [x] Google
      - [x] Instagram
      - [x] Linkedin
      - [x] GitHub
    - [x] Copyright info (ararapetshop.com)

- [x] Assure page responsiveness
  - [x] sm: teaser of 1 object per row (without image)
  - [x] md: 2 teasers per row (with image)
  - [x] lg: 3 objects per row (with image and info)

## TypeScript
- [x] TypeScript setup
  - [x] Initialize TypeScript configuration
  - [x] Watch TypeScript files for transpilation

- [x] Parent class Animal
  - [x] constructor: name, gender, size, age, vaxx, img
    - [x] public name: string
    - [x] public gender: string
    - [x] public size: number
    - [x] public age: number
    - [x] public vaxx: boolean
    - [x] public img: string
  - [x] display(): method

- [x] Child class Cat extends Animals
  - [x] constructor: name, age, gender, size, vaxx, img, breed, furColor, breedInfo
    - [x] super: name, age, gender, size, vaxx, img
    - [x] public breed: string
    - [x] public furColor: string
    - [x] public breedInfo: string
  - [x] display(): method (overwrite)

- [x] Child class Dog extends Animals
  - [x] constructor: name, age, gender, size, vaxx, img, breed, trainingSkills
    - [x] super: name, age, gender, size, vaxx, img
    - [x] public breed: string
    - [x] public trainingSkills: boolean
  - [x] display(): method (overwrite)

- [x] Array to store all objects from parent class
  - [x] min. 2 objects from Animal class stored in array
  - [x] min. 2 objects from Cat class stored in array
  - [x] min. 2 objects from Dog class stored in array
  - [x] Loop to display objects stored in array on screen

- [x] Vaxx property color (green: true, red: false)

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
- [x] Check website design against template image guide
- [x] Test responsiveness on desktop, tablet and mobile
- [x] Test TypeScript functionality
- [x] Format documents in Visual Studio Code
- [x] Push files to GitHub repository
- [x] Send repository link through LMS
- [ ] Invite codefactorygit as collaborator

Work time: 21:00 hrs 
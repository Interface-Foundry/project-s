## Project - S

React, Redux, Webpack implementation.

Karma, Jasmine, Enzyme (airBnB's pretty awesome react specific testing library)

Babel all day and all night (gotta love writting javascript that compiles to... more javascript!!!)

## SETUP

1. Install [NodeJS](nodejs.org)
2. Run `npm install`

## TO RUN: 
1. npm run start --> runs express and webpack-dev-server with hot-reloading because meh to refreshing
2. npm run test --> runs karma start, which has technically less characters so you could justs go with karma start 

## File Structure

	* -- src
		|___ actions
		|___ components
		|___ containers
		|___ data
		|___ reducers
		|___ index.js
    
  * -- api
    |___ websockets
    |___ data
    |___ routes
    |___ index.js


## TEST FILES

All test files are in __test__ folders in their respective folders (e.g actions/__test__, components/__test__)

## Platforms

Should work on mobile, tablet, and desktop.

## NOTES:

Prototype built for Greylock Investor Seth Rosenberg.
Purpose is to demonstrate the universal url Item Addition, and make kip feel more like MAGIC!!!




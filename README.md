

## Requirements
- [NodeJs](https://nodejs.org/en/download/)
- Npm (comes with node)
- Optional (to run the app most like production): 
  - [RubyGems](https://rubygems.org/pages/download)
  - Foreman: `gem install foreman`

## Installation
- Frontend: `cd ui && npm install`
- Backend: `cd server && npm install`

## Development
- Frontend: `cd ui && npm start`
- Backend, run one of the following from the project root: 
   - Easiest: `node ./server/index.js`
   - With instant reloading: `nodemon ./server/index.js`
   - As it will run on in production: `foreman start`
   
## Deployment
- Frontend: `now`
## JavaScript Assignments

This folder contains assignments focused on asynchronous JavaScript.

### Assignment Categories

You can follow the recommended order below or complete them in any sequence you prefer.

#### 1. Easy
- Counter
- Counter (without `setInterval`)
- Read from a file
- Write to a file

#### 2. Medium
- File Cleaner
- Clock

#### 3. Hard
- Promisify `setTimeout`
- Sleep Completely
- Promise all
- Promise Chain

---

## Development Setup

### Option 1: Run Locally (Requires Node.js)
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download this repository.
3. Navigate to the respective assignment folder and execute the script using Node.js.

### Option 2: Run on Replit (No Local Setup Required)
1. Copy the assignment code to [Replit](https://replit.com/).
2. Execute the script in Replit's environment.

---

## Running Tests

1. Navigate to `01-async-js`:
   ```sh
   cd 01-async-js
   ```
2. Install dependencies (if not already installed):
   ```sh
   npm install
   ```
3. Run tests using npm scripts:

#### Run By Category:
```sh
npm run test:easy     # Run all easy tests
npm run test:medium   # Run all medium tests
npm run test:hard     # Run all hard tests
npm test              # Run all tests across easy, medium, and hard
```

#### Run Specific Tests:
- **Easy:**
  - `npm run test:easy-1` (Counter using setInterval)
  - `npm run test:easy-2` (Counter using setTimeout)
  - `npm run test:easy-3` (Read from file)
  - `npm run test:easy-4` (Write to file)
- **Medium:**
  - `npm run test:medium-1` (File cleaner)
  - `npm run test:medium-2` (Clock)
- **Hard:**
  - `npm run 1-promisify-setTimeout`
  - `npm run 2-sleep-completely`
  - `npm run 3-promise-all`
  - `npm run 4-promise-chain`

### Direct Script Execution
You can still execute any script directly with Node.js:
```sh
node easy/1-counter.js
node medium/2-clock.js
```

---
## Demo Video

For a walkthrough on navigating through the assignments, check out this demo video:

https://gist.github.com/user-attachments/assets/308d33f1-dc1a-47f0-a3c6-bfa957f3e398

### **PS:** If you're stuck on a problem for more than an hour, feel free to check the `solution` folder.

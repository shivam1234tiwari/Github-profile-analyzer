# GitHub Profile Analyzer API

A backend service built using Node.js, Express.js, MySQL, and the GitHub Public API to analyze GitHub user profiles and store useful insights in a MySQL database.

## Features

- Fetch GitHub profile data using username
- Store profile insights in MySQL
- Get all analyzed profiles
- Get a specific profile by username
- Error handling and validation
- RESTful API design

## Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub Public API
- Axios
- dotenv

## Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/github-profile-analyzer.git
cd github-profile-analyzer
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=5000

DB_HOST=YOUR_DB_HOST
DB_PORT=YOUR_DB_PORT
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_NAME=YOUR_DB_NAME
```

### Run the Server

```bash
npm run dev
```

## Database Schema

```sql
CREATE TABLE profiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE,
  name VARCHAR(255),
  bio TEXT,
  public_repos INT,
  followers INT,
  following INT,
  public_gists INT,
  account_age_days INT,
  profile_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Analyze GitHub Profile

```http
GET /api/github/analyze/:username
```

Example:

```http
GET /api/github/analyze/octocat
```

### Get All Profiles

```http
GET /api/github/profiles
```

### Get Single Profile

```http
GET /api/github/profiles/:username
```

## Author

Rahul Tiwari


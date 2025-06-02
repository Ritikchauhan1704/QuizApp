# QuizApp

A modern, interactive quiz application built with React that offers multiple categories of trivia questions. Test your knowledge across various topics including General Knowledge, Video Games, Science, Sports, and more!

## ✨ Features

### Quiz Categories
- **14 Different Categories** including:
  - General Knowledge
  - Video Games
  - Anime & Manga
  - Science & Nature
  - Computers & Technology
  - Mathematics
  - Sports
  - Geography
  - History
  - Art
  - Animals
  - Vehicles
  - Comics
  - Gadgets

### Quiz Experience
- **10 Questions per Quiz** - Perfect length for quick knowledge testing
- **Multiple Choice & True/False** - Varied question types for engaging gameplay
- **Real-time Scoring** - Track your progress as you answer
- **Instant Results** - See your final score immediately
- **Try Again Option** - Retake quizzes to improve your score
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### User Interface
- **Beautiful Category Cards** - Visually appealing category selection with high-quality images
- **Clean Quiz Interface** - Distraction-free question presentation
- **Smooth Navigation** - Intuitive user flow from category selection to results
- **Modern Styling** - Contemporary design with smooth hover effects

## 🛠️ Tech Stack

### Frontend
- **React** - Component-based UI framework
- **React Router DOM** - Client-side routing and navigation
- **Redux Toolkit** - State management for quiz data and user selections
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework for styling

### API
- **Open Trivia Database (OpenTDB)** - Free trivia questions API
- **HTML Entity Decoding** - Proper handling of special characters in questions

## 📁 Project Structure

```
quizapp/
├── src/
│   ├── components/
│   │   ├── Cards.jsx          # Category selection cards
│   │   ├── Categories.jsx     # Category grid layout
│   │   ├── Quiz.jsx           # Main quiz component
│   │   ├── Home.jsx           # Home page component
│   │   ├── Navbar.jsx         # Navigation component
│   │   └── index.js           # Component exports
│   ├── features/
│   │   └── topic/
│   │       └── topicSlice.js  # Redux slice for topic management
│   ├── store/
│   │   └── store.js           # Redux store configuration
│   ├── App.jsx                # Main application component
│   └── index.js               # Application entry point
├── public/
│   └── index.html
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quizapp.git
   cd quizapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to start using QuizApp!

## 🎯 How to Use

### Taking a Quiz
1. **Select a Category** - Choose from 14 available categories on the home page
2. **Answer Questions** - Click on your chosen answer for each of the 10 questions
3. **Track Progress** - Watch your score update in real-time
4. **View Results** - See your final score out of 10
5. **Try Again** - Retake the same category or choose a different one

### Navigation
- **Home** - Return to category selection
- **Quiz** - Current quiz in progress
- **Results** - Final score display with retry option

## 🔧 Configuration

### API Integration
The app uses the Open Trivia Database API:
```javascript
const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}`;
```

### Category IDs
Each category corresponds to a specific OpenTDB category ID:
- General Knowledge: 9
- Video Games: 15
- Anime: 31
- Science & Nature: 17
- Computers: 18
- Mathematics: 19
- Sports: 21
- Geography: 22
- History: 23
- Art: 25
- Animals: 27
- Vehicles: 28
- Comics: 29
- Gadgets: 30

## 🎨 Styling

### Color Scheme
- Primary: `#1F2544` (Dark Blue)
- Secondary: `#252d4a` (Medium Blue)
- Accent: `#555e7d` (Light Blue)
- Background: White with blue overlays

### Responsive Design
- **Mobile**: 2-column grid for categories
- **Tablet**: 3-column grid for categories
- **Desktop**: 4-column grid for categories
- **Quiz Interface**: Optimized for all screen sizes

## 🏗️ Key Features Implementation

### Question Shuffling
```javascript
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
```

### HTML Entity Decoding
```javascript
function decode(str) {
  let txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}
```

### State Management
- Redux for global state management
- Category selection persistence
- Score tracking across components

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach** with Tailwind CSS
- **Flexible grid layouts** that adapt to screen size
- **Touch-friendly buttons** for mobile devices
- **Optimized text sizing** for readability across devices

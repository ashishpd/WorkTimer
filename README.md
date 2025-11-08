# WorkTimer

A desktop timer application built with Electron that helps you track your work sessions and manage your time effectively.

## Overview

WorkTimer is a simple, focused timer application that displays:
- A countdown timer for your current work session (default: 30 minutes)
- Start and finish times for your session
- Time remaining until 5 PM (today or tomorrow)
- A visual calendar showing the current week with today's date highlighted

## Features

- **Session Timer**: Countdown timer that tracks your work session duration
- **Time Tracking**: Displays when you started and when you should finish
- **5 PM Goal**: Shows how much time you have available until 5 PM to complete your goals
- **Calendar View**: Visual representation of the current week with today highlighted
- **Auto-updates**: Timer updates every 10 seconds
- **Window Title**: Timer countdown is displayed in the window title for quick reference

## Technology Stack

- **Electron** (v9.1.2) - Desktop application framework
- **D3.js** (v5.16.0) - Data visualization and date formatting
- **Materialize CSS** - UI styling framework
- **Font Awesome** - Icons

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd WorkTimer-1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Application

Start the application:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

### Configuration

You can modify the default timer duration by editing `app/js/renderer.js`:
- Change the `startingMinute` variable (line 5) to set your desired session length in minutes
- Currently set to 30 minutes by default

## Project Structure

```
WorkTimer-1/
├── app/
│   ├── css/              # Stylesheets (Materialize, Font Awesome, custom styles)
│   ├── js/
│   │   └── renderer.js   # Main application logic and timer functionality
│   ├── webfonts/         # Font Awesome font files
│   └── index.html        # Main application UI
├── main.js               # Electron main process (window creation)
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## How It Works

1. **Timer Initialization**: On startup, the app sets a countdown timer (default 30 minutes) from the current time
2. **Display Updates**: Every 10 seconds, the timer updates to show:
   - Remaining time in minutes and seconds
   - Time until 5 PM (adjusts to tomorrow if it's past 5 PM)
3. **Calendar Rendering**: The app renders a calendar view using D3.js SVG, showing:
   - The current week starting from Monday
   - Today's date highlighted in red
   - Month labels for the displayed dates

## Development

### Scripts

- `npm start` - Runs the Electron application
- `npm run dev` - Runs the application with nodemon for auto-reload during development

### Customization

- **Timer Duration**: Modify `startingMinute` in `app/js/renderer.js`
- **Window Size**: Adjust `width` and `height` in `main.js`
- **Styling**: Edit `app/css/style.css` for custom styles

## License

ISC

## Author

See package.json for author information.


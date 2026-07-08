#!/bin/bash
# Start script for LJD Training PT Booking Platform (Double-click to run on macOS)

# Determine directory of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=================================================="
echo " Starting LJD Training Booking Platform Server..."
echo "=================================================="

# Check if python3 or python is available
if command -v python3 >/dev/null 2>&1; then
    PYTHON_CMD="python3"
elif command -v python >/dev/null 2>&1; then
    PYTHON_CMD="python"
else
    echo "ERROR: Python is not installed or not in PATH."
    echo "Please install Python or open index.html directly in your browser."
    echo "Press Enter to exit..."
    read -r
    exit 1
fi

# Print details
echo "Using: $PYTHON_CMD"
echo "Local Server Address: http://localhost:8000"
echo "To stop the server, press Ctrl+C in this terminal window."
echo "--------------------------------------------------"

# Open in default browser
open "http://localhost:8000"

# Run Python HTTP server
$PYTHON_CMD -m http.server 8000

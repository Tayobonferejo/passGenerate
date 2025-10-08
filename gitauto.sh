#!/bin/bash
# =======================================
# Git Automation Script
# Usage: ./git-auto.sh "your commit message"
# =======================================

# Stop script if any command fails
set -e

# Check for commit message
if [ -z "$1" ]; then
  echo "❌ Error: Please provide a commit message."
  echo "Example: ./git-auto.sh 'update password generator'"
  exit 1
fi

# Add all files
git add .

# Commit with message
git commit -m "$1"

# Push to the current branch
git push

# Show success message
echo "✅ Changes pushed successfully!"

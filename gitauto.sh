#!/bin/bash
# =======================================
# Git Auto Commit & Push Script
# Usage: ./git-auto.sh "your commit message"
# =======================================

set -e  # stop if any command fails

# 📝 1. Check for commit message
if [ -z "$1" ]; then
  echo "❌ Please provide a commit message."
  echo "Usage: ./git-auto.sh \"update password generator\""
  exit 1
fi

# 🧭 2. Detect current branch name
branch=$(git rev-parse --abbrev-ref HEAD)

# 🪣 3. Add all changes
git add .

# 💬 4. Commit with message and timestamp
timestamp=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "$1"

# 🚀 5. Push to the current branch
git push origin "$branch"

# ✅ 6. Confirmation message
echo "------------------------------------"
echo "✅ Successfully pushed to branch: $branch"
echo "🕒 Commit time: $timestamp"
echo "------------------------------------"

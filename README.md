# My Node.js App 🚀

## Overview
A Node.js web application with complete CI/CD pipeline using Jenkins, Docker, and AWS EC2.

## Live App
http://54.84.247.171:3000

## CI/CD Pipeline
Every code push to GitHub automatically triggers Jenkins pipeline via Webhook.

### Pipeline Stages
- Code → Clones latest code from GitHub
- Build → Builds Docker image
- Test → Runs application tests
- Deploy → Deploys using Docker Compose

## Architecture
GitHub Push → Webhook → Jenkins → Docker Build → Test → Deploy → AWS EC2

## Tech Stack
- Application: Node.js, Express
- Containerization: Docker, Docker Compose
- CI/CD: Jenkins Pipeline
- Cloud: AWS EC2 (Ubuntu 22.04)
- Version Control: GitHub + Webhooks

## How to Run Locally
1. Clone this repo
2. Run: docker-compose up -d
3. Open: http://localhost:3000

## What I Built
- Node.js Express application from scratch
- Dockerfile for containerization
- Jenkinsfile for CI/CD pipeline
- GitHub Webhook for auto-trigger
- Deployed on AWS EC2

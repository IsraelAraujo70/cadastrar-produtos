#!/bin/bash
cd backend
pip install -r requirements.txt
python app.py &
cd ../frontend
npm install --legacy-peer-deps
npm start

# Electron + Vite + React + TypeScript Starter Template

This is a starter template for an Elctron app with TypeScript and Vite.
Included is an emplty preload.cts file and an isDev utility.
Why .cts? This is for bundling purposes. There is a pathResolver script that will point to the correct preload file (dev or production). We are using a common js file to force the bundeler to include a seperate file as opposed to bundling the file in with the electron app which could cause issues.

isDev points the app to the proper file path for the project. In the dev environment vite is set up for hot module reloads for better developer experience.

# Instructions

1. Clone the repo
2. Change project name in the following places: package.json, electron-builder.json, optional: folder name
3. Run npm install
4. Run npm run init
5. Run npm run dev

# Changing Repo

If you want to commit to your own repo perform the following commands:
1. rm -rf .git
2. git init
3. git add .
4. git commit -m "insert your initial commit here"
5. Create new repo on GitHub or where you have your code
6. git remote add origin *your git link*
7. git push -u origin main (or master depending on your repo)

That's it! You're ready to start building in Electron!

This starter template is based off of configurations from the freeCodeCamp Electron tutorial
Link is here if you'd like to watch it: https://www.youtube.com/watch?v=fP-371MN0Ck&t=2716s

When you're ready to build your app, run one of the following commands. The output will be the dist folder.

# Mac M Series Chips:

npm run dist:mac-silicon

# Mac M Initel Chips:

npm run dist:mac-intel

# Windows:

npm run dist:win

# Linux:

npm run dist:linux

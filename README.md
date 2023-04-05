# Run the app locally

1. cd into repo folder, `npm install` for nodule modules (frontend)
2. cd server, `npm install` for backend
3. env file has been intentionally put for access to mongodb database (user is temporary with limited access and will be deleted automatically after a week)
4. npm start (server)
5. cd ..
6. npm start (frontend)

# Decision Decisions

1. Monorepo containing the server+frontend for structuring needs
2. React (using CRA) for simplicity and a lightweight app since speed was a driving factor
3. Tailwind CSS for styling, it's a personal preference and I think it saves a lot of time
4. Jotai for global state over Redux because it is lightweight, and the developer experience is unmatched
5. Express over FastAPI because of speed and Node's non-blocking IO (async) is highly scalable

# Information

Project has unfinished features due to time limitations, would like to explain over call/interview where I had the most time-consuming blockers. Thankyou :)

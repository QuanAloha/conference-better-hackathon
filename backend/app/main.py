import os

import psycopg
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Conference Companion API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    database_ok = False
    try:
        with psycopg.connect(os.environ["DATABASE_URL"], connect_timeout=2) as connection:
            connection.execute("SELECT 1")
            database_ok = True
    except (KeyError, psycopg.Error):
        pass

    return {
        "status": "ok" if database_ok else "degraded",
        "services": {
            "api": "ok",
            "postgres": "ok" if database_ok else "unavailable",
            "whisperlive_url": os.getenv("WHISPERLIVE_URL"),
            "libretranslate_url": os.getenv("LIBRETRANSLATE_URL"),
        },
    }


@app.get("/api/")
def root():
    return {"message": "Conference Companion API is running."}

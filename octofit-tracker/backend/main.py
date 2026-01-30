from fastapi import FastAPI
from database import db

app = FastAPI(title="OctoFit Tracker API")


@app.get("/")
def root():
    return {"status": "OctoFit Tracker backend running"}


@app.get("/health")
def health_check():
    try:
        db.list_collection_names()
        return {"database": "connected"}
    except Exception:
        return {"database": "not connected"}

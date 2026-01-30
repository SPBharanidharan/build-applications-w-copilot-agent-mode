from fastapi import FastAPI

app = FastAPI(title="OctoFit Tracker API")


@app.get("/")
def root():
    return {"status": "OctoFit Tracker backend running"}


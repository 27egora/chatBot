from typing import Union

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from datetime import datetime
import json
app = FastAPI()

templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="templates"), name="static")


@app.get("/api/hello")
def hello():
    return {"Hello": "World"} 

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    """Render home page"""
    return templates.TemplateResponse(
        "index.html", 
        {
        "request": request,
        "title": "Home",
        "message": "Welcome to FastAPI with Jinja2!",
        "timenow": datetime.now().strftime("%d.%m.%Y"),
        }
    )

@app.get("/api/time")
async def get_time():
    return {
        "time": datetime.now().strftime("%H:%M:%S"),
        "date": datetime.now().strftime("%Y-%m-%d"),
        "seconds": datetime.now().second
    }

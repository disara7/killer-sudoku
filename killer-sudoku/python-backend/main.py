from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from sudoku import find_combinations_for_sum 
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from frontend (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request and response models
class SumRequest(BaseModel):
    target: int

class SumResponse(BaseModel):
    combinations: List[List[int]]

# POST endpoint
@app.post("/combinations", response_model=SumResponse)
def get_combinations(request: SumRequest):
    results = find_combinations_for_sum(request.target)
    return {"combinations": results}

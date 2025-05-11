from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel

app = FastAPI()

class Mahasiswa(BaseModel):
    id: int
    name: str
    nim: str
    course: List[str]
    year: int

mahasiswa_list = [
    Mahasiswa(id=1, name="Neli", nim="318917491", course=["RPL", "BD", "PBO"], year=2025),
    Mahasiswa(id=2, name="Anam", nim="981791119", course=["RPL", "BD", "KSI"], year=2025),
    Mahasiswa(id=3, name="Agam", nim="617646717", course=["RPL", "DS", "PBO"], year=2025),
]

@app.get("/mahasiswa", response_model=List[Mahasiswa])
def get_all():
    return mahasiswa_list

@app.get("/mahasiswa/{id}", response_model=Mahasiswa)
def get_by_id(id: int):
    for m in mahasiswa_list:
        if m.id == id:
            return m
    raise HTTPException(status_code=404, detail="Mahasiswa tidak ditemukan")

@app.post("/mahasiswa", response_model=Mahasiswa)
def add_mahasiswa(mhs: Mahasiswa):
    mahasiswa_list.append(mhs)
    return mhs

@app.delete("/mahasiswa/{id}")
def delete_mahasiswa(id: int):
    for i, m in enumerate(mahasiswa_list):
        if m.id == id:
            del mahasiswa_list[i]
            return {"message": "Mahasiswa dihapus"}
    raise HTTPException(status_code=404, detail="Mahasiswa tidak ditemukan")

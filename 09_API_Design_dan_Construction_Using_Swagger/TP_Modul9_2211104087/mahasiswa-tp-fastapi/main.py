from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel

app = FastAPI()

class Mahasiswa(BaseModel):
    nama: str
    nim: str

# Default list anggota kelompok (Buyung Hariyanto sebagai pertama)
mahasiswa_list = [
    Mahasiswa(nama="Stephen Curry", nim="1302000002"),
    Mahasiswa(nama="Kevin Durant", nim="1302000003")
]

@app.get("/mahasiswa", response_model=List[Mahasiswa])
def get_all():
    return mahasiswa_list

@app.get("/mahasiswa/{nim}", response_model=Mahasiswa)
def get_by_nim(nim: str):
    for m in mahasiswa_list:
        if m.nim == nim:
            return m
    raise HTTPException(status_code=404, detail="Mahasiswa tidak ditemukan")

@app.post("/mahasiswa", response_model=Mahasiswa)
def add_mahasiswa(mhs: Mahasiswa):
    # Cek duplikat NIM
    for m in mahasiswa_list:
        if m.nim == mhs.nim:
            raise HTTPException(status_code=400, detail="NIM sudah ada")
    mahasiswa_list.append(mhs)
    return mhs

@app.delete("/mahasiswa/{nim}")
def delete_mahasiswa(nim: str):
    for i, m in enumerate(mahasiswa_list):
        if m.nim == nim:
            del mahasiswa_list[i]
            return {"message": "Mahasiswa dihapus"}
    raise HTTPException(status_code=404, detail="Mahasiswa tidak ditemukan")

from __future__ import annotations
from typing import List

class PusatDataSingleton:
    """
    Class PusatDataSingleton menggunakan design pattern Singleton.
    """
    _instance: PusatDataSingleton = None
    DataTersimpan: List[str] = []

    def __init__(self):
        """
        Konstruktor privat untuk inisialisasi awal.
        """
        if PusatDataSingleton._instance is not None:
            raise Exception("Class ini adalah Singleton, gunakan GetDataSingleton() untuk mendapatkan instance")
        self.DataTersimpan = []

    @classmethod
    def GetDataSingleton(cls) -> PusatDataSingleton:
        """
        Method untuk mendapatkan instance Singleton.
        """
        if cls._instance is None:
            cls._instance = PusatDataSingleton()
        return cls._instance

    def GetSemuaData(self) -> List[str]:
        """
        Mengembalikan seluruh data yang tersimpan.
        """
        return self.DataTersimpan

    def PrintSemuaData(self) -> None:
        """
        Mencetak semua data yang tersimpan satu per satu.
        """
        print("Data yang tersimpan:")
        for i, data in enumerate(self.DataTersimpan, 1):
            print(f"{i}. {data}")

    def AddSebuahData(self, input: str) -> None:
        """
        Menambahkan sebuah data baru ke dalam list.
        """
        self.DataTersimpan.append(input)
        print(f"Data '{input}' berhasil ditambahkan")

    def HapusSebuahData(self, index: int) -> None:
        """
        Menghapus sebuah data berdasarkan index.
        """
        if 0 <= index < len(self.DataTersimpan):
            removed_data = self.DataTersimpan.pop(index)
            print(f"Data '{removed_data}' pada index {index} berhasil dihapus")
        else:
            print("Index tidak valid")


# Contoh penggunaan
if __name__ == "__main__":
    # Mendapatkan instance Singleton
    pusat_data = PusatDataSingleton.GetDataSingleton()
    
    # Menambahkan beberapa data
    pusat_data.AddSebuahData("Data pertama")
    pusat_data.AddSebuahData("Data kedua")
    pusat_data.AddSebuahData("Data ketiga")
    
    # Mencetak semua data
    pusat_data.PrintSemuaData()
    
    # Mendapatkan semua data sebagai list
    semua_data = pusat_data.GetSemuaData()
    print("\nIsi semua_data:", semua_data)
    
    # Menghapus data pada index 1
    pusat_data.HapusSebuahData(1)
    
    # Mencetak data setelah penghapusan
    pusat_data.PrintSemuaData()
    
    # Membuktikan bahwa ini benar-benar Singleton
    pusat_data_lain = PusatDataSingleton.GetDataSingleton()
    print("\nMembuktikan Singleton:")
    print("Apakah instance sama?", pusat_data is pusat_data_lain)
    pusat_data_lain.PrintSemuaData()
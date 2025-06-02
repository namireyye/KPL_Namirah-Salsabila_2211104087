from __future__ import annotations
from abc import ABC, abstractmethod
from typing import Dict, List


# Observer interface
class Observer(ABC):
    @abstractmethod
    def update(self, location: str, weather: str) -> None:
        pass


# Subject interface
class Subject(ABC):
    @abstractmethod
    def attach(self, location: str, observer: Observer) -> None:
        pass

    @abstractmethod
    def detach(self, location: str, observer: Observer) -> None:
        pass

    @abstractmethod
    def notify(self, location: str) -> None:
        pass


# Concrete Subject (Weather Station)
class WeatherStation(Subject):
    def __init__(self):
        # Lokasi -> daftar pengguna
        self._observers: Dict[str, List[Observer]] = {}
        self._weather_data: Dict[str, str] = {}

    def attach(self, location: str, observer: Observer) -> None:
        if location not in self._observers:
            self._observers[location] = []
        self._observers[location].append(observer)
        print(f"WeatherStation: {observer.name} berlangganan notifikasi untuk {location}")

    def detach(self, location: str, observer: Observer) -> None:
        if location in self._observers:
            self._observers[location].remove(observer)
            print(f"WeatherStation: {observer.name} berhenti berlangganan dari {location}")

    def notify(self, location: str) -> None:
        if location in self._observers:
            print(f"WeatherStation: Mengirim notifikasi cuaca untuk {location}...")
            for observer in self._observers[location]:
                observer.update(location, self._weather_data[location])

    def update_weather(self, location: str, weather: str) -> None:
        print(f"\nWeatherStation: Cuaca di {location} berubah menjadi '{weather}'")
        self._weather_data[location] = weather
        self.notify(location)


# Concrete Observer (User)
class User(Observer):
    def __init__(self, name: str):
        self.name = name

    def update(self, location: str, weather: str) -> None:
        print(f"{self.name} menerima notifikasi: Cuaca di {location} sekarang {weather}")


# Client code
if __name__ == "__main__":
    station = WeatherStation()

    user1 = User("Alice")
    user2 = User("Bob")
    user3 = User("Charlie")

    # Alice dan Bob berlangganan ke Jakarta
    station.attach("Jakarta", user1)
    station.attach("Jakarta", user2)

    # Charlie berlangganan ke Bandung
    station.attach("Bandung", user3)

    # Update cuaca di Jakarta
    station.update_weather("Jakarta", "hujan deras")

    # Update cuaca di Bandung
    station.update_weather("Bandung", "cerah berawan")

    # Bob unsubscribe dari Jakarta
    station.detach("Jakarta", user2)

    # Update cuaca lagi di Jakarta
    station.update_weather("Jakarta", "berawan")

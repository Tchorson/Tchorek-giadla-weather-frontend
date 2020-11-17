
export class weather {
  date: Date;
  location: string;
  latitude: number;
  longitude: number;
  dTemp: number;
  windSpeed: number;
  humidity: number;
  tornadoLvl: string;
  constructor(date: Date, location: string, latitude: number, longitude: number, dTemp: number, windSpeed: number, humidity: number, tornadoLvl: string) {
    this.date = date;
    this.location = location;
    this.latitude = latitude;
    this.longitude = longitude;
    this.dTemp = dTemp;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
    this.tornadoLvl = tornadoLvl;
  }
}

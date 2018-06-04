class Asyncable {
  doAsyncJob(job) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(job());
      }, (Math.random() * 2000).toFixed());
    });
  }
}

class WeatherStation extends Asyncable {

  constructor(city) {
    super();
    this.city = city;
  }

  readSensors() {
    const max = 55;
    const min = -90;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  measure() {
    return this.doAsyncJob(this.readSensors);
  }

}


class Copywriter extends Asyncable {

  makeSensation(temp) {
    return this.doAsyncJob(() => `Breaking news! Maximum temperature on the Earth reached ${temp} °C!`);
  }

}

class NewsServer extends Asyncable {

  constructor(name) {
    super();
    this.name = name;

  }

  spreadNews(news) {
    return this.doAsyncJob(() => `****Today on ${this.name}**** ${news}`);
  }

}

const cities = ['Paris', 'London', 'Milan', 'Kyiv', 'Kharkiv', 'Madrid', 'Lisbon', 'Bogoduhiv'];
const stantions = cities.map(city => new WeatherStation(city));
const measureJobs = stantions.map(stantion => stantion.measure());

Promise.all(measureJobs)
  .then((temperatures) => {
    console.log('[Measured]', temperatures);
    return Math.max(...temperatures);
  })
  .then((max) => {
    console.log('[Max]', max);
    const copywriter = new Copywriter();
    return copywriter.makeSensation(max);
  }).then((sensation => {
    console.log('[Text]', sensation);
    const channels = ['ABC', 'CNN', 'XXX'];
    const newsServers = channels.map(channel => new NewsServer(channel));
    const newsJobs = newsServers.map(server => server.spreadNews(sensation));
    Promise.race(newsJobs)
      .then((first) => {
        console.log('[Result]', first);
      });
  }));


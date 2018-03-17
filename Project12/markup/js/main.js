(() => {
    'use strict';

    class Transport {
        constructor(name, speed, capacity){
            this.name = name;
            this.speed = speed;
            this.capacity = capacity;
        }
        toString(){
            let keys = Object.keys(this);
            let strResult = '';
            keys.forEach(key => {
                strResult += `${key}:  ${this[key]}, `;
            });
            return  strResult.trim();
        }
    }


    class WaterTransport extends Transport{
        constructor(name, speed, capacity, swim){
            super(name, speed, capacity);
            this.swim = swim;
        }

    }

    class  AirTransport extends Transport{
        constructor(name, speed, capacity, fly){
            super(name, speed, capacity);
            this.fly = fly;
        }

    }
    class  RoadTransport extends Transport{
        constructor(name, speed, capacity, drive){
            super(name, speed, capacity);
            this.drive = drive;
        }

    }

    class  AutomobileTransport extends RoadTransport{
        constructor(name, speed, capacity, drive, transmission){
            super(name, speed, capacity, drive);
            this.transmission = transmission;
        }

    }

    class  RailwayTransport extends RoadTransport{
        constructor(name, speed, capacity, drive, railwayTrackType){
            super(name, speed, capacity, drive);
            this.railwayTrackType = railwayTrackType;
        }

    }

    class  Cars extends AutomobileTransport{
        constructor(name, speed, capacity, drive, transmission){
            super(name, speed, capacity, drive, transmission);
        }

    }

    class  Trucks extends AutomobileTransport{
        constructor(name, speed, capacity, drive, transmission){
            super(name, speed, capacity, drive, transmission);
        }

    }


    let transport = new Transport('Transport', 'undefined', 'undefined');
    console.log(transport.toString());

    let waterTransport = new WaterTransport('WaterTransport', 50, 5000, true);
    console.log(waterTransport.toString());

    let airTransport = new AirTransport('AirTransport', 1000, 2000, true);
    console.log(airTransport.toString());

    let roadTransport = new RoadTransport('RoadTransport', 300, 20000, true);
    console.log(roadTransport.toString());

    let automobileTransport = new AutomobileTransport('AutomobileTransport', 200, 100, true, 'manual||automatic');
    console.log(automobileTransport.toString());

    let railwayTransport = new RailwayTransport('RailwayTransport', 150, 10000, true, 'for trains||for trams');
    console.log(railwayTransport.toString());

    let cars = new Cars('Cars', 100, 120, true, 'manual||automatic');
    console.log(cars.toString());

    let trucks = new Trucks('Trucks', 80, 2000, true, 'manual||automatic');
    console.log(trucks.toString());


})();
import { useState, useEffect } from "react";
import Ajv, { JSONSchemaType } from "ajv";
const ajv = new Ajv({
    int32range: false,
});

type coord = {
    lon: number;
    lat: number;
};

type weather = {
    id: number;
    main: string;
    description: string | null;
    icon: string;
};

type main = {
    temp: number | null;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number | null;
    humidity: number | null;
    sea_level: number;
    grnd_level: number | null;
};

type wind = {
    speed: number | null;
    deg: number | null;
    gust: number | null;
};

type clouds = {
    all: number;
};

type sys = {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
};

type WeatherInfo = {
    coord: coord;
    weather: Array<weather>;
    base: string;
    main: main;
    visibility: number;
    wind: wind;
    clouds: clouds;
    dt: number;
    sys: sys;
    timezone: number;
    id: number;
    name: string;
    cod: number | null;
};

export default function CurrentWeather(): WeatherInfo {
    //如果需要解决1秒钟60次以上的高并发问题可以多注册几个apikey轮流调用
    const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=40.22&lon=116.23&appid=f1f7c3b827c8a53c5d6b7ab5ccc36123&units=metric&lang=zh_cn";
    const [WeatherInfo, setItems] = useState<WeatherInfo>({
        coord: {
            lon: 116.23,
            lat: 40.22,
        },
        weather: [
            {
                id: 804,
                main: "Clouds",
                description: null,
                icon: "04d",
            },
        ],
        base: "stations",
        main: {
            temp: null,
            feels_like: 20.59,
            temp_min: 20.81,
            temp_max: 20.81,
            pressure: null,
            humidity: null,
            sea_level: 1005,
            grnd_level: null,
        },
        visibility: 10000,
        wind: {
            speed: null,
            deg: null,
            gust: null,
        },
        clouds: {
            all: 86,
        },
        dt: 1657590206,
        sys: {
            type: 1,
            id: 9609,
            country: "CN",
            sunrise: 1657572925,
            sunset: 1657626327,
        },
        timezone: 28800,
        id: 2038154,
        name: "Changping",
        cod: null,
    });
    useEffect(() => {
        fetch(url, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((json) => {
                // 验证法则
                type getItemHistory = WeatherInfo;
                const getItemHistorySchema: JSONSchemaType<getItemHistory> = {
                    type: "object",
                    properties: {
                        coord: {
                            type: "object",
                            properties: {
                                lon: { type: "number" },
                                lat: { type: "number" },
                            },
                            required: ["lon", "lat"],
                        },
                        weather: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: { type: "integer" },
                                    main: { type: "string" },
                                    description: { type: "string" },
                                    icon: { type: "string" },
                                },
                                required: ["id", "main", "description", "icon"],
                            },
                        },
                        base: { type: "string" },
                        main: {
                            type: "object",
                            properties: {
                                temp: { type: "number" },
                                feels_like: { type: "number" },
                                temp_min: { type: "number" },
                                temp_max: { type: "number" },
                                pressure: { type: "number" },
                                humidity: { type: "number" },
                                sea_level: { type: "number" },
                                grnd_level: { type: "number" },
                            },
                            required: [
                                "temp",
                                "feels_like",
                                "temp_min",
                                "temp_max",
                                "pressure",
                                "humidity",
                                "sea_level",
                                "grnd_level",
                            ],
                        },
                        visibility: { type: "integer" },
                        wind: {
                            type: "object",
                            properties: {
                                speed: { type: "number" },
                                deg: { type: "number" },
                                gust: { type: "number" },
                            },
                            required: ["speed", "deg", "gust"],
                        },
                        clouds: {
                            type: "object",
                            properties: {
                                all: { type: "number" },
                            },
                            required: ["all"],
                        },
                        dt: { type: "integer" },
                        sys: {
                            type: "object",
                            properties: {
                                type: { type: "integer" },
                                id: { type: "integer" },
                                country: { type: "string" },
                                sunrise: { type: "integer" },
                                sunset: { type: "integer" },
                            },
                            required: [
                                "type",
                                "id",
                                "country",
                                "sunrise",
                                "sunset",
                            ],
                        },
                        timezone: { type: "integer" },
                        id: { type: "integer" },
                        name: { type: "string" },
                        cod: { type: "integer" },
                    },
                    required: [
                        "coord",
                        "weather",
                        "base",
                        "main",
                        "visibility",
                        "wind",
                        "clouds",
                        "dt",
                        "sys",
                        "timezone",
                        "id",
                        "name",
                        "cod",
                    ],
                };
                const validator = ajv.compile(getItemHistorySchema);
                if (validator(json)) return json;
                else throw new Error("Invalid Weather Structure!");
            })
            .then((itemHistory) => {
                setItems(itemHistory);
            })
            .catch((err) => console.log(err));
    }, []);

    return WeatherInfo;
}

type aqimain = {
    aqi: number | null;
};

type components = {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number | null;
    pm10: number;
    nh3: number;
};

type list = {
    main: aqimain;
    components: components;
    dt: number;
};

type AirQualityInfo = {
    coord: coord;
    list: Array<list>;
};
export function CurrentAirQualityInfo() {
    const url =
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=40.22&lon=116.23&appid=f1f7c3b827c8a53c5d6b7ab5ccc36123";
    const [AirQualityInfo, setAirQualityInfo] = useState<AirQualityInfo>({
        coord: {
            lon: 116.23,
            lat: 40.22,
        },
        list: [
            {
                main: {
                    aqi: null,
                },
                components: {
                    co: 310.42,
                    no: 0.07,
                    no2: 44.55,
                    o3: 13.59,
                    so2: 2.06,
                    pm2_5: null,
                    pm10: 31.59,
                    nh3: 23.81,
                },
                dt: 1657805729,
            },
        ],
    });
    useEffect(() => {
        fetch(url, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((json) => {
                //验证法则
                type getAQI = AirQualityInfo;
                const getAQISchema: JSONSchemaType<getAQI> = {
                    type: "object",
                    properties: {
                        coord: {
                            type: "object",
                            properties: {
                                lon: { type: "number" },
                                lat: { type: "number" },
                            },
                            required: ["lon", "lat"],
                        },
                        list: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    main: {
                                        type: "object",
                                        properties: {
                                            aqi: { type: "integer" },
                                        },
                                        required: ["aqi"],
                                    },
                                    components: {
                                        type: "object",
                                        properties: {
                                            co: { type: "number" },
                                            no: { type: "number" },
                                            no2: { type: "number" },
                                            o3: { type: "number" },
                                            so2: { type: "number" },
                                            pm2_5: { type: "number" },
                                            pm10: { type: "number" },
                                            nh3: { type: "number" },
                                        },
                                        required: [
                                            "co",
                                            "no",
                                            "no2",
                                            "o3",
                                            "so2",
                                            "pm2_5",
                                            "pm10",
                                            "nh3",
                                        ],
                                    },
                                    dt: { type: "integer" },
                                },
                                required: ["main", "components", "dt"],
                            },
                        },
                    },
                    required: ["coord", "list"],
                };
                const validator = ajv.compile(getAQISchema);
                if (validator(json)) return json;
                else throw new Error("Invalid AQI Structure!");
            })
            .then((aqiInfo) => {
                setAirQualityInfo(aqiInfo);
            })
            .catch((err) => console.log(err));
    }, []);
    return AirQualityInfo;
}

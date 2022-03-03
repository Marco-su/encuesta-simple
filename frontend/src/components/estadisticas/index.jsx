import { useEffect, useContext, useState } from "react";
import Context from "../../contexts/Provider";
import { getStatistics } from "../../helpers/queries";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Estadisticas() {
  const [dataFavs, setDataFavs] = useState([]);
  const [dataTimes, setDataTimes] = useState([]);
  const { encuestas_data, setEncuestas_data } = useContext(Context);

  const redes = ["fb", "ig", "tiktok", "twitter", "wa", "otra"];

  function cambioNombres(nombre, array, index) {
    switch (nombre) {
      case "fb":
        return (array[index].name = "Facebook");

      case "ig":
        return (array[index].name = "Instagram");

      case "wa":
        return (array[index].name = "WhatsApp");

      case "tiktok":
        return (array[index].name = "TikTok");

      case "twitter":
        return (array[index].name = "Twitter");

      case "otra":
        return (array[index].name = "Otras");

      default:
        break;
    }
  }

  useEffect(() => {
    if (dataFavs.length === 0) {
      getStatistics()
        .then((res) => {
          if (res.data.success) {
            const dataFavsArr = [];
            const dataTimesArr = [];

            redes.forEach((el) => {
              dataFavsArr.push({
                name: el,
                number: res.data.data[`fav_${el}`],
              });
              dataTimesArr.push({
                name: el,
                number: res.data.data[`prom_${el}`] / 60,
              });
            });

            dataFavsArr.forEach((el, index) => {
              cambioNombres(el.name, dataFavsArr, index);
            });

            dataTimesArr.forEach((el, index) => {
              cambioNombres(el.name, dataTimesArr, index);
            });

            setDataFavs(dataFavsArr);
            setDataTimes(dataTimesArr);
            setEncuestas_data(res.data.data);
          }
        })
        .catch((err) => {
          console.log("Error al traer estadisticas:", err);
        });
    }

    // eslint-disable-next-line
  }, []);

  console.log(dataFavs);

  return (
    <div>
      <div className="mb-4">
        Total de encuestas respondidas: {encuestas_data.count}
      </div>

      <div className="mb-4">
        <h2>Redes sociales favoritas</h2>

        <BarChart
          data={dataFavs}
          barSize={20}
          fill="#413ea0"
          width={730}
          height={250}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="number" barSize={20} fill="#413ea0" />
        </BarChart>
      </div>

      <div>
        <h2>Horas diarias de usuarios en redes sociales</h2>

        <BarChart
          data={dataTimes}
          barSize={20}
          fill="#413ea0"
          width={730}
          height={250}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="number" barSize={20} fill="#413ea0" />
        </BarChart>
      </div>
    </div>
  );
}

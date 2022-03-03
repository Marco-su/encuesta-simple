import { useEffect, useContext } from "react";
import Context from "../../contexts/Provider";
import { getStatistics } from "../../helpers/queries";

export default function Estadisticas() {
  const { encuestas_data, setEncuestas_data } = useContext(Context);

  useEffect(() => {
    if (!encuestas_data) {
      getStatistics()
        .then((res) => {
          console.log(res);

          if (res.data.success) {
            setEncuestas_data(res.data.data);
          }
        })
        .catch((err) => {
          console.log("Error al traer estadisticas:", err);
        });
    }
  }, [encuestas_data, setEncuestas_data]);

  return <></>;
}

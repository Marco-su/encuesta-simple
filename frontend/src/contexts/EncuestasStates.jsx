import { useState } from "react";

export default function EncuestasStates() {
  const [encuestas_data, setEncuestas_data] = useState({
    count: 0,
    fav_fb: 0,
    fav_ig: 0,
    fav_otra: 0,
    fav_tiktok: 0,
    fav_twitter: 0,
    fav_wa: 0,
    "prom_18-25": { fb: 0, ig: 0, wa: 0, twitter: 0, tiktok: 0, otras: 0 },
    "prom_26-33": { fb: 0, ig: 0, wa: 0, twitter: 0, tiktok: 0, otras: 0 },
    "prom_34-40": { fb: 0, ig: 0, wa: 0, twitter: 0, tiktok: 0, otras: 0 },
    "prom_40+": { fb: 0, ig: 0, wa: 0, twitter: 0, tiktok: 0, otras: 0 },
    prom_fb: 0,
    prom_ig: 0,
    prom_otras: 0,
    prom_tiktok: 0,
    prom_twitter: 0,
    prom_wa: 0,
  });

  return {
    encuestas_data,
    setEncuestas_data,
  };
}

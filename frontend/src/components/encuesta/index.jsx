import Formulario from "./Formulario";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Encuesta() {
  // Inits
  const redes = ["fb", "ig", "wa", "tiktok", "twitter", "otras"];

  const [isHours, setIsHours] = useState({
    "fb-units": false,
    "ig-units": false,
    "wa-units": false,
    "tiktok-units": false,
    "twitter-units": false,
    "otras-units": false,
  });

  const [isChecked, setIsChecked] = useState({
    "fb-check": false,
    "ig-check": false,
    "wa-check": false,
    "tiktok-check": false,
    "twitter-check": false,
    "otras-check": false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  // Rules
  const rules = {};

  rules.correo = register("correo", {
    required: {
      value: true,
      message: "Debes ingresar un correo electrónico para continuar",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Correo no válido. Ejemplo válido: correo@mail.com",
    },
  });

  rules.edad = register("edad", {
    required: {
      value: true,
      message: "Tu edad es requeridad para continuar",
    },
  });

  rules.sexo = register("sexo", {
    required: {
      value: true,
      message: "Por favor elige una opción para continuar",
    },
  });

  rules.favorita = register("favorita", {
    required: {
      value: true,
      message: "Por favor elige tu red social preferida",
    },
  });

  function rulesInputs(nombre) {
    return register(nombre, {
      min: {
        value: 0,
        message: "Debes colocar un tiempo valido",
      },
    });
  }

  // Handles
  const onSubmit = (data) => {
    redes.forEach((el) => {
      if (isHours[`${el}-units`] === false && data[`${el}-input`] > 1440) {
        setError(`${el}-input`, {
          type: "manual",
          message: "Un día tiene 1440 minutos, el número debe ser menor",
        });
      } else if (isHours[`${el}-units`] === true && data[`${el}-input`] > 24) {
        setError(`${el}-input`, {
          type: "manual",
          message: "Un día tiene 24 horas, el número debe ser menor",
        });
      }
    });
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setIsChecked({ ...isChecked, [e.target.name]: true });
    } else {
      setIsChecked({ ...isChecked, [e.target.name]: false });
    }
  };

  const handleRadio = (e) => {
    const red = e.target.name.split("-");
    clearErrors([`${red[0]}-input`]);

    if (e.target.value === "hours") {
      setIsHours({ ...isHours, [e.target.name]: true });
    } else {
      setIsHours({ ...isHours, [e.target.name]: false });
    }
  };

  //---
  return (
    <Formulario
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      handleRadio={handleRadio}
      isHours={isHours}
      handleCheckbox={handleCheckbox}
      isChecked={isChecked}
      clearErrors={clearErrors}
      rulesInputs={rulesInputs}
      rules={rules}
    />
  );
}

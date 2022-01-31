import React, { useEffect } from "react";
import camera from "../assets/images/camera.png";
import PokeAvatar from "./PokeAvatar";
import Separator from "./Separator";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { RHFNumberInput, RHFTextInput, RHFSelectInput } from "./RHFInputs";
import { randomInteger, REQUIRED_MSG, TYPES_SELECT } from "../utils/utils";
import { useDispatch } from "react-redux";
import { add } from "../reducers/pokeReducer";

const CreateModal = ({ dismiss }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { ab1, ab2, ab3, ab4 } = data;
    const abArray = [ab1, ab2, ab3, ab4];
    const abFilter = abArray.filter((ab) => {
      if (ab !== "") {
        return true;
      }
    });
    const abilities = abFilter.map((ab) => {
      return { ability: { name: ab } };
    });

    const newPoke = {
      abilities,
      name: data.name,
      height: data.height * 10,
      weight: data.weight * 10,
      id: randomInteger(808, 1500),
      sprites: { front_default: camera },
      stats: [
        { stat: { name: "hp" }, base_stat: data.hp },
        { stat: { name: "attack" }, base_stat: data.atk },
        { stat: { name: "defense" }, base_stat: data.def },
        { stat: { name: "special-atack" }, base_stat: data.spatk },
        { stat: { name: "special-defense" }, base_stat: data.spdef },
        { stat: { name: "speed" }, base_stat: data.spd },
      ],
      types: [{ slot: 0, type: { name: data.type } }],
    };
    dispatch(add(newPoke));
    dismiss();
  };

  return (
    <div className="catchModal">
      <div className="catchModal__main">
        <PokeAvatar img={camera} className="poke-avatar__create" />
        <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: 150 }}>
          <RHFTextInput
            control={control}
            name="name"
            label="Nome"
            placeholder="Nome do Pokemon"
            rules={{ required: REQUIRED_MSG }}
          />
          <RHFNumberInput
            control={control}
            name="hp"
            label="HP"
            placeholder="HP do Pokemon"
            rules={{ required: REQUIRED_MSG }}
          />
          <RHFNumberInput
            control={control}
            name="weight"
            label="Peso"
            placeholder="Peso do Pokemon"
            suffix="Kg"
            rules={{ required: REQUIRED_MSG }}
          />
          <RHFNumberInput
            control={control}
            name="height"
            label="Altura"
            placeholder="Altura do Pokemon"
            suffix="m"
            rules={{ required: REQUIRED_MSG }}
          />
          <Separator title="Tipo" />
          <RHFSelectInput
            control={control}
            name="type"
            placeholder="Selecione"
            options={TYPES_SELECT}
          />
          <Separator title="Habilidades" />
          <RHFTextInput
            control={control}
            name="ab1"
            placeholder="Habilidade 1"
            rules={{ required: REQUIRED_MSG }}
          />
          <RHFTextInput
            control={control}
            name="ab2"
            placeholder="Habilidade 2"
          />
          <RHFTextInput
            control={control}
            name="ab3"
            placeholder="Habilidade 3"
          />
          <RHFTextInput
            control={control}
            name="ab4"
            placeholder="Habilidade 4"
          />
          <Separator title="Estatísticas" />
          <RHFNumberInput
            control={control}
            name="def"
            label="Defesa"
            placeholder="0"
            rules={{ required: REQUIRED_MSG }}
            className="def"
          />
          <RHFNumberInput
            control={control}
            name="atk"
            label="Ataque"
            placeholder="0"
            rules={{ required: REQUIRED_MSG }}
          />
          <RHFNumberInput
            control={control}
            name="spdef"
            label="Defesa Especial"
            placeholder="0"
            rules={{ required: REQUIRED_MSG }}
          />
          <RHFNumberInput
            control={control}
            name="spatk"
            label="Ataque Especial"
            placeholder="0"
            rules={{ required: REQUIRED_MSG }}
          />
          <RHFNumberInput
            control={control}
            name="spd"
            label="Velocidade"
            placeholder="0"
            rules={{ required: REQUIRED_MSG }}
          />
        </form>
        <div className="catchModal__submit">
          <Button
            onClick={handleSubmit(onSubmit)}
            text="CRIAR POKEMON"
            disabled={Object.entries(errors).length !== 0}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateModal;

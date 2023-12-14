"use client";

import Input from "@/Components/Input";
import Button from "@/Components/Button";

import useFormHook from "./useFormHook";

import DataCard from "@/app/(app)/produtores/Components/DataCard";
import formatCpf from "@/utils/formatCpf";
import formatCnpj from "@/utils/formatCnpj";

const Form = () => {
  const { formUtils, router, isEdit, handleEdit, handleDelete } = useFormHook();
  const { handleSubmit, handleForm, register, errors } = formUtils;

  return (
    <DataCard className="desktop:w-[80vw]">
      <div className="flex justify-between items-center">
        <h1 className="tablet:text-xl font-bold mb-2">Produtores</h1>

        <div className="flex gap-x-2">
          {!isEdit && (
            <Button
              variant="filledSecondary"
              type="button"
              onClick={handleEdit}
            >
              Editar
            </Button>
          )}

          <Button variant="filledWarning" type="button" onClick={handleDelete}>
            Excluir
          </Button>
        </div>
      </div>

      <form
        className="grid grid-cols-12 gap-x-2 gap-y-2"
        onSubmit={handleSubmit(handleForm)}
      >
        <h2 className="col-start-1 col-end-13 text-sm notebook:text-base font-bold">
          Dados Pessoais
        </h2>

        <Input
          disabled={!isEdit}
          containerStyle="col-start-1 col-end-13 tablet:col-end-8"
          {...register("name")}
          label="Nome"
          type="text"
          helperText={errors.name?.message}
        />

        <Input
          disabled={!isEdit}
          containerStyle="tablet:col-start-8 col-start-1 col-end-13 notebook:col-end-11"
          {...register("cpf")}
          label="CPF ou CNPJ"
          type="text"
          helperText={errors.cpf?.message}
          onChange={(event) => {
            const { value } = event.target;

            if (value.length === 0) return "";

            if (value.length > 11) {
              return (event.target.value = formatCnpj(value)!);
            }

            event.target.value = formatCpf(value)!;
          }}
        />

        <h2 className="col-start-1 col-end-13 mt-4 mb-2 font-bold text-sm notebook:text-base">
          Dados da fazenda
        </h2>

        <Input
          disabled={!isEdit}
          containerStyle="col-start-1 col-end-13 notebook:col-end-7"
          {...register("farmName")}
          label="Nome da Fazenda"
          type="text"
          helperText={errors.farmName?.message}
        />
        <Input
          disabled={!isEdit}
          containerStyle="col-start-1 col-end-8 notebook:col-start- notebook:col-end-11"
          {...register("city")}
          label="Cidade"
          type="text"
          helperText={errors.city?.message}
        />

        <Input
          disabled={!isEdit}
          containerStyle="col-start-8 col-end-13 tablet:col-end-11 notebook:col-start-11 notebook:col-end-13"
          {...register("state")}
          label="Estado"
          type="text"
          helperText={errors.state?.message}
        />

        <Input
          disabled={!isEdit}
          containerStyle="col-start-1 col-end-13 tablet:col-end-7 notebook:col-end-4"
          {...register("area")}
          label="Área total em hectares"
          type="text"
          helperText={errors.area?.message}
        />

        <Input
          disabled={!isEdit}
          containerStyle="col-start-1 tablet:col-start-7 col-end-13 notebook:col-start-4 notebook:col-end-7"
          {...register("arableArea")}
          label="Área agricultável em hectares"
          type="text"
          helperText={errors.arableArea?.message}
        />

        <Input
          disabled={!isEdit}
          containerStyle="col-start-1 col-end-13 tablet:col-end-7 notebook:col-start-7 notebook:col-end-10"
          {...register("vegetationArea")}
          label="Área de vegetação em hectares"
          type="text"
          helperText={errors.vegetationArea?.message}
        />

        <Input
          disabled={!isEdit}
          containerStyle="col-start-1 tablet:col-start-7 col-end-13 notebook:col-start-10 notebook:col-end-13"
          {...register("plantedCrops")}
          label="Culturas plantadas"
          type="text"
          helperText={errors.plantedCrops?.message}
        />

        <div className="col-start-1 col-end-13 flex justify-start gap-x-2 mt-4">
          <Button type="submit" variant="filledSecondary" disabled={!isEdit}>
            Confirmar
          </Button>

          <Button
            variant="filledWarning"
            type="button"
            onClick={() => router.push("/produtores")}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </DataCard>
  );
};

export default Form;

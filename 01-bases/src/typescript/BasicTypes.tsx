const BasicTypes = () => {
  const name: string = "Anderson";
  const age = 20;
  const isActive: boolean = true;

  const powers: string[] = ["React", "ReacNative", "Angular"];
  return (
    <>
      <h3>Tipos Basicos </h3>
      {name} - {age} - {isActive ? "Activo" : "Inactivo"}
      <p>{powers.join(", ")}</p>
    </>
  );
};

export default BasicTypes;

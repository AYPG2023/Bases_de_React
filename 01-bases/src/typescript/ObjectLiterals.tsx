interface Person {
  age: number;
  firstName: string;
  lastName: string;
  addresss: Address;
}

interface Address {
  country: string;
  houseNo: number;
  street?: string;
}
// Objective: show the object literals in TypeScript
const ObjectLiterals = () => {
  const person: Person = {
    age: 20,
    firstName: "Anderson",
    lastName: "Perdomo",
    addresss: {
      country: "Guatemala",
      houseNo: 79,
    },
  };
  return (
    <>
      <h3>Objetos Literales </h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};

export default ObjectLiterals;

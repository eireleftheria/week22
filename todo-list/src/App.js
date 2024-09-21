import "./App.css";
import CardBlock from "./component/Card";
import { ChakraProvider } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

const data = [
  { id: 1, name: "Tom", profession: "programmer", city: "Tokyo" },
  { id: 2, name: "John", profession: "doctor", city: "Boston" },
  { id: 3, name: "Maria", profession: "hairdresser", city: "Tbilisi" },
  { id: 4, name: "Anna", profession: "vet", city: "London" },
];

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {data.map((person) => (
            <CardBlock key={person.id} props={person} />
          ))}
        </SimpleGrid>
      </ChakraProvider>
    </div>
  );
}

export default App;

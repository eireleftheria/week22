import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

function CardBlock({ props }) {
  const { name, profession, city } = props;
  console.log(name, profession, city);
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md"> {name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{profession}</Text>
        </CardBody>
        <CardFooter>
          <Button>{city}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardBlock;

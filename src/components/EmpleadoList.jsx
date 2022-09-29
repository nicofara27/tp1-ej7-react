import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelBlue&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Pink&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Round&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Black&graphicType=Bat&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Light",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Diamond&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=DarkBrown",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=DarkBrown",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Pale",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale",
    },
  ];

  return (
    <ListGroup className="my-5">
      <EmpleadoRow key={empleados[0].id} empleado={empleados[0]}></EmpleadoRow>
      <EmpleadoRow key={empleados[1].id} empleado={empleados[1]}></EmpleadoRow>
      <EmpleadoRow key={empleados[2].id} empleado={empleados[2]}></EmpleadoRow>
      <EmpleadoRow key={empleados[3].id} empleado={empleados[3]}></EmpleadoRow>
      <EmpleadoRow key={empleados[4].id} empleado={empleados[4]}></EmpleadoRow>
      <EmpleadoRow key={empleados[5].id} empleado={empleados[5]}></EmpleadoRow>
      <EmpleadoRow key={empleados[6].id} empleado={empleados[6]}></EmpleadoRow>
      <EmpleadoRow key={empleados[7].id} empleado={empleados[7]}></EmpleadoRow>
      <EmpleadoRow key={empleados[8].id} empleado={empleados[8]}></EmpleadoRow>
    </ListGroup>
  );
};

export default EmpleadoList;

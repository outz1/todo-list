import Text from "./components/text";
import Icon from "./components/icons";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

import TrashIcon from "./assets/icons/thrash.svg?react";
import CheckIcon from "./assets/icons/checked.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import InputText from "./components/input-text";

function App() {
  return (
    <Container>
      <div className="grid gap-8">
        <div className="flex flex-col gap-1">
          <Text variant="body-md" className="text-pink-base">
            {" "}
            Olá Mundo!{" "}
          </Text>
          <Text variant="body-sm-bold" className="text-green-base">
            {" "}
            Olá Mundo!{" "}
          </Text>
          <Text variant="body-md-bold"> Olá Mundo! </Text>
        </div>
        <div>
          <Icon svg={TrashIcon} className="fill-pink-base" />
          <Icon svg={CheckIcon} className="fill-pink-base" />
          <Icon svg={PencilIcon} className="fill-pink-base" />
          <Icon svg={PlusIcon} className="fill-pink-base" />
          <Icon svg={SpinnerIcon} className="fill-pink-base " />
          <Icon svg={XIcon} className="fill-pink-base" />
        </div>

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>


        <div>
          <Button icon={PlusIcon}> New Task</Button>
        </div>
        
        
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>


        <div>
          <InputText />
          <InputCheckbox  />
          <InputCheckbox loading />
        </div>
        <div>
          <Card size="md">Hello World</Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>
    </Container>
  );
}

export default App;

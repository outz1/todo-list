import Text from "./components/text";
import Icon from "./components/icons";
import TrashIcon from "./assets/icons/thrash.svg?react";
import CheckIcon from "./assets/icons/checked.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";

function App() {
  return (
    <div>
      <div className="flex flex-col gap-2">
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
        <Icon svg={TrashIcon} className="fill-pink-base"/>
        <Icon svg={CheckIcon} className="fill-pink-base"/>
        <Icon svg={PencilIcon} className="fill-pink-base"/>
        <Icon svg={PlusIcon} className="fill-pink-base"/>
        <Icon svg={SpinnerIcon} className="fill-pink-base "/>
        <Icon svg={XIcon} className="fill-pink-base"/>
      </div>
    </div>
  );
}

export default App;

import NaijaIcon from "../components/icons/naija";
import { ReactComponent as KenyaFlag } from "../components/icons/kenya-flag-icon.svg";
import { ReactComponent as GhanaFlag } from "../components/icons/ghana-flag-icon.svg";
import { ReactComponent as NigeriaFlag } from "../components/icons/nigeria-flag-icon.svg";

export const countryOptions = [
  {
    label: "Nigeria",
    value: "nigeria",
    svg: NigeriaFlag
  },
  {
    label: "Kenya",
    value: "kenya",
    svg: KenyaFlag
  },
  {
    label: "Ghana",
    value: "ghana",
    svg: GhanaFlag
  }
];

export const sizeOptions = [
  {
    label: "0 - 10 employees",
    value: "10"
  },
  {
    label: "10 - 50 employees",
    value: "50"
  },
  {
    label: "50 - 100 employees",
    value: "100"
  }
];

export const userOptions = [
  {
    label: "Yes",
    value: "yes"
  },
  {
    label: "No",
    value: "no"
  }
];

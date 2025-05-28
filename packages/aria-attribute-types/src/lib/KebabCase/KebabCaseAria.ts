import { AriaBodies } from "../Bodies/AriaBodies";
import { Kebab } from "../../TypeUtilities";
import { Role } from "../Role";

export type KebabCaseAria<R extends Role> = Kebab<AriaBodies<R>>;

import { AriaBodies } from "../Bodies/AriaBodies";
import { Camel } from "../../TypeUtilities";
import { Role } from "../Role";

export type CamelCaseAria<R extends Role> = Camel<AriaBodies<R>>;

import Main from "./main";
import Wind from "./wind";

export default interface Weather {
  visibility: number;
  timezone: number;
  main: Main;
  wind: Wind;
}

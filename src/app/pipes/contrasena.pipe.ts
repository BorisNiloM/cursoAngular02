import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contrasena"
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, arg1: boolean = true): string {
    if (arg1) {
      let aux: string = "";
      for (let i = 0; i < value.length; i++) {
        aux += "*";
      }
      return aux;
    } else {
      return value;
    }
  }
}

import { FormControl } from "@angular/forms";

export class CustomValidators {
   public static website(c: FormControl): { [key: string]: any } {
      if (c.value === null || c.value === '') {
        return null;
      }
      const regExp: RegExp =
        /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,15}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
      const regExpArray = regExp.exec(c.value);
      return regExpArray && regExpArray[0] === regExpArray.input ? null : { invalidWebsite: true };
    }
}
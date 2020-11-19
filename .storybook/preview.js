
import { addDecorator, moduleMetadata } from '@storybook/angular';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { IonicModule } from '@ionic/angular';
import docJson from "../documentation.json";
setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(moduleMetadata({
  imports: [ IonicModule.forRoot() ]
}));

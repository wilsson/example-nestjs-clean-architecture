import * as uuidv1 from 'uuid/v1';
import { IsString } from "class-validator";

export class User {
  id: string = uuidv1();

  @IsString()
  name: string;
}
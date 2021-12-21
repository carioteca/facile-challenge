import { IsNotEmpty } from "class-validator";

//npm add class-validator
export class CreateFacileDto{
    id: number;
    @IsNotEmpty()
    mensagem: string;
}


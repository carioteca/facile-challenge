import {Injectable} from "@nestjs/common";
import {Repository} from 'typeorm';
import {InjectRepository } from "@nestjs/typeorm";
import { Facile } from "src/entities/facile.entity";
import { CreateFacileDto } from "../dto/CreateFacile.dto";
import { json } from "stream/consumers";


@Injectable()

export class FacileService{
    constructor(
        @InjectRepository(Facile)
        private readonly facileRepository: Repository<Facile>,
    ){}
    
    create(createFacile: CreateFacileDto){
         var nodeBase64 = require('nodejs-base64-converter');  
         createFacile.mensagem = nodeBase64.encode(createFacile.mensagem);
         const facile = this.facileRepository.create(createFacile);
         return this.facileRepository.save(facile);
    }

    findAll(){
        return this.facileRepository.find();
    }


    
     async getFacileById(id:string){
         // Decodificador
         var retorno = this.facileRepository.findOne(id);
         var nodeBase64 = require('nodejs-base64-converter');
         var msg =  nodeBase64.decode((await retorno).mensagem);
         //Configurando Retorno
         var resultado =  '{' +"\n"+'\u00A0 "id": '+ id +','+ "\n" + '\u00A0 "encripted_name": ' + '"'+ msg +'"'+"\n"+ '}'
         return resultado
        }
}
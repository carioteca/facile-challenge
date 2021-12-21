import { Body, Controller, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateFacileDto } from '../dto/CreateFacile.dto';
import { FacileService } from './facile.services';

@Controller('encripts')
export class FacilecontrollerController {
    constructor(private facileService: FacileService){}


    @Post('create')
    create(@Body() createFacile: CreateFacileDto){
      return this.facileService.create(createFacile);
    }

    @Get('')
    findAll(){
         return this.facileService.findAll();
      }

    @Get(':id')
   async getFacileById(@Param('id') id:string){
      return await this.facileService.getFacileById(id);
    }



  }
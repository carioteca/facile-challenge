import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facile } from 'src/entities/facile.entity';
import { FacileService } from './facile.services';
import { FacilecontrollerController } from './facilecontroller';

@Module({
    controllers:[FacilecontrollerController],
    imports: [TypeOrmModule.forFeature([Facile])],
    providers:[FacileService],
})
export class FacileModule {}

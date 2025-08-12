import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }
  @Get()
  findAll() {
    try {
      return this.songService.findAll();
    } catch (e) {
      console.log(e);
      throw new HttpException('server error', 500);
    }
  }

  @Get(':id')
  findOne() {
    return 'update song based on id';
  }

  @Put(':id')
  update() {
    return 'update song based on Id';
  }
  @Delete(':id')
  delete() {
    return 'delete song based on Id';
  }
}

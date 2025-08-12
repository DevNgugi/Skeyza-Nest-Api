import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  findAll() {
    return 'all songs';
  }
  create(createSongDto: CreateSongDto) {
    return { message: 'song created successfully', dto: createSongDto };
  }
}

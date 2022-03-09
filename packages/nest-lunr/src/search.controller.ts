import {
  Controller,
  Get,
  Param,
  Res,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { LunrService } from './lunr.service';
import { SearchResultExt } from './types';
import { ApiTags } from '@nestjs/swagger';

/**
 * Search in a specific namespace
 * E.g. /api/search/page/ゼルダ
 */
@ApiTags('search')
@Controller('api/search')
export class SearchController {
  constructor(readonly lunr: LunrService) {}

  @Get('/:namespace/:query')
  search(
    @Res() res: Response,
    @Param('namespace') namespace: string,
    @Param('query') query: string,
    @Query('limit') limit = 50,
  ) {
    let result: SearchResultExt[];
    try {
      result = this.lunr.search(namespace, query);
      if (result.length >= limit) {
        result = result.slice(0, limit);
      }
    } catch (error) {
      throw error;
    }

    if (!result) {
      throw new NotFoundException(
        `[Lunr] No index namespace "${namespace}" found!`,
      );
    }
    return res.json(result);
  }

  /**
   * Search in all namespaces
   * E.g. /api/search/ゼルダ
   */
  @Get('/:query')
  searchAll(
    @Res() res: Response,
    @Param('query') query: string,
    @Query('limit') limit = 50,
  ) {
    let result: SearchResultExt[];
    try {
      result = this.lunr.searchAll(query);
      if (result.length >= limit) {
        result = result.slice(0, limit);
      }
    } catch (error) {
      throw error;
    }
    return res.json(result);
  }
}

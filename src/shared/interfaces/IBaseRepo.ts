import {
  find,
  findOne,
  findWithPagination,
  update,
  upsert,
} from "../types/baseRepo";

export interface IBaseRepo {
  create(params: any): any;
  bulkCreate?(params: any): any;
  createOrUpdate?(params: any): any;
  upsert?(params: upsert): any;
  update?(params: update): any;
  findOne?(params: findOne): any;
  find?(params: find): any;
  findWithPagination?(params: findWithPagination): any;
  delete?(params: any): any;
}

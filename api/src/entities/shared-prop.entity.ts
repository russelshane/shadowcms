/**
 * @description Shared Prop Entity for TypeORM
 * @author ShadowCMS
 */

import { UpdateDateColumn, CreateDateColumn } from "typeorm";

export class SharedProp {
  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  created_at: Date;

  @UpdateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "updated_at",
  })
  updated_at: Date;
}

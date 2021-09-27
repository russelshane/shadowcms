/**
 * @description User TypeORM Entity
 * @author ShadowCMS
 */

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { SharedProp } from "./shared-prop.entity";
import { UserType } from "./types";

@Entity({ name: "users" })
export class UsersEntity extends SharedProp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "byline", nullable: true })
  byline: string;

  @Column({ name: "ein", nullable: false })
  ein: number;

  @Column({ name: "avatar", nullable: true })
  avatar: string;

  @Column({ default: "user" })
  account_type: UserType;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  salt: string;

  accessToken?: string;
}

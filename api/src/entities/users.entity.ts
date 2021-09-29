/**
 * @description User TypeORM Entity
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { UserType } from "./types";

const newDate = dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

@Entity({ name: "users" })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "created_at", nullable: false, default: `${newDate}` })
  created_at: string;

  @Column({ name: "updated_at", nullable: false, default: `${newDate}` })
  updated_at: string;

  @Column({ name: "byline", nullable: true })
  byline?: string;

  @Column({ name: "ein", nullable: false })
  ein?: number;

  @Column({ name: "avatar", nullable: true })
  avatar?: string;

  @Column({ default: "user" })
  account_type: UserType;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  salt: string;

  accessToken?: string;
}

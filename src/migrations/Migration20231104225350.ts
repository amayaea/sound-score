import { Migration } from '@mikro-orm/migrations';

export class Migration20231104225350 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "album" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');

    this.addSql('create table "artist" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');

    this.addSql('create table "base_entity" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "score" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');

    this.addSql('create table "user" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "album" cascade;');

    this.addSql('drop table if exists "artist" cascade;');

    this.addSql('drop table if exists "base_entity" cascade;');

    this.addSql('drop table if exists "score" cascade;');

    this.addSql('drop table if exists "user" cascade;');
  }

}

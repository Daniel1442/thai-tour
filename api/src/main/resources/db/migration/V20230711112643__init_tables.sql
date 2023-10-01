CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table place
(
    id                 uuid         default public.uuid_generate_v4() not null,
    name               varchar(255)                                      not null,
    image              varchar(255),
    accommodation_type varchar(255),
    address            varchar(255),
    value              text,
    location           varchar(255),
    review             integer,
    is_favorite        boolean      default false,
    is_active          boolean      default true,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                      not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);

create table parameter
(
    id         uuid      default public.uuid_generate_v4() not null,
    name       varchar(255)                                   not null,
    tooltip    varchar(255),
    created_at timestamp default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255)
);

create table place_content
(
    id           uuid         default public.uuid_generate_v4() not null,
    place_id     uuid         default public.uuid_generate_v4() not null,
    content_type varchar(255),
    value        text                                      not null,
    is_active    boolean      default true,
    created_at   timestamp    default CURRENT_TIMESTAMP,
    created_by   varchar(255)                                      not null,
    updated_at   timestamp,
    updated_by   varchar(255) default NULL:: character varying
);



create table place_parameter
(
    id           uuid         default public.uuid_generate_v4() not null,
    place_id     uuid         default public.uuid_generate_v4() not null,
    parameter_id uuid         default public.uuid_generate_v4() not null,
    created_at   timestamp    default CURRENT_TIMESTAMP,
    created_by   varchar(255)                            not null,
    updated_at   timestamp,
    updated_by   varchar(255) default NULL:: character varying
);

create table place_image
(
    id           uuid         default public.uuid_generate_v4() not null,
    place_id     uuid         default public.uuid_generate_v4() not null,
    is_active    boolean      default true,
    target           varchar(2555),
    priority             integer,
    created_at   timestamp    default CURRENT_TIMESTAMP,
    created_by   varchar(255)                            not null,
    updated_at   timestamp,
    updated_by   varchar(255) default NULL:: character varying
);

create table public.article_tag
(
    article_id         uuid      default public.uuid_generate_v4() not null,
    tag_id         uuid      default public.uuid_generate_v4() not null

);

create table public.article
(
    id         uuid      default public.uuid_generate_v4() not null,
    name               varchar(255)                                      not null,
    image              varchar(255),
    date_of_release  timestamp,
    is_active          boolean      default true,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                      not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);

create table public.article_content
(
    id                 uuid      default public.uuid_generate_v4() not null,
    article_id         uuid      default public.uuid_generate_v4() not null,
    value              text,
    article_heading    varchar(255),
    priority           integer,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                      not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);

create table public.article_images
(
    id                 uuid      default public.uuid_generate_v4() not null,
    article_id         uuid      default public.uuid_generate_v4() not null,
    value              text,
    priority           integer,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                      not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);

create table public.tag
(
    id                 uuid      default public.uuid_generate_v4() not null,
    name               varchar(255)                                      not null,
    is_active          boolean      default true,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                      not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);
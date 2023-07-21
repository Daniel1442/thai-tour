CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table place
(
    id                 uuid         default public.uuid_generate_v4() not null,
    name               varchar(255)                                      not null,
    image              varchar(255),
    accommodation_type varchar(255),
    address            varchar(255),
    value              varchar(255),
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

create table place_image
(
    id         uuid         default public.uuid_generate_v4() not null,
    place_id   uuid         default public.uuid_generate_v4() not null,
    target     varchar(255),
    priority    integer,
    is_active  boolean      default true,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                      not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
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
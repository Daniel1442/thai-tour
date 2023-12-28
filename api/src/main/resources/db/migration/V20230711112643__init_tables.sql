CREATE
EXTENSION IF NOT EXISTS "uuid-ossp";

create table place
(
    id                 uuid         default public.uuid_generate_v4() not null,
    name               varchar(255)                                   not null,
    image              varchar(255),
    accommodation_type varchar(255),
    price              float                                          not null,
    address            varchar(255),
    location           varchar(255),
    review             integer,
    rating             integer,
    latitude           float,
    longitude          float,
    food               varchar(255),
    is_favorite        boolean      default false,
    is_active          boolean      default true,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                   not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);

create table parameter
(
    id          uuid      default public.uuid_generate_v4() not null,
    name        varchar(255)                                not null,
    tooltip     varchar(255),
    filter      boolean   default true,
    assign_type varchar(255),
    value_type  varchar(255),
    hint        varchar(255),
    priority    integer,
    created_at  timestamp default CURRENT_TIMESTAMP,
    created_by  varchar(255)                                not null,
    updated_at  timestamp,
    updated_by  varchar(255)
);

create table parameter_value
(
    id             uuid      default public.uuid_generate_v4() not null,
    parameter_id   uuid      default public.uuid_generate_v4() not null,
    name           varchar(255)                                not null,
    show_on_detail boolean   default false                     not null,
    icon           varchar(255),
    tooltip        varchar(255),
    priority       integer,
    created_at     timestamp default CURRENT_TIMESTAMP,
    created_by     varchar(255)                                not null,
    updated_at     timestamp,
    updated_by     varchar(255)
);

create table place_content
(
    id           uuid         default public.uuid_generate_v4() not null,
    place_id     uuid         default public.uuid_generate_v4() not null,
    content_type varchar(255),
    priority     integer,
    value        text                                           not null,
    is_active    boolean      default true,
    created_at   timestamp    default CURRENT_TIMESTAMP,
    created_by   varchar(255)                                   not null,
    updated_at   timestamp,
    updated_by   varchar(255) default NULL:: character varying
);

create table place_parameter
(
    id                 uuid         default public.uuid_generate_v4() not null,
    place_id           uuid         default public.uuid_generate_v4() not null,
    parameter_id       uuid         default public.uuid_generate_v4() not null,
    parameter_value_id uuid         default public.uuid_generate_v4() not null,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                   not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);

create table place_image
(
    id         uuid         default public.uuid_generate_v4() not null,
    place_id   uuid         default public.uuid_generate_v4() not null,
    is_active  boolean      default true,
    target     varchar(2555),
    priority   integer,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);

create table article_tag
(
    article_id uuid default public.uuid_generate_v4() not null,
    tag_id     uuid default public.uuid_generate_v4() not null

);

create table article
(
    id              uuid         default public.uuid_generate_v4() not null,
    name            varchar(255)                                   not null,
    image           varchar(255),
    date_of_release timestamp,
    is_active       boolean      default true,
    created_at      timestamp    default CURRENT_TIMESTAMP,
    created_by      varchar(255)                                   not null,
    updated_at      timestamp,
    updated_by      varchar(255) default NULL:: character varying
);

create table article_content
(
    id              uuid         default public.uuid_generate_v4() not null,
    article_id      uuid         default public.uuid_generate_v4() not null,
    value           text,
    article_heading varchar(255),
    priority        integer,
    created_at      timestamp    default CURRENT_TIMESTAMP,
    created_by      varchar(255)                                   not null,
    updated_at      timestamp,
    updated_by      varchar(255) default NULL:: character varying
);

create table article_images
(
    id         uuid         default public.uuid_generate_v4() not null,
    article_id uuid         default public.uuid_generate_v4() not null,
    value      text,
    priority   integer,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);

create table tag
(
    id         uuid         default public.uuid_generate_v4() not null,
    name       varchar(255)                                   not null,
    is_active  boolean      default true,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);

create table room
(
    id         uuid         default public.uuid_generate_v4() not null,
    place_id   uuid         default public.uuid_generate_v4() not null,
    name       varchar(255)                                   not null,
    capacity   integer,
    price      float                                          not null,
    is_active  boolean      default true,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);

create table room_image
(
    id         uuid         default public.uuid_generate_v4() not null,
    room_id    uuid         default public.uuid_generate_v4() not null,
    value      text,
    priority   integer,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);

create table place_room_parameter
(
    id                 uuid         default public.uuid_generate_v4() not null,
    room_id            uuid         default public.uuid_generate_v4() not null,
    parameter_id       uuid         default public.uuid_generate_v4() not null,
    parameter_value_id uuid         default public.uuid_generate_v4() not null,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                   not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);


create table trip
(
    id              uuid         default public.uuid_generate_v4() not null,
    name            varchar(255)                                   not null,
    image           varchar(255),
    location        varchar(255)                                   not null,
    capacity        integer,
    price           float                                          not null,
    length          varchar(255),
    trip_start      varchar(255),
    trip_repetition varchar(255),
    food            varchar(255),
    trip_location   varchar(255),
    trip_type       varchar(255),
    guide           varchar(255),
    included        varchar(255),
    reviews         varchar(255),
    is_active       boolean      default true,
    created_at      timestamp    default CURRENT_TIMESTAMP,
    created_by      varchar(255)                                   not null,
    updated_at      timestamp,
    updated_by      varchar(255) default NULL:: character varying
);

create table trip_content
(
    id           uuid         default public.uuid_generate_v4() not null,
    trip_id      uuid         default public.uuid_generate_v4() not null,
    priority     integer                                        not null,
    content_type varchar(255),
    value        text                                           not null,
    is_active    boolean      default true,
    created_at   timestamp    default CURRENT_TIMESTAMP,
    created_by   varchar(255)                                   not null,
    updated_at   timestamp,
    updated_by   varchar(255) default NULL:: character varying
);

create table trip_image
(
    id         uuid         default public.uuid_generate_v4() not null,
    trip_id    uuid         default public.uuid_generate_v4() not null,
    is_active  boolean      default true,
    target     varchar(2555),
    priority   integer,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);

create table trip_parameter
(
    id                 uuid         default public.uuid_generate_v4() not null,
    trip_id            uuid         default public.uuid_generate_v4() not null,
    parameter_id       uuid         default public.uuid_generate_v4() not null,
    parameter_value_id uuid         default public.uuid_generate_v4() not null,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                   not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);

create table role
(
    id         uuid         default public.uuid_generate_v4() not null,
    name       varchar(255)                                   not null,
    code       varchar(255),
    system     varchar(255),
    is_active  boolean      default true,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);

create table customer
(
    id         uuid         default public.uuid_generate_v4() not null,
    surname    varchar(255)                                   not null,
    lastname   varchar(255),
    email      varchar(255),
    password   varchar(255),
    username   varchar(255),
    type       varchar(255),
    is_active  boolean      default true,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);

create table customer_favorite
(
    id          uuid      default public.uuid_generate_v4() not null,
    resource_id uuid      default public.uuid_generate_v4() not null,
    customer_id uuid      default public.uuid_generate_v4() not null,
    is_active   boolean   default true,
    type        varchar(255),
    created_at  timestamp default CURRENT_TIMESTAMP,
    created_by  varchar(255)                                not null
);